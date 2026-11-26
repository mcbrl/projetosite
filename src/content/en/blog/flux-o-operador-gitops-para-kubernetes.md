---
title: "Flux, the GitOps operator for Kubernetes"
slug: "flux-o-operador-gitops-para-kubernetes"
date: "2021-10-14T14:45:15"
modified: "2026-02-02T20:39:27"
status: "publish"
author: "admin"
excerpt: "Have you heard of Flux, the GitOps operator for Kubernetes? Development teams that choose Kubernetes can use Flux as their GitOps operator. This is one of the most efficient ways to implement continuous deployment practices securely. Flux supports pull based application deployments and eliminates the need for IT teams to manage a separate process for […]"
categories: ["kubernetes"]
tags: ["gitops", "kubernetes"]
featuredImage: "/wp-content/uploads/2026/02/flux-o-operador-gitops-para-kubernetes.png"
wpId: 157423
originalUrl: "https://vertigo.com.br/flux-o-operador-gitops-para-kubernetes/"
contentSource: "rest"
lang: "en"
seo:
  title: "Flux, the GitOps operator for Kubernetes - Vertigo"
  description: "Meet Flux, the GitOps operator for Kubernetes. Learn how to configure and use it. Visit our blog to read more."
  canonical: "https://vertigo.com.br/en/flux-o-operador-gitops-para-kubernetes/"
  ogImage: "/wp-content/uploads/2026/02/flux-o-operador-gitops-para-kubernetes.png"
  robots: "index, follow"
---

Have you heard of Flux, the GitOps operator for Kubernetes? Development teams that choose Kubernetes can use Flux as their GitOps operator. This is one of the most efficient ways to implement continuous deployment practices securely.

Flux supports pull-based application deployments and eliminates the need for IT teams to manage a separate process for cluster deployment. While this emerging technique for managing and deploying applications requires discipline, it is built on solid continuous integration software foundations.

In this article, we will demonstrate the value of this approach and explain how to get started. In addition to explaining the relationship between Flux and Kubernetes, and how it relates to GitOps, we will also understand how GitOps interacts with a Kubernetes environment. Happy reading!

**Read more**

- [Discover how to improve the quality of your deployment with GitOps.](/en/Discover-how-to-improve-the-quality-of-your-deployment-with-Git-Tops./)
- [Automating Kubernetes with GitOps](https://materiais.vertigo.com.br/automatizando-kubernetes-gitops)

## Overview: What is GitOps?

Created by Weaveworks, [GitOps](/en/Gitops-from-automation-to-continuous-integration/) is a configuration manager applied to a specific and restricted context, considering that the only source of truth is a Git repository.

GitOps automatically manages infrastructure provisioning and deployment through Git pull requests. The Git repository contains system state information, clearly recording changes so they are visible and auditable.

It is primarily used in the Kubernetes community, but there are efforts from other communities to bring these concepts to other environments.

## What is Flux?

To get straight to the point, Flux is the GitOps operator for Kubernetes.

Originally developed by [Weaveworks](/en/partnerships/weaveworks/) , Flux is an open-source tool that was later acquired by the Cloud Native Computing Foundation.

Its execution takes place on the managed cluster, and its function is to observe remote repositories that describe the cluster's state. In this way, changes are reconciled to convert the current cluster state to the desired state.

Flux synchronizes Kubernetes repositories with version control repositories, performing constant monitoring. Instead of applying changes through a CI operator or system, it performs these changes independently.

Therefore, Flux runs within the Kubernetes cluster that it manages, freeing up cluster operators to perform other tasks.

## Flux Components

Here are some of the most important components of the GitOps operator for Kubernetes:

- **Sources** You have several sources available to configure Flux. Git repositories for the Kubernetes cluster, as well as applications deployed on Kubernetes, are examples of sources.

Here are some websites that can serve as resources for configuring your Flux.

- [GitRepository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
- [bitbucket](https://bitbucket.org/)
- [HelmChart](https://helm.sh/docs/topics/charts/)
- [HelmRepositories](https://fluxcd.io/docs/components/source/helmrepositories/)
- **Reconciliation** – These are changes defined by sources, which ensures the cluster achieves the desired state. Flux will make changes originating from the sources until a customized resource (Kustomization) is associated with the instruction to reconcile with the source.
- **Customization** – A tool used to create Kubernetes manifests via a Kustomization file. Flux also has custom features that manage HelmReleases and many more options.

## How to install Flux V2 using the GitHub repository

To proceed with the installation of the GitOps operator for Kubernetes, cluster operators need to install the Flux CLI in their *development box* or *jump boxes* to bootstrap and then initialize the cluster to be managed by Flux.

[Access the step-by-step guide](https://fluxcd.io/docs/get-started/) to initialize Flux in a Kubernetes cluster and deploy a sample application with GitOps.

It's worth mentioning that to perform the installation following the tutorial, you will need:

- Have a Kubernetes cluster (v1.16 or higher);
- Having a GitHub account and a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) (PAT) with access to create repositories;
- Access to [demonstration application](https://github.com/DexterPOSH/podinfo).

## Automating Kubernetes with GitOps

GitOps is structured around DevOps best practices, with Git serving as its source for declarative infrastructure and system-wide applications. This allows for configuration management of your project through a Git version, and Kubernetes is an ideal declarative tool for this purpose.

For example, the operator can be run within the Kubernetes cluster, making the requested changes and then applying them to achieve the desired state.

See how a pull-based workflow develops:

1.  The development team submits the necessary changes to the application repository.
2.  Next, the changes activate the build pipeline, which builds the application.
3.  After synchronization, the build pipeline completes and publishes the container image with a new version of the application.
4.  Finally, the Kubernetes environment repository is updated to use the new version of the container image.

Through the push-based example, we removed the step where the deployment pipeline performs a new configuration.

It may seem like a simple detail, but the change from "push" to "pull" modifies how development teams deploy their applications and perform infrastructure operations.

Each command that implements a change becomes a pull request in the repository, and the GitOps operator within the system is responsible for handling these tasks.

The combination of declarative Kubernetes APIs with the GitOps deployment model results in two main advantages:

- Operator default – Cluster operators are integrated and free to reconcile system state.
- Enhanced security – Because the operator does not run within the cluster, the credentials of CI processes or infrastructure teams are not exposed.

## Implement GitOps and accelerate your company's results with Vertigo Tecnologia.

To achieve greater efficiency in delivering results, data security, and team productivity, GitOps is fundamental for implementing highly scalable Kubernetes strategies, and Vertigo Tecnologia is the ideal partner for this.

As part of our service portfolio, we utilize the Weave Kubernetes Platform (WKP), a production-ready platform with GitOps as its underlying architecture. 

Your company can simplify the entire process of configuring and managing clusters through a single platform, bringing together all the necessary tools, services, and components.

Get in touch with our team of experts; we have an experienced and prepared team to implement GitOps [with Kubernetes](/en/How-Gitops-offers-high-speed-for-Kubernetes/) to boost your projects.

*Publication adapted from the [Search IT Operations website.](https://searchitoperations.techtarget.com/tutorial/Try-out-this-GitOps-tutorial-with-Flux-and-Kubernetes)*

**Read also**

- [Applying observability in Kubernetes](/en/Applying-observability-in-Kubernetes/)
- [Kubernetes: 6 key components of its architecture](/en/Kubernetes%3A-6-main-components-of-its-architecture./)
