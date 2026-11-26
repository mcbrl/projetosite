---
title: "The main steps to automate software release management."
slug: "as-principais-etapas-para-automatizar-gerenciamento-de-releases-de-software"
date: "2020-12-18T17:36:07"
modified: "2020-12-18T17:36:07"
status: "publish"
author: "admin"
excerpt: "Software developers face the difficult task of making decisions based on data that is often incomplete. Depending on the organization, there may be several different roles (such as software engineers, infrastructure operators, and sometimes legal authorities within the company) involved in the decision to release or not release software, complicating the process. These roles are […]"
categories: ["desenvolvimento-de-software"]
tags: ["cloud-native", "desenvolvimento-de-software", "produtos-digitais", "slo", "transformacao-digital"]
featuredImage: "/wp-content/uploads/2020/12/gerenciamento-releases-software.png"
wpId: 5406
originalUrl: "https://vertigo.com.br/as-principais-etapas-para-automatizar-gerenciamento-de-releases-de-software/"
contentSource: "rest"
lang: "en"
seo:
  title: "The main steps to automate software release management - Vertigo"
  description: "Several questions arise when the risk of a new software release is assessed, and efforts are made to make this process more transparent and measurable."
  canonical: "https://vertigo.com.br/en/as-principais-etapas-para-automatizar-gerenciamento-de-releases-de-software/"
  ogImage: "/wp-content/uploads/2020/12/gerenciamento-releases-software.png"
  robots: "index, follow"
---

Software developers face the difficult task of making decisions based on data that is often incomplete. Depending on the organization, there may be several different roles (such as software engineers, infrastructure operators, and sometimes legal authorities within the company) involved in the decision to release or not release software, complicating the process.
These roles are changing with continuous automation and Agile. There is no time to manually gather all the necessary facts. Organizations that have transitioned to Agile development, DevOps, continuous delivery, or test automation, enforce automation in all decision-making.
Automating processes allows for (and leads to) higher release frequencies and progressive delivery strategies, with multiple versions running in parallel, both in pre-production and production.
The speed at which launch cycles are increasing results in the need to automate operations as much as possible to ensure that organizations can compete in this dynamic and rapidly changing environment. According to research by [Cloud Native Computing Foundation](https://www.cncf.io/blog/2020/03/04/2019-cncf-survey-results-are-here-deployments-are-growing-in-size-and-speed-as-cloud-native-adoption-becomes-mainstream/) disclosed this year, the number of daily, weekly and It increased dramatically.
For most organizations, the software lifecycle involves sets of tools, often exceeding ten different ones, that contribute to automation.
It wasn't just the spread and automation of tools that increased; the same happened with the number of validations and decision-making processes for each version. The effort of manually collecting data becomes the bottleneck for version automation and automated software lifecycles.
Automating any decision-making based on release risks isn't just about implementing rule sets and writing some scripts. It also requires domain knowledge to include considerations about what services are provided by the software, what SLAs are configured, and how any software release might impact them.
Read our article and discover the step-by-step process to automate software release management in a secure and controlled manner.

## The steps of impact analysis and software version recognition.

Several questions arise when assessing the risk of a new software release, and efforts are made to make this process more transparent and measurable. Below is a list of questions you should ask to perform a typical risk assessment:

### Step 1: Do we have a new release?

- Has it been validated in quality environments?
- What are the new versions we currently have in the pipeline?
- How developed are the versions in the delivery process?
- What is the change log?
- What known bugs are expected?
- Were the software test and quality results reliable?

### Step 2: What is the current status of the software running in production?

- What availability do the current versions provide in production?
- How are the current versions performing in production?
- How many resources do the current versions consume in production?
- Do we have any releases currently in production? In other words, any data being redirected from a previous version to a new version?
- How does the new version perform in terms of availability, performance, and resource consumption?

### Step 3: What could be the impact of the release?

The questions listed above need to be answered to allow for any impact analysis. Answers regarding new releases and current production status help inform the following:

- What impact will the new version have on resource consumption?
- What will be the impact of the release on overall performance and availability?
- Could this press release negatively impact the brand?

Defining the impact of a release and attempting to quantify it to ensure fair and accurate decision-making is an integral task. Often, pressures to release a release result in decisions being made based on incomplete data or under duress from conditions beyond one's control.

## Definition and evaluation of SLO for production monitoring.

Managing the risk of releasing new software versions is closely related to the reliability of current versions in production. Many of the operational perspectives on software service reliability are covered by a site reliability engineering (SRE) resource published by Google, with the concepts of service level indicators (SLIs) for metrics and *service-level objective* (SLOs) used to define objectives. SLIs and SLOs provide the basis for SLAs (*Service Level Agreement*).
In any software launch scenario, the following questions arise:

- What is the risk of violating SLAs with any client due to SLO failures?
- What is the current status of all SLOs in production?
- How many errors, failed requests, slow loading times, or *downtime* Do I still have time before violating the SLOs?
- How does a new version of the software behave with respect to my SLIs/SLOs?

SLO evaluation is not limited to production and can also be applied to quality *gates in pre-production or any deployment scenario. Open source projects for release automation already provide automated quality* *gates* based on SLO definitions – generating metrics that are used and evaluated against any target objective.

## Software evaluation in production

Before deciding whether or not to release a software program, it is essential to have all the information, your questions about production SLOs answered, and data on how a new software version behaves in relation to defined SLOs.
It is also important to consider the frequency of releases and, consequently, the greater amount of work that will be required to manually gather the data for deployment.
If automation is not applied to provide answers and recommendations for data collection and decision-making, release management can become a bottleneck in software product lifecycles.
Assessing the risk of a new software release as a basis for any decision-making involves combining answers related to the current status of SLOs in production and the potential impact on their results.
When there is no production failure budget, the easiest course of action may be to define... *backouts* from the operations team. However, even with this budget, a release may be automatically halted if the latest versions perform worse with respect to SLO assessments.
New software versions prepared in a release process need to be evaluated using the results of test execution analysis in relation to SLO (Service Level Assessment) evaluations. These definitions provided for production can be evaluated during the testing phases, where performance degradations are detected early.
Thus, SLO violations can be detected even before the software reaches production and customers, providing root cause analysis for new software versions.
Establishing monitoring definitions in pre-production allows for a safe and robust way to move releases from preparation to production, with minimal risk of negative impact.

## Conclusion

When agile methodologies are adopted, agility generally stops the moment the application reaches the final stage of development. However, the software provides no value until it is in production.
Organizations cannot truly claim to be agile until they apply the principles and practices for the release and operations management process. The indicated approach is designed to make release management an integral part of the delivery process, ensuring that software is production-ready from the start of the project, so that releases become frequent, reliable, and low-risk.
We have an agile development team for customized, containerized, and secure digital products, from planning to support. Count on our expertise to create incredible digital products. Leave the planning, execution, and support of your application to us, and achieve the full potential your project needs!
[Talk to our experts](/en/us/) and achieve much more secure and effective deployments of customized applications.

## Discover how Cloud Native your company is with this questionnaire and receive a report with acceleration proposals.

[![](/wp-content/uploads/2021/03/cloud-native-quadrado.png)](/en/cloud-native-assessment/)

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
