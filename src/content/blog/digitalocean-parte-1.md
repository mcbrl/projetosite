---
title: "Docker Enterprise 2.1 na DigitalOcean – Parte I"
slug: "digitalocean-parte-1"
date: "2018-11-28T16:42:51"
modified: "2026-02-02T20:38:23"
status: "publish"
author: "admin"
excerpt: "Eu tenho profunda admiração pela DigitalOcean, sempre minha primeira escolha para bootstrapping de qualquer coisa, ou mesmo quando quero ensinar assuntos relacionados a computação em nuvem.  Enquanto todos os provedores de nuvem impõem coletivamente um imenso “confusopólio” (um oligopólio baseado na impossibilidade de simples comparação de custos por clientes regulares), a DigitalOcean continua fiel a […]"
categories: ["blog", "devops", "dockeree"]
tags: ["cloud", "devops", "digitalocean", "docker", "vertigo-tecnologia"]
featuredImage: "/wp-content/uploads/2026/02/digitalocean-parte-1.png"
wpId: 3279
originalUrl: "https://vertigo.com.br/digitalocean-parte-1/"
contentSource: "rest"
seo:
  title: "Docker Enterprise 2.1 na DigitalOcean - Parte I - Vertigo"
  description: "Eu tenho profunda admiração pela DigitalOcean, sempre minha primeira escolha para bootstrapping de qualquer coisa, ou mesmo quando quero ensinar assuntos relacionados a computação em nuvem. Continue lendo este artigo."
  canonical: "https://vertigo.com.br/digitalocean-parte-1/"
  ogImage: "/wp-content/uploads/2026/02/digitalocean-parte-1.png"
  robots: "index, follow"
---

Eu tenho profunda admiração pela DigitalOcean, sempre minha primeira escolha para *bootstrapping* de qualquer coisa, ou mesmo quando quero ensinar assuntos relacionados a computação em nuvem.  Enquanto todos os provedores de nuvem impõem coletivamente um imenso “confusopólio” (um oligopólio baseado na impossibilidade de simples comparação de custos por clientes regulares), a DigitalOcean continua fiel a sua proposta de valor: previsibilidade de custo.

Em outras palavras: um *droplet* (VM) de 5 dólares vai custar 5 dólares no final do mês.

O produto competidor equivalente da AWS (*Lightsail*) certamente foi criado como uma resposta ao sucesso da DigitalOcean, mas a DigitalOcean sempre será minha escolha inicial.

É um fato que a DigitalOcean tem seu próprio Kubernetes gerenciado (um lançamento muito recente, considerando a data de publicação deste artigo, final de 2018), tornando automático o uso do *cloud storage* e *load balancers* da DigitalOcean. Este produto aparenta ser fantástico – recomendo que desenvolvedores testem e comparem seu custo e simplicidade com o EKS, AKS e GKE.

Como não é possível utilizar o Docker Enterprise sobre o Kubernetes de terceiros, então este guia é para você que deseja testar uma instalação real de Docker Enterprise em um provedor de nuvem que não esconde os custos.

## **Por que Docker Enterprise com DigitalOcean?**

Com o Docker Enterprise você pode ter Swarm mode e Kubernetes simultaneamente, em servidores Linux e Windows. Outro motivo é que todas as coisas no Docker Enterprise são feitas com a produtividade do desenvolvedor em mente. E, claro, porque o Docker Enterprise é muito legal.

##

## **O que você precisa?**

Certifique-se de ter as seguintes ferramentas, antes de iniciarmos:

- Um token válido da DigitalOcean que vai lhe permitir criar os recursos que precisamos (droplets e domains);
- Um domínio cujo DNS que você controle;
- Uma licença trial e download URL do Docker Enterprise (você pode pegar ambos gratuitamente na [Docker Store](https://store.docker.com/editions/enterprise/docker-ee-server-centos));
- Uma estação de trabalho ou notebook com Terraform, Ansible e Helm instalados. Todas estas ferramentas são bem conhecidas, de uso livre e simples de se instalar. No OSX todas podem ser instaladas com Brew:

```
brew install ansible
brew install terraform
brew install kubernetes-helm
```

- Uma instalação local de docker (como o Docker Desktop, por exemplo). Em alguns pontos você será perguntado para executar comandos docker em seu shell local (muitas vezes contra um docker engine remota).
- O *fingerprint* da sua chave SSH para permitir acesso às VMS criadas pelo Terraform (e que o Ansible irá usar). A DigitalOcean apresenta eles na página de “Account/Security”. Considerando, claro, que você tenha as chaves privadas similares em sua máquina – no pior caso, você pode criar uma chave SSH e fazer upload desta chave pública agora.

Todos os passos descritos neste documento vão ser executados nas máquinas dos leitores, nem sequer uma vez você terá que fazer manualmente acesso SSH em qualquer máquina.

## **Alguns detalhes sobre o Domínio:**

Se o domínio de sua empresa pertence a algum lugar que não a DigitalOcean (como por exemplo, AWS) há de ser simples definir neste provedor um novo subdomínio delegado ao servidor de nomes da DigitalOcean. É mais barato ter um subdomínio delegado que criar um domínio real apenas para este exercício.

Se *mycompany.com* é o domínio da AWS (por exemplo) você pode facilmente definir um subdomínio (uma entrada de “name server” no Route 53) nomeado *devops.mycompany.com* e delegado ao DNS da DigitalOcean (ns1/ns2/ns3.digitalocean.com).

Independentemente do que você escolher, este documento assume que os hosts serão criados sob este domínio e com ele será conhecido na Internet. Então, por exemplo, se o domínio que você escolheu é *devops.mycompany.com* os seguintes recursos serão criados pelo Terraform:

```
devops.mycompany.com            # digital ocean domain
do-manager.devops.mycompany.com # manager node
do-worker1.devops.mycompany.com # worker node
do-worker2.devops.mycompany.com # worker node
ucp.devops.mycompany.com        # DNS entry in domain (do-manager)
*.apps.devops.mycompany.com     # DNS wildcard entry
```

## **Materiais no GitHub**

Você deve clonar este projeto no GitHub:

```
git clone https://github.com/vertigobr/dockeree-digitalocean
```

Todos os recursos, scripts e playbooks são reutilizáveis, basta você sempre providenciar um nome de domínio válido.

## **Step 1: Terraforming**

A primeira coisa que devemos fazer é executar um script utilitário que vai gerar alguns arquivos a partir de alguns templates e do domínio informado como argumento:

```
./setdomain.sh "<DOMAIN>"
```

Onde “<DOMAIN>” é o domínio que você escolheu para este exercício (como “devops.mycompany.com”). O script irá gerar os arquivos:

```
ansible-hosts          # ansible inventory
babyswarm.auto.tfvars  # terraform variables
```

Você continua precisando editar o arquivo “babyswarm.auto.tfvars” e providenciar os seguintes campos:

```
do_token = "YOUR-DIGITAL-OCEAN-TOKEN"
ssh_keys = ["xx:xx:xx:xx:.......:xx",
  "xx:xx:xx:xx:.......:xx",
]
```

Estes são os tokens de acesso da DigitalOcean e um conjunto de fingerprints de chaves públicas. Como já foi dito, os fingerprints disponíveis estão listados na DigitalOcean (e você pode sempre criar um par de chaves SSH e fazer upload da chave pública de qualquer forma). Com estas configurações feitas, é hora de utilizarmos o terraform:

```
terraform init
terraform apply
```

O retorno deve terminar com algo parecido com isto:

```
Apply complete! Resources: 11 added, 0 changed, 0 destroyed.

Outputs

floating ip address swarm manager = xxx.xxx.xxx.xxx
ip address swarm manager = yyy.yyy.yyy.yyy
```

## **Step 2: Instale a engine do Docker**

Nós iremos usar os playbooks do ansible e suas roles para instalar a engine do Docker Enterprise em todos os nós. Alguns arquivos de configurações são necessários para fazer as coisas funcionarem tranquilamente.

- ansible.cfg: este arquivo traz instruções ao ansible sobre onde encontrar o arquivo de inventário, onde buscar definições de roles e alguns parâmetros de SSH.
- ssh.cfg: configurações adicionais de SSH.

Devemos primeiro testar a conectividade do Ansible com todos os nós:

```
ansible -m ping all
```

Um “Ping” do ansible é um teste de conexão SSH. Testaremos assim a conectividade SSH a todos os hosts no arquivo de inventário. As saídas serão algo parecido com isto:

```
do-manager.devops.mycompany.com | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
do-worker1.devops.mycompany.com | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
do-worker2.devops.mycompany.com | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
```

Se todos os hosts forem alcançados nós podemos executar o playbook “install-dockeree.yml”:

```
ansible-playbook install-dockeree.yml
```

**Dica:** playbooks são (ou deveriam ser) idempotentes, ou seja, você pode reutilizá-los quantas vezes quiser caso um dos hosts venha a falhar.

Você pode testar o setup da engine executando um comando do ansible “ad-hoc”:

```
ansible -a "docker version" all
```

Todos os Hosts devem retornar algo como isto:

```
do-manager.devops.mycompany.com | CHANGED | rc=0 >>
Client:
 Version:           18.09.0
 API version:       1.39
 Go version:        go1.10.4
 Git commit:        33a45cd
 Built:             Wed Nov  7 00:24:42 2018
 OS/Arch:           linux/amd64
 Experimental:      false
Server: Docker Engine - Enterprise
 Engine:
  Version:          18.09.0
  API version:      1.39 (minimum version 1.12)
  Go version:       go1.10.4
  Git commit:       33a45cd
  Built:            Wed Nov  7 00:19:46 2018
  OS/Arch:          linux/amd64
  Experimental:     false
```

## **Step 3: Gerar certificados UCP (opcional)**

A instalação do UCP no Docker pode usar certificados de um volume com um nome reservado (“ucp-controller-server-certs”). Você pode executar os comandos abaixo para criar estes volumes remotamente (no host “manager”) e povoá-lo com novos certificados gerados pelo Certbot (também conhecido como Let’s Encrypt):

```
export DOCKER_HOST=ssh://root@do-manager.devops.mycompany.com
docker volume create ucp-controller-server-certs
# creates certs with certbot
docker run --rm -ti \
  -p 80:80 -p 443:443 \
  -v ucp-controller-server-certs:/etc/letsencrypt \
  certbot/certbot certonly --standalone \
  --email admin@example.com \
  -n --agree-tos \
  -d ucp.devops.mycompany.com
# copies certs to UCP "hotspot"
docker run --rm -v ucp-controller-server-certs:/dummy \
  -w /dummy/live/ucp.devops.mycompany.com \
  alpine sh -c "cp privkey.pem /dummy/key.pem && \
     cp fullchain.pem /dummy/ca.pem && \
     cp fullchain.pem /dummy/cert.pem"
```

**Nota:** você terá que trocar o e-mail e domínios (em negrito) acima. Note também que o container “/etc/letsencrypt” é conectado a um volume externo. Como a instalação do UCP busca estes certificados em um local diferente, no último comando copiamos os certificados para o local correto dentro do mesmo volume.

A saída é longa, mas deve conter isto:

```
...
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/ucp.devops....../fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/ucp.devops....../privkey.pem
...
```

É uma boa ideia ter um backup dos certificados localmente, caso você destrua estes hosts para usar o terraform novamente. Você não deseja estourar o limite de quantas vezes o Certbot permite criar certificados para o mesmo domínio (veja a documentação do Certbot sobre isto), portanto é bom ter uma cópia local dos mesmos. O processo é um pouco estranho porque não há uma forma direta de copiar arquivos diretamente a partir de um volume – vamos usar um container temporário para isso. Lembre-se que você apenas precisa fazer isso uma vez (e apenas se você planeja recriar os hosts com o terraform no futuro).

```
export DOCKER_HOST=ssh://root@do-manager.devops.mycompany.com
docker run --rm -d --name dummy \
  -v ucp-controller-server-certs:/etc/letsencrypt \
  alpine tail -f /dev/null
docker cp dummy:/etc/letsencrypt .
docker stop dummy
```

Uma pasta local “letsencrypt” vai ser criada com a cópia do conteúdo do volume remoto. Se você, alguma vez, precisar utilizar o terraform para criar os hosts de novo, ao invés de gerar novamente os certificados você poderá apenas criar o volume remoto e povoá-lo com os comandos abaixo:

```
export DOCKER_HOST=ssh://root@do-manager.devops.mycompany.com
docker volume create ucp-controller-server-certs
docker run --rm -d --name dummy \
  -v ucp-controller-server-certs:/etc/letsencrypt \
  alpine tail -f /dev/null
docker cp ./letsencrypt dummy:/etc/
docker stop dummy
```

**Aviso:** Se você escolher não gerar os certificados HTTPS para o UCP um certificado auto-assinado poderá ser criado durante a instalação. Para criar um certificado auto-assinado durante a instalação (o que não é recomendado) você deve editar o playbook e inverter as variáveis comentadas:

```
vars:
  docker_ucp_fqdn_san: --san ucp.devops.mycompany.com
  #docker_external_cert: --external-server-cert
```

## **Step 4: Instalar Docker UCP**

O playbook que estamos para executar necessita que arquivo de licença que reside na pasta do projeto, nomeado “docker\_subscription.lic”. Mais uma vez, o trial do arquivo de licença pode ser obtido facilmente na [Docker Store](https://store.docker.com/editions/enterprise/docker-ee-server-centos).

```
ansible-playbook install-ucp.yml
```

A instalação não leva muito tempo. Uma vez terminado, O Docker UCP vai estar disponível no (use seu domínio):

```
https://ucp.devops.mycompany.com
```

## **Step 5: Adicionar nós worker**

Os nós worker podem ser facilmente adicionados ao cluster:

```
ansible-playbook install-swarm.yml
```

Os nós “do-worker1” e “do-worker2” serão adicionados rapidamente, mas o UCP leva um pouco mais de tempo para ajustar de forma apropriada:

![](/wp-content/uploads/2018/11/Digital-Ocean-18.png)

## **Step 6: Mude de orquestrador da forma que desejar**

O orquestrador default para novos nós é o Swarm Mode. Isto pode ser mudado nas configurações do UCP (afetando novos nós), mas você pode também trocar o orquestrador vigente de todos os nós quando quiser.

No “Shared Resources/Nodes/[do-worker2]/Edit Node”, por exemplo, você pode trocar seu orquestrador “Swarm” para “Kubernetes”:

![](/wp-content/uploads/2018/11/Digital-Ocean-19.png)

O nó será quase que imediatamente habilitado para workloads de kubernetes:

![](/wp-content/uploads/2018/11/Digital-Ocean-20.png)

## **Step 7: Use o Client Bundle**

Mesmo que você possa usar o protocolo SSH (uma novidade do Docker 18.09) assim como foi visto nos steps anteriores, você não deveria contar com isto (SSH não costuma ser permitido para usuários). É melhor tornar um hábito o acesso através dos scripts e certificados do *client bundle* quando estiver se conectando ao cluster.

Você pode criar um bundle a qualquer momento em “My Profile/Client Bundles/New Client Bundle”. Ele será baixado como um arquivo ZIP que pode ser descompactado em qualquer lugar que você desejar.

Executar o “env.sh” irá configurar suas variaveis de ambiente do shell para conectar ao UCP do cluster quando executando os comandos docker ou kubectl:

```
. ./env.sh
docker node ls
ID                            HOSTNAME            STATUS (...)
3lld4f3lwgl2qpkodj1frmv1r *   do-manager          Ready
l4odzuj73ekpfij3d6bj7ss20     do-worker1          Ready
t1leznuk066kkfbm5jr4ibnbz     do-worker2          Ready
kubectl get nodes
NAME         STATUS    ROLES     AGE       VERSION
do-manager   Ready     master    43m       v1.11.2-docker-2
do-worker1   Ready     <none>    30m       v1.11.2-docker-2
do-worker2   Ready     <none>    30m       v1.11.2-docker-2
```

## **O que está por vir?**

Na próxima parte desta série, aprenderemos como usar os recursos da DigitalOcean (*block volumes* e *load balancers*) automaticamente ao criar volumes persistentes e serviços *Ingress*.

Desta maneira o Docker Enterprise se comportará de forma análoga ao cluster Kubernetes nativo da DigitalOcean.

Divirta-se!

**Tradução: Thor Salgado – Estagiário Vertigo Tecnologia e  Docker Enthusiast**

---

### Quer aprofundar seus conhecimentos sobre Docker?

Baixe agora mesmo este incrível material!

[![](/wp-content/uploads/2018/11/Reduza-custos-de-TI-CTA-2-300x240-1.png)](https://materiais.vertigo.com.br/reduzir-custos-ti-docker-ee?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)
