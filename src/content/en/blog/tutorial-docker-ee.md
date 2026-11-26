---
title: "Docker EE Tutorial – Learn the step-by-step process to start testing today!"
slug: "tutorial-docker-ee"
date: "2018-09-19T13:46:01"
modified: "2026-02-02T20:43:41"
status: "publish"
author: "admin"
excerpt: "Are you interested in using Docker EE but don't know where to start? This article is for you! Here you'll find a step by step guide to exploring this incredible tool, used by the world's most innovative companies. First, it's important to remember that Docker has two versions: Community and Enterprise. The versions differ from […]"
categories: ["blog", "devops"]
tags: ["conteineres-docker", "devops", "docker"]
featuredImage: "/wp-content/uploads/2026/02/tutorial-docker-ee.png"
wpId: 2932
originalUrl: "https://vertigo.com.br/tutorial-docker-ee/"
contentSource: "rest"
lang: "en"
seo:
  title: "Docker EE Tutorial – Learn the step-by-step process to start testing today - Vertigo"
  description: "Are you interested in using Docker EE but don't know where to start? This article is for you! Here you'll find a step-by-step guide to exploring this incredible tool, used by the world's most innovative companies. Join us on this journey and learn how to get started with Docker today."
  canonical: "https://vertigo.com.br/en/tutorial-docker-ee/"
  ogImage: "/wp-content/uploads/2026/02/tutorial-docker-ee.png"
  robots: "index, follow"
---

Are you interested in using Docker EE but don't know where to start? This article is for you! Here you'll find a step-by-step guide to exploring this incredible tool, used by the world's most innovative companies.

##### Join us on this journey and learn how to get started with Docker today.

First, it's important to remember that Docker has two versions: Community and Enterprise.

The versions differ from each other and are suited for specific purposes. So, what is the difference between Docker Community and Docker Enterprise? The former can be used for simpler systems, applications, and environments. The latter has an interface and capabilities to meet the more robust needs of the corporate world.

In this material, we will discuss **Docker Enterprise Edition** , providing some basic information to help you begin familiarizing yourself with this amazing tool.

To move forward, let's review some concepts together!  

## **What is Docker?**

Docker is a technology that has finally enabled the isolation of program processes, which we now call "Apps." Docker runs and manages applications within wrappers called containers. It goes far beyond the paradigm of Machine Virtualization. [Here](/en/What-is-application-containerization/) , [here](/en/docker-kubernetes-mesos/) , and [here](/en/What-is-Docker/) you can see other posts of ours that explain at a high level how Docker works to leverage the entire Development-Testing-Production cycle of systems.

System projects, now containerized, execute their code with all the necessary requirements (libraries, engines, or literally whatever it needs) to run, assembled in a "package" called an Image. This generated Image, therefore, remains the same at all levels: from development to production. This eliminates the various problems that "unexpectedly arise" when publishing to staging and production environments.

The modern DevOps approach becomes even more effective with the concept of containers, as it optimizes the entire process, aiming to reduce build and delivery time, identify bugs, and provide scalability and high availability.

## **What is Docker EE?**

Docker Enterprise Edition is exclusively geared towards the enterprise solutions market with a subscription that provides: support service, certified images, monitoring, management center, multi-cloud, execution of critical applications at scale, and quarterly releases.

Docker EE is a Containers-as-a-Service (CaaS) platform that enables a secure, highly available software supply chain across different infrastructures, whether on-premises or in the cloud.

## **Orchestration: The solution to new problems**

While it's possible for a single container to effectively solve an entire system problem, in the real world, solutions will run across multiple containers working together in an integrated way. We call this Orchestration.

Container handling began manually, but this becomes unfeasible when dealing with dozens (or even thousands) of containers. This is one of the first problems we face in the containerization process.

In this multi-container environment, how do you manage various volumes (NFS, local storage, cloud storage), networks (firewall, internal network, internet, network zones), and security levels between containers?

At a primary level, Docker Swarm provides tools that assist in this step, but it does not meet the demands of the corporate world with the same efficiency and speed as Docker EE.

A solution is only ready for scalability and high availability when it can be effectively run on any cloud provider and region of the world. While Docker supports this operation across multiple clouds, this manual process is not straightforward, as this method is prone to errors.

The gain in scale creates problems in provisioning PODS (Kubernetes), in managing cluster resources, and also in ensuring high cluster availability.  

Another recurring problem relates to managing multiple container access profiles, leading to security breaches and system instability.

There is another recurring problem, which is ensuring certified images across all orchestrators.

## **How does Docker EE solve this?**

Docker EE includes the Docker Universal Control Plane (UCP), an enterprise-grade cluster management solution that can be installed on-premises or in the cloud. This functionality allows you to manage numerous clusters and applications through a simple interface.

Access to various volumes, whether stored in the cloud or locally, is easy and secure. In terms of network configuration, in addition to load balancing, it also offers network isolation between containers.

The Docker EE platform, through secure communication (TLS) with clusters, provides a multi-architecture orchestration for Kubernetes and Swarm. Docker ensures a modern and secure software deployment chain using: signed images, mirroring between registries, and image analysis. Utilizing the UCP management tool, Docker EE solves several problems, such as scalability and high availability.

## **Docker EE screens – Datena: “I want images!”**

With proper context, below are some images you can use to better understand and familiarize yourself with Docker EE.

Introducing the UCP – Universal Control Plane:

Dashboard View: Here it's easy to manage thousands of machines, clusters, containers, and more.

![](/wp-content/uploads/2018/09/1.png)

Security Image Analysis Control: Docker EE analyzes the images in the repositories to check if they are free from known or dangerously exposed vulnerabilities.

![](/wp-content/uploads/2018/09/2.png)

Volume Control: Connect your containers to volumes wherever you want: locally, on a network, or in the cloud.

![](/wp-content/uploads/2018/09/3.png)

![](/wp-content/uploads/2018/09/4.png)

Network Control: Transparently manage how your containers communicate with each other and with the world.

![](/wp-content/uploads/2018/09/5.png)

User/Rules Control: Define access for your team, whether it's composed of millennial DevOps engineers or infrastructure experts.

![](/wp-content/uploads/2018/09/6.png)

Image Registry: Build your image library and have easy access for use.

![](/wp-content/uploads/2018/09/7-1024x515-1.png)

![](/wp-content/uploads/2018/09/9-1024x577-2.png)

But hold on! Now you've seen it all and can even start a conversation about Docker EE, but we're not finished yet.

Now it's time to create your account and get started!

We'll teach you how to create a Docker account to use the Enterprise Edition for 30 days FREE. Follow the step-by-step instructions; it has many steps, but it's worth it.

[https://store.docker.com/editions/enterprise/docker-ee-trial](https://store.docker.com/editions/enterprise/docker-ee-trial)

**Click “Start 1 Month Trial”**

![](/wp-content/uploads/2018/09/9-1024x577-1.png)

**Click on “Create Account” to create your registration.**

![](/wp-content/uploads/2018/09/10-1024x578-1.png)

Choose a login, email, and password.

![](/wp-content/uploads/2018/09/11-1024x577-1.png)

**Fill out the form and click “Start your evaluation!”**

![](/wp-content/uploads/2018/09/12-1024x577-1.png)

**When you reach the Docker EE license screen, you have three options: manually implement it in Linux, use a pre-made MS Azure template, or use an Amazon Web Services template.**

![](/wp-content/uploads/2018/09/13-1024x580-1.png)

**Let's go with Azure because we're offering R$670 in credits for your first signup. Open the link in "these instructions".**

![](/wp-content/uploads/2018/09/14-1024x577-1.png)

**Click the “EE Basic” button.**

![](/wp-content/uploads/2018/09/15-1024x579-1.png)

Use your Azure account and sign in. If you don't already have an Azure account, go to this link : [https://azure.microsoft.com/pt-br/free/](https://azure.microsoft.com/pt-br/free/)

![](/wp-content/uploads/2018/09/16-1024x579-1.png)

Okay, now that your account is created, we move on to "GET IT NOW," which opens a pop-up window asking for some information to build the machines needed for the environment.

![](/wp-content/uploads/2018/09/17-1024x579-1.png)

Click “Continue” and you will see Azure completing the process.

![](/wp-content/uploads/2018/09/18-1024x579-1.png)

One more confirmation, click "Create," almost there, don't give up 😉.

![](/wp-content/uploads/2018/09/19-1024x581-1.png)

**Start for free.**

![](/wp-content/uploads/2018/09/20-1024x579-1.png)

On this screen, create a name, copy and paste the App ID that appears in your Azure profile, and the "SSH Public Key" from your personal machine, ensuring that only you can access the shell environment.

![](/wp-content/uploads/2018/09/21-1024x581-1.png)

Previous screen already filled.

![](/wp-content/uploads/2018/09/22-1024x580-1.png)

Completing and executing the final validation.

![](/wp-content/uploads/2018/09/23-1024x573-1.png)

Okay, here we have the list of resources (machines, networks, Azure volumes).

![](/wp-content/uploads/2018/09/24-1024x579-1.png)

In the notifications you will see “Deployment in progress…”

![](/wp-content/uploads/2018/09/25-1024x576-1.png)

The list of resources is growing as the Docker EE template machines are added.

![](/wp-content/uploads/2018/09/26-1024x580-1.png)

Once you go up, you'll have an entry address:

![](/wp-content/uploads/2018/09/27-1024x576-1.png)

Upload the license we generated when you requested a 1-month trial:

![](/wp-content/uploads/2018/09/28-1024x575-1.png)

## **Welcome to Docker EE!**

![](/wp-content/uploads/2018/09/30-1024x580-1.png)

### **Conclusion**

We hope that with our content you can begin to take your first steps in Docker EE. Take advantage of this material to test this platform, which is used by leading companies around the world.

When you start tinkering, questions will arise. That's more than normal!

[If you have any questions, schedule a chat with a Vertigo specialist.](https://materiais.vertigo.com.br/docker)

**Also check out:**

[![](/wp-content/uploads/2018/11/Integracao-Docker-com-Java-CTA-1.png)](https://materiais.vertigo.com.br/paper-integracao-docker-java?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)

**To the next!**

* * *

## ABOUT THE AUTHOR

Rubens Freitas (Rubão) is the infrastructure manager at Vertigo Tecnologia. Passionate about Docker and coffee, he enjoys watching series and collecting unusual things. A computer science graduate from UFF, he has programmed in Java and iOS and is a consultant specializing in systems integration. He says he likes running and surfing. But this last part needs confirmation. 😉
