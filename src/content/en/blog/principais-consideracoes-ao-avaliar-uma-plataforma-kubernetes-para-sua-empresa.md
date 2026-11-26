---
title: "Key considerations when evaluating a Kubernetes platform for your business."
slug: "principais-consideracoes-ao-avaliar-uma-plataforma-kubernetes-para-sua-empresa"
date: "2021-03-24T11:24:23"
modified: "2021-03-24T11:24:23"
status: "publish"
author: "admin"
excerpt: "Kubernetes is revolutionizing how organizations run applications. This container orchestration system brings speed, flexibility, and reliability to development and operations teams. With that in mind, how do you select the right technologies for your company, and which features are truly important to your business? Throughout our years in the market, we have worked with diverse […]"
categories: ["transformacao-cloud-native"]
tags: ["gitops", "kubernetes", "openshift", "transformacao-cloud-native", "transformacao-digital", "weave-kubernetes", "weaveworks", "wpk"]
featuredImage: "/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-24-at-10.56.20.jpeg"
wpId: 5499
originalUrl: "https://vertigo.com.br/principais-consideracoes-ao-avaliar-uma-plataforma-kubernetes-para-sua-empresa/"
contentSource: "rest"
lang: "en"
seo:
  title: "Key considerations when evaluating a Kubernetes platform for your business - Vertigo"
  description: "Throughout our years in the market, we have worked with diverse clients across various sectors to implement their Kubernetes platforms."
  canonical: "https://vertigo.com.br/en/principais-consideracoes-ao-avaliar-uma-plataforma-kubernetes-para-sua-empresa/"
  ogImage: "/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-24-at-10.56.20.jpeg"
  robots: "index, follow"
---

Kubernetes is revolutionizing how organizations run applications. This container orchestration system brings speed, flexibility, and reliability to development and operations teams. With that in mind, how do you select the right technologies for your company, and which features are truly important to your business?
Throughout our years in the market, we have worked with diverse clients across various sectors to implement their platforms. [Kubernetes](/en/How-Kubernetes-can-reduce-cloud-complexity./)Based on our experience, we've identified some of the key features you need to consider when using it.  
Continue reading our article to learn about these considerations and to see a comparison of how these features are reflected in the Rancher, Red Hat OpenShift, and Weave Kubernetes Platform. Happy reading!

## The difference with GitOps

A successful platform needs to be flexible, replicable, and quickly adopted by your entire team. Furthermore, it must have the right technologies to run your workload, whether on-premise or in the public cloud. 
Meeting these requirements goes beyond a cluster installer. It requires a complete application platform. Teams need a management framework that utilizes familiar tools like Git.
A stable, fully integrated, modeled and managed stack with [gitops](/en/Automating-Kubernetes-with-GitOPs/) It avoids single clusters and other configurations that are difficult to replicate. Teams can provide predictable platforms across different environments, and can also scale to group many applications.
Configuration templates maintained in Git facilitate the management of the entire cluster lifecycle and maintenance via pull requests. Regulatory and compliance needs are easily met through Git-based rules and policies that control who can make configuration changes.

## Kubernetes Providers

We selected these platforms due to their market maturity and similarities in how their solutions are architected and delivered. 

### Rancher

O **Rancher** It describes itself as a complete container management platform that provides easy access to Kubernetes. It is considered pure open-source software and includes a mature user interface as well as RBAC with a full selection of additional components.
It's focused on the mid-market, so ease of use is one of its most important features. While its graphical user interface helps get teams up and running quickly, its underlying architecture isn't very well suited to a large organization.
It also lacks some enterprise features, such as integrated auditing for compliance and other regulatory requirements. Although it claims to be an API solution, its architecture is not based on declarative builds and cannot be managed with GitOps for consistent configuration.

### Red Hat OpenShift

**OpenShift** OpenShift is an integrated container platform aimed at large enterprise users who want a single solution. A product of a major enterprise provider, OpenShift aims to provide all the elements that businesses need.
Security controls are extensive, and the entire system operates around an operational framework that makes deployments to the cluster a virtually intervention-free affair.
As an integrated platform, OpenShift is an inherently complex solution, which can be tricky to install, and the integrations limit the available options.
This lack of flexibility means that OpenShift users cannot easily take advantage of other approaches, and upgrades are complicated. As an enterprise solution, it can also be expensive.

### Weave Kubernetes Platform (WKP)

WKP is a production-ready Kubernetes platform that builds complete applications and provides GitOps management workflows for a modern approach to operations.
GitOps forms the underlying architecture and developer experience of WKP, simplifying Kubernetes setup and management. WKP is a pure API solution that uses the open Cluster API standard. This ensures it will work across various cloud and on-premise environments.
GitOps ensures that the entire platform, with all its add-ons, is maintained in Git with full version control – capitalizing on all the benefits this provides, from security and auditability to built-in disaster recovery and reduced MTTR (Mean Time To Recovery).

## What are the main considerations when evaluating a Kubernetes platform for your business?

### Infrastructure provisioning

Out of the box, Kubernetes doesn't offer a simple way to deploy highly available clusters, leaving it up to your team to forge a DIY approach or use a more closed, black-box solution.
For enterprise users, the suggestion is to create machines, VMs, and other infrastructure using GitOps. This simplifies the installation process and allows for automated lifecycle management, keeping all configurations centrally controlled.

### On-premise and cloud cluster installation

Your applications need to run both in the cloud and on-premise, which means your Kubernetes platform needs to be available in these configurations. Using configuration management to define the Kubernetes platform is crucial for reducing operational overhead and accelerating feature delivery.
For enterprise deployments, it is also important to consider high availability and downtime recovery, which can be repeated across multiple backends.

### Cluster components 

Most development teams have a set of tools they want to use in their day-to-day activities. Whether it's logging or tracking, continuous integration, or dashboards, it's important to offer well-reviewed tool options that can be easily integrated into a platform without compromising security or other regulatory requirements.

### Platform upgrades and updates

New versions of Kubernetes are released periodically, and customers demand continuous, secure, and reliable updates. Kubernetes and its ecosystem of projects offer flexibility.
The benefit of GitOps is that users can easily perform updates and, since all elements are under configuration management, revert to the previously known valid version.

### Composable models

One of the biggest challenges for companies transitioning to cloud native is providing Kubernetes platforms and environments where needed. Implementing and managing a large number of applications and clusters adds complexity, increases operational overhead, and also the chances of errors.
Therefore, it is important to simplify the configuration and management of Kubernetes platforms with an infrastructure-based approach, as well as all the necessary configurations for any component of the cluster.
Each composable model allows a team to easily deploy new clusters or applications using predefined default configurations. And, because the model is declarative and maintained in Git, teams are able to deliver and manage reliable and predictable platforms across different environments.

### Security and politics

Large organizations need efficient security and policies that can be easily applied, preferably a secure, out-of-the-box configuration with fine-grained clustering and workload change control. Extensible RBAC roles and permissions are important so that each user has clear capabilities and boundaries.
With the GitOps approach, we configure policies and functions in Git so that they can be tracked. Every change in the cluster is checked in Git, providing and applying real-time feedback. As a best practice, the policy should be controlled from a central location with full auditability.

### Cluster monitoring and alerting

A Kubernetes solution critical to operational applications must be monitored continuously. The benefit of an integrated monitoring platform is that it provides the appropriate dashboards and alerts.
Setting up dashboards and metrics for clusters can be complex, and gaining a head start with pre-built templates managed in Git means teams aren't working from scratch.
Pre-configured dashboards also offer a consistent experience for managing clusters across the enterprise.

### Network input

Network integration and ingress are crucial components of running Kubernetes at scale. A Software Defined Network (SDN) is typically added to the cluster for internal pod infrastructure and also for defining policies.
Enterprise infrastructures are complex environments, therefore, any Kubernetes solution in this environment must support a variety of options to reflect these requirements.
Different SDNs may have varying features, such as policy support, for example. This makes it mandatory that an SDN can be easily switched when necessary. The same applies to an inbound endpoint: it needs to be flexible in terms of being able to connect to different API gateways and load balancers.

### GitOps multi-cluster management

Companies need to deploy many clusters across different environments and even organizations. The benefit of using full configuration management is the ability to treat clusters as tools. This allows for faster build cycles with more features delivered to end users. 

### Multi-tenancy

Multiple teams operating on the same cluster with partitioning and role-based access control allows for resource sharing without exceeding security limits, while also reducing costs.
At the top of the list of Kubernetes needs in most organizations is the ability to manage namespaces and apply appropriate security controls.
Greater control can be achieved through namespace management and multi-tenancy with GitOps workflows and team workspaces maintained in Git.

### Integrated GitOps deployment pipelines

The platforms [Kubernetes](/en/How-Kubernetes-can-reduce-cloud-complexity./) Continuous delivery components increase speed and also reduce barriers to entry. With continuous delivery enabled, your team can deploy changes throughout the day, rather than quarterly or monthly.
Continuous delivery with GitOps provides a mechanism to revert changes whenever necessary. Development teams can tinker from source code all the way to production. Even more importantly, with GitOps, they can also revert or abandon changes just as easily.

### Observability

To maintain deployment speed, you need tools that can... [provide instant feedback and control](/en/Observability-in-the-process-of-new-business-evolution./) So that, when something goes wrong, it can be easily reversed.
Visibility across the cluster after deployment, as well as feedback and the ability to instantly and continuously roll back, are crucial for teams developing cloud-native applications.

### Progressive implementation

When it comes to experimentation and delivering features to customers in a timely manner, it's crucial that your platform can efficiently deliver progressive pipelines.
To successfully implement these deployments and reap their benefits, a framework is needed that allows for measuring and reacting to results quickly.

### Service-level agreement (SLA)

A robust SLA is mandatory for most organizations. IT needs to ensure that the Kubernetes platform is available to developers and their end users in order to support business requirements.

## Conclusion

The high demand for infrastructure automation and cluster management explains the growing adoption of Weave Kubernetes Platform. The possibility of offering management and standardization of [container construction](/en/container-strategy/) They align with the emergence of DevOps.
Weaveworks has a container-focused vision, which is why it is constantly evolving its orchestration tools.

## How can I learn more about the benefits and features of WKP?

We at Vertigo Tecnologia, the official Weaveworks professional services partner in Brazil, can create a cloud-native reference architecture tailored to your business needs. 
Do you have questions about what you need to manage your Kubernetes in an optimized and flexible way? [Contact Us](/en/us/) to get a demo of the Weave Kubernetes Platform.

## Learn how to perform frequent deployments more securely and with less overhead using GitOps.

[![](/wp-content/uploads/2021/01/Kubernetes-com-GitOps.png)](https://materiais.vertigo.com.br/automatizando-kubernetes-gitops)

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
