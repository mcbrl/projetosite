---
title: "Automating Kubernetes Environment Management: Users, Tools, and Namespaces in AWS EKS with Terraform – Part 3"
slug: "automatizando-o-gerenciamento-de-ambientes-kubernetes-usuarios-ferramentas-e-namespaces-no-eks-da-aws-com-terraform-parte-3"
date: "2023-05-25T09:16:40"
modified: "2023-05-25T09:16:40"
status: "publish"
author: "admin"
excerpt: "In articles part 1 and part 2 , we delve deep into the world of Helm Charts, exploring their crucial role in simplifying and improving the deployment and management of Kubernetes microservices. We discussed the importance of Helm and Helm Charts, as well as the common challenges that Helm Charts help overcome in the context […]"
categories: ["kubernetes"]
tags: ["kubernetes"]
featuredImage: "/wp-content/uploads/2023/05/Parte-03_Automatizando-o-Gerenciamento-de-Ambientes-Kubernetes_BLOG_IMAGEM_DESTAQUE.png"
wpId: 162094
originalUrl: "https://vertigo.com.br/automatizando-o-gerenciamento-de-ambientes-kubernetes-usuarios-ferramentas-e-namespaces-no-eks-da-aws-com-terraform-parte-3/"
contentSource: "rest"
lang: "en"
seo:
  title: "Automating Kubernetes Environment Management: Users, Tools, and Namespaces in AWS EKS with Terraform - Part 3 - Vertigo"
  description: "In this article, we discuss the importance of Helm and Helm Charts, as well as the common challenges that Helm Charts help overcome in the context of Kubernetes microservices."
  canonical: "https://vertigo.com.br/en/automatizando-o-gerenciamento-de-ambientes-kubernetes-usuarios-ferramentas-e-namespaces-no-eks-da-aws-com-terraform-parte-3/"
  ogImage: "/wp-content/uploads/2023/05/Parte-03_Automatizando-o-Gerenciamento-de-Ambientes-Kubernetes_BLOG_IMAGEM_DESTAQUE.png"
  robots: "index, follow"
---

In articles [part 1](/en/From-manifests-to-Helm-charts%3A-understanding-the-advantages-for-Kubernetes-microservices--part-1./) and [part 2](/en/Implementing-microservices-with-Kubernetes%3A-creating--testing--and-sharing-Helm-charts---Part-2/) , we delve deep into the world of Helm Charts, exploring their crucial role in simplifying and improving the deployment and management of Kubernetes microservices.

We discussed the importance of Helm and Helm Charts, as well as the common challenges that Helm Charts help overcome in the context of Kubernetes microservices.

In the second part, we focus on creating and customizing Helm Charts, highlighting how they can be adapted to meet the specific needs of different microservices. We analyze the structure of a Helm Chart, how to create one from scratch, and how to customize it for a specific microservice.

Now, in the third part of this series, we're going to take it a step further and explore how we can automate the management of Kubernetes environments.

We will focus on using Terraform, an infrastructure-as-code tool, to manage Kubernetes resources on [AWS](/en/AWS-in-Brazil%3A-Cloud-solution-optimizes-infrastructure-and-expands-mobility./) EKS . We will cover topics such as creating an EKS cluster on AWS with Terraform, managing namespaces, creating users and assigning permissions, and deploying tools to the EKS cluster using Helm and Terraform.

## Using Terraform to manage Kubernetes resources on AWS EKS

### 1\. Introduction to Terraform and the Kubernetes provider

Terraform is an Infrastructure as Code (IaC) tool that allows you to define and provision data center infrastructure using a declarative configuration language. Here's a basic example of how a Kubernetes resource can be defined using Terraform:

provider "kubernetes" { config\_path = "~/.kube/config" } resource "kubernetes\_namespace" "example" { metadata { name = "example-namespace" } }

In this example, we are using the Kubernetes provider to create a new namespace called “example-namespace”.

### 2\. Creating an EKS cluster on AWS with Terraform

provider "aws" { region = "us-west-2" } resource "aws\_eks\_cluster" "example" { name = "example" role\_arn = aws\_iam\_role.example.arn vpc\_config { subnet\_ids = \[aws\_subnet.example.id\] } depends\_on = \[ aws\_iam\_role\_policy\_attachment.example-AmazonEKSClusterPolicy, \] } resource "aws\_eks\_node\_group" "example" { cluster\_name = aws\_eks\_cluster.example.name node\_group\_name = "example" node\_role\_arn = aws\_iam\_role.example.arn subnet\_ids = \[aws\_subnet.example.id\] scaling\_config { desired\_size = 1 max\_size = 1 min\_size = 1 } instance\_types = \["t3.medium"\] depends\_on = \[ aws\_iam\_role\_policy\_attachment.example-AmazonEKSWorkerNodePolicy, \] } # Create Kubeconfig resource "local\_file" "kubeconfig" { content = templatefile("kubeconfig.tpl", { endpoint = aws\_eks\_cluster.this.endpoint certificate\_authority\_data = aws\_eks\_cluster.this.certificate\_authority.0.data cluster\_name = aws\_eks\_cluster.this.name }) filename = "${path.module}/kubeconfig.yaml" }

In this example, we are creating an EKS cluster called “example” in the “us-west-2” region. The cluster will have a group of nodes with a desired capacity of 1 node, a maximum capacity of 1 node, and a minimum capacity of 1 node. Each node will be a “t3.medium” instance. A **kubeconfig file** is also generated based on the following template:

apiVersion: v1 clusters: - cluster: server: ${endpoint} certificate-authority-data: ${certificate\_authority\_data} name: kubernetes contexts: - context: cluster: kubernetes user: aws name: aws current-context: aws kind: Config preferences: {} users: - name: aws user: exec: apiVersion: client.authentication.k8s.io/v1beta1 command: aws-iam-authenticator args: - "token" - "-i" - "${cluster\_name}"

### 3\. Managing Namespaces with Terraform

Namespaces in Kubernetes are like virtual workspaces that allow you to organize and separate cluster resources. With Terraform, you can manage namespaces efficiently. Here's an example of how to create a namespace using Terraform:

resource "kubernetes\_namespace" "example" { metadata { name = "example-namespace" } }

In this example, we are creating a namespace called “example-namespace”. You can create as many namespaces as you need by simply replicating and adjusting this code block.

### 4\. Creating users and assigning permissions with Terraform

Terraform can be used to manage users and their permissions in Kubernetes. For example, you can create a Role and a RoleBinding to assign permissions to a specific user. Additionally, you can generate a kubeconfig file for that user, allowing them to interact with the cluster. Here's an example of how this can be done:

resource "kubernetes\_role" "example" { metadata { name = "example-role" namespace = "example-namespace" } rule { api\_groups = \[""\] resources = \["pods"\] verbs = \["get", "list"\] } } resource "kubernetes\_role\_binding" "example" { metadata { name = "example-role-binding" namespace = "example-namespace" } role\_ref { api\_group = "rbac.authorization.k8s.io" kind = "Role" name = kubernetes\_role.example.metadata\[0\].name } subject { kind = "User" name = "example-user" api\_group = "rbac.authorization.k8s.io" } } output "kubeconfig" { description = "Kubeconfig for the example user" value =

In this example, we are creating a Role called “example-role” that allows the user to get and list pods. Next, we create a RoleBinding that assigns this Role to the user “example-user”. Finally, we generate a kubeconfig file for the user “example-user”. This kubeconfig file allows the user “example-user” to interact with the cluster using the kubectl command.

**If the EKS automation is separate from** this one, it is possible to retrieve the automation data through **tfsate** using the EKS **data** :

data "terraform\_remote\_state" "eks" { backend = "local" config = { path = "../terraform.tfstate" } }

Therefore, you can replace the variable fields with the **data** :

output "kubeconfig" { description = "Kubeconfig for the example user" value =

### 5\. Deploying tools to the EKS cluster using Helm and Terraform

Terraform, in conjunction with Helm, can be used to deploy tools on your EKS cluster. Terraform has a Helm provider that allows you to manage Helm Charts. Here's an example of how to deploy the nginx-ingress Helm Chart using Terraform and setting specific values.

**Using a values.yaml file:**

If you have a custom **values.yaml** file for your Helm Chart, you can use the **values** ​​argument to specify the path to that file:

provider "helm" { kubernetes { config\_path = "../kubeconfig.yaml" } } resource "helm\_release" "nginx\_ingress" { name = "nginx-ingress" repository = "https://kubernetes.github.io/ingress-nginx" chart = "ingress-nginx" namespace = "default" values ​​= \[ file("${path.module}/values.yaml") \] }

In this example, Terraform will read the **values.yaml** file in the same directory as the Terraform file and use those values ​​when installing Helm Chart.

**Using the “set” parameter:**

If you want to set specific values ​​directly in the **helm\_release** resource , you can use the **set** argument . Here's an example:

provider "helm" { kubernetes { config\_path = "../kubeconfig.yaml" } } resource "helm\_release" "nginx\_ingress" { name = "nginx-ingress" repository = "https://kubernetes.github.io/ingress-nginx" chart = "ingress-nginx" namespace = "default" set { name = "controller.replicaCount" value = "2" } set { name = "controller.metrics.enabled" value = "true" } }

In this example, we are setting the number of replicas of the nginx-ingress controller to 2 and enabling the controller metrics. You can add as many set blocks as you need to define all the necessary values ​​for your Helm Chart.

## Conclusion

In this third and final part of this series of articles, we explore how Terraform can be used to automate the creation and management of Kubernetes resources on AWS EKS. We demonstrate how to create an EKS cluster, manage namespaces, create users and assign permissions, and deploy tools using Helm, all using Terraform.

Automation is a crucial part of efficiently managing Kubernetes environments. By using tools like Terraform, development and operations teams can save time, reduce errors, and ensure consistency across all environments.

We hope this series provides helpful insights into how you can leverage the power of Helm and Terraform to manage your Kubernetes microservices. We encourage you to experiment with these tools and techniques in your own projects. Remember, practice makes perfect!

All the code used in this series of articles is available in our [GitHub](https://github.com/vertigo-learn/terraform-eks-helm-kubernetes) repository . We invite you to visit to explore the code in detail, fork the repository, and experiment for yourself.

## Implement Kubernetes solutions with Vertigo Tecnologia.

Vertigo Tecnologia has experienced specialists in the implementation of [Kubernetes solutions](/en/partnerships/Mirantis/) , as well as partnerships with companies recognized for their excellence in the market.

Containerize your applications and have an automated infrastructure that can be replicated across various environments in a practical and secure way.

Speak to our team of experts; we're ready to help you.

*This article was written by our DevOps Analyst, Caio Barbieri.*

![](/wp-content/uploads/2023/05/Assinaturas-site_Caio-2.png)
