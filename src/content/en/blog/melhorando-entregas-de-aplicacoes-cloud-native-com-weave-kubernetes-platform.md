---
title: "Improving cloud-native application delivery with Weave Kubernetes Platform"
slug: "melhorando-entregas-de-aplicacoes-cloud-native-com-weave-kubernetes-platform"
date: "2020-12-02T13:44:49"
modified: "2020-12-02T13:44:49"
status: "publish"
author: "admin"
excerpt: "In cloud native environments, you have the possibility to navigate a vast range of applications. Therefore, there are specific uses and business requirements that need to be considered, such as machine learning and natural language processing (NLP). Setting up and managing these custom platforms and ensuring that applications and their add ons work together so […]"
categories: ["transformacao-cloud-native"]
tags: ["cloud", "cloud-native", "git", "gitops", "kubernetes", "transformacao-cloud-native", "transformacao-digital", "weave-kubernetes", "weaveworks"]
featuredImage: "/wp-content/uploads/2020/12/blog-12.png"
wpId: 5381
originalUrl: "https://vertigo.com.br/melhorando-entregas-de-aplicacoes-cloud-native-com-weave-kubernetes-platform/"
contentSource: "rest"
lang: "en"
seo:
  title: "Improving cloud-native application delivery with Weave Kubernetes Platform - Vertigo"
  description: "The key is to have a flexible and replicable cloud-native platform that can be adopted quickly and deployed with the right technologies."
  canonical: "https://vertigo.com.br/en/melhorando-entregas-de-aplicacoes-cloud-native-com-weave-kubernetes-platform/"
  ogImage: "/wp-content/uploads/2020/12/blog-12.png"
  robots: "index, follow"
---

In cloud-native environments, you have the possibility to navigate a vast range of applications. Therefore, there are specific uses and business requirements that need to be considered, such as machine learning and natural language processing (NLP).

Setting up and managing these custom platforms and ensuring that applications and their add-ons work together so that they can be reliably replicated without slowing down is a huge challenge for development teams.

The key is to have a flexible and replicable [cloud-native](/en/Discover-the-6-pillars-for-building-cloud-native-applications./) platform that can be quickly adopted and deployed with the right technologies for your workflows, but operated wherever you want (on-premise, in public clouds, or in a hybrid cloud).

Solving these problems requires more than just a cluster installer. It requires not only a framework to manage them throughout their lifecycle, but ideally, doing so with familiar tools that development teams use daily.

You've certainly heard about GitOps and how it can accelerate development and deliver value without compromising the security and reliability of your workflow. But what you may or may not know is that Kubernetes and its ecosystem of cloud-native tools are also declarative and can be managed in Git. 
This means that GitOps can effectively manage your entire infrastructure, as well as the complete cluster lifecycle, providing the same benefits that Git brings to application deployments.

An approach using automated operations tools backed by Git reduces the complexity of configuration management for Kubernetes platforms.

With its configuration maintained in Git, the Weave Kubernetes Platform (WKP) allows developers and operators to easily define, administer, and install consistent and replicable platforms with all their add-ons and components using a simple "git clone".

Read our article to learn more about how to improve your cloud application deliveries with Weave Kubernetes Platform.

## The 4 main benefits of GitOps from Weave Kubernetes Platform

Git-based configuration management and monitoring brings the following to your organization:

### Consistent environments

Create, update, and manage application clusters with all the add-ons needed for an agile cloud-native platform.

### Reduce post-implementation operating costs.

Minimize operational overhead with automated cluster lifecycle management: security patches and extension updates.

### Active monitoring

Validate cluster applications and changes, and get alerts for inconsistencies with instant dashboards that require no configuration and are displayed directly from Git after a cluster is deployed.

### Stronger security and compliance

Enhance security and meet regulatory requirements with auditable and transparent policies managed by GitOps for real-time visibility and access control across your clusters and applications.

## Key challenges for teams implementing Kubernetes

Before its benefits become apparent, there are challenges in delivering, managing, and developing Kubernetes at various levels. Ensuring a consistent cluster configuration across all environments is essential.
Achieving optimal velocity requires that your organization's teams can work together and, often, in the same clusters.
Below is a summary of the most common roles and challenges encountered in the daily work of those who work with Kubernetes:

### Platform Architect/Operator

**Paper:** Responsible for creating the cluster definition that will meet the requirements of the corporation and the teams.
**Challenge:** define standards *production-ready* For clusters, managing Kubernetes and component updates. A plan for security and regulatory compliance is needed.

### Cluster operator

**Paper:** Responsible for administering clusters, using the platform's default definition and managing an individual cluster.
**Challenge:** Cluster and component updates. Scaling and controlling customization configuration choices over time.

### Application developer

**Paper:** Responsible for creating the application that will run on the production platform. They develop the application, test it on a variety of setups, and release new versions.
**Challenge:** Perform deployments of new updates and features. Understand and manage the configuration of identical environments for testing, observation, and debugging problems.

### Site Reliability Engineer (SRE)

**Paper:** Responsible for the management and automation of technology environments. The main objectives are to create ultra-scalable and highly reliable software systems.
**Challenge:** Controlling observability, logging, and other services related to application uptime administration.

## Company ready for GitOps with approved development.

The Weave Kubernetes Platform (WKP) is a production-ready, out-of-the-box platform with no lock-in. GitOps is the underlying architecture of the WKP developer experience, simplifying the setup and management of Kubernetes platforms in your organization.
Operations teams create Kubernetes platforms by choosing from an up-to-date catalog of add-ons and other tools such as monitoring, CI/CD deployment pipelines, or use cases like machine learning.
After the tools are selected and configured to work together, it is verified in Git as a template definition that can be attached to a pure upstream Kubernetes base version or installed on a variety of hosted Kubernetes versions, such as EKS, AKS, and GKE.
This provides developers with a method *self-service* to correctly activate the configured clusters based on their use case requirements. One *stack* A stable and fully integrated Git-managed solution avoids isolated clusters and other difficult-to-replicate configurations, and allows teams to deliver and manage reliable and predictable platforms across different environments (whether on-premise, in the cloud, or in multi-clustered, multi-cloud settings).
Since declarative platform models are maintained in Git, the entire cluster lifecycle – including upgrades, security patches, rollbacks, and other maintenance tasks – is easily managed through Git. *pull requests*More importantly, WKP provides Git-based policies and rules to specify, audit, and control who can change what in the cluster configuration.

## How does the Weave Kubernetes Platform work?

### Automating cluster configuration using templates.

At the heart of setting up a centralized and reproducible cluster are WKP templates. It's possible to create a template with an add-on stack for the types of clusters your organization needs.
For example, you might have a specific cluster stack configuration for machine learning or a specific back-end for different cloud providers.

### Complete control from Git

Store the cluster in Git and make it available as a configured template for different teams in your organization. Attach and manage a Kubernetes installation with your add-ons and control everything from Git. 
Easily manage the entire lifecycle of your cluster, including security patches and upgrades with GitOps.

### Self-service development

With cluster policies and configuration in one place, developers and platform teams can simply perform “git fork” and “git clone” of management clusters to create consistent and repeatable clusters at scale for cloud and on-premises environments.

## Step by step implementation

### 1\. Define a template.

One of the basic ideas behind WKP is the ability to maintain the configuration of a stack of applications, add-ons, and components integrated into Git. By performing the configuration only once, the clusters can be easily replicated across environments and clouds. WKP refers to these pre-configured stacks as a template.
Once a template is configured and verified in Git, teams can access it and attach it to a cluster during its creation, making the Kubernetes platform fully configured and ready to use.
Using these templates avoids having to deal with "difficult" clusters every time a specific application or configuration is needed. Instead, teams can create clusters with well-defined patterns, saving time and avoiding the complexity of Kubernetes configuration management.

### 2\. Create a cluster.

The “Cluster” tab provides a panoramic view of all clusters or even fleets created with WKP across your organization. A fleet is a group of clusters with a common set of properties, such as application delivery clusters or database clusters. Each of these Kubernetes clusters shares similar security, auditing, and compliance requirements and can and generally should be treated in the same way.
It's also possible to create a cluster from this view and attach the template you want to add to create a specialized platform. There's the option to combine templates to create different backends for multi-cloud configuration. Then, choose where you want to launch the cluster (public cloud or on-premise) and select the desired Kubernetes version.
With a cluster configured, it's simple to scale directly from the WKP management console and then control the version of the change in Git, providing a complete audit trail.

![](/wp-content/uploads/2020/12/Capturar.png)

### 3\. Manage and monitor the cluster.

Once the cluster is created and started, clicking on its definition takes you to its dashboard. There, the added components are displayed with an instant analysis of their health. An easy way to drill down into individual configurations is also provided to view the history of what has been changed in the cluster via Git.
With control and management supported by Git, clusters are fully compatible with auditable logs. Developers don't need to learn a new workflow for each new cluster creation in different environments. A single standard flow for application development and cluster operations can be applied, simplifying Kubernetes management.

![](/wp-content/uploads/2020/12/Weaveworks-cluster-gitops-1.png)

## Conclusion

Optimize cluster delivery and security while implementing proven best practices for development and policy management with GitOps workflow.
Take advantage of flexible and repeatable Kubernetes cluster management across your entire infrastructure – in the cloud and on-premise. Reap the rewards of increased speed and reduced operational complexity with the support of... [our experts.](/en/us/) 

## Discover how Cloud Native your company is with this questionnaire and receive a report with acceleration proposals.

[![](/wp-content/uploads/2021/03/cloud-native-quadrado.png)](/en/cloud-native-assessment/)

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
