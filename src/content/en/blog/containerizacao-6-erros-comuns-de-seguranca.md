---
title: "Containerization: 6 common security mistakes"
slug: "containerizacao-6-erros-comuns-de-seguranca"
date: "2021-09-21T11:32:12"
modified: "2021-09-21T11:32:12"
status: "publish"
author: "admin"
excerpt: "Many companies containerize their applications by transferring project data to cloud infrastructures . This process relies on containers that package the code so that applications can run during migration from one environment to another. Containerized frameworks, such as Docker solutions, make the process of distributing access permissions and recommended security policies for a given application […]"
categories: ["containers", "devops", "dockeree", "kubernetes"]
tags: ["devops", "docker", "kubernetes", "orquestracao-de-containers"]
featuredImage: "/wp-content/uploads/2021/09/BLOG_ImgDestaque_ContainerizacaoErros_21-09-21.png"
featuredImageAlt: "6 erros na containerização"
wpId: 157299
originalUrl: "https://vertigo.com.br/containerizacao-6-erros-comuns-de-seguranca/"
contentSource: "rest"
lang: "en"
seo:
  title: "Containerization: 6 common security mistakes - Vertigo"
  description: "Containerization: See the 6 most common security mistakes when adopting this strategy. Read our blog and stay up-to-date with the best content."
  canonical: "https://vertigo.com.br/en/containerizacao-6-erros-comuns-de-seguranca/"
  ogImage: "/wp-content/uploads/2021/09/BLOG_ImgDestaque_ContainerizacaoErros_21-09-21.png"
  robots: "index, follow"
---

Many companies containerize their applications by transferring project data to [cloud infrastructures](/en/Cloud-Native%3A-6-main-mistakes-when-migrating-your-infrastructure-to-the-cloud./) . This process relies on containers that package the code so that applications can run during migration from one environment to another.

Containerized frameworks, such as Docker solutions, make the process of distributing access permissions and recommended security policies for a given application easier, thus avoiding the need for users to implement the process manually and individually.

[Containerization platforms](/en/container-orchestration-tools/) like Docker Swarm and Kubernetes, present in Vertigo solutions, have specific security mechanisms for implementing containers. This provides an easier-to-configure, more user-friendly, and secure environment for project development and containerization.

Without a doubt, implementing a container management strategy is one of the best DevOps practices that companies aligned with digital transformation can adopt, but this does not mean that containerization is a foolproof process, as it is susceptible to security flaws.

In this article, we'll show you the 6 most common mistakes some IT managers make when implementing a containerized strategy. Learn how to avoid failures and maximize the security of your development environment.

**Read also**

- [The importance of container management](/en/Containerization%3A-The-Importance-of-Container-Management/)
- [Kubernetes: 6 key components of its architecture](/en/Kubernetes%3A-6-main-components-of-its-architecture./)

## 1 – Focusing only on the container and forgetting about the runtime environment.

When implementing a containerization strategy, it's very common to focus solely on the container, but this represents a serious security flaw.

Many developers end up neglecting the runtime environment, which represents an opening for security flaws on their host, for example. Each machine that receives the integrated container mechanism must have its security settings updated, thus protecting the environment from potential vulnerabilities.

The starting point for securing your containerized environment begins with the operating system and the host network.

## 2 – Do not limit access privileges

Orchestration platforms are capable of implementing highly efficient security policies, provided they are configured correctly.

A common mistake many managers make is failing to implement a restricted permissions policy, allowing unnecessary individuals access to resources they shouldn't have access to.

Not restricting unnecessary privileges to containers in the host environment can compromise not only the container but also the host machine. Similarly, focusing security only within a container will not protect it from vulnerabilities on the host, implementing security only on the host will not protect it from exploitation in a container with undue privileges.

The correct approach is to run the container in a way that it doesn't grant unnecessary privileges in the host environment. Privileges should be granted sparingly, avoiding the provisioning of containers with broad permissions in the host environment.

## 3 – Using libraries without checking the code

When implementing containerization, many companies and managers make the almost innocent, yet serious, mistake of including code libraries, trusting that they are safe.

It's important to highlight that care must be taken with both libraries from the development suite itself and external libraries imported with the promise of quick solutions, which can pose a significant risk. Compiling applications and running them in a production container can create vulnerabilities.

A good solution to resolve this type of problem is to limit libraries to only those necessary for container execution, check the code for any malicious functions, and apply a strong security review if it is an external library. Having a clear process for reviewing containers that pose risks, to look for vulnerabilities, and ensuring that potential failures have been discussed by a specialized team is crucial.

## 4 – Unnecessary display of containers

Some containers need to run on a public network, thus exposing themselves to attacks. Therefore, it is necessary to consider this variable at the beginning of their development so that preventive measures can be implemented. It is important to think about security rules that are not too broad, as they can expose the container to potential attacks; therefore, only absolutely necessary channels should be opened to minimize risks.

A very common mistake is leaving the container permissions at their default settings. This represents a significant danger, as containers are created using a series of defined commands and are executed with root permissions when the image is created. If a process within the container is executed with root permissions and exploited at runtime, the data will be compromised. The best way to resolve this issue is to execute the commands using users without root permissions.

On the network, the way a container's data and processes are exposed needs to be considered. After all, container security starts with the traditional operating system and network security.

## 5 – Not considering the principle of immutable images

Containerization solutions like Docker and Kubernetes adhere to the principle of immutable images, meaning images that will not undergo changes.

When deploying systems and data over a network, especially the internet, it is necessary to create a process that ensures the integrity of the container.

Using immutable images offers several advantages, such as automatic data recovery, in addition to providing integrity.

When an immutable container is not used, it is exposed to vulnerabilities that can alter application support, allow malicious changes, and compromise the project.

Exposing the container is very dangerous because, by disregarding the immutable principle, malware could be inserted. Therefore, it is necessary to seriously monitor the integrity of containers to reduce risks.

## 6 – Not examining the image of a container

A common practice, but one that represents a serious flaw in the application containerization process, is to ignore the image on which a container is based, directly integrating the data into the project.

Before deploying a container, it's necessary to assess whether its image is from a certified source and a known manufacturer, or if it contains malware or vulnerabilities. This process should be carried out by a team of experienced developers, as it's meticulous work but can provide the peace of mind needed to conduct the project without headaches.

## Implement containerization in your projects with Vertigo Tecnologia solutions.

Vertigo partners with companies in the public and private sectors, acting as a right-hand partner to innovative leaders seeking to implement Digital Transformation and stand out in the competitive technology market.

Through our partners [Docker](/en/partnerships/docker/) and [Weaveworks](/en/partnerships/weaveworks/) , the application containerization process can be implemented with maximum efficiency by skilled and experienced professionals in the [DevOps philosophy](/en/DevOps-maturity-index/).

Contact our sales team. We'd be happy to make your applications more secure and help your company stand out from the competition.

**Read more**

- [Why is it necessary to improve technology security?](/en/Why-is-it-necessary-to-improve-technology-security/)
- [Kubernetes gains even more strength with the arrival of 5G.](/en/Kubernetes-gains-even-more-strength-with-5g./)
