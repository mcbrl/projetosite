---
title: "Implementando Microsserviços com Kubernetes: criando, testando e compartilhando Helm Charts (parte 2)"
slug: "implementando-microsservicos-com-kubernetes-criando-testando-e-compartilhando-helm-charts-parte-2"
date: "2023-05-18T09:36:54"
modified: "2023-05-18T09:36:54"
status: "publish"
author: "admin"
excerpt: "Na segunda parte desta série, exploraremos o processo de criação, teste e compartilhamento de Helm Charts para microsserviços em Kubernetes. Veja os principais componentes de um Helm Chart, como criar um Chart a partir do zero e como testá-lo e compartilhá-lo com outros desenvolvedores e equipes. Esse texto é o segundo de uma série que […]"
categories: ["kubernetes"]
tags: ["kubernetes"]
featuredImage: "/wp-content/uploads/2023/05/BLOG_IMAGEM_DESTAQUE2.png"
featuredImageAlt: "Kubernetes"
wpId: 162069
originalUrl: "https://vertigo.com.br/implementando-microsservicos-com-kubernetes-criando-testando-e-compartilhando-helm-charts-parte-2/"
contentSource: "rest"
seo:
  title: "Implementando Microsserviços com Kubernetes: criando, testando e compartilhando Helm Charts (parte 2)  - Vertigo"
  description: "Veja os principais componentes de um Helm Chart, como criar um Chart a partir do zero e como testá-lo e compartilhá-lo com outros desenvolvedores e equipes."
  canonical: "https://vertigo.com.br/implementando-microsservicos-com-kubernetes-criando-testando-e-compartilhando-helm-charts-parte-2/"
  ogImage: "/wp-content/uploads/2023/05/BLOG_IMAGEM_DESTAQUE2.png"
  robots: "index, follow"
---

Na segunda parte desta série, exploraremos o processo de criação, teste e compartilhamento de Helm Charts para [microsserviços](https://materiais.vertigo.com.br/a-importancia-da-seguranca-zero-trust-ebook) em Kubernetes.

Veja os principais componentes de um Helm Chart, como criar um Chart a partir do zero e como testá-lo e compartilhá-lo com outros desenvolvedores e equipes.

Esse texto é o segundo de uma série que divide o tema em 3 partes.

## Componentes principais de um Helm Chart

Um Helm Chart típico consiste nos seguintes componentes:

**1 – Chart.yaml:** arquivo de metadados que contém informações sobre o Chart, como nome, versão e descrição.

**2 – Templates:** diretório que contém os modelos dos recursos do [Kubernetes](/veecode-platform/) e arquivos de configuração.

**3 – values.yaml:** arquivo que contém os valores padrão para os modelos do Chart.

**4 – .helmignore (opcional):** arquivo que especifica os arquivos e diretórios a serem ignorados ao empacotar o Chart.

## Criando um Helm Chart a partir do zero

Nesta seção, vamos explorar como criar um Helm Chart a partir do zero. Seguiremos os seguintes passos:

### 1 – Instalando e configurando o Helm

1 – Antes de começar, certifique-se de ter o Helm instalado em sua máquina. Caso ainda não o tenha, siga as instruções de instalação disponíveis na [documentação oficial do Helm](https://helm.sh/docs/intro/install/).

2 – Configure o Helm para se comunicar com o seu cluster Kubernetes. Se você estiver usando o kubectl para gerenciar seu cluster, o Helm já deve estar configurado corretamente.

### 2 – Usando o comando “*helm create*” para gerar uma estrutura básica de Chart

1 – Para criar um novo Helm Chart, use o comando “*helm create”*. Por exemplo, para criar um Chart chamado “*meu-microservico*“, execute:

```
helm create meu-microservico
```

2 – Isso criará um diretório chamado “*meu-microservico*” com a estrutura básica de um Helm Chart.

### 3 – Personalizando os modelos e arquivos de configuração

1 – Navegue até o diretório “*meu-microservico/templates”* e analise os arquivos de modelo gerados automaticamente. Personalize os arquivos de modelo conforme necessário para seu aplicativo.

2 – Por exemplo, você pode adicionar ou modificar os recursos do Kubernetes, como Deployments, Services, ConfigMaps e Secrets. Use a sintaxe de modelo do Helm para tornar esses recursos configuráveis e reutilizáveis.

### 4 – Definindo valores padrão e personalizáveis no arquivo *values.yaml*

1 – Abra o arquivo “*meu-microservico/values.yaml*” e defina os valores padrão e personalizáveis para seu Helm Chart. Esses valores serão usados nos arquivos de modelo para configurar os recursos do Kubernetes.

2 – Por exemplo, você pode definir o nome da imagem do contêiner, as portas expostas, os limites de recursos e quaisquer outras configurações específicas do aplicativo.

### 5 – Atualizando o arquivo *Chart.yaml* com informações relevantes

1 – No diretório “*meu-microservico*“, abra o arquivo “*Chart.yaml*” e atualize as informações relevantes, como nome, versão, descrição e outras metainformações do seu Helm Chart.

2 – Certifique-se de incrementar a versão do seu Chart sempre que fizer uma atualização significativa.

Com esses passos concluídos, você terá criado um Helm Chart a partir do zero, personalizado para o seu aplicativo baseado em microsserviços. Agora você pode seguir para testar, compartilhar e implantar seu Helm Chart em diferentes ambientes.

## Testando o Helm Chart

Após criar e personalizar seu Helm Chart, é importante testá-lo para garantir que funcione corretamente. Nesta seção, vamos explorar como testar seu Helm Chart, validando a implantação e os recursos criados, testando atualizações e reversões e verificando a personalização do Chart com diferentes valores.

**1 – Instalando o Chart no cluster Kubernetes local ou de desenvolvimento**

1 – Para instalar seu Helm Chart em um cluster Kubernetes local ou de desenvolvimento, use o comando helm install. Por exemplo, para instalar o Chart chamado “*meu-microservico*“, execute:

```
helm install meu-microservico-release ./meu-microservico
```

2 – O Helm instalará o Chart em seu cluster e gerará um nome de release, como “*meu-microservico-release*“. Anote esse nome, pois você precisará dele para futuras interações com seu Helm Chart.

**2 – Validando a implantação e os recursos criados**

1 – Após instalar o Helm Chart, verifique se os recursos do Kubernetes foram criados corretamente. Use o comando kubectl para inspecionar os recursos no cluster, como Deployments, Services, ConfigMaps e Secrets.

2 – Por exemplo, para verificar o Deployment do seu aplicativo, execute:

```
kubectl get deployments
```

3 – Certifique-se de que todos os recursos esperados estejam presentes e em um estado saudável.

**3 – Validando a implantação e os recursos criados**

1 – Faça uma alteração no seu Helm Chart, como atualizar a versão da imagem do contêiner ou modificar uma configuração. Em seguida, atualize o release do seu Chart com o comando helm upgrade:

```
helm upgrade meu-microservico-release ./meu-microservico
```

ou

```
helm install --upgrade meu-microservico-release ./meu-microservico
```

2 – Verifique se as alterações foram aplicadas corretamente usando o comando kubectl para inspecionar os recursos atualizados.
3 – Se algo der errado durante a atualização, use o comando helm rollback para reverter para a versão anterior do seu Chart:

```
helm rollback meu-microservico-release <VERSÃO_ANTERIOR>
```

**4 – Verificando a personalização do Chart com valores diferentes**

1 – Para testar a personalização do seu Helm Chart, crie um arquivo chamado “*valores-personalizados.yaml*” e sobrescreva alguns dos valores padrão definidos no arquivo “*values.yaml*” do seu Chart.

2 – Por exemplo, você pode alterar o número de réplicas ou atualizar a imagem do contêiner para uma versão diferente.

3 – Instale ou atualize o Chart usando o arquivo “*valores-personalizados.yaml*” com o comando helm install ou helm upgrade:

```
helm install meu-microservico-release ./meu-microservico -f valores-personalizados.yaml
```

4 – Verifique se os recursos do Kubernetes foram configurados corretamente com os valores personalizados, usando o comando kubectl para inspecionar os recursos atualizados.

Com esses passos concluídos, você terá testado com sucesso seu Helm Chart, validando a implantação, os recursos criados, a atualização, a reversão e a personalização com diferentes valores. Agora você está pronto para compartilhar e distribuir seu Helm Chart com outros desenvolvedores e equipes.

## Compartilhando e distribuindo o Helm Chart

Depois de criar e testar seu Helm Chart, é importante compartilhá-lo e distribuí-lo para que outros desenvolvedores e equipes possam usá-lo em seus próprios projetos e implantações. Nesta seção, veremos como empacotar seu Helm Chart, criar e configurar um repositório de Helm Chart e adicionar o Chart ao repositório para compartilhá-lo.

**1 – Empacotando o Helm Chart com o comando “*****helm package*****“**

1 – No diretório do seu Helm Chart (por exemplo, “*meu-microservico*“), execute o comando *helm package* para criar um arquivo .tgz do seu Chart:

```
helm package .
```

2 – Isso gerará um arquivo chamado “*meu-microservico-<VERSÃO>.tgz*” que contém todos os arquivos e diretórios necessários do seu Helm Chart.

**2 – Criando e configurando um repositório de Helm Chart (público ou privado)**

1 – Para compartilhar seu Helm Chart, você precisará de um repositório de Helm Chart. Escolha um serviço de hospedagem, como GitHub Pages, AWS S3, Google Cloud Storage ou outros provedores de armazenamento compatíveis.

2 – Configure seu serviço de hospedagem de acordo com as instruções específicas do provedor. Geralmente, você precisará criar um bucket ou diretório público e configurar as permissões adequadas.

3 – Em seguida, crie um arquivo index.yaml no bucket ou diretório público. Este arquivo será usado para manter o índice do seu repositório de Helm Chart.

**3 – Adicionando o Chart ao repositório e atualizando o índice**

1 – Faça o upload do arquivo .tgz do seu Helm Chart (por exemplo, “*meu-microservico-<VERSÃO>.tgz*“) para o bucket ou diretório público do seu repositório de Helm Chart.

2 – Atualize o arquivo index.yaml do seu repositório com informações sobre o novo Chart. Você pode usar o comando helm repo index para atualizar automaticamente o arquivo:

```
helm repo index --url <URL_DO_REPOSITÓRIO> --merge index.yaml .
```

3 – Substitua <URL\_DO\_REPOSITÓRIO> pela URL do seu bucket ou diretório público. O comando helm repo index adiciona informações sobre o novo Chart ao arquivo index.yaml.

**4 – Compartilhando o repositório com outros desenvolvedores e equipes**

1 – Compartilhe a URL do seu repositório de Helm Chart com outros desenvolvedores e equipes. Eles poderão adicionar seu repositório aos seus clientes Helm usando o comando *helm repo add*:

```
helm repo add <NOME_DO_REPOSITÓRIO> <URL_DO_REPOSITÓRIO>
```

2 – Depois de adicionar o repositório, os usuários poderão pesquisar, instalar e atualizar Charts a partir do seu repositório usando os comandos helm search, helm install e helm upgrade.

Ao seguir esses passos, você terá compartilhado e distribuído com sucesso seu Helm Chart para que outros desenvolvedores e equipes possam usá-lo em seus projetos e implantações no Kubernetes. Isso facilita a colaboração e o gerenciamento de aplicativos

## Conclusão

Nesta segunda parte da série, abordamos o processo de criação, teste e compartilhamento de Helm Charts para microsserviços Kubernetes, além disso, vimos como criar um Chart a partir do zero.

Na terceira parte desta série, exploraremos como automatizar o gerenciamento de ambientes Kubernetes, incluindo a criação e gerenciamento de usuários, a implantação de ferramentas e a criação de namespaces no EKS da AWS com Terraform.

## Implemente Kubernetes na sua empresa

O Kubernetes se apresenta como uma solução indispensável para a orquestração de containers, permitindo uma gestão mais eficiente de aplicações em ambientes de nuvem. Além disso, a utilização de [soluções containerizadas](/parcerias/mirantis/) permite que as empresas gerenciem suas aplicações de forma simplificada e escalável, garantindo maior disponibilidade e resiliência para as aplicações em produção.

A Vertigo Tecnologia é uma parceira estratégica para empresas que desejam adotar o Kubernetes em suas operações, oferecendo expertise e suporte técnico para a implementação da tecnologia de forma segura e eficiente.

Fale com o nosso time comercial, estamos prontos para te ajudar a utilizar o Kubernetes!
