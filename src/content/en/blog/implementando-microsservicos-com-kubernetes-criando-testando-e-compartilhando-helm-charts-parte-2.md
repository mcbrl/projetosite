---
title: "Implementing Microservices with Kubernetes: Creating, Testing, and Sharing Helm Charts (Part 2)"
slug: "implementando-microsservicos-com-kubernetes-criando-testando-e-compartilhando-helm-charts-parte-2"
date: "2023-05-18T09:36:54"
modified: "2023-05-18T09:36:54"
status: "publish"
author: "admin"
excerpt: "In the second part of this series, we will explore the process of creating, testing, and sharing Helm Charts for microservices in Kubernetes. Learn about the main components of a Helm Chart, how to create one from scratch, and how to test and share it with other developers and teams. This text is the second […]"
categories: ["kubernetes"]
tags: ["kubernetes"]
featuredImage: "/wp-content/uploads/2023/05/BLOG_IMAGEM_DESTAQUE2.png"
featuredImageAlt: "Kubernetes"
wpId: 162069
originalUrl: "https://vertigo.com.br/implementando-microsservicos-com-kubernetes-criando-testando-e-compartilhando-helm-charts-parte-2/"
contentSource: "rest"
lang: "en"
seo:
  title: "Implementing Microservices with Kubernetes: Creating, Testing, and Sharing Helm Charts (Part 2) - Vertigo"
  description: "Learn about the main components of a Helm Chart, how to create one from scratch, and how to test and share it with other developers and teams."
  canonical: "https://vertigo.com.br/en/implementando-microsservicos-com-kubernetes-criando-testando-e-compartilhando-helm-charts-parte-2/"
  ogImage: "/wp-content/uploads/2023/05/BLOG_IMAGEM_DESTAQUE2.png"
  robots: "index, follow"
---

In the second part of this series, we will explore the process of creating, testing, and sharing Helm Charts for [microservices](https://materiais.vertigo.com.br/a-importancia-da-seguranca-zero-trust-ebook) in Kubernetes.

Learn about the main components of a Helm Chart, how to create one from scratch, and how to test and share it with other developers and teams.

This text is the second in a series that divides the topic into 3 parts.

## Main components of a Helm Chart

A typical Helm Chart consists of the following components:

**1 – Chart.yaml:** metadata file containing information about the Chart, such as name, version, and description.

**2 – Templates:** directory containing [Kubernetes](/en/Veecode-platform/) resource templates and configuration files.

**3 – values.yaml:** file containing the default values ​​for the Chart templates.

**4 – .helmignore (optional):** file that specifies the files and directories to be ignored when packaging Chart.

## Creating a Helm Chart from scratch

In this section, we'll explore how to create a Helm Chart from scratch. We'll follow these steps:

### 1 – Installing and configuring Helm

1 – Before you begin, make sure you have Helm installed on your machine. If you don't already have it, follow the installation instructions available in the [official Helm documentation](https://helm.sh/docs/intro/install/).

2 – Configure Helm to communicate with your Kubernetes cluster. If you are using kubectl to manage your cluster, Helm should already be configured correctly.

### 2 – Using the command “*helm create*"to generate a basic Chart structure"

1 – To create a new Helm Chart, use the “ *helm create”* command . For example, to create a Chart called “ *my-microservice* ”, run:

helm create my-microservice

2 – This will create a directory called “ *my-microservice* ” with the basic structure of a Helm Chart.

### 3 – Customizing templates and configuration files

1 – Navigate to the “ *my-microservice/templates”* directory and review the automatically generated template files. Customize the template files as needed for your application.

2 – For example, you can add or modify Kubernetes resources such as Deployments, Services, ConfigMaps, and Secrets. Use Helm's template syntax to make these resources configurable and reusable.

### 4 – Defining default and customizable values ​​in the file *values.yaml*

1 – Open the file “ *my-microservice/values.yaml* ” and define the default and customizable values ​​for your Helm Chart. These values ​​will be used in the template files to configure Kubernetes resources.

2 – For example, you can define the container image name, exposed ports, resource limits, and any other application-specific settings.

### 5 – Updating the file *Chart.yaml* with relevant information

*1 – In the “ my-microservice* ” directory , open the “ *Chart.yaml* ” file and update the relevant information, such as name, version, description, and other metadata of your Helm Chart.

2 – Be sure to update your Chart version whenever you make a significant update.

With these steps completed, you will have created a Helm Chart from scratch, customized for your microservices-based application. Now you can proceed to test, share, and deploy your Helm Chart in different environments.

## Testing the Helm Chart

After creating and customizing your Helm Chart, it's important to test it to ensure it functions correctly. In this section, we'll explore how to test your Helm Chart, validating the deployment and created resources, testing updates and rollbacks, and verifying the Chart's customization with different values.

**1 – Installing Chart on the local or development Kubernetes cluster**

1 – To install your Helm Chart on a local or development Kubernetes cluster, use the \`helm install\` command. For example, to install the Chart named “ *my-microservice* ”, run:

helm install my-microservice-release ./my-microservice

2 – Helm will install Chart on your cluster and generate a release name, such as “ *my-microservice-release* ”. Note this name, as you will need it for future interactions with your Helm Chart.

**2 – Validating the implementation and the resources created**

1 – After installing Helm Chart, verify that the Kubernetes resources were created correctly. Use the kubectl command to inspect the resources in the cluster, such as Deployments, Services, ConfigMaps, and Secrets.

2 – For example, to check the deployment of your application, run:

kubectl get deployments

3 – Ensure that all expected resources are present and in a healthy state.

**3 – Validating the implementation and the resources created**

1\. Make a change to your Helm Chart, such as updating the container image version or modifying a setting. Then, update your Chart release using the \`helm upgrade\` command.

helm upgrade my-microservice-release ./my-microservice

ou

helm install --upgrade meu-microservico-release ./meu-microservico

2 – Verify that the changes have been applied correctly using the kubectl command to inspect the updated resources.
3 – If something goes wrong during the update, use the \`helm rollback\` command to revert to the previous version of your Chart:

helm rollback my-microservice-release

**4 – Checking Chart customization with different values**

1 – To test the customization of your Helm Chart, create a file called “ *custom-values.yaml* ” and override some of the default values ​​defined in your Chart's “ *values.yaml ” file.*

2 – For example, you can change the number of replicas or update the container image to a different version.

3 – Install or update Chart using the “ *custom-values.yaml* ” file with the command helm install or helm upgrade:

helm install my-microservice-release ./my-microservice -f custom-values.yaml

4 – Verify that the Kubernetes resources have been configured correctly with the custom values, using the kubectl command to inspect the updated resources.

With these steps completed, you will have successfully tested your Helm Chart, validating the deployment, the created resources, the update, the rollback, and the customization with different values. Now you are ready to share and distribute your Helm Chart with other developers and teams.

## Sharing and distributing the Helm Chart

After creating and testing your Helm Chart, it's important to share and distribute it so that other developers and teams can use it in their own projects and deployments. In this section, we'll see how to package your Helm Chart, create and configure a Helm Chart repository, and add the Chart to the repository to share it.

**1 – Packaging the Helm Chart using the “** ***helm package*** **” command**

1 – In your Helm Chart directory (for example, “ *my-microservice* ”), run the *\`helm package\`* command to create a .tgz file of your Chart:

Helm package.

2 – This will generate a file called “ *my-microservice-<VERSION>.tgz* ” which contains all the necessary files and directories for your Helm Chart.

**2 – Creating and configuring a Helm Chart repository (public or private)**

1 – To share your Helm Chart, you will need a Helm Chart repository. Choose a hosting service, such as GitHub Pages, AWS S3, Google Cloud Storage, or other compatible storage providers.

2 – Configure your hosting service according to the provider's specific instructions. Generally, you will need to create a public bucket or directory and configure the appropriate permissions.

3 – Next, create an index.yaml file in the bucket or public directory. This file will be used to maintain the index of your Helm Chart repository.

**3 – Adding the Chart to the repository and updating the index**

1 – Upload your Helm Chart .tgz file (for example, “ *my-microservice-<VERSION>.tgz* ”) to the bucket or public directory of your Helm Chart repository.

2 – Update your repository's index.yaml file with information about the new Chart. You can use the command \`helm repo index\` to automatically update the file:

helm repo index --url --merge index.yaml .

3 – Replace via the URL of your bucket or public directory. The \`helm repo index\` command adds information about the new Chart to the index.yaml file.

**4 – Sharing the repository with other developers and teams**

1 – Share the URL of your Helm Chart repository with other developers and teams. They will be able to add your repository to their Helm clients using the command *\`helm repo add\`*.

helm repo add

2 – After adding the repository, users will be able to search, install, and update Charts from your repository using the helm search, helm install, and helm upgrade commands.

By following these steps, you will have successfully shared and distributed your Helm Chart so that other developers and teams can use it in their projects and deployments on Kubernetes. This facilitates collaboration and application management.

## Conclusion

In this second part of the series, we cover the process of creating, testing, and sharing Helm Charts for Kubernetes microservices, and we also see how to create a Chart from scratch.

In the third part of this series, we will explore how to automate the management of Kubernetes environments, including creating and managing users, deploying tools, and creating namespaces in AWS EKS with Terraform.

## Implement Kubernetes in your company.

Kubernetes presents itself as an indispensable solution for container orchestration, enabling more efficient application management in cloud environments. Furthermore, the use of [containerized solutions](/en/partnerships/Mirantis/) allows companies to manage their applications in a simplified and scalable way, ensuring greater availability and resilience for applications in production.

Vertigo Tecnologia is a strategic partner for companies that want to adopt Kubernetes in their operations, offering expertise and technical support for the secure and efficient implementation of the technology.

Speak to our sales team; we're ready to help you use Kubernetes!
