---
title: "Docker Enterprise 2.1 na DigitalOcean – Parte II"
slug: "digitalocean-parte-ii"
date: "2018-11-29T16:59:13"
modified: "2026-02-02T20:38:27"
status: "publish"
author: "admin"
excerpt: "Na primeira parte desta série nós aprendemos como fazer o setup do novo cluster do Docker Enterprise 2.1 na DigitalOcean com Terraform e Ansible. Se você ainda não leu a primeira parte, clique aqui. Neste Artigo nós vamos discutir como configurar o Docker Enterprise de forma que: Os volumes persistentes criem volumes no block storage […]"
categories: ["blog", "devops", "dockeree"]
tags: ["cloud", "devops", "digitalocean", "docker", "vertigo-tecnologia"]
featuredImage: "/wp-content/uploads/2026/02/digitalocean-parte-ii.png"
wpId: 3347
originalUrl: "https://vertigo.com.br/digitalocean-parte-ii/"
contentSource: "rest"
seo:
  title: "Docker Enterprise 2.1 na DigitalOcean - Parte II - Vertigo"
  description: "Na primeira parte desta série nós aprendemos como fazer o setup do novo cluster do Docker Enterprise 2.1 na DigitalOcean com Terraform e Ansible. Continue lendo este artigo e aprenda mais sobre o assunto!"
  canonical: "https://vertigo.com.br/digitalocean-parte-ii/"
  ogImage: "/wp-content/uploads/2026/02/digitalocean-parte-ii.png"
  robots: "index, follow"
---

Na primeira parte desta série nós aprendemos como fazer o setup do novo cluster do Docker Enterprise 2.1 na DigitalOcean com Terraform e Ansible.

[Se você ainda não leu a primeira parte, clique aqui.](/digitalocean-parte-1/)

Neste Artigo nós vamos discutir como configurar o Docker Enterprise de forma que:

- Os volumes persistentes criem volumes no block storage na DigitalOcean
- Controladores Ingress criem load-balancers na DigitalOcean

Desta maneira um cluster de Docker Enterprise irá se comportar como um cluster kubernetes nativo na Digital Ocean.

## **O que você precisará?**

Tenha certeza de ter completado a primeira parte desta série e cheque se seu shell atual está configurado para se conectar com o cluster remotamente (executando o script do client bundle  “env.sh”).

Certifique-se que possui o kubectl e o helm instalados. A ferramenta “kubectl” ( linha de comandos para o kubernetes) vem em conjunto com o Docker Desktop, mas você pode instalar isso manualmente.

No OSX estas ferramentas podem ser instaladas com Homebrew:

```
brew install kubernetes-cli
brew install kubernetes-helm
```

Note que o Docker Enterprise utiliza o Kubernetes 1.11, então é recomendável utilizar a versão do kubectl mais próxima a 1.11 (1.12 é bom).

Isto assume que você passou pelo primeiro artigo e que no seu shell reside o projeto já clonado do repositório (<https://github.com/vertigobr/dockeree-digitalocean>). Você pode verificar o funcionamento executando o seguinte comando:

```
kubectl get nodes
NAME         STATUS    ROLES     AGE       VERSION
do-manager   Ready     master    43m       v1.11.2-docker-2
do-worker1   Ready     <none>    30m       v1.11.2-docker-2
do-worker2   Ready     <none>    30m       v1.11.2-docker-2
```

## **Step 1: Configure Secret**

Um token válido precisa ser usado internamente para criar recursos na sua conta da DigitalOcean, ou seja, você terá que criar um Secret e guardá-lo no cluster.

Apenas copie o “digitalocean-secret.yml.template” providenciado no projeto para um novo  arquivo “digitalocean-secret.yml” (por favor, não renomeie o arquivo original):

```
cp digitalocean-secret.yml.template digitalocean-secret.yml
```

Agora edite “digitalocean-secret.yml” e troque o valor dentro da entrada  de “access-token” pelo seu próprio token da DigitalOcean.

Você irá criar o recurso do Secret executando o seguinte comando:

```
kubectl apply -f digitalocean-secret.yml
secret "digitalocean" created
```

## **Step 2: Instalação do Storage CSI**

Nós iremos instalar o CSI (Container Storage Interface) localizado em  <https://github.com/digitalocean/csi-digitalocean>. O plugin do CSI permite que use o Block Storage da DigitalOcean com o Orquestrador de Kubernetes do Docker Enterprise de forma transparente, transformando isto no storage padrão para os volumes persistentes.

Um simples comando que faz esse truque:

```
kubectl apply -f https://raw.githubusercontent.com/digitalocean/csi-digitalocean/master/deploy/kubernetes/releases/csi-digitalocean-v0.2.0.yaml
```

Vários recursos serão criados (você pode encontrar eles dentro do namespace “kube-system”). Você pode checar que este novo controlador do storage é o default do cluster:

```
kubectl get sc
NAME                         PROVISIONER                 AGE
do-block-storage (default)   com.digitalocean.csi.dobs   27m
```

**Importante:** Nós precisamos manter a versão no CSI 0.2.0 enquanto o Kubernetes do Docker Enterprise continuar na versão 1.11.

Para testar o CSI, você tem que criar uma requisição de volume persistente (persistent volume claim). Por sorte, nós já temos um yaml pronto para isto:

**kubectl apply -f** [**https://raw.githubusercontent.com/digitalocean/csi-digitalocean/master/examples/kubernetes/deployment-single-volume/pvc.yaml**](https://raw.githubusercontent.com/digitalocean/csi-digitalocean/master/examples/kubernetes/deployment-single-volume/pvc.yaml) persistentvolumeclaim “csi-deployment-pvc” created

Você pode checar a DigitalOcean para ver o novo volume do block storage criado:

![](/wp-content/uploads/2018/11/digitalocean.png)

## **Step 3: Instale o  CCM**

O CCM (Cluster Control Manager) da DigitalOcean contém um importante componente de servicecontroller, responsável por criar Load Balancers quando o serviço do tipo: LoadBalancer é criado no Kubernetes.

O CCM pode ser instalado com o comando abaixo:

```
kubectl apply -f https://raw.githubusercontent.com/digitalocean/digitalocean-cloud-controller-manager/master/releases/v0.1.8.yml
```

## **Step 4: Instalando Helm (Tiller)**

Helm (Um Gerenciador de Pacotes para Kubernetes) opera com um componente server-side (Tiller). Você precisa instalar isto e dar as permissões apropriadas:

```
helm init
kubectl create rolebinding default-view \
  --clusterrole=view \
  --serviceaccount=kube-system:default \
  --namespace=kube-system
kubectl create clusterrolebinding add-on-cluster-admin \
  --clusterrole=cluster-admin \
  --serviceaccount=kube-system:default
```

A saída será algo parecido com isto:

```
...
Tiller (the Helm server-side component) has been installed into your Kubernetes Cluster.
...
Happy Helming!
rolebinding.rbac.authorization.k8s.io "default-view" created
clusterrolebinding.rbac.authorization.k8s.io "add-on-cluster-admin" created
```

## **Step 5: Setup do controlador do Ingress**

O repositório do CCM no github tem múltiplos exemplos de controladores Ingress (load balancers) para diferentes situações. Nós vamos falar deles mais tarde. Para este momento, nós iremos instalar um load balancer de propósitos gerais com o Helm:

```
helm install stable/nginx-ingress --name my-nginx --set rbac.create=true --namespace nginx-ingress
```

Este controlador de ingress deve ter ativado sozinho em um novo load balancer na DigitalOcean. Observe na DigitalOcean, na página “Networking/Load Balancers” para ver se existe algo parecido com isto:

![](/wp-content/uploads/2018/11/digitalocean-1.png)

Anote este endereço IP, você pode testar o load balancer agora, utilizando o curl para acessar o backend default e “healthz” endpoint:

```
curl <ip_address>
default backend - 404
curl -v <ip_address>/healthz
...
< HTTP/1.1 200 OK
...
```

Ótimo! Vamos para os próximos passos.   🙂

## **Step 6: Algumas magias com Domínios**

Este seria um excelente momento para criar um subdomínio wildcard, sobre o domínio que você vem controlando na DigitalOcean.

Agora você criará um novo registro “A” em seu domínio no console da DigitalOcean com o hostname (“\*.apps”) e o apontará para o endereço IP do load balancer.

![](/wp-content/uploads/2018/11/digitalocean2.png)

Com este simples truque, qualquer recurso do ingress que declare o próprio hostname sobre este domínio “\*.apps.devops.mycompany.com” vai ser servido propriamente através do load balancer.

Por outro lado, qualquer URL sobre este domínio que não esteja mapeada nos recursos do ingress vai ser automaticamente respondida pelo default do backend:

```
curl dummy.apps.devops.mycompany.com
default backend - 404
```

Se o novo subdomínio levar muito tempo para se propagar para o seu atual DNS, você pode sempre utilizar o curl diretamente para o IP do load balancer e utilizar o hostname falso:

```
curl -H "Host: dummy.apps.devops.mycompany.com" <ip_address>
default backend - 404
```

## Step 7: Um exemplo completo (HTTP)

Baseado no exemplo original de controlador “nginx-ingress” no Github, alguns poucos arquivos que residem na pasta “cafe” para nossos testes de ambiente com um conjunto de aplicações reais no backend.

- **cafe.yaml:**dois pequenos exemplares de aplicações web
- **cafe-ingress-http.yaml:**uma configuração http de um Ingress para ambas as aplicações

As aplicações podem ser publicadas pelo comando abaixo:

```
kubectl apply -f cafe/cafe.yaml
deployment.extensions "coffee" created
service "coffee-svc" created
deployment.extensions "tea" created
service "tea-svc" created
```

Estes serviços estão executando agora no cluster, escalados para múltiplos pods especificados no arquivo de deployment.

Um recurso ingress é o que nós precisamos para nossa aplicação ser atendida através da URL apropriada:

```
kubectl apply -f cafe/cafe-ingress-http.yaml
ingress.extensions "cafe-ingress" created
```

Ambas aplicações agora podem ser alcançadas, cada uma com sua própria URL:

```
curl cafe.apps.devops.mycompany.com
Server address: 192.168.175.76:80
Server name: coffee-7dbb5795f6-k7ffn
Date: 20/Nov/2018:19:41:50 +0000
URI: /
Request ID: 337252aea94dae202c9da959ecdc333e
curl tea.apps.devops.mycompany.com
Server address: 192.168.175.79:80
Server name: tea-7d57856c44-dshh4
Date: 20/Nov/2018:19:41:57 +0000
URI: /
Request ID: 4f10a61e67e3e8f5a538101ae999f319
```

Observe que o wildcard aponta para o load-balancer, que foi atuo-configurado pelo CCM. Desta forma o request é encaminhado do controlador ingress para o nó servidor em execução.

**Em nosso próximo artigo desta série**, nós iremos aprender como usar os certificados HTTPS para load balancers (i.e. fora do cluster) e em cada serviço ingress (dentro do cluster). Aprenderemos outras maneiras de obter certificados HTTPS.

Vejo vocês na próxima!

**Tradução: Thor Salgado – Estagiário Vertigo Tecnologia e  Docker Enthusiast**

**Revisão: Rubens Freitas – Gerente de Infraestrutura Vertigo Tecnologia**

---

### Que tal aprender também como integrar Docker com Java?

[![](/wp-content/uploads/2018/11/Integracao-Docker-com-Java-CTA-1.png)](https://materiais.vertigo.com.br/paper-integracao-docker-java?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)
