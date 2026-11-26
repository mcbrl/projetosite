---
title: "How GitOps delivers high speed for Kubernetes"
slug: "como-gitops-oferece-alta-velocidade-para-kubernetes"
date: "2021-02-11T12:49:50"
modified: "2021-02-11T12:49:50"
status: "publish"
author: "admin"
excerpt: "GitOps is based on DevOps, with Git as a single source for declarative infrastructure and system wide applications. Kubernetes is an example of a modern, declarative tool that allows the entire set of configuration files to be version controlled within Git, meaning an entire infrastructure can be replicated on it. During the execution of our […]"
categories: ["transformacao-cloud-native"]
tags: ["cloud-native", "git", "gitops", "kubernetes", "observabilidade", "transformacao-cloud-native", "weave-kubernetes", "weaveworks", "wkp"]
featuredImage: "/wp-content/uploads/2021/02/Gitops-kubernetes.png"
wpId: 5471
originalUrl: "https://vertigo.com.br/como-gitops-oferece-alta-velocidade-para-kubernetes/"
contentSource: "rest"
lang: "en"
seo:
  title: "How GitOps delivers high speed for Kubernetes - Vertigo"
  description: "Managing clusters consistently across a heterogeneous infrastructure can be difficult—and error-prone—without the simplicity and automation that GitOps provides."
  canonical: "https://vertigo.com.br/en/como-gitops-oferece-alta-velocidade-para-kubernetes/"
  ogImage: "/wp-content/uploads/2021/02/Gitops-kubernetes.png"
  robots: "index, follow"
---

GitOps is based on DevOps, with Git as a single source for declarative infrastructure and system-wide applications. Kubernetes is an example of a modern, declarative tool that allows the entire set of configuration files to be version-controlled within Git, meaning an entire infrastructure can be replicated on it.
During the execution of our projects using some of Weaveworks' tools, we learned that success boils down to three pillars:

1.  Having a fully automated delivery pipeline that can implement changes to your infrastructure as they are made in Git;
2.  Operating a fast-paced and fully available business requires monitoring and observability from the start. Security is of paramount importance; 
3.  Everything must be version-controlled and stored in a single source from which recovery will be possible if necessary.

The main attributes of GitOps in [Weave Cloud](https://www.weave.works/product/cloud/)Git Cluster Synchronization, Weaveworks' automation and management platform for development and DevOps teams, provides CI/CD, continuous deployment, and version management tools that support Git cluster synchronization. 
The Weave Cloud deployment was specifically designed for version control systems and declarative application stacks. Each developer can use Git to make pull requests, further accelerating and simplifying Kubernetes operational tasks.
Organizations want to benefit from the increased speed and innovation that comes with adopting... [Kubernetes](/en/How-Kubernetes-can-reduce-cloud-complexity./)But for that, a solid strategy is needed.
An automated and consistent approach to cluster management is needed that can be executed efficiently, regardless of the number of clusters, clouds, or other configurations included in the combination.
In this article, we'll explain how GitOps delivers high speed for Kubernetes. Enjoy reading!

## Managing complexity

Kubernetes provides acceleration and innovation as long as the complexity of platform configuration can be managed. One of the biggest challenges is maintaining and deploying consistent Kubernetes platforms while they are used by multiple teams that need to operate in different environments and clouds.
Implementing Kubernetes involves much more than simply activating a cluster. Beyond its basic installation, there are add-ons to run it, both in terms of its infrastructure (including a way to monitor its health), as well as the tools and applications that development teams require for CD pipelines, code tracking, and logging.
In addition, there may be a need to consider tools for specific business requirements such as *machine learning,* whose applications also need to be configured to work with Kubernetes.

## Cluster configuration definitions

Almost all elements of Kubernetes use declarative configuration: the cluster and each component within it, as well as the running applications. This allows the platform configuration to be stored collectively in Git. 
With GitOps, in the event of a configuration deviation, an alert is triggered and the cluster can be automatically reconciled with a known state stored in Git. This approach offers the following benefits:

- Git-backed security ensures provenance through an integrated audit trail;
- Greater reliability for automating the update process with integrated and secure GitOps;
- Scalable cluster management in applications;
- Save time and costs by having complete platform configurations shipped to Git;
- Proactive monitoring with alerts for deviations in the cluster configuration.

## Git-based policy

At the core of the cluster configuration is the ability to manage policies with GitOps. This is a standard component in the Weave Kubernetes Platform (WKP) that can help meet regulatory compliance requirements more efficiently.
Policies and rules can be configured by teams to determine the roles and permissions of who can approve changes to the basic Kubernetes configuration.
Role-based access control (RBAC) permissions can be verified and confirmed in Git at the time of... *c*Feedback is provided before any changes are applied.

## Self service

With GitOps policies, you don't have to choose between configuration consistency and the tool. Instead, you can allow your developers to use whatever they need to build their delivery pipelines.
When all configuration information is stored in Git, entire cluster stacks can be shipped consistently and scalably, no matter how many you are maintaining and deploying.

## Cluster maintenance

With GitOps, there's no need to generate or apply custom YAML files for each cluster in your infrastructure. You can let the tools do this arduous and tedious work so your team can focus on creating the best configurations for their workloads, instead of applying them.
This approach not only makes managing dozens of clusters much more efficient, but also increases security by reducing the risk of errors or omissions caused by manual configuration.

### Consistency between on-premise and cloud-native solutions.

Current infrastructure in most organizations includes a combination of on-premises resources and various public clouds. Managing clusters consistently across a heterogeneous infrastructure can be difficult—and error-prone—without the simplicity and automation that GitOps provides.
Managing configuration with GitOps avoids the problem of having to maintain or secure custom clusters. You can write a single set of configuration files, adapting them as needed to handle the nuances of different clouds and clusters or for specific tools, and then deploy them across all parts of your infrastructure using a common and secure workload.

## Simplifying access control

When manually managing clusters spread across multiple clouds, access control and user roles can become confusing. A different set of roles and control policies for each cluster is a recipe for oversights and security breaches.
With GitOps-based management, it becomes feasible to define a single set of access control policies, maintain them in Git, and apply them to all clusters and specific teams. 
This is possible not only by applying settings in an automated way, but also because having a centralized and automated approach to policy management allows you to control the number of people with access to your clusters.

## GitOps and Kubernetes

In the GitOps pipeline model, Git plays the central role: code, configuration, and stack. This means that any developer can use GitHub, join the team, and easily submit a new application or make changes.
CI, build, and test services are necessary to develop deployable artifacts. However, in the GitOps pipeline, the overall orchestration of delivery is coordinated by the deployment and release automation system. These principles are integrated into Weave Cloud and enable a fast path to production. 

## Instant CI/CD

Weave Cloud sets up a Kubernetes CI/CD cluster so you can benefit from high-speed continuous delivery. From this foundation, you can update and rollback applications via Git PRs, CLI, or GUI. Additionally, integrated stack monitoring and management are available to complete the operational circle.
Weave's integrated approach means that a developer can observe deployments as they happen so they can measure and react to the impact of a change.

## Observability as a catalyst

Observability is one of the main drivers of the continuous delivery cycle for Kubernetes, as it allows for a holistic view of the actual execution state of the system at any given time.
The running system is observed in order to understand and control it, applying new features and fixes that are sent to Git, feeding the pipeline.

## Git-centric tools

The goal of GitOps is to help teams accelerate delivery. Git-centric tools unify pipelines, allowing developers to perform operations in an easier, faster, and more lightweight way. 
The function of a GitOps dashboard in Weave Cloud is to allow... [observability](/en/Why-observability-and-the-future-of-systems-monitoring/) and accelerate the understanding and validation of the system, as well as suggest mitigation actions. This speeds up the operations cycle.

## Conclusion

GitOps is fundamental for implementing highly scalable Kubernetes strategies that are reliable, efficient, and secure. Manual configuration approaches may work when there are only one or two clusters to manage, but **There's no way to work with large quantities without the help of GitOps policy management.**.
The consequence is that your configurations become inconsistent, which likely leads the team to make mistakes that create security problems. GitOps addresses all these challenges to enable a Kubernetes management strategy that is truly consistent and scalable.
A [Weave Kubernetes Platform (WKP)](https://materiais.vertigo.com.br/automatizando-kubernetes-gitops?_fs=cb445e0d-89fc-4623-8fbe-72abea1c06ea) It's a production-ready platform with GitOps as its underlying architecture. It simplifies the setup and management of clusters across your organization by bringing together – on a single platform – all the tools, services, and components your team needs to run.
Together, as official partners in Brazil for Weaveworks resale and professional services, we can create a cloud-native reference architecture tailored to your business needs. You can benefit from an already validated design model, or you can design, review, and select technology options with our assistance.  
Do you have questions about what you need to create a cloud-native platform? [Contact us!](/en/us/)

## Learn how to perform frequent deployments more securely and with less overhead using GitOps.

[![](/wp-content/uploads/2021/01/Kubernetes-com-GitOps.png)](https://materiais.vertigo.com.br/automatizando-kubernetes-gitops?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
