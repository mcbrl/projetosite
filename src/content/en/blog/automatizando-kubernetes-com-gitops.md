---
title: "Automating Kubernetes with GitOps"
slug: "automatizando-kubernetes-com-gitops"
date: "2021-01-13T13:14:11"
modified: "2021-01-13T13:14:11"
status: "publish"
author: "admin"
excerpt: "Companies that want to become faster, that need to perform deployments Frequent maintenance, increased security, and reduced overhead make GitOps a fast and secure method for development teams to maintain and update complex applications running on Kubernetes. Like Kubernetes and many other technologies cloud native they are almost fully declarativeInfrastructure definitions can be maintained with […]"
categories: ["transformacao-cloud-native"]
tags: ["cloud", "cloud-native", "devops", "gitops", "kubernetes", "observabilidade", "weave-kubernetes"]
featuredImage: "/wp-content/uploads/2021/01/blog2.png"
wpId: 5422
originalUrl: "https://vertigo.com.br/automatizando-kubernetes-com-gitops/"
contentSource: "rest"
lang: "en"
seo:
  title: "Automating Kubernetes with GitOps - Vertigo"
  description: "GitOps separates CI from CD, and this is one of the reasons why it's a safer method for deploying applications on Kubernetes."
  canonical: "https://vertigo.com.br/en/automatizando-kubernetes-com-gitops/"
  ogImage: "/wp-content/uploads/2021/01/blog2.png"
  robots: "index, follow"
---

Companies that want to become faster, that need to perform *deployments* Frequent maintenance, increased security, and reduced overhead make GitOps a fast and secure method for development teams to maintain and update complex applications running on Kubernetes.  
Like Kubernetes and many other technologies *cloud-native* they are almost fully declarativeInfrastructure definitions can be maintained with the application code in Git. Keeping your entire system in Git means your development team uses familiar Git-based workflows and... *Pull Requests* to apply both application and infrastructure changes to Kubernetes.  
With the entire cluster state maintained under source code control, Diff tools and synchronization agents can compare what is in production with what is in the source repository, and when a discrepancy is detected between the two, an alert can be sent, creating an efficient feedback loop and control method to manage your cluster. 

## Operating model for building cloud-native applications. 

At its core, GitOps is: 

1.  An operational model for Kubernetes and other technologies. *cloud-native*, which provides a set of best practices that unify the deployment, management, and monitoring of containerized clusters and applications.  
2.  A well-known path to a better developer experience when managing applications involves using CI/CD pipelines and Git workflows, both in operation and development. 

## Kubernetes automation with freedom of choice. 

GitOps gives you the freedom to choose the best tools for different parts of your CI/CD pipelines. You can select tools from the open-source or closed-source ecosystem and, depending on your needs, even combine them. 
Regardless of the tools you choose for your deployment and delivery pipelines, applying GitOps best practices should be an integral component of your continuous delivery process. This will make building and adopting a continuous delivery culture in your organization much easier.  

## Main benefits of GitOps 

Applying GitOps best practices generates long-term results and provides: 

### Greater security guaranteed 

Git's precision and security, supported by the strong cryptography used to track and manage changes, as well as the ability to identify these changes to prove authorship and origin, are key to correctly and securely defining the desired state of a cluster.
If a security breach occurs, there is a single source of truth – *single source of truth (SSOT)* – Immutable and auditable, it can be used to recreate a new system independent of the compromised one, reducing downtime and allowing for a much better incident response. 
Furthermore, the shared responsibility between software packaging and its release to a production environment incorporates the security principle of least privilege, which reduces the impact of a potential compromise and provides a smaller attack surface.

### More speed and productivity  

Continuous deployment automation integrated with feedback loop and control accelerates the mean time to deployment. declarative definitions Maintained in Git, these resources allow developers to use more familiar workflows, reducing the time spent setting up a new development or test environment to deploy new features to a cluster.
Teams can deliver more changes per day, which translates to faster response times for new features and functionalities for the customer. 

### Reduction in average recovery time  

The amount of recovery time after a cluster collapse is also reduced with GitOps best practices. With Git's built-in *revert/rollback and fork* capabilities , you gain stable and reproducible rollbacks. Since your entire system is described in Git, there is only one source of truth to recover from after a cluster failure, reducing the mean time to recovery (MTTR) from hours to minutes.

### Enhanced stability and reliability 

Because GitOps provides a single operational model for building infrastructure and applications, you have consistent, end-to-end workflows across your organization. Not only are continuous integration and continuous deployment pipelines driven by *pull requests* , but operational tasks are also fully reproducible through Git.

### Easier compliance and auditing 

With Git's ability to manage your Kubernetes cluster, you automatically gain a convenient audit trail for all cluster changes outside of Kubernetes, which can be used to meet SOC 2 compliance and ensure stability.  
Because changes are tracked and securely recorded, compliance and auditing become trivial. The use of software tools such as [Kubediff](https://github.com/weaveworks/kubediff)Terradiff and Ansiblediff also allow you to compare a reliable definition of the cluster state with the same state in actual operation, ensuring that the tracked and auditable changes correspond to reality. 

## What do you need to have GitOps? 

For those who wish to implement GitOps workflows in their CI/CD pipelines, the following points are essential:

### 1\. An entire system described declaratively. 

Kubernetes is one of many tools *cloud-native* modern ones that are declarative and which can be treated as code. Declarative means that the configuration is guaranteed by a set of facts rather than by a set of instructions.
With your application declarations versioned in Git, you have a single source of truth. Your applications can then be easily deployed and reverted to Kubernetes. And even more important and critical to the GitOps story is that, when a disaster occurs, your cluster can also be reproduced in a predictable, reliable, and fast way.

### 2\. The desired state of the canonically versioned system in git. 

With your system declaration stored in a version control system and serving as your canonical source of truth, you have a central place from which everything is derived and driven. This makes rollbacks trivial, and you can use a “ *git revert* ” to revert to the previous state. With Git's excellent security guarantees, SSH key signals commit to enforcing them under code authorship and provenance.

### 3\. The ability to automatically apply approved changes.

Once the declared state is maintained in Git, the next step is to automatically apply any state changes to your system. What's significant about this is that you don't need cluster-specific credentials to make a change to your system. With GitOps, there's a segregated environment where state definition is kept separate. This allows your team to separate what they actually do from how they will do it. 

### 4\. Software agents to ensure correctness. 

With the state of your entire system maintained under version control, you can now employ software agents to inform you whenever reality does not match your expectations.
The use of diff and sync tools also ensures that your entire system is truly self-healing, not only when nodes or pods fail – which are managed by Kubernetes – but in a broader sense, such as in the case of human error. In this case, the software agents act as a feedback and control loop for your operations.
 **![](/wp-content/uploads/2021/01/Prancheta-1@3x-768x543-1.png)**

## How Kubernetes handles configuration updates 

The way Kubernetes handles deployments adapts very well to GitOps workflows. For example, when a group of configuration updates is made by a human operator, the Kubernetes orchestrator will continue applying those changes until the cluster state converges to the updated configuration made by a human. The same applies to any Kubernetes resource.
Kubernetes deployments have the following properties that make them perfect for GitOps-style deployment workflows:  

- **Automation:** Kubernetes provides a built-in mechanism for automating deployments. A Kubernetes cluster applies a set of changes in the correct order and in a timely manner; 
- **Convergence:** o Kubernetes will continue attempting the update until it succeeds; 
- **Idempotence:** Multiple and simultaneous instances of convergence will have the same result; 
- **Determinism:** Assuming the cluster has the appropriate resources available, the updated cluster state will depend only on the desired state. 

Kubernetes deployments can also be extended and automated using [Kubernetes Custom Resource Definitions (CRDs)](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) with the *operator pattern* . These agents can then be used to automatically detect and apply configuration changes from outside the system when you need them, essentially creating feedback and control loops.

## Developer tools that drive Ops and Engineering 

Introducing GitOps into your organization means:  

- Any developer using Git can start deploying new features to Kubernetes;
- The same workflows are maintained between development and operations;
- All changes can be triggered, stored, validated, and audited in Git;
- Operational changes can be made by *pull requests* including rollbacks; 
- Changes in operations can be observed and monitored.  

Having everything in one place means your operations team can use the same workflow to make infrastructure changes by creating *issues* and reviewing *pull requests* . GitOps allows you to revert any changes made to your cluster. Furthermore, the built-in observability capability gives your teams more autonomy when making changes and experimenting without worrying about breaking the build.

## What does a typical CI/CD pipeline look like?  

Most organizations embarking on their journey to continuous delivery begin by automating a CI/CD pipeline. With this newly created pipeline, the development team will be enthusiastic and will start frantically writing and submitting code to Git.  
In the following example, let's say there's a single microservice repository that assembles its code with its YAML deployment files. Just to recap, YAML files are what define or declare how the microservice runs on the cluster. When the developer pushes the code to Git, a continuous integration tool initiates unit tests that eventually create a Docker container image that is pushed to... *container registry*.  

![](/wp-content/uploads/2021/01/Prancheta-2@3x-768x543-1.png)

With this typical push-based CI/CD pipeline, Docker container images are deployed to the actual cluster using some custom bash script or through another method that communicates directly with the Kubernetes API.  

## Safety and the typical CI/CD pipeline

A typical CI/CD pipeline has some security issues. With this approach, your CI tooling pushes and deploys images to the cluster.
For the CI system to apply changes to a cluster, you need to share your API credentials with the CI tools, and this means it becomes a highly desirable target. If someone were to compromise it, they would certainly have complete control over the production cluster, even if it is highly secure.

## What happens when your cluster goes down? 

What happens when you need to recreate your cluster in case of a total collapse? How do you restore your application to its previous state? You would have to run all your CI jobs to rebuild everything and then reapply all the... *workloads* to the new cluster. The typical CI pipeline doesn't have its state easily logged like when you use GitOps.  
Let's see how you can improve a typical CI/CD pipeline with GitOps. 

## The GitOps deployment pipeline 

GitOps implements a Kubernetes controller that reads and synchronizes deployments to your Kubernetes cluster. The controller uses the \` *git config\` operator pattern* . This is significant on two levels:

- **It's safer.** 
- **It automates complex, error-prone tasks, such as having to manually update YAML manifests.** 

With *operator pattern*An agent acts on behalf of the cluster. It monitors events related to changes in custom resources and then applies those changes based on a deployment policy. The agent is responsible for synchronizing what's in Git with what's running on the cluster, providing a simple way for your team to achieve continuous deployment.
**![](/wp-content/uploads/2021/01/Prancheta-4@3x-768x543-1.png)**

## GitOps is a safer way to deploy changes. 

The image is extracted using *read-only* access to the repository. The CI tool does not receive cluster privileges, therefore it does not introduce significant security risks to the pipeline.

### GitOps privilege separation

GitOps separates CI from CD, and this is one of the reasons why it's a safer method for deploying applications on Kubernetes. The table below shows how GitOps separates read/write privileges between the cluster, its CI and CD tools, and the container repository, providing your team with a secure method for creating updates. 

**CI TOOLS**
Test, assemble, scan, publish

**CD TOOL**
Reconciliation between Git and the cluster.

Wheel outside the production cluster

It runs within the production cluster.

Read access to the code repository

Read/write access to the configuration repository.

Read/write access to the Container Repository

Read access to the image repository

Read/write access to the continuous integration environment.

Read/write access to the production cluster

*
Table 1: Separation of privileges in GitOps*

## Observability as a deployment catalyst

Some of the essential components of GitOps are feedback and control. But what does that mean exactly? In order to gain control so that developers can work faster, you need built-in observability capabilities in your deployment workflows.
Integrated observability capabilities allow technicians to make real-time, data-driven decisions. For example, when a deployment is running, a final health check can be performed on the running cluster before confirming the upgrade, or perhaps an upgrade didn't go as planned and can be easily rolled back to a good state. 
With a feedback control loop, you can easily answer the following questions:

- How can I tell if my deployment will be successful? 
- How can I tell if the active system has converged to the desired state? 
- Can I be notified if there is a discrepancy between them? 
- Can I trigger a convergence between the cluster and the source code control? 

While git is the source of truth For the desired state of the system, Observability provides a *benchmarking* for the actual production state of the running system. GitOps leverages both to manage applications. 
With GitOps, divergence and convergence are achieved using a set of "diff" and "sync" tools (kubediff, terradiff, and ansiblediff) that compare the intended state with the actual state. These tools *Diff* They are also used to alert developers when the deployment is out of sync. 
A feedback loop with integrated diffs and observability looks something like this, where observability provides insights for developers and operators to make important decisions about deployments and the system:
 **![](/wp-content/uploads/2021/01/Prancheta-5@3x-768x543-1.png)**
Since upcoming services or updates can be observed in real time within the running cluster, it's possible to deploy with greater confidence and deliver higher-quality features. 
Observability is the primary driver of the continuous delivery cycle for Kubernetes, as it describes the actual running state of the system at any given moment. The running system is observed to understand and control it.  
After new features and fixes are merged into Git, the deployment pipeline is triggered, and when the image is ready to be released, it can be observed in real time on the running cluster. At this point, the developer can either return to the beginning of the pipeline based on this feedback or deploy and release the image to the production cluster. 

## GitOps Workflow 

The core mechanism of GitOps lies in its CI/CD toolset, with the critical component being continuous deployment (CD), which supports git-cluster synchronization. It is specifically designed for version-controlled systems and *stacks* declarative applications.
Every developer on your team is familiar with Git and can do... *pull requests*Now you can also use Git to speed up and simplify application deployments on Kubernetes.  
Here's a typical developer workflow for creating or updating a new feature:

1.  One of the *Pull request* A new feature is submitted to GitHub for review; 
2.  The code is reviewed and approved by a teammate. After that, the code is merged into Git.
3.  O *git merge* It triggers the build and CI pipeline, runs a series of tests, and then creates a new image and stores it in a registry; 
4.  O '*Deployment Automator*' monitors the *image registry*, detects a new image, retrieves that new image, and updates its YAML in the configuration repository;
5.  O *Deployment Synchronizer*' detects that the cluster is outdated, extracts the changed manifests from the configuration repository, and deploys the new feature to production.

![](/wp-content/uploads/2021/01/Prancheta-6@3x-768x543-1.png)

## Build a cloud-native platform with GitOps and Weave Kubernetes Platform.

The Weave Kubernetes Platform reduces complexity through configuration management, automation, and operations tooling. With GitOps configuration management, teams can define a default Kubernetes installation and automate deployment. new nodes Following a predefined model, it also simplifies the installation of additional clusters, since Kubernetes is already pre-configured and all applications running on top of it are also predefined.

![](/wp-content/uploads/2021/01/Prancheta-7@3x-1024x724-1.png)

## GitOps configuration management automation

With GitOps at the center ofWith its operational model, teams can install and manage production-ready Kubernetes whether on-premises, in a public cloud like AWS, or even in... Us OpenStack pre-built. GitOps can be used to trigger a cluster patch or a *minor version upgrade,* or add and remove Us of a cluster, without having to rebuild it from scratch.  
With all cluster configuration stored in Git and managed through GitOps, you can reproduce an entire cluster in a repeatable and predictable way. This brings advantages when you are building test environments and pipelines, or producing clusters for different teams with the same base configuration, or improving your disaster recovery capabilities.

### Key features/capabilities 

- A reliable and stable version of Kubernetes; 
- Unified cluster-API-based installer for Kubernetes; 
- Critical cluster add-ons for all major cloud and on-premise platform versions;
- Lifecycle management of us and a cluster based on GitOps workflows;
- Cluster observability components included: 
    - Flexible configuration for monitoring and logging; 
    - Prometheus, the best choice for Kubernetes monitoring.

### Available add-ons:

- Network authentication protocol (Kerberos); 
- Secure automatic node restarts (Kured); 
- Continuous and auditable deployment (Weave Flux);
- Diff alerting about the execution and desired state (Kubediff);
- Ready integration for other metrics tools, logging, and other tool options.

## Conclusion

The team at Vertigo Tecnologia, an official Weaveworks professional services partner in Brazil, can help you navigate the vast landscape of cloud-native technologies, both open source and paid.
Together, we can create a cloud-native reference architecture that adapts to your business needs. You can benefit from an already validated design model, or you can design, review, and select technology options with our help.  
Do you have questions about what you need to create a cloud-native platform? [Contact us](/en/us/) Contact us to get a demo of the Weave Kubernetes Platform.

## Learn how to perform frequent deployments more securely and with less overhead using GitOps.

[![](/wp-content/uploads/2021/01/Kubernetes-com-GitOps.png)](https://materiais.vertigo.com.br/automatizando-kubernetes-gitops?_ga=2.241349446.537196717.1624752474-164335762.1618327266)

### Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
