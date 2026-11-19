---
title: "Docker Enterprise 2.1 na DigitalOcean – Parte III"
slug: "do-docker-enterprise-parte-3"
date: "2018-11-29T17:49:08"
modified: "2026-02-02T20:38:30"
status: "publish"
author: "admin"
excerpt: "Na primeira parte desta série, nós vimos como fazer um setup do novo cluster Docker Enterprise 2.1 na DigitalOcean com o Terraform e Ansible. Na segunda parte, nós configuramos o Docker Enterprise para provisionar automaticamente blocos de volumes e load balancers na DigitalOcean. Neste artigo, iremos discutir algumas maneiras de resolver os endpoints HTTPS e certificados. […]"
categories: ["blog", "devops", "dockeree"]
tags: ["cloud", "devops", "digitalocean", "docker", "vertigo-tecnologia"]
featuredImage: "/wp-content/uploads/2026/02/do-docker-enterprise-parte-3.png"
wpId: 3369
originalUrl: "https://vertigo.com.br/do-docker-enterprise-parte-3/"
contentSource: "rest"
seo:
  title: "Docker Enterprise 2.1 na DigitalOcean – Parte III - Vertigo"
  description: "Finalizando a trilogia de artigos sobre Docker Enterprise 2.1 na DigitalOcean, iremos discutir neste artigo sobre algumas maneiras de resolver os endpoints HTTPS e certificados. Vale a pena conferir, o conteúdo está bastante rico!"
  canonical: "https://vertigo.com.br/do-docker-enterprise-parte-3/"
  ogImage: "/wp-content/uploads/2026/02/do-docker-enterprise-parte-3.png"
  robots: "index, follow"
---

[Na primeira parte desta série](/digitalocean-parte-1/), nós vimos como fazer um setup do novo cluster Docker Enterprise 2.1 na DigitalOcean com o Terraform e Ansible.

[Na segunda parte](/digitalocean-parte-ii/), nós configuramos o Docker Enterprise para provisionar automaticamente blocos de volumes e load balancers na DigitalOcean.

Neste artigo, iremos discutir algumas maneiras de resolver os endpoints HTTPS e certificados.

## **O que você precisa**

Tenha certeza de ter completado a primeira e a segunda parte desta série. Além disso, seu shell precisa estar configurado para conectar com o cluster remotamente (executando o script do pacote de cliente “env.sh”).

Nós também precisaremos do DigitalOcean CLI (Interface de Linha de Comando), conhecido como doctl.

## **Sobre a integração do DigitalOcean LetsEncrypt**

O processo é simples, quase reduzido a poucos cliques de mouse, se o maior nível do domínio envolvido (mycompany.com) é controlado pela própria DigitalOcean. Estes passos descrevem como criar um certificado “wildcard” com LetsEncrypt e como configurar o load balancer da DigitalOcean para endpoints HTTPS. Ambas as coisas podem ser feitas automaticamente pela DigitalOcean, como está descrito neste artigo.

No meu caso, o domínio de nível mais alto pertence a AWS, onde um subdomain foi definido e delegado a DigitalOcean. A integração da DigitalOcean LetsEncrypt não funciona neste cenário.

Então aqui vamos nós!

## **Passo 1: Certificado Wildcard**

Na parte I nós criamos um certificado HTTPS para o hostname do Docker UCP antes da instalação do UCP. Isto foi muito simples: nós executamos um Certbot para cada host que possui o hostname “ucp.devops.mycompany.com”, que é o workflow natural para o protocolo de Certbot ACME.

Nós não podemos fazer isso de novo, porque as portas necessárias estão ocupadas neste momento. Porém, sem desespero! Temos uma solução alternativa. Tendo o controle do DNS (possuindo um domínio/subdomínio na DigitalOcean), você pode gerar os certificados com os servidores Certbot de uma maneira diferente.

**Importante: abra um novo shell para isso** – nós iremos executar este comando na sua engine Docker local, então nós precisamos de um shell que não está executando o pacote de scripts do UCP (“env.sh”). Os certificados serão escritos para uma pasta “letsencrypt” no atual diretório.

O comando abaixo vai dizer ao servidor Certbot para usar o DNS challenge (lembre-se de usar o domínio e e-mail de antes):

```
docker run --rm -ti \
  -v $(pwd)/letsencrypt:/etc/letsencrypt \
  certbot/certbot certonly --agree-tos \
  -d "*.apps.devops.mycompany.com" \
  --preferred-challenges=dns --manual \
  --email=admin@example.com
```

Responda “YES” para a primeira pergunta e espere uma mensagem parecida com a que está abaixo:

```
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please deploy a DNS TXT record under the name
_acme-challenge.apps.devops.mycompany.com with the following value:
NjeNlv9Gxcz...............JxTOgHjqzM
Before continuing, verify the record is deployed.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Press Enter to Continue
```

Não pressione <Enter> ainda! Agora você precisa editar o seu domínio na DigitalOcean (“Networking/Domains/<your domain>”), selecione “TXT” e crie uma nova entrada de nome “**\_acme-challenge.apps**” com o valor informado no Certbot:

![](/wp-content/uploads/2018/11/docker-enterprise.png)

Depois que esse registro TXT for criado manualmente, você poderá inserir o nome do domínio. A saída será algo como isto:

```
Waiting for verification...
Cleaning up challenges
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/apps.devops.mycompany.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/apps.devops.mycompany.com/privkey.pem
...
```

Veja o conteúdo da pasta “letsencrypt/live”: tem uma nova pasta “apps.devops.mycompany.com” contendo o certificado para o domínio wildcard.

Você pode usar o Certbot de novo para verificar os certificados recebidos:

```
docker run --rm -ti \
  -v $(pwd)/letsencrypt:/etc/letsencrypt \
  certbot/certbot certificates
```

A sua saída deve conter isto:

```
...
Found the following certs:
  Certificate Name: apps.devops.mycompany.com
    Domains: *.apps.devops.mycompany.com
    Expiry Date: 2019-02-19 06:31:15+00:00 (VALID: 89 days)
    Certificate Path: /etc/letsencrypt/live/apps.devops.mycompany.com/fullchain.pem
    Private Key Path: /etc/letsencrypt/live/apps.devops.mycompany.com/privkey.pem
...
```

## **O quão legal isso é?**

Lembre-se nós temos um load balancer funcionando para este mesmo wildcard do domínio.

Parece que nós temos duas opções agora:

- Use o próprio load balancer para endpoints HTTPS (o cluster funciona apenas HTTP)
- O load balance passa todo o tráfego HTTPS para o cluster (o cluster faz o endpoint HTTPS)

## **Passo 2: O Load Balancer faz HTTPS**

A primeira etapa é mudar manualmente o load balancer da DigitalOcean que nós acabamos de criar para resolver endpoints HTTPS sozinho (i.e. nenhum tráfego HTTPS entra no cluster).

Vamos fazer o certificado criado no nosso passo anterior disponível para a DigitalOcean. A ferramenta que irá fazer este trabalho é o doctl (ferramenta de linha de comando da DigitalOcean) :

```
doctl compute certificate create \
  --private-key-path letsencrypt/live/apps.devops.mycompany.com/privkey.pem \
  --certificate-chain-path ./letsencrypt/live/apps.devops.mycompany.com/fullchain.pem \
  --leaf-certificate-path ./letsencrypt/live/apps.devops.mycompany.com/fullchain.pem \
  --name apps-devops
```

Se o doctl não estiver disponível, você pode carregar o certificado manualmente. Na DigitalOcean procure por “Account/Security/Certificates”, clique em “Add certificate” e depois clique em “Custom”:

![](/wp-content/uploads/2018/11/docker-enterprise-2.png)

Isto é um pouco chato, mas você terá que copiar e colar o conteúdo dos arquivos de certificados em “letsencrypt/live/apps.devops.mycompany.com”:

- Name: apps-devops
- Certificate: cole o conteúdo do arquivo “fullchain.pem”
- Private Key: cole o conteúdo do arquivo “privkey.pem”
- Certificate chain: cole o conteúdo do arquivo ”fullchain.pem”

![](/wp-content/uploads/2018/11/docker-enterprise-3.png)

**Salve este certificado!**

Agora vamos usar isto no load balancer que já possuímos.

**Importante:** você nunca deveria ter que perder tempo com o load balancer manualmente, do modo como estamos fazendo. Lembre-se: este load balancer foi criado automaticamente pelo CCM. Se ele precisar ser reconfigurado, o CCM deverá ser usado para isso. Não se preocupe, nós vamos ver isso mais tarde.

Abaixo “Manage/Networking/Load balancers/ <your load balancer>/Settings” mude a atual regra de encaminhamento para a porta 443 para que ela resolva endpoints HTTPS com o certificado que nós fornecemos. Também o encaminhamento para a porta 443 precisa ser o mesmo da porta 80 (32919 na imagem abaixo, certamente outra coisa no seu caso).

![](/wp-content/uploads/2018/11/docker-enterprise-4.png)

Salve as mudanças e teste elas com dois comandos curl que devem ter resultados similares:

```
curl http://cafe.apps.devops.mycompany.com
Server address: 192.168.175.76:80
Server name: coffee-7dbb5795f6-k7ffn
Date: 21/Nov/2018:11:01:37 +0000
URI: /
Request ID: 7a57d37fa0a90858961bc16d91fbb641
curl https://cafe.apps.devops.mycompany.com
Server address: 192.168.175.75:80
Server name: coffee-7dbb5795f6-zsngr
Date: 21/Nov/2018:11:02:24 +0000
URI: /
Request ID: ed77771e9f05531ad3357e4ef7da57ec
```

Note o mesmo comportamento com a outra aplicação:

```
curl http://tea.apps.devops.mycompany.com
Server address: 192.168.175.77:80
Server name: tea-7d57856c44-qdrm2
Date: 21/Nov/2018:11:04:00 +0000
URI: /
Request ID: fb867646ed2ea3b7c769826ac70c9fa4
curl https://tea.apps.devops.mycompany.com
Server address: 192.168.175.79:80
Server name: tea-7d57856c44-dshh4
Date: 21/Nov/2018:11:04:06 +0000
URI: /
Request ID: 82caf8dfa72002f8d98e24ac0f96d4b5
```

Agora que entendemos como o load balancer deveria ser configurado, vamos fazer isso de forma apropriada (via CCM). Nós iremos aprender como fazer o deploy de um controlador ingress que automaticamente configura o load balancer da DigitalOcean, o qual resolve endpoints HTTPs sozinho como mostramos acima.

Primeiro vamos remover o atual controlador ingress que fizemos deploy na parte II usando o helm (utilize o shell configurado para alcançar o cluster):

```
helm delete my-nginx
```

Isto deleta o controlador ingress e o load balancer controlado pela DigitalOcean.

Nós iremos recriar o controlador ingress em um caminho que o CCM reconheça as configurações para o load balancer externo do cloud provider. Você irá precisar do id do certificado que criamos antes. Você pode sempre usar doctl para coletar isso:

```
doctl compute certificate list [-t "YOUR-DO-TOKEN-HERE"]
ID                                      Name (...)
9e844bb7-..............-8312c3ff4edc    apps-devops (...)
```

O comando abaixo irá instalar o mesmo controlador ingress, mas com as anotações apropriadas para o CCM desta vez (você precisa trocar o id do certificado):

```
helm install stable/nginx-ingress \
  --name my-nginx \
  --set rbac.create=true \
  --namespace nginx-ingress \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/do-loadbalancer-protocol"="http" \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/do-loadbalancer-algorithm"="round_robin" \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/do-loadbalancer-tls-ports"="443" \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/do-loadbalancer-certificate-id"="9e844bb7-.........-8312c3ff4edc" \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/do-loadbalancer-healthcheck-path"="/healthz" \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/do-loadbalancer-redirect-http-to-https"="true" \
  --set controller.service.targetPorts.https="http"
```

Em resumo, as anotações que configuramos acima tomam conta das configurações do load balancer:

- HTTPS endpoints (certificados e portas)
- Heathcheck dos caminhos
- Redirecionadores de requisições de HTTP para HTTPS
- Simples HTTP entre load balancer e cluster (ou seja, nenhum HTTPS endpoint para o para o próprio cluster)
- Redirecionamento de HTTP para HTTPS

Espere no site da DigitalOcean até que o load balancer seja criado (isso leva um tempo).

**Muito importante:** Se o endereço IP do load balancer mudou desde o nosso valor anterior (tem uma grande chance de que isso tenha acontecido) você tem que atualizar sua entrada DNS “\*.apps” sobre o seu domínio para usar o novo endereço.

```
curl https://cafe.apps.devops.mycompany.com
Server address: 192.168.175.96:80
Server name: coffee-7dbb5795f6-62k9d
Date: 22/Nov/2018:15:45:03 +0000
URI: /
Request ID: a0d1e0a56a540630fbc3de08217e1e4b
```

Muito melhor! Você também pode testar o redirecionamento HTTP para HTTPS:

```
curl -L http://cafe.apps.devops.mycompany.com
Server address: 192.168.175.95:80
Server name: coffee-7dbb5795f6-v9s7g
Date: 22/Nov/2018:15:48:42 +0000
URI: /
Request ID: 3377f89127b46d44605127471abad958
```

**Cuidado:** é possível que a atualização da entrada de DNS para o domínio wildcard não atinja o atual servidor DNS imediatamente. Neste caso, ambos os comandos acima falharão e você ficará preso.

Felizmente, tem uma forma de contornarmos utilizando o **curl** sem confiar na resolução do nome. Por exemplo:

```
curl -LH "Host: cafe.apps.devops.mycompany.com" <load-balancer-ip>
```

## **Passo 3: O Load Balancer faz requisições HTTPS**

Alguns podem argumentar que passar tráfego HTTP através do load balancer para o cluster é um pouco inseguro. Então, iremos tentar uma abordagem diferente para endpoint HTTPS: desta forma permitiremos o cluster mesmo sem o endpoint e assim o load balancer apenas encaminha os pacotes às cegas.

Primeiro nós temos que fazer o deploy do Secret contendo o certificado no cluster. Você pode editar o arquivo “cafe/cafe-secret.yaml” para aceitar o certificado e sua chave:

O valor do “tls.crt” é o conteúdo do “fullchain.pem” na codificação Base64:

```
base64 -i letsencrypt/live/apps.devops.mycompany.com/fullchain.pem
```

O valor “tls.key” é o conteúdo de “privkey.pem” na codificação Base64:

```
base64 -i letsencrypt/live/apps.devops.mycompany.com/privkey.pem
```

Deploy o Secret no cluster:

```
kubectl apply -f cafe/cafe-secret.yaml
secret "cafe-secret" created
```

Nós devemos agora remover ambos os controladores ingress e recursos ingress que já foram criados nos passos anteriores deste artigo:

```
helm delete --purge my-nginx
release "my-nginx" deleted
kubectl delete -f cafe/cafe-ingress-http.yaml
ingress.extensions "cafe-ingress" deleted
```

Agora, nós devemos fazer o deploy do novo recurso ingress que define endpoints TLS (HTTPS) para as aplicações web que já foram criadas:

```
kubectl apply -f cafe/cafe-ingress.yaml
ingress.extensions "cafe-ingress" created
```

**Truque:** compare ambos os arquivos “cafe-ingress-http.yaml” e “cafe-ingress.yaml” para entender as diferenças (especialmente as terminações dos endpoints TLS).

Finalmente, vamos fazer o deploy do controlador ingress (e também do novo load balancer) que define as requisições HTTPS:

```
helm install stable/nginx-ingress \
  --name my-nginx \
  --set rbac.create=true \
  --namespace nginx-ingress \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/do-loadbalancer-protocol"="http" \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/do-loadbalancer-algorithm"="round_robin" \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/do-loadbalancer-tls-ports"="443" \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/do-loadbalancer-healthcheck-path"="/healthz" \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/do-loadbalancer-redirect-http-to-https"="true" \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/do-loadbalancer-tls-passthrough"="true"
```

Depois de algum tempo, o load balancer da DigitalOcean estará on-line e configurado corretamente com a passagem HTTPS:

![](/wp-content/uploads/2018/11/docker-enterprise-5.png)

Mais uma vez, o endereço IP externo do load balancer pode mudar, neste caso você terá que fazer um update da entrada do DNS no seu domínio “\*apps”.

Você pode testar sua aplicação web da mesma forma como fizemos anteriormente:

```
curl https://cafe.apps.devops.mycompany.com
Server address: 192.168.175.95:80
Server name: coffee-7dbb5795f6-v9s7g
Date: 22/Nov/2018:19:55:27 +0000
URI: /
Request ID: 572cb18edc38b0176c9d79f779f8d8a0
```

Se o nome da resolução do DNS continuar apontando para o endereço DNS anterior, você pode sempre contornar da forma como discutimos anteriormente:

```
curl -LH "Host: cafe.apps.devops.mycompany.com" <load-balancer-ip>
```

## **Conclusão:**

Uma vez que fazemos o deploy com as configurações e anotações apropriadas, o controlador ingress e o resultado do load balancer devem durar pra sempre. Todos os outros recursos podem ir e vir (pod, Services e deployments).

Esta série de artigos demonstra de forma fácil e transparente como o Docker Enterprise pode funcionar na cloud da DigitalOcean. Kubernetes não precisa ser um pesadelo, nem você deveria desistir do [Swarm mode](/docker-kubernetes-mesos/) apenas porque todos estão pulando da ponte.

Divirta-se com o Docker Enterprise na DigitalOcean!

**Tradução: Thor Salgado – Estagiário Vertigo Tecnologia e  Docker Enthusiast**

**Revisão: Rubens Freitas – Gerente de Infraestrutura Vertigo Tecnologia**

---

### **Quer uma demonstração ao vivo do Docker?**

### **Fale com nossos especialistas!**

## Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
