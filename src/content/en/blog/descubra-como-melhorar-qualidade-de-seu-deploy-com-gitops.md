---
title: "Discover how to improve the quality of your deployment with GitOps."
slug: "descubra-como-melhorar-qualidade-de-seu-deploy-com-gitops"
date: "2021-04-26T11:54:36"
modified: "2021-04-26T11:54:36"
status: "publish"
author: "admin"
excerpt: "A good deployment is mandatory for the success of a development team. As an IT professional, you're probably used to building features to make your customers' lives easier. However, these improvements don't add value to the business until they're available to the user. With the introduction of DevOpsDevelopers have become even more committed to automating […]"
categories: ["transformacao-cloud-native"]
tags: ["adotar-devops", "cloud-native", "deploy", "gitops", "kubernetes"]
featuredImage: "/wp-content/uploads/2021/04/deploy-com-gitops-1200x675-1.jpg"
wpId: 5517
originalUrl: "https://vertigo.com.br/descubra-como-melhorar-qualidade-de-seu-deploy-com-gitops/"
contentSource: "rest"
lang: "en"
seo:
  title: "Discover how to improve the quality of your deployment with GitOps - Vertigo."
  description: "For your IT to succeed, development teams need to perform a good deployment. Knowing this importance, learn how to improve its quality."
  canonical: "https://vertigo.com.br/en/descubra-como-melhorar-qualidade-de-seu-deploy-com-gitops/"
  ogImage: "/wp-content/uploads/2021/04/deploy-com-gitops-1200x675-1.jpg"
  robots: "index, follow"
---

**A good deployment is mandatory for the success of a development team.** As an IT professional, you're probably used to building features to make your customers' lives easier. However, these improvements don't add value to the business until they're available to the user.
With the introduction of [DevOps](/en/Benefits-of-adopting-a-DevOps-culture-in-times-of-crisis./)Developers have become even more committed to automating the code, making them responsible for security.
Knowing this importance, how do you classify the maturity level of your deployment and improve its quality? Keep reading our article and find out!

## How is deployment typically performed?

The developer builds code and then "copy/pastes" it onto the production server. This process can be very fast and is a great way to prove a concept. However, in the long run, it cannot be replicated, much less with any guarantee of quality.
Furthermore, it is reasonably risky because post-deployment tests are not run and the process is performed manually. In other words, if the application breaks, all that remains is to hope that it will be restored to the production environment.

## How often should deployment be performed?

After deployment is complete, many changes happen simultaneously, exponentially increasing your risk. When something goes wrong, how do you figure out which feature caused the problem? Sometimes it's not a single issue, but rather a combination of several changes that weren't tested together.
Automations that affect multiple applications and data centers are difficult to reverse. Imagine halting production without an easy rollback, for example. Often **Performing small deployments divides the risk, making the process much more controllable.**.
Another issue arises when the development team has to change context. After a feature is completed, problems may be encountered, affecting the work. If the development was done a month ago, for example, the professional will certainly have difficulty remembering the purpose of the project.

## Aim for zero downtime.

By implementing this concept in your company, you show your end user that you care about their experience. This can be achieved in two ways:

### Blue/Green deploy

You will have your production environment with two application instances:

1.  Live, with users accessing it;
2.  Copy, used for testing.

After deploying the new version, it's possible to warm up the application to avoid downtime and run tests to validate its integrity. This is an excellent feature so you don't have to disintegrate the entire application just because of an incorrect deployment.

### Canary/Rolling deploy

This can be useful when you have multiple machines, as it allows for incremental and continuous deployment. By performing it on only a subset of traffic at a time, your application doesn't go offline and risks are minimized.

## Continuous deployment

- **continuous delivery** It is the ability to access any version of the application at any time.
- **Continuous deployment** It automatically deploys all code changes.

At this point you already have a mature project with high code coverage and you believe that your test suites will identify problems during the process. [release](/en/The-main-steps-to-automate-software-release-management./) Pipeline. Each code change occurs without the need for validation.
A small change takes less than 30 minutes, maybe less than 10 to go into production. That's great! Just make sure to keep up the quality, and with that, you'll have passionate customers.

## How can I improve my deployment?

### Logs and metrics

You need basic logging at any level. Preferably, in a tool to centralize them across applications.
Even better if you have a widespread tracking system, where you can see all the steps of a user's request in the downstream application.

### Alert

In a monolithic architecture, you only need to verify the operation of one service. With [microservices](/en/the-advantages-of-microservices-architecture/) , there are dozens, even hundreds. Therefore, you need [observability](/en/Why-observability-and-the-future-of-systems-monitoring/) for visualization and alerting about the integrity of the application.

### Automated testing

To begin deploying frequently, short tests are necessary. After all, a manual testing process that takes weeks wouldn't be practical.
Testing needs to be automated, run quickly, and provide a secure infrastructure for change.

## Why is GitOps the best solution for your deployment?

**GitOps' ability to treat everything as code keeps all resources under version control.** Changes can be made and reviewed, then fed through the automated pipeline that verifies, deploys, and monitors the change.
Any deviation from the desired state of the application – the emergence of a bug or vulnerability, for example – will be detected long before it becomes a significant cost to the business.
By managing your applications through control loops with GitOps, you gain a number of benefits that easily meet the metrics achieved by high-performance teams.
This results in increased business profitability and market share.

## More safety

Using Git to manage YAML files makes it easier to verify security requirements. With policies declared in a configuration file, you know who has access to what and can easily verify this information in the code.
Git's guarantees of correctness and security, supported by cryptography used to track and manage changes, as well as their authorship, are fundamental for a correct and secure cluster definition.
If a breach occurs, the source can be used to recreate a new application independent of the compromised one. This reduces downtime and allows for a much better incident response, as well as more effective recovery to meet compliance.
By separating responsibility between software integration and testing, and then releasing it to a production environment, the impact of compromise is reduced, providing a smaller attack surface.

## Speed ​​and productivity

Continuous deployment automation with integrated feedback and control loop accelerates mean time to deployment by providing more frequent release support.
Declarative definitions maintained in Git allow developers to use familiar workflows, reducing the time needed to activate new build or test environments.
Your teams can submit more changes per day, which translates to a faster response time for new features and functionalities available to the customer.

## Reduced average recovery time

The time to recover from a cluster collapse is also reduced with GitOps best practices. Git's built-in capabilities allow for stable and reproducible rollbacks.
Since your entire system is described in Git, you have a single source to recover from after a cluster failure, reducing the MTTR from hours or days to minutes.

## Enhanced stability and reliability

GitOps provides a single operational model for building infrastructure and applications, so you have consistent end-to-end workflows across your entire organization.
Their continuous integration and deployment pipelines are driven by pull requests, and their tasks are fully reproducible through Git.

## Compliance and auditing

By incorporating Git as part of your cluster management strategy, you automatically obtain an audit trail for all changes that can be used to meet compliance goals and ensure stability.

## Conclusion

Making your deployment smaller, more frequent, and faster reduces risk while simultaneously allowing development teams to deliver more efficiently.
Automation also makes it more secure, allowing you to perform audits so you know who made which change and when.
We can help you perform deployments more securely and with less overhead using GitOps! [Contact Us](/en/us/) to get a demonstration.

## Learn how to perform frequent deployments more securely and with less overhead using GitOps.

[![](/wp-content/uploads/2021/01/Kubernetes-com-GitOps.png)](https://materiais.vertigo.com.br/automatizando-kubernetes-gitops)

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
