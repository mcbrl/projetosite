---
title: "What is Docker?"
slug: "o-que-e-docker"
date: "2018-07-10T12:09:19"
modified: "2018-07-10T12:09:19"
status: "publish"
author: "admin"
excerpt: "Docker is an open source platform that allows applications to be packaged inside containers. From that point on, software can adapt and run on any machine that has this technology installed. Below you can check out the video presented by Thor Salgado, one of our great technology enthusiasts. He gives a super detailed overview of […]"
categories: ["blog", "devops"]
tags: ["container", "conteiner", "conteinerizacao", "docker", "o-que-e-docker"]
featuredImage: "/wp-content/uploads/2018/07/o-que-e-docker.png"
wpId: 2424
originalUrl: "https://vertigo.com.br/o-que-e-docker/"
contentSource: "rest"
lang: "en"
seo:
  title: "Learn what Docker is - Modernize your company's IT!"
  description: "Docker is an open-source platform that allows applications to be packaged inside containers. From that point on, software can adapt and run on any machine that has this technology installed. Learn more about it here!"
  canonical: "https://vertigo.com.br/en/o-que-e-docker/"
  ogImage: "/wp-content/uploads/2018/07/o-que-e-docker.png"
  robots: "index, follow"
---

**Docker** is an open-source platform that allows applications to be packaged inside containers. From that point on, software can adapt and run on any machine that has this technology installed.

Below you can check out the video presented by Thor Salgado, one of our great technology enthusiasts. He gives a super detailed overview of Docker, covering its features and advantages.

<iframe src="https://www.youtube.com/embed/0ZgMjpy_vQQ" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Docker is not a virtualization system. A virtual machine runs an entire operating system (in addition to applications). A container, on the other hand , only isolates an application, packaging it with all its dependencies.

## Let's delve deeper to understand better. **o** **That's what a container is.**

Subscribe to our blog to be notified when we publish content like this!

At runtime, a container is a way of isolating a process (a running program) at the operating system level.

When built, containers define the entire file system that the application sees, making predictable (and immutable) how the application executes and what it encounters around it. The files stored in this packaging are called "images," which are a kind of distribution and delivery format for applications.

[Check out our content on DevOps here! The topic is all about Docker.](/en/What-is-DevOps/)

In other words, images are the way to distribute an application and, at the same time, the guarantee that the application will always find the same unchanging environment around it.

Now that the concepts are defined, let's move on. Docker is built in the **Go programming language** , which is lightweight and open-source, well-suited to the current era of cloud-based communication. It's no coincidence that companies like Google, Spotify, and Facebook, which require enormous data centers, are enthusiastic about this technology.

## **Advantages and Applicability**

Docker has been the darling of numerous technology events around the world. And for good reason. As we've already mentioned, the technology enables a number of gains at a very low cost, compared to traditional ways of doing IT.

<iframe src="https://www.youtube.com/embed/3yXLMI4LzIA" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

If you don't want to watch the entire video, we've listed some advantages of using Docker below:

### **Reduced delivery time**

In companies with traditional IT, a system change is usually a tense and laborious process. With Docker, not only are deliveries greatly accelerated and simplified, but above all, the way an application is delivered is reduced to a common denominator (the container), *regardless of the technology, framework, or language* in which it is written.

Using images makes it trivial to reproduce the original environment defined by the developer (infrastructure as code). In this way, it is not necessary to dedicate time from a company's infrastructure department to installing and configuring applications.

**The Docker Compose** tool , for example, runs multiple containers at once, avoiding the need to start them one by one and defining how they can interact with each other. This speeds up environment setup and application execution, regardless of where they will run.

### **Reduction in resource use**

Using [Docker](/en/docker/) simplifies the use of on-demand infrastructure. In other words, not only is server provisioning trivial, but any public cloud provider will also be able to run the applications.

The low cost of isolating an application in a container ensures the optimization of the use of available hardware resources. Unlike VMs, which demand far more resources to operate (due to their operating systems), Docker uses only what is necessary for the application. This applies to both *bare metal* and cloud environments.

### **Scalability**

Cloud systems are a boon for businesses and ordinary users, reducing provisioning and management costs. In the case of companies, they can maximize the scalability of their systems, taking advantage of the available elasticity. E-commerce sites can use Docker to enhance and control their systems. With orchestrators – [Kubernetes](/en/docker-kubernetes-mesos/) or Swarm Mode, for example – it is possible to create systems that would quickly and efficiently meet extra demands for a particular service.

## **How about trying out some Docker?**

As we mentioned at the beginning of our content, Docker is an open-source platform. This means it's open to the community, free of charge. The company itself provides tutorials and free container environments on the [**Play with Docker**](https://labs.play-with-docker.com/) website.

We at Vertigo Tecnologia also want to contribute to your learning. We know that Java is one of the most widely used programming languages ​​in the world. Recently, the Development Package received some upgrades that facilitate its integration with [Docker](/en/docker/).

We've prepared detailed material explaining the improvements in depth. This will undoubtedly further pique your curiosity about the technology. To download, simply click on the image.

[![](/wp-content/uploads/2018/07/IMAGEM-BLOG-1-768x432-1.png)](https://materiais.vertigo.com.br/paper-integracao-docker-java?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)

We hope you found this text interesting. We take this opportunity to invite you to subscribe to our newsletter to receive our content directly in your email. Simply enter your email address in the field located at the bottom of this page.

We look forward to seeing you soon. See you later!

* * *
