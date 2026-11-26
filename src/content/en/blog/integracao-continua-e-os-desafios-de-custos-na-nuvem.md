---
title: "Continuous integration and the cost challenges in the cloud."
slug: "integracao-continua-e-os-desafios-de-custos-na-nuvem"
date: "2020-11-30T13:17:14"
modified: "2020-11-30T13:17:14"
status: "publish"
author: "admin"
excerpt: "Finding and analyzing errors more quickly, improving software quality, and reducing the time for validating and releasing new system updates are the main objectives of continuous integration (CI) in DevOps. With it, it's possible to control versions and changes made to the code, and in this way, it's possible to compare code in different branches, […]"
categories: ["devops"]
tags: ["api", "arquitetura-de-microsservicos", "cloud", "cloud-native", "devops", "esteira-de-entregas-continuas", "nuvem"]
featuredImage: "/wp-content/uploads/2020/11/integra-continua-nuvem-blog-V3.png"
wpId: 5371
originalUrl: "https://vertigo.com.br/integracao-continua-e-os-desafios-de-custos-na-nuvem/"
contentSource: "rest"
lang: "en"
seo:
  title: "Continuous integration and the cost challenges in the cloud - Vertigo"
  description: "And to optimize these resources, avoid waste, and control your costs in the cloud when working with continuous integration."
  canonical: "https://vertigo.com.br/en/integracao-continua-e-os-desafios-de-custos-na-nuvem/"
  ogImage: "/wp-content/uploads/2020/11/integra-continua-nuvem-blog-V3.png"
  robots: "index, follow"
---

Finding and analyzing errors more quickly, improving software quality, and reducing the time for validating and releasing new system updates are the main objectives of continuous integration (CI) in [DevOps](/en/What-is-DevOps/).
With it, it's possible to control versions and changes made to the code, and in this way, it's possible to compare code in different branches, prevent developers from performing the same task, increase control over each professional's output, and, in case of conflict between new and existing code, CI facilitates the correction of bugs quickly and frequently.
When it comes to small projects, developers transition to CI without much difficulty. However, large projects require more planning, investment, and must be tested in a wide variety of environments.
Cloud providers facilitate this process with [APIs](/en/How-to-make-a-successful-API/) and integrations with existing infrastructure provisioning tools. However, this ease comes at a cost that can sometimes be quite high. After all, cloud providers charge more when you choose the easier path. And this is where the problem arises: how to have more control over these costs?
Well, that's exactly what we're going to answer in this article. Keep reading!

## How to control your cloud costs 

Cloud providers offer unlimited scalability and lower IT costs, charging only for the resources that are used. But the truth is that cloud customers are charged for the resources they order, regardless of whether they use them or not. According to the report [How to Identify Solutions for Managing Costs in Public Cloud IaaS](https://www.gartner.com/document/3847666) According to Gartner, it is estimated that up to 70% of cloud costs are wasted.
To optimize these resources, avoid waste, and control your cloud costs when working with continuous integration, certain measures must be taken. Yes, some of them require some work from your team, but the savings achieved over time compensate for all the initial effort. 
Let's look at some of these measures below: 

### Limit network traffic and keep it organized.

Although many cloud providers ignore inbound traffic—that is, data downloaded from the internet to your instance—the costs of outbound traffic add up rapidly. 
To solve this, the solution is to find ways to bring the data closer to its instances in the cloud provider and thus reduce network traffic to an absolute minimum. 
It is also advisable to use private networks between instances and free network links for storing test artifacts whenever possible.

### Find out how your provider charges for instances.

Running instances costs money, but do you know how your provider charges for that time? Knowing this, keep instances running only long enough to accomplish something useful without incurring idle infrastructure costs.
For example, if a cloud charges by the second, it makes sense to stop instances when they are idle. However, if billing is by the hour, it is advisable to keep them idle until the next hour and use them if a test needs to be performed.  

### Make sure the instances are ready for use. 

Create your own instance images to ensure you have everything you need to run your work. Installing system packages after launching an instance causes delays, and *mirrors* with broken packages lead to provisioning errors.

### Use reference instances to strike a balance between performance and cost. 

Larger and more powerful instances can speed up your tests, but they come at a high cost. Therefore, be sure to compare different instances to find the best performance return for your money. 
If a faster instance costs twice as much as a slower one, but only offers a 10% reduction in test time, skip the upgrade.

### Monitor constantly

Incorrect configurations or inadequate network traffic controls cause billing spikes, and ideally you should work quickly to correct them. 
Furthermore, monitoring the invoice is also interesting because it highlights areas where it's possible to optimize spending. Successful teams seek optimizations that allow their test workload to grow at a faster rate than their invoice.

## Conclusion

Put these strategies into practice and you'll see that they can bring many benefits. 
With them, it's easy to adjust performance in relation to price, teams can create forecasts of how much the test will cost over time, and the people paying the bill will know where all the money is really going.  
Keeping costs under control and the finance department satisfied is also a sign of success in continuous cloud integration.
Did you enjoy this content? Would you like to understand more about DevOps, continuous integration, cloud storage, and how these technologies can help in the digital development of your business? [Talk to our experts](/en/us/).

## Discover how Cloud Native your company is with this questionnaire and receive a report with acceleration proposals.

[![](/wp-content/uploads/2021/05/Sem-Titulo-1.png)](/en/cloud-native-assessment/)

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
