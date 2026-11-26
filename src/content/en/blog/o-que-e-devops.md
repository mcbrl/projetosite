---
title: "What is DevOps?"
slug: "o-que-e-devops"
date: "2018-04-16T14:20:51"
modified: "2018-04-16T14:20:51"
status: "publish"
author: "admin"
excerpt: "\" What is DevOps ?\" is a more difficult question to answer than it seems at first glance. But it is possible to point out several objectives of DevOps practice: speed and quality in delivering value, extensive use of automation for building and testing, reduction of application downtime , elimination of friction between developers and […]"
categories: ["blog", "devops"]
tags: ["definicao-de-devops", "devops", "docker", "o-que-e-devops", "significado-de-devops", "transformacao-digital"]
featuredImage: "/wp-content/uploads/2018/04/O-que-e-DevOps_-.png"
wpId: 2071
originalUrl: "https://vertigo.com.br/o-que-e-devops/"
contentSource: "rest"
lang: "en"
seo:
  title: "What is DevOps? It's time to understand this innovative concept!"
  description: "In our content, you'll learn the meaning of DevOps in a simple way. Furthermore, we'll give you an overview of how complicated the old way of producing technology was. Learn with us about the goals of the practice and the implementation steps. Dive into the DevOps universe with us!"
  canonical: "https://vertigo.com.br/en/o-que-e-devops/"
  ogImage: "/wp-content/uploads/2018/04/O-que-e-DevOps_-.png"
  robots: "index, follow"
---

" **What is DevOps** ?" is a more difficult question to answer than it seems at first glance. But it is possible to point out several objectives of DevOps practice: speed and quality in delivering value, extensive use of automation for building and testing, reduction of application downtime *,* elimination of friction between developers and operations, and reduction of time to deal with failures.

**DevOps** has the main goal of improving the integration between software developers and the infrastructure team. In a traditional IT environment, communication between the two is still very difficult: developers are expected to deliver value in the form of application functionalities, while operations (infrastructure) are expected to maintain the stability of the environment. Both are pressured by the company towards these objectives, but in a traditional IT environment they seem to be at odds.

With the old production model, this conflict is a natural consequence: developers have little or no contact with the production environment of their deliverables, and the formalism imposed by operational silos makes each iteration a repetition of recurring problems.

But the practice and tools **DevOps** They allow this communication to be facilitated, completely modifying the boundaries of responsibility and favoring the work of both teams, making the delivery of value in the technology environment within a company much more fluid.

### **What was it like to produce technology before DevOps?**

To begin to understand the old model of technological production, let's remember our high school studies on the Industrial Revolution. There was a great demand for manufactured goods, and a kind of assembly line was needed to speed up the process.

This logic was also implemented in software development using the waterfall model, which consisted of requirements gathering, design, implementation, testing, deployment, and maintenance. Frequently (very frequently!) it generated problems of all kinds.

One of the problems is that technology is incredibly dynamic, causing requirements to change all the time. Another difficulty is that the client rarely knows exactly what they want when ordering software – and even when they do, they are often wrong, because what the end user really needs may still be different.

For this reason, it became necessary to create agile methodologies to conduct software projects, and these methodologies demanded practices and tools completely different from those in use until then, completely rearranging the boundaries that defined the roles of development and infrastructure. As we said at the beginning of the text, there is no magic formula for doing **DevOps** , but we will indicate the most common practices and their tools. Check them out below!

## **The DevOps/Agile Marriage**

Do you remember when we talked about the problematic waterfall development model? Over the years, several other methodologies have been experimented with by the IT industry. Agile methods currently dominate because they explicitly assume that application production is a continuous cycle and that excessive formalism in requirements gathering is a waste of time.

**DevOps practices** have several guidelines: Some utilize tools that facilitate collaboration and continuous integration between Development and Infrastructure. We have created a diagram below that briefly illustrates the adoption of DevOps, but throughout our content we will explain interesting points to consider when adopting the practice. Check it out below.

### **![](/wp-content/uploads/2018/04/MATURIDADE-DEVOPS-2-e1549546222599-1024x504-1.png)**

### **Configuration Management/Provisioning**

A typical company has a large number of servers (whether in a private *data center* or in the cloud). In DevOps methodology, it's unthinkable to perform any updates or installations on each one individually, which is why – and for other reasons – configuration management systems are used.

Programs like Puppet Lab, SaltStack, and Ansible allow for monitoring the operation of machines (physical and virtual), automatic troubleshooting of down services, and automatic correction if someone makes an improper change to the system – these solutions aim to keep servers in a desired state.

### **Containers and Orchestration**

Orchestration also focuses on having an agile infrastructure that allows for changes and is scalable. Docker containers and their orchestrators help build, deliver, and run any application in any environment, regardless of where it is deployed. This results in agility, control and versioning, better team interaction, and a much more resilient environment.

[Click here to learn more about Docker. We have great content on the subject.](/en/What-is-Docker/)

Examples of tools include Docker and Kubernetes. These tools allow for cluster administration and scaling, facilitate infrastructure deployment, and make it easier to create "disposable" environments (which can be destroyed or created without side effects).

### **Culture Change**

Throughout this text we have repeatedly stated that **DevOps** is a sum of practices and tools. However, its raison d'être, its original motivation, has its behavioral aspect as its most important intangible element. As we have said, the adoption of **DevOps** requires a different form of integration between departments that originally had diverse interests.

Many responsibilities (and talents) that were previously typical of operations are migrating into projects, which gain sovereignty to define various infrastructure aspects in their own code – and with this autonomy comes the responsibility for any problems that may arise in their deliverables.

Let it be clear, therefore, that a cultural shift is essential for **the adoption of DevOps** . In a traditional IT environment, mechanisms for shifting blame and abandoning responsibility prevail, while in a "post-DevOps" IT environment, responsibility for delivery is shared, and everything possible is automated (especially testing and delivery).

**DevOps** implies a word that is being heard more and more: Empathy. The constant mantra is needed: “Address the error, monitor it, and document it.”

Sensitivity to the work of other departments needs to be inherent in the job. It is necessary to document and monitor problems so that mistakes are not repeated and solutions are democratized.

As we said, the procedures mentioned above are not necessarily mandatory. There is no single right way. But there are approaches that are used to implement **DevOps .**

This practice brings very significant benefits to the companies that implement it. That's what we'll see in the next section.

## **Benefits of DevOps**

The **benefits of DevOps** are enormous! They perfectly suit the needs of the technological world, which is constantly thirsty for innovation. Companies that require constant updates, such as Facebook, Twitter, Spotify, Google, and Amazon, were among the first to embrace them. The advantages are listed below:

### **Improved deployments**

The **DevOps methodology** helps increase the quantity and frequency of updates delivered to a given system, with a very low failure and downtime rate.

With a higher volume of deliveries, there is a greater chance of meeting customer requirements, making the company more competitive from a product delivery perspective.

### **Safety**

Speed ​​doesn't mean insecurity. With DevOps, it's possible to operate quickly while maintaining a stable infrastructure. What the industry has learned the hard way is that security through inconvenience is a fallacy . It's possible to use automated compliance policies and management techniques, for example. In this way, it's possible to track all escalated compliance.

### **Faster mean time to recovery (MTTR)**

By using **DevOps** , the average time to repair is shortened. This is because the methodology streamlines its own maintenance, with constant monitoring and testing of the applications being developed. Very long MTTRs mean inefficiency, and consequently, higher costs.

For those still belonging to the world of "old IT," of large data centers, the great guardians of stability, DevOps seems utopian. But, in the business world we live in, those who don't update themselves fall by the wayside. The new IT values ​​speed and the conscious use of resources.

You already know what it is and its benefits. Are you curious about how it all works? That's exactly what we'll talk about next, to understand **DevOps more deeply**.

## **Stay tuned to our blog!**

We are reaching the end of our content, hoping that it has been as beneficial for you as it has been for us to talk about it.

On our blog we have other articles that touch on this subject. Below we'll suggest some interesting reading:

[Modernizing applications: Why DevOps and Containers are for everyone.](/en/Modernizing-applications-because-DevOps-and-containers-are-for-everyone./?utm_source=post&utm_medium=post&utm_campaign=Oque_DevOps&utm_term=DevOps&utm_content=post)

[Why you need to adopt Docker now.](/en/Why-you-need-to-adopt-Docker-right-now./?utm_source=post&utm_medium=post&utm_campaign=Oque_DevOps&utm_term=DevOps&utm_content=post)

* * *

Stay up-to-date with our blog articles and subscribe to our newsletter. Just scroll to the bottom of this page. Feel free to comment below and on our social media. We have some material for you! **By clicking on the image below, you can check out the potential of Docker EE and see a great case study from the insurance company MetLife.** Enjoy!

[![](/wp-content/uploads/2018/11/Reduza-custos-de-TI-CTA-2-300x240-1.png)](https://materiais.vertigo.com.br/reduzir-custos-ti-docker-ee?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)

Until later!
