---
title: "API Security: Check out the top 10 security flaws according to OWASP."
slug: "seguranca-de-apis-confira-as-top-10-falhas-de-seguranca-do-owasp"
date: "2022-11-22T16:13:02"
modified: "2022-11-22T16:13:02"
status: "publish"
author: "admin"
excerpt: "OWASP stands for Open Web Application Security Project and represents an international non profit organization focused on developing best practices for web application security. The organization is known for its OWASP Top 10 list, which identifies the 10 biggest security concerns for web applications. It's worth noting that OWASP also maintains a separate, similar list […]"
categories: ["apis"]
tags: ["api"]
featuredImage: "/wp-content/uploads/2022/11/Seguranca_para_APIs_BLOG_IMAGEM_DESTAQUE.png"
wpId: 161515
originalUrl: "https://vertigo.com.br/seguranca-de-apis-confira-as-top-10-falhas-de-seguranca-do-owasp/"
contentSource: "rest"
lang: "en"
seo:
  title: "API Security: Check out the top 10 security flaws from OWASP - Vertigo"
  description: "API Security. Check out the top 10 security flaws from OWASP. Access it now and read more on our blog."
  canonical: "https://vertigo.com.br/en/seguranca-de-apis-confira-as-top-10-falhas-de-seguranca-do-owasp/"
  ogImage: "/wp-content/uploads/2022/11/Seguranca_para_APIs_BLOG_IMAGEM_DESTAQUE.png"
  robots: "index, follow"
---

OWASP stands for Open Web Application Security Project and represents an international non-profit organization focused on developing best practices for web application security. The organization is known for its OWASP Top 10 list, which identifies the 10 biggest security concerns for web applications. It's worth noting that OWASP also maintains a separate, similar list focusing on APIs, which are the foundation of integration between most web applications.

We've prepared this article showcasing the Top 10 security risks for [APIs](/en/The-evolution-of-APIs%3A-the-journey-from-RPC-to-SOAP-and-XML./) according to OWASP.

Good reading.

## API security protocols are constantly evolving.

Last year, there was an update within the categories that make up the OWASP TOP 10. The last update was in 2017, but since then much has changed, and with that, the alternation of categories has changed.

Through the new TOP 10, compiled in 2021, we now have access to a new list of information, taken directly from the [OWASP website](https://owasp.org/Top10/) . Check it out.

### A01:2021- Broken Access Control

Access control is a system that manages access to information. Corrupted access controls create loopholes that allow hackers to bypass authorization and perform tasks as if they were privileged users, such as administrators.

In 2019, this vulnerability was ranked 5th, but 94% of the applications tested by OWASP suffered some kind of access control breach.

### A02:2021-Cryptographic Failures

It moved up one position from the last list, now occupying the 2nd position, previously known as Sensitive Data Exposure, which was treated as a symptom, not a root cause.

The innovation lies in the flaws related to encryption, which often lead to the exposure of confidential data or compromise of the system.

### A03: 2021-Injection

It falls to third position. 94% of the apps tested in the research suffered some form of injection, having the second highest number of occurrences in apps.

Cross-site scripting is now part of this category in this edition.

### A04: 2021-Insecure Design

This is a new category for 2021, focusing on risks related to design flaws. If we genuinely want to “move to the left” as an industry, we need more threat modeling, secure design patterns and principles, and reference architectures. An insecure design cannot be fixed by a perfect implementation because, by definition, the necessary security controls were never created to defend against specific attacks.

### A05: 2021-Security Misconfiguration

It rose from 6th position in the previous edition; 90% of applications were tested for some type of misconfiguration, with an average incidence rate of 4,5% and more than 208 occurrences of CWEs mapped to this risk category. With more changes in highly configurable software, it is not surprising to see this category rise. The former category for A4:2017-XML External Entities (XXE) is now part of this risk category.

### A06:2021-Vulnerable and Outdated Components

Formerly titled Using Components with Known Vulnerabilities, this category moved from 9th position in 2017 and addresses a known problem where many fail to assess the risks it can generate. It is the only category that does not have Common Vulnerabilities and Exposures (CVEs) mapped to the included CWEs; therefore, a standard exploit and impact weights of 5,0 are considered in its scores.

### A07: 2021-Identification and Authentication Failures

It was a broken authentication and is falling from position 2 to seventh place, and now includes CWEs that are more related to identification failures. This category is still an integral part of the Top 10, but the greater availability of standardized frameworks seems to be helping.

### A08:2021-Software and Data Integrity Failures

This is a new category for 2021, focusing on making assumptions related to software updates, critical data, and [CI/CD pipelines](/en/What-is-a-CD-ROM-pipeline-Understand-it./) without verifying integrity.

### A09:2021-Security Logging and Monitoring Failures

Previously Insufficient Logging & Monitoring, it has moved up one position. This category has been expanded to include more types of failures that can directly impact visibility, incident alerting, and expertise.

### A10: 2021-Server-Side Request Forgery

This category represents the scenario where members of the security community are telling us that this is important, even if it is not currently reflected in the data. The data shows that the incidence rate of this category is relatively low.

## Get the best API implementation practices with Vertigo Tecnologia.

Vertigo specializes in API integration and partners with [Kong Inc.](/en/partnerships/kong/) , which has been named a leader in Gartner's Magic Quadrant for API management for two consecutive years.

Having the best security practices for your company is essential to surviving a constant stream of vulnerabilities that tend to harm your operations.

Therefore, having reliable partners is essential to improve the results achieved.

Speak with our experts; we have a team prepared and ready to guide you and present the best solutions on the market.
