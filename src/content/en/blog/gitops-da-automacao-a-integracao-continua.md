---
title: "GitOps: From Automation to Continuous Integration"
slug: "gitops-da-automacao-a-integracao-continua"
date: "2021-08-18T11:41:46"
modified: "2021-08-18T11:41:46"
status: "publish"
author: "admin"
excerpt: "Defined as an approach to infrastructure and application management that brings together best practices in software development and applies them to systems and IT, GitOps is growing in popularity among developers every day. Through this practice, it's possible to manage your application's settings using Git , an open source version control system. It's commonly used […]"
categories: ["devops", "kubernetes"]
tags: ["devops", "gitops", "kubernetes"]
featuredImage: "/wp-content/uploads/2021/08/BLOG_ImgDestaque_GitOps_17-08-21.png"
wpId: 157142
originalUrl: "https://vertigo.com.br/gitops-da-automacao-a-integracao-continua/"
contentSource: "rest"
lang: "en"
seo:
  title: "GitOps: From Automation to Continuous Integration - Vertigo"
  description: "GitOps: See how this approach to infrastructure and application management emerged, which is also an operational model for Kubernetes."
  canonical: "https://vertigo.com.br/en/gitops-da-automacao-a-integracao-continua/"
  ogImage: "/wp-content/uploads/2021/08/BLOG_ImgDestaque_GitOps_17-08-21.png"
  robots: "index, follow"
---

Defined as an approach to infrastructure and application management that brings together best practices in software development and applies them to systems and IT, [GitOps](/en/How-Gitops-offers-high-speed-for-Kubernetes/) is growing in popularity among developers every day.

Through this practice, it's possible to manage your application's settings using [Git](https://git-scm.com/) , an open-source version control system. It's commonly used for developing [cloud-native](/en/The-six-best-cloud-native-practices-for-IT-leaders/) applications and is also an operational model for Kubernetes.

But do you know how GitOps came about? In this article, we'll see how this practice was born through important milestones, from its initial idea to reaching the level of usability it has today.

Understand, in chronological order, the origin of this operational model for creating applications and managing Kubernetes clusters, and how it is present in Vertigo solutions.

## What was the world like before GitOps?

In the mid- **2010s,** cloud service companies offered Virtual Machines that promised the ability to develop applications in any cloud environment with great ease of use. To some extent, this did work, but none of these solutions offered anything different from the already existing 12-factor methodology, which addresses a step-by-step process with 12 points to be followed for the development of a successful [SaaS project .](/en/What-you-need-to-know-about-SaaS/)

With the launch of Docker containers **in 2013** , a fairly simple single-node operating model came into existence. A major advantage is that they do not require developers to have extensive infrastructure knowledge. Consequently, this has led to widespread adoption of containers across the industry.

## Container orchestration heats up the market.

Recognizing the need for developers to manage and monitor containers in the cloud, **in 2015** the Weaveworks team developed Weave Cloud to minimize the operational complexity of Kubernetes clusters with [CI/CD pipelines](/en/What-is-a-CD-ROM-pipeline-Understand-it./).

Interestingly, Weave Cloud itself operates in containers, which is why an orchestrator was necessary. So, what was the ideal solution?

Initially, building their own orchestrator seemed like the most viable option, but it soon became clear that it wasn't the best use of time and resources. Instead, they opted to leverage available container orchestration tools. After some testing, the chosen solution was Kubernetes, which at the time was the best solution for this type of demand, and the development team became experts in installing, deploying, and running Kubernetes. Also **in 2015** , the team developed its SaaS offering – Weave Cloud, operating Kubernetes on EC2.

## Would it be possible to improve operations in Kubernetes?

After numerous tests to improve their Kubernetes operations, the Weaveworks technical team specialized in the solution and acquired the technical knowledge to make bolder changes to their production.

Continuing with the ambitious project, the engineering team implemented a change to the system that, in case of unexpected errors, could compromise its entire integrity. Initially, this is what actually happened, but the Weaveworks team managed to restore the system again in about an hour, as it was fully documented in several Git configuration files. The system included not only the cluster, but also the application, monitoring, and other parts.

Thus, even before being named as such, **in 2016** we had what we can call a "beta version" of GitOps. Each modification needed to be committed to the system's record for the desired state, which was stored in a GitHub instance.

## In 2017, GitOps emerged.

The progress of the tests and the satisfactory results led the team to create a list of the principles by which the Kubernetes system operates, highlighting the most important ones.

The basic principle of GitOps is to automate system operations based on a model that resides outside the system itself, and Git was chosen as the place to house this model.

So, during one of the team meetings, Alexis Richardson, CEO of Weaveworks, came up with the name "GitOps," which, in his view, is the most appropriate to describe the entire process. This happened while discussing the overall system management standard via Git; his goal was to create a term that was easy to pronounce. Today, we can see that he was indeed right.

## GitOps – Mass market adoption

It was only a matter of time before the simplicity of the GitOps approach quickly won over large companies that offer cloud services such as [AWS](/en/partnerships/aws/) , Azure, and Google Cloud.

GitOps is a familiar term for software development teams in companies of all sizes. Its simplification of operations in Kubernetes and containers provides considerable confidence for organizations looking to deploy code from a Git repository to a Kubernetes cluster.

## Achieve overload-free deliveries through Vertigo solutions and GitOps.

Vertigo has been helping leaders in the public and private sectors with their Digital Transformation projects for over two decades. We offer tailored solutions for your business's innovation journey.

Make the application development process faster and more secure, and enable development teams to deliver more efficiently. We can help you deploy with greater security, predictability, and governance using GitOps!

Contact us for a demo.
