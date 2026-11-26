---
title: "Container orchestration tools: how to choose?"
slug: "ferramentas-de-orquestracao-de-containers"
date: "2019-01-30T10:37:48"
modified: "2019-01-30T10:37:48"
status: "publish"
author: "admin"
excerpt: "In this article, we will compare the features of the three most popular container orchestration tools: Docker, Kubernetes, and Openshift . To do this, we will address both the \"bright side\" and the \"dark side\" of these technologies that are competing inch by inch to stand out in the corporate market. Therefore, if you are […]"
categories: ["blog", "devops", "dockeree"]
tags: ["docker", "docker-ee", "docker-swarm", "ferramentas-de-orquestracao-de-containers", "kubernetes"]
featuredImage: "/wp-content/uploads/2019/01/orquestracao_de_containers.png"
wpId: 3800
originalUrl: "https://vertigo.com.br/ferramentas-de-orquestracao-de-containers/"
contentSource: "rest"
lang: "en"
seo:
  title: "Do you know what container orchestration tools are?"
  description: "Want to know how to choose a container orchestration tool? In this article, we'll compare the features of the three most popular container orchestration tools: Docker, Kubernetes, and Openshift."
  canonical: "https://vertigo.com.br/en/ferramentas-de-orquestracao-de-containers/"
  ogImage: "/wp-content/uploads/2019/01/orquestracao_de_containers.png"
  robots: "index, follow"
---

## Are you looking for trouble regarding container orchestration tools?

In this article, we will compare the features of the three most popular container orchestration tools: **Docker, Kubernetes, and Openshift**.

To do this, we will address both the "bright side" and the "dark side" of these technologies that are competing inch by inch to stand out in the corporate market.

Therefore, if you are thinking about acquiring a container orchestration tool, we recommend that you read this article to the end. Throughout the content, we will cover everything you need to know to choose the ideal orchestration tool for your business.

## What are container orchestration tools?

Container orchestration tools are cloud-based applications that allow you to manage multiple containers.

Its main objectives are:

- Managing the container lifecycle autonomously, uploading and distributing them according to our specifications or demands;
- Manage volumes and network, which can be local or in the cloud provider of your choice.

The popularity of this type of solution has grown in recent years, following the growth of application containerization practices, microservices, and the adoption of [DevOps](/en/devops).

Still have questions about what [DevOps is](/en/What-is-DevOps) ? Check out our article and learn more.

At the end of 2017, a survey by the Cloud Native Computing Foundation sought to find out which container orchestration tools were most used by companies. Although [Kubernetes](/en/Docker--Kubernetes--Mesos--container-orchestration.) leads the ranking in usage, the survey revealed that companies often use more than one solution, as evidenced by the graph below:

![](/wp-content/uploads/2019/01/grafico-ferramentas-de-orquestracao-768x512-1.png)

## The importance of choosing a good container orchestration tool.

[The adoption of Docker](/en/docker) containers in various companies has considerably increased the level of security and technological robustness requirements. Docker has proven perfect for creating system environments that meet different stages of development (testing, homologation, and production). Despite all this infrastructure, the question remained: could Docker manage the **production** environment?

Imagine the following situation:

You are on a moving plane and it experiences a malfunction. It's impossible to stop the plane to fix it, so you have to solve the problem while the plane is in motion, otherwise everyone will be lost.

Desperate, isn't it?!

This metaphor represents the complexity of the production environment and the role of the container orchestrators who, in this context, are responsible for preparing the production environment to "keep the plane flying in perfect condition".

Containers are prone to crashes, slowdowns, difficulty handling upgrades, instability on live servers, and/or insufficient capacity to handle increased service demands.

Companies like Google, Red Hat, and Docker realized they needed to solve these problems quickly and securely. Therefore, each sought to create its own solutions to offer clients container orchestration tools. As a result, numerous solutions are competing to stand out in the market.

In this content, we will focus on the most important technologies: Kubernetes, OpenShift, Docker EE, and Swarm.

[Read also: DevOps – The Benefits of a Continuous Delivery Pipeline](/en/benefits-of-having-a-continuous-delivery-conveyor-belt)

Subscribe to our blog to be notified when we publish more content like this.

## Kubernetes orchestration tool

This container orchestration tool is the most widely used by companies, as it was one of the first orchestrators and is also an open-source option.

It was developed by Google for use in its internal projects. In 2015, it was handed over to the Cloud Native Computing Foundation and is still maintained by the Kubernetes community today.

![](/wp-content/uploads/2019/01/kubernetes-tela-container.jpg)

## The "bright" side of Kubernetes

It is possible to eliminate lock-in through Kubernetes modularization, allowing containers to run without server restrictions. This is achievable through the combination of SERVICES and POD modules.

Kubernetes services support discovery, scalability, and load balancing. In other words, all the requirements that large corporations demand.

With Kubernetes, it's possible to build cloud-native applications from scratch or adapt your on-premises applications, making them more cloud-ready. This allows you to run your on-premises applications anywhere, regardless of the cloud provider.

Kubernetes provides all the support that DevOps needs to create an efficient model for developing and operating applications.

## The "dark" side of Kubernetes

Kubernetes is a technology with complex configurations, which demands a steeper learning curve for users of the tool.

Furthermore, setting up a local Kubernetes environment can be challenging because it is not a user-friendly technology.

The tool's documentation is confusing, which leaves room for its use to fall far short of its (real) potential. Users often find it difficult to obtain the necessary information, whether for learning or design-related questions.

This documentation is managed by the user community itself, so Kubernetes does not offer specialized support. This poses a certain risk to projects that are not supported by a truly specialized team.

Another important point to consider is that with Kubernetes, it's necessary to generate many artifacts to achieve the same result as with Docker Swarm, for example.

![](/wp-content/uploads/2019/01/ferramentas-de-orquestracao-de-containers-configuracoes-simples-x-complexas.png)

## Openshift orchestration tool

OpenShift is a container orchestration tool created by Red Hat. Its construction is based on Docker container packaging, with a Kubernetes-based cluster manager. In addition, it incorporates other application lifecycle management concepts.

## The "bright" side of Openshift

**Containers can run as non-root users.** That is, they cannot access server resources, run with privileged privileges, or become root. This maintains system stability and data security.

**Storage devices follow SELinux rules.** Security-Enhanced Linux is a security layer of the Linux kernel designed to prevent unauthorized access.

**Project-based access blocking.** This ensures that containers can only view other containers that belong to the same project. In this way, in addition to defining who is responsible for each function, it is possible to protect access to confidential information.

**Less time spent resolving doubts** . By providing specialized support, the administrators of this tool spend less time resolving questions. This makes processes more fluid, unlike what happens with Kubernetes, for example.

Finally, another important point to highlight is that the OpenShift tool is enabled to **integrate with other Red Hat tools**.

## The "dark" side of Openshift

**It promotes lock-in.** In other words, when a user purchases OpenShift, they are limited to only the functionalities offered by Red Hat.

The server only supports Kubernetes clusters and does not orchestrate with clusters from other providers, such as Amazon, Azure, and Docker.

Although OpenShift is a paid service that provides support, because it inherits technology from Kubernetes, **it also has the same degree of complexity in its configurations.**

Therefore, just like Kubernetes, it also needs to generate many artifacts to achieve the same result as Docker Swarm.

![](/wp-content/uploads/2019/01/tela-openshift-container.png)

## Docker orchestration tool (EE and Swarm)

Docker entered the container orchestration tools market targeting two different niches. Therefore, it currently offers two distinct solutions: Docker Swarm and Docker EE.

Docker Swarm, being an open-source tool, competes on an "equal footing" with Kubernetes and OpenShift, sharing some similar limitations. However, it offers more user-friendly configurations, resulting in a shorter learning curve.

[Docker Enterprise Edition](/en/Docker-EE-tutorial) , on the other hand, is a much more complete layer than other existing solutions. It is geared towards the enterprise solutions market and offers a subscription that provides the following features:

- Support service
- Certified images
- Real Time
- Management center
- Multi-cloud, running mission-critical applications at scale.
- Quarterly releases

Docker EE is a Containers-as-a-Service (CaaS) platform that enables a secure, highly available software supply chain across different infrastructures, whether on-premises or in the cloud.

![](/wp-content/uploads/2019/01/estrutura-Docker-EE.png)

## The bright side of Docker EE

**With the developer service** , it's possible to control container versions and facilitate collaboration among developers.

**With the registration service** , you can deliver images that are properly tested, certified, and authorized. The registration service has integration connectors called web-hooks, which facilitate the setup of CI/CD (Continuous Integration and Continuous Publishing).

![](/wp-content/uploads/2019/01/docker-registro-de-imagem.png)

**With the policies and governance service,** it is possible to control user access by predefining which containers they will have access to.

**With application lifecycle management,** it's possible to orchestrate running services and manage their deployment and updates until their termination.

**With support and extensibility** , it's possible to integrate and extend Docker Enterprise to your existing tools and processes with solution guides and reference architectures to ensure a Service Level Agreement (SLA) from our corporate team.

Among the numerous advantages of Docker EE is the **Universal Control Plane (UCP)**.

UCP offers a graphical environment that makes it very easy to create and manage networks and volumes across multiple projects**.**

Docker UCP has its own authentication mechanisms that integrate with user control services (Lightweight Directory Access Protocol – LDAP), in addition to allowing the definition of access controls by profile.

In 2018, Docker EE made it possible to integrate Docker Swarm and Kubernetes. This avoids lock-in and gives Docker EE a competitive advantage over its competitors.

![](/wp-content/uploads/2019/01/tela-docker-ee-container.png)

## The dark side of Docker EE

Docker EE requires an initial investment to purchase a subscription. At first glance, this may seem like a drawback. However, Docker is considered a *self-funding* solution , meaning that the savings it generates pay for the investment itself.

### Conclusion

The high demand for infrastructure automation and cluster management explains the growing adoption of Docker. The ability to offer Kubernetes cluster management and standardize container construction aligns with the emergence of DevOps.

Docker has a container-focused vision, which is why it is constantly evolving its orchestration tools, aiming to continuously improve its features.

Red Hat used to thrive on operating system support and is now fighting for a share of the cloud and container orchestration market. Therefore, we can conclude that new features (in terms of security and innovation) will emerge in Docker and later be replicated in Kubernetes-based deployments (Openshift).

## How can I learn more about the benefits and features of Docker EE?

To better understand Docker, there's nothing better than seeing the tool in production and talking to experts who can present it and answer your questions in real time. At Vertigo, we are a Docker Consulting Partner and therefore have the most qualified professionals in the market, who can help you assess your needs and understand if Docker is right for your business.

To request a demonstration of the tool, fill out the form below and speak with a Vertigo specialist.
