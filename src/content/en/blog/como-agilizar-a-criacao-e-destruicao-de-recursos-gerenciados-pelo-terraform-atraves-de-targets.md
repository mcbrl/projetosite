---
title: "How to streamline the creation and destruction of resources managed by Terraform using targets."
slug: "como-agilizar-a-criacao-e-destruicao-de-recursos-gerenciados-pelo-terraform-atraves-de-targets"
date: "2023-05-22T16:14:43"
modified: "2023-05-22T16:14:43"
status: "publish"
author: "admin"
excerpt: "Nowadays, infrastructure environments are dynamic, as there is a constant need for changes within them, whether due to changes in scope, the addition or removal of resources, experimentation, or even maintenance, whether in public or private clouds. These small, constant needs for changes or corrections in already established, consolidated environments managed by Terraform , when […]"
categories: ["hashicorp"]
tags: ["hashicorp"]
featuredImage: "/wp-content/uploads/2023/05/BLOG_IMAGEM_DESTAQUE-3.png"
wpId: 162077
originalUrl: "https://vertigo.com.br/como-agilizar-a-criacao-e-destruicao-de-recursos-gerenciados-pelo-terraform-atraves-de-targets/"
contentSource: "rest"
lang: "en"
seo:
  title: "How to streamline the creation and destruction of resources managed by Terraform using targets - Vertigo"
  description: "Nowadays, infrastructure environments are dynamic, as there is a constant need for changes within them, whether due to scope changes, the addition or removal of resources, experimentation, or even maintenance, whether in public or private clouds. These small needs for changes or corrections […]"
  canonical: "https://vertigo.com.br/en/como-agilizar-a-criacao-e-destruicao-de-recursos-gerenciados-pelo-terraform-atraves-de-targets/"
  ogImage: "/wp-content/uploads/2023/05/BLOG_IMAGEM_DESTAQUE-3.png"
  robots: "index, follow"
---

Nowadays, infrastructure environments are dynamic, as there is a constant need for changes within them, whether due to changes in scope, the addition or removal of resources, experimentation, or even maintenance, whether in public or private clouds.

These small, constant needs for changes or corrections in already established, consolidated environments managed by [**Terraform**](/en/partnerships/hashicorp/) , when not handled in the best way, can often cause headaches for the administrators of such environments.

## **Terraform with AWS**

Let's consider the following scenario: We have a large environment managed by **Terraform on** [**AWS**](/en/partnerships/aws/) , with over **200 resources** managed by Terraform, EBS, EC2, Lambda, Load Balancer, etc.

Therefore, we have a **5TB EBS file** where we requested the deletion of this resource, which will no longer be used, as well as to avoid unnecessary costs. For this reason, we will mention some resource removal practices that can cause problems and are commonly used:

**1 – Deleting the requested EBS directly in the console:** We know that [Terraform](/en/Terraform%3A-Automate-your-cloud-infrastructure-in-code./) works with desire state, meaning that every time we run a Terraform apply, it will maintain the infrastructure state according to the written code. Deleting resources managed by Terraform directly in the cloud provider's console causes inconsistency between the real world and the Terraform state.

**What does this mean?** When we run a Terraform apply again, the EBS will be recreated (if its Terraform code still exists).

**2 – Delete the Terraform code related to EBS and run Terraform apply:** There are two problems with this practice. **The first** is the execution time of this automation, because when you run a **Terraform apply** you are following the typical flow and applying the entire Terraform plan at once, searching for changes in all the Terraform code with more than 200 resources, and the execution time will be quite long.

**The second** and most important point is that if you're careless, you might end up making changes to features **you shouldn't** . This means that, ultimately, you're looking for changes throughout the entire Terraform code, that is, across all 200 features. **A simple oversight in writing a wrong code entry could lead you to alter or remove a feature.**

Terraform targets are used precisely to help us define targets in Terraform's Destroy, Plan, and Apply commands. This allows us to work on deleting, planning, and creating resources specifically, ensuring that only the target resource is altered, thus speeding up the process of managing the infrastructure managed by Terraform. In this way, it's not necessary to scan the entire Terraform code for any maintenance; instead, only the code blocks of the target resources are read.

We also avoid the unnecessary risk of updating inappropriate features or even deleting features due to carelessness in an erroneous code change.

## **Working with targets in Terraform**

Working with targets is simple; just add the \`-target\` flag followed by the resource name to the \`apply\`, \`plan\`, and \`destroy\` commands in Terraform, as shown in the examples below:

**terraform plan -target aws\_ebs\_volume.example**

**terraform apply -target aws\_ebs\_volume.example**

**terraform destroy -target aws\_ebs\_volume.example**

Let's now look at a practical example, using Terraform automation, where we have 3 EBS files and we want to create EBS example2 and destroy EBS example3, without making any changes or reading from EBS example:

![](/wp-content/uploads/2023/05/1_targets.png)

In this case, we can perform up to three steps: a plan targeting EBS example2, an apply to create EBS example2, and finally, a destroy to delete EBS example3.

**1 – First step, let's execute a plan targeting example2:**

![](/wp-content/uploads/2023/05/2_targets.png)

**As we can see, unlike a typical flow where you execute the plan all at once, we execute the plan only on the specified target; this will also work the same way in the apply and destroy commands.**

**2 – The second step is to execute the apply command with the target for example2:**

![](/wp-content/uploads/2023/05/3_targets.png)

**As we can see, only the target resource was created.**

**3 – The third step is to execute the destroy command with the target set to example3:**

![](/wp-content/uploads/2023/05/4_targets.png)

**As we can see, only the example3 resource, which was the specified target, was destroyed.**

**Conclusion**

Terraform allows you to use targets to apply or destroy only part of a plan, thus speeding up and aiding in the problem-solving process. Targeting individual resources can be useful for troubleshooting errors, but it doesn't follow the typical workflow and should only be used when necessary.

For more information, please visit the [HashiCorp tutorial](https://developer.hashicorp.com/terraform/tutorials/state/resource-targeting) and the [Vertigo Tecnologia GitHub](https://github.com/Vertigo-Learn/terraform-ebs-example) repository.

## **Use Terraform with Vertigo Technology**

Vertigo Tecnologia has successful partnerships with the best providers of innovative solutions on the market, thus being the right-hand partner of large companies in the public and private sectors.

[HashiCorp's Terraform](/en/partnerships/hashicorp/) is part of our portfolio of intelligent solutions, making it ideal for companies that need to automate their processes and infrastructure.

Looking to reduce costs and have cutting-edge technology to protect your company? Vertigo has the best solutions and has been operating in the market for over 20 years, with the expertise needed to deliver the best results.

Interested in Terraform? Contact our sales team, we'd be happy to help.

*This article was written by our Senior DevOps Analyst, Roger Pablo.*

![](/wp-content/uploads/2023/05/Assinaturas-site_Roger.png)
