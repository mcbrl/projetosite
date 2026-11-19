---
title: "Automatizando o Gerenciamento de Ambientes Kubernetes: Usuários, Ferramentas e Namespaces no EKS da AWS com Terraform – Parte 3"
slug: "automatizando-o-gerenciamento-de-ambientes-kubernetes-usuarios-ferramentas-e-namespaces-no-eks-da-aws-com-terraform-parte-3"
date: "2023-05-25T09:16:40"
modified: "2023-05-25T09:16:40"
status: "publish"
author: "admin"
excerpt: "Nos artigos parte 1 e parte 2, mergulhamos profundamente no mundo dos Helm Charts, explorando seu papel crucial na simplificação e melhoria da implantação e gerenciamento de microsserviços Kubernetes. Discutimos a importância do Helm e dos Helm Charts, bem como os desafios comuns que os Helm Charts ajudam a superar no contexto dos microsserviços Kubernetes. […]"
categories: ["kubernetes"]
tags: ["kubernetes"]
featuredImage: "/wp-content/uploads/2023/05/Parte-03_Automatizando-o-Gerenciamento-de-Ambientes-Kubernetes_BLOG_IMAGEM_DESTAQUE.png"
wpId: 162094
originalUrl: "https://vertigo.com.br/automatizando-o-gerenciamento-de-ambientes-kubernetes-usuarios-ferramentas-e-namespaces-no-eks-da-aws-com-terraform-parte-3/"
contentSource: "rest"
seo:
  title: "Automatizando o Gerenciamento de Ambientes Kubernetes: Usuários, Ferramentas e Namespaces no EKS da AWS com Terraform - Parte 3 - Vertigo"
  description: "Nesse artigo discutimos a importância do Helm e dos Helm Charts, bem como os desafios comuns que os Helm Charts ajudam a superar no contexto dos microsserviços Kubernetes."
  canonical: "https://vertigo.com.br/automatizando-o-gerenciamento-de-ambientes-kubernetes-usuarios-ferramentas-e-namespaces-no-eks-da-aws-com-terraform-parte-3/"
  ogImage: "/wp-content/uploads/2023/05/Parte-03_Automatizando-o-Gerenciamento-de-Ambientes-Kubernetes_BLOG_IMAGEM_DESTAQUE.png"
  robots: "index, follow"
---

Nos artigos [parte 1](/de-manifestos-a-helm-charts-entendendo-as-vantagens-para-microsservicos-kubernetes-parte-1/) e [parte 2](/implementando-microsservicos-com-kubernetes-criando-testando-e-compartilhando-helm-charts-parte-2/), mergulhamos profundamente no mundo dos Helm Charts, explorando seu papel crucial na simplificação e melhoria da implantação e gerenciamento de microsserviços Kubernetes.

Discutimos a importância do Helm e dos Helm Charts, bem como os desafios comuns que os Helm Charts ajudam a superar no contexto dos microsserviços Kubernetes.

Na segunda parte, focamos na criação e personalização de Helm Charts, destacando como eles podem ser adaptados para atender às necessidades específicas de diferentes micro serviços. Analisamos a estrutura de um Helm Chart, como criar um do zero e como personalizá-lo para um micro serviço específico.

Agora, na terceira parte desta série, vamos dar um passo adiante e explorar como podemos automatizar o gerenciamento de ambientes Kubernetes.

Vamos nos concentrar no uso do Terraform, uma ferramenta de infraestrutura como código, para gerenciar recursos Kubernetes no EKS da [AWS](/aws-no-brasil-solucao-em-nuvem-otimiza-infraestrutura-e-expande-a-mobilidade/). Abordaremos tópicos como a criação de um cluster EKS na AWS com Terraform, gerenciamento de Namespaces, criação de usuários e atribuição de permissões, e a implantação de ferramentas no cluster EKS usando Helm e Terraform.

## Usando Terraform para gerenciar recursos Kubernetes no EKS da AWS

### 1. Introdução ao Terraform e ao provedor Kubernetes

O Terraform é uma ferramenta de infraestrutura como código (IaC) que permite definir e provisionar infraestrutura de data center usando uma linguagem de configuração declarativa. Aqui está um exemplo básico de como um recurso do Kubernetes pode ser definido usando o Terraform:

```
provider "kubernetes" {
  config_path = "~/.kube/config"
}

resource "kubernetes_namespace" "example" {
  metadata {
    name = "example-namespace"
  }
}
```

Neste exemplo, estamos usando o provedor Kubernetes para criar um novo namespace chamado “example-namespace”.

### 2. Criando um cluster EKS na AWS com Terraform

```
provider "aws" {
  region = "us-west-2"
}

resource "aws_eks_cluster" "example" {
  name     = "example"
  role_arn = aws_iam_role.example.arn

  vpc_config {
    subnet_ids = [aws_subnet.example.id]
  }

  depends_on = [
    aws_iam_role_policy_attachment.example-AmazonEKSClusterPolicy,
  ]
}

resource "aws_eks_node_group" "example" {
  cluster_name    = aws_eks_cluster.example.name
  node_group_name = "example"
  node_role_arn   = aws_iam_role.example.arn
  subnet_ids      = [aws_subnet.example.id]

  scaling_config {
    desired_size = 1
    max_size     = 1
    min_size     = 1
  }

  instance_types = ["t3.medium"]

 depends_on = [
    aws_iam_role_policy_attachment.example-AmazonEKSWorkerNodePolicy,
  ]
}

# Cria Kubeconfig
resource "local_file" "kubeconfig" {
 content = templatefile("kubeconfig.tpl", {
   endpoint                   = aws_eks_cluster.this.endpoint
   certificate_authority_data = aws_eks_cluster.this.certificate_authority.0.data
   cluster_name               = aws_eks_cluster.this.name
 })
 filename = "${path.module}/kubeconfig.yaml"
}
```

Neste exemplo, estamos criando um cluster EKS chamado “example” na região “us-west-2”. O cluster terá um grupo de nós com uma capacidade desejada de 1 nó, uma capacidade máxima de 1 nó e uma capacidade mínima de 1 nó. Cada nó será uma instância “t3.medium”. Também é gerado um **kubeconfig** baseado no seguinte template:

```
apiVersion: v1
clusters:
- cluster:
    server: ${endpoint}
    certificate-authority-data: ${certificate_authority_data}
  name: kubernetes
contexts:
- context:
    cluster: kubernetes
    user: aws
  name: aws
current-context: aws
kind: Config
preferences: {}
users:
- name: aws
  user:
    exec:
      apiVersion: client.authentication.k8s.io/v1beta1
      command: aws-iam-authenticator
      args:
        - "token"
        - "-i"
        - "${cluster_name}"
```

### 3. Gerenciando Namespaces com Terraform

Namespaces no Kubernetes são como espaços de trabalho virtuais que permitem que você organize e separe recursos do cluster. Com o Terraform, você pode gerenciar namespaces de forma eficiente. Aqui está um exemplo de como criar um namespace usando o Terraform:

```
resource "kubernetes_namespace" "example" {
  metadata {
    name = "example-namespace"
  }
}
```

Neste exemplo, estamos criando um namespace chamado “example-namespace”. Você pode criar quantos namespaces precisar, simplesmente replicando e ajustando este bloco de código.

### 4. Criando usuários e atribuindo permissões com Terraform

O Terraform pode ser usado para gerenciar usuários e suas permissões no Kubernetes. Por exemplo, você pode criar um Role e um RoleBinding para atribuir permissões a um usuário específico. Além disso, você pode gerar um arquivo kubeconfig para esse usuário, permitindo que ele interaja com o cluster. Aqui está um exemplo de como isso pode ser feito:

```
resource "kubernetes_role" "example" {
  metadata {
    name      = "example-role"
    namespace = "example-namespace"
  }

  rule {
    api_groups = [""]
    resources  = ["pods"]
    verbs      = ["get", "list"]
  }
}

resource "kubernetes_role_binding" "example" {
  metadata {
    name      = "example-role-binding"
    namespace = "example-namespace"
  }

  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "Role"
    name      = kubernetes_role.example.metadata[0].name
 }

  subject {
    kind      = "User"
    name      = "example-user"
    api_group = "rbac.authorization.k8s.io"
  }
}

output "kubeconfig" {
  description = "Kubeconfig for the example user"
  value = <
```

Neste exemplo, estamos criando um Role chamado “example-role” que permite ao usuário obter e listar pods. Em seguida, criamos um RoleBinding que atribui esse Role ao usuário “example-user”. Finalmente, geramos um arquivo kubeconfig para o usuário “example-user”. Este arquivo kubeconfig permite que o usuário “example-user” interaja com o cluster usando o comando kubectl.

Caso a automação do EKS esteja separada desta, é possível recuperar os dados da automação através do **tfsate** utilizando o **data** do **EKS**:

```
data "terraform_remote_state" "eks" {
  backend = "local"

  config = {
    path = "../terraform.tfstate"
  }
}
```

Assim, você pode substituir os campos das variáveis pelo **data**:

```
output "kubeconfig" {
  description = "Kubeconfig for the example user"
  value = <
```

### 5. Implantando ferramentas no cluster EKS usando Helm e Terraform

O Terraform, em conjunto com o Helm, pode ser usado para implantar ferramentas no seu cluster EKS. O Terraform tem um provedor Helm que permite gerenciar Helm Charts. Aqui está um exemplo de como implantar o Helm Chart do nginx-ingress usando o Terraform e definindo valores específicos.

**Usando um arquivo values.yaml:**

Se você tiver um arquivo **values.yaml** personalizado para o seu Helm Chart, você pode usar o argumento **values** para especificar o caminho para esse arquivo:

```
provider "helm" {
 kubernetes {
   config_path = "../kubeconfig.yaml"
 }
}

resource "helm_release" "nginx_ingress" {
  name       = "nginx-ingress"
  repository = "https://kubernetes.github.io/ingress-nginx"
  chart      = "ingress-nginx"
  namespace  = "default"

  values = [
    file("${path.module}/values.yaml")
  ]
}
```

Neste exemplo, o Terraform irá ler o arquivo **values.yaml** no mesmo diretório do arquivo Terraform e usar esses valores ao instalar o Helm Chart.

**Usando o parâmetro “set”:**

Se você quiser definir valores específicos diretamente no recurso **helm\_release**, você pode usar o argumento **set**. Aqui está um exemplo:

```
provider "helm" {
 kubernetes {
   config_path = "../kubeconfig.yaml"
 }
}

resource "helm_release" "nginx_ingress" {
  name       = "nginx-ingress"
  repository = "https://kubernetes.github.io/ingress-nginx"
  chart      = "ingress-nginx"
  namespace  = "default"

  set {
    name  = "controller.replicaCount"
    value = "2"
  }

  set {
    name  = "controller.metrics.enabled"
    value = "true"
  }
}
```

Neste exemplo, estamos definindo o número de réplicas do controlador nginx-ingress para 2 e habilitando as métricas do controlador. Você pode adicionar quantos blocos set precisar para definir todos os valores necessários para o seu Helm Chart.

## Conclusão

Nesta terceira e última parte desta série de artigos, exploramos como o Terraform pode ser usado para automatizar a criação e o gerenciamento de recursos do Kubernetes no EKS da AWS. Demonstramos como criar um cluster EKS, gerenciar namespaces, criar usuários e atribuir permissões, e implantar ferramentas usando o Helm, tudo isso usando o Terraform.

A automação é uma parte crucial da gestão eficiente de ambientes Kubernetes. Ao usar ferramentas como o Terraform, as equipes de desenvolvimento e operações podem economizar tempo, reduzir erros e garantir a consistência em todos os ambientes.

Esperamos que esta série forneça uma visão útil sobre como você pode aproveitar o poder do Helm e do Terraform para gerenciar seus micro serviços Kubernetes. Encorajamos você a experimentar essas ferramentas e técnicas em seus próprios projetos. Lembre-se, a prática leva à perfeição!

Todo o código usado nesta série de artigos está disponível no nosso repositório do [GitHub](https://github.com/vertigo-learn/terraform-eks-helm-kubernetes). Convidamos você a visitar para explorar o código em detalhes, fazer fork do repositório e experimentar por conta própria.

## Implemente soluções Kubernetes com a Vertigo Tecnologia

A Vertigo Tecnologia tem especialistas experientes na implementação de [soluções Kubernetes](/parcerias/mirantis/), assim como parcerias que são reconhecidas por sua excelência no mercado.

Containerize suas aplicações e tenha uma infraestrutura automatizada, capaz de ser replicada para diversos ambientes, de forma prática e segura.

Fale com o nosso time de especialistas, estamos prontos para te ajudar.

–

*Quem assina este artigo é o nosso Analista DevOps, Caio Barbieri.*

![](/wp-content/uploads/2023/05/Assinaturas-site_Caio-2.png)
