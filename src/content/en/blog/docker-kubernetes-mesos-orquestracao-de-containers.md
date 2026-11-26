---
title: "Docker, Kubernetes, and Mesos – Find out who's who?"
slug: "docker-kubernetes-mesos-orquestracao-de-containers"
date: "2017-08-18T14:44:41"
modified: "2026-02-02T20:38:38"
status: "publish"
author: "admin"
excerpt: "We encounter many questions when the subject is... DevOps and Container Orchestration Right? When it comes to putting the concepts discussed in the topic into practice, the role of each tool and which one is the best of all comes into discussion. The truth is that there are many tools on the market and, all […]"
categories: ["devops"]
tags: ["apache-mesos", "devops", "docker", "kubernetes", "marathon", "orquestracao-de-containers", "transformacao-digital"]
featuredImage: "/wp-content/uploads/2026/02/docker-kubernetes-mesos-orquestracao-de-containers.png"
wpId: 1596
originalUrl: "https://vertigo.com.br/docker-kubernetes-mesos-orquestracao-de-containers/"
contentSource: "rest"
lang: "en"
seo:
  title: "Containers | Docker, Kubernetes, and Mesos - It's time to find out who's who"
  description: "What are the differences between Container Orchestrators? Learn about the benefits and differences between Docker, Kubernetes, and Mesos. See the best way to use each of these orchestrators and how they can help containerize your applications."
  canonical: "https://vertigo.com.br/en/docker-kubernetes-mesos-orquestracao-de-containers/"
  ogImage: "/wp-content/uploads/2026/02/docker-kubernetes-mesos-orquestracao-de-containers.png"
  robots: "index, follow"
---

We encounter many questions when the subject is... **DevOps and Container Orchestration**  Right? When it comes to putting the concepts discussed in the topic into practice, the role of each tool and which one is the best of all comes into discussion. The truth is that there are many tools on the market and, all the time, a new one appears. *release* It's launched. Large companies invest in a specific technology, while others create their own toolkit. The good news is that there is no single best tool. In this post, we'll discuss the main aspects and the differences between: **Docker, Kubernetes and Apache Mesos.**
Check out this article for important information that will provide useful insights into container orchestrators.

## The history of Docker

## [Docker](http://docker.com)

![](/wp-content/uploads/2017/08/docker02.png)

Docker Inc. started as a *PaaS* (platform-as-a-service) startup and evolved into a company called DotCloud. The DotCloud team tackled the well-known application development problem of managing numerous applications and their dependencies, which always required significant maintenance and evolution efforts.

The solution they found was to base it on some of the features of *Linux Cgroups* . The goal was to build a packaging format that would make applications easier to use and allow them to run consistently on any infrastructure.

[Check out our full content about Docker here.](/en/What-is-Docker/)

### This package provides the following features:

1.  It wraps the application and its libraries in a single package ("Docker Image"), so that applications can be deployed in many environments;
2.  It uses Git-like semantics, well-known among developers, such as "docker pull" and "docker commit." This helps in adopting the new technology and incorporating it into your daily workflows.
3.  Define a “Docker Image” with an immutable layer, enabling the abstraction of immutable infrastructure. Changes are stored as individual read-only layers, making it easy to reuse images and track changes. Layering also saves network traffic and disk space by transporting only updates;
4.  The Docker container runs by instantiating an immutable image, but with a writable layer. This way, it temporarily stores runtime changes, making it easy to deploy and scale multiple application instances.

**Docker** 's innovative vision for encapsulating software and its dependencies into a single package is a paradigm shift for the software industry, comparable to what MP3 was for the music industry. The "Docker File" has become a standard in the technology vendor industry (including Docker, Google, Pivotal, Mesosphere, and many others), so much so that today these same companies aim to ensure interoperability and standardized interfaces in container technologies to guarantee that, once built using all the necessary tools, this container can run on any infrastructure.

*Subscribe to our blog to be notified when we publish content like this!*

## The development of Docker as an orchestrator.

Docker grew in popularity, and developers trusted running containers beyond laptops, becoming comfortable deploying solutions in production. An important point is that additional tooling was needed to coordinate these containers across multiple machines. This became known as **container orchestration** . Many third-party container orchestration technologies emerged (and continue to emerge), such as:

- Mesos;
- Kubernetes;
- Docker Swarm, (Docker Official);
- Nomad

[See our content here about myths and truths about containers. Are they safe?](/en/Truths--myths--modernization-of-containerized-applications/)

Docker, which has at its core the simple and open-source "docker file," has developed several tools for the community to complement and support development, deployment, and maintenance. Check out some of them below:

- **Docker Hub –** for public storage of “Docker Images”;
- **Docker Registry** – for storing images in an on-premises environment;
- **Docker Cloud** – a managed service for creating and running containers;
- **Docker Datacenter** – as a commercial offering that incorporates many Docker technologies.

## Orchestrator [Kubernetes](https://kubernetes.io/)

![](/wp-content/uploads/2017/08/Kubernetes2.png)

Google recognized the potential of Docker technology early on and sought to offer "container as a service" orchestration on the Google Cloud platform. Google already had tremendous experience with containers (having previously participated in the creation of Cgroups on Linux), and they coupled existing container technologies and distributed computing tools like Borg directly to their infrastructure. In this way, Google built Kubernetes from scratch.
Kubernetes was launched in 2015 with the following goals and considerations:

1.  Empowering application developers with a complete tool for orchestration of *container* Docker. And all this without having to interact with the infrastructure;
2.  To provide a consistent app deployment experience and APIs with support for cloud technologies;
3.  To build a modular API that allows vendors to integrate systems around the Kubernetes core.

In 2016, Google donated Kubernetes to CNCF (*Cloud Native Computing Foundation cncf.io*The company remains a major contributor to the project, followed by Red Hat, CoreOS, and others.
Kubernetes was very attractive to application developers. This is because the tool reduced their dependence on infrastructure and operations teams. Vendors also liked it because it provided an easy way to embrace the pro-container movement and offer a commercial solution to the operational challenges of deployment. Kubernetes, even today, is not something simple or trivial to use.
Looking to the future, there are multiple initiatives aimed at expanding the project's scope to integrate it with more tasks, such as Google Analytics and monitoring services. However, these initiatives are still in very early stages.

<iframe src="https://www.youtube.com/embed/Q4W8Z-D-gcQ?list=PL69nYSiGNLP3pYuoSkyq1M-fbNjQHaNfb" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

## Orchestrator [Apache Mesos](http://mesos.apache.org/)

![](/wp-content/uploads/2017/08/mesos-logo.png)
Mesos began as a project at the University of Berkeley to create a new technology. This included clustering, managing, and applying all the lessons learned. All of this with cloud technologies and distributed computing infrastructures (Google's Borg and Facebook's Tupperware).
While Borg and Tupperware had a monolithic architecture and were proprietary, closed-source technologies tied to physical infrastructure, Mesos introduced a modular architecture with an open-source development approach designed to be completely infrastructure-independent. Mesos was adopted by Twitter, Uber, and many other technology companies to support microservices orientation, big data, real-time analytics, and elastic scaling.
As a cluster manager, Mesos was designed to solve the following challenges:

1.  Simplify resource allocation, providing a coherent application and operational experience across private or public clouds;
2.  Maintaining various project tasks on the same infrastructure, such as: analytics, microservices, monitoring, distributed data, and even applications (trying to improve utilization and reduce costs);
3.  Automate day-to-day operations such as: deployment, self-healing, scaling, and upgrades;
4.  To provide a fault-tolerant, highly available, and extensible infrastructure for applications without the need for recoding;

Mesos can even individually manage a diverse set of tasks, including traditional Java applications.
**Important Point:** Mesos doesn't do container orchestration. Yes, that's right! It doesn't do container orchestration. To do that, it needs Marathon. This tool provides a Platform as a Service (PaaS) for container orchestration, allowing applications to scale and evolve faster. It's entirely RESTful and written in the Scala language.

<iframe src="https://www.youtube.com/embed/hTcZGODnyf0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

## The Orchestrators

It's common to compare Docker, Kubernetes, and Mesos, but the comparison should be: Docker Swarm, Kubernetes, and Marathon on Mesos.

Mesos is not dedicated to container orchestration. For it, what runs "on top" of the application doesn't matter. Therefore, it's natural that support and evolution of this *container* platform always take a backseat, taking longer to evolve than others.

### Marathon on Mesos

![](/wp-content/uploads/2017/08/Captura-de-Tela-2017-08-17-às-18.12.05.png)

The company invented the current container technology and then built a platform (secure and simple). In addition to providing the necessary support with SLAs to the corporate market, it promotes cost savings, agility, and performance. Kubernetes and Mesos alone do not offer CaaS.

We can include OpenShift, which is a closed and inflexible PaaS solution, not allowing the use of Windows apps, Linux, microservices, and monoliths in any infrastructure or framework.

Finally, with Docker EE we have the full benefits of CaaS, orchestration, and container technology management.

### Container Evolution Cycle

We believe it will always start from Docker and extend to the others, as shown in the image below:
![](/wp-content/uploads/2017/08/Captura-de-Tela-2017-08-18-às-11.02.55.png)

We've reached the end of our content. We truly hope you enjoyed it. Your learning about the functionalities of containers doesn't have to stop here. For that reason, we're offering you some great material.

[![](/wp-content/uploads/2017/08/CTAs-O-que-os-lideres-de-TI-querem-saber-sobre-Docker.png)](https://materiais.vertigo.com.br/ebook-top-questions-docker?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)
