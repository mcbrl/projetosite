---
title: "How to use custom metrics in Kubernetes Horizontal Pod Autoscaler (HPA)"
slug: "como-utilizar-metricas-personalizadas-no-horizontal-pod-autoscaler-hpa-do-kubernetes"
date: "2023-05-08T15:54:41"
modified: "2026-02-02T20:37:30"
status: "publish"
author: "admin"
excerpt: "Custom metrics are user defined performance indicators that extend the standard resource metrics (e.g., CPU and memory) supported by the Horizontal Pod Autoscaler (HPA) in Kubernetes. By default, HPA bases its scaling decisions on pod resource requests, which represent the minimum resources required for the pod to run. However, this approach may not be ideal […]"
categories: ["kubernetes"]
tags: ["kubernetes"]
featuredImage: "/wp-content/uploads/2026/02/como-utilizar-metricas-personalizadas-no-horizontal-pod-autoscaler-hpa-do-kubernetes.png"
wpId: 162035
originalUrl: "https://vertigo.com.br/como-utilizar-metricas-personalizadas-no-horizontal-pod-autoscaler-hpa-do-kubernetes/"
contentSource: "rest"
lang: "en"
seo:
  title: "How to use custom metrics in Kubernetes Horizontal Pod Autoscaler (HPA) - Vertigo"
  description: "Learn how to use custom metrics in Kubernetes' Horizontal Pod Autoscaler (HPA). Read more on our blog."
  canonical: "https://vertigo.com.br/en/como-utilizar-metricas-personalizadas-no-horizontal-pod-autoscaler-hpa-do-kubernetes/"
  ogImage: "/wp-content/uploads/2026/02/como-utilizar-metricas-personalizadas-no-horizontal-pod-autoscaler-hpa-do-kubernetes.png"
  robots: "index, follow"
---

## Introduction to custom metrics in HPA

Custom metrics are user-defined performance indicators that extend the standard resource metrics (e.g., CPU and memory) supported by the Horizontal Pod Autoscaler (HPA) in Kubernetes.

By default, HPA bases its scaling decisions on pod resource requests, which represent the minimum resources required for the pod to run. However, this approach may not be ideal for optimal performance. Instead, it is often more beneficial to scale based on resource limits, as this ensures your application does not hit its maximum resource constraints.

Custom metrics enable more granular and application-specific automated scaling decisions, leading to better resource utilization and system performance.

## Why are custom Kubernetes metrics necessary?

[While the metrics that Kubernetes](/en/Kubernetes-solutions-with-Mirantis/) provides by default , such as CPU and memory usage based on resource requests, are useful for many scenarios, they may not be sufficient for all applications.

Scaling based on resource limits ensures your application can handle variable workloads without reaching its maximum allowed resources. Custom metrics allow you to tailor HPA scaling behavior based on your application's specific needs, enabling more accurate and efficient automatic scaling.

### Using custom metrics in HPA:

To use custom metrics in HPA, you need to:

1.  Ensure your cluster is configured to support custom metrics. This typically involves deploying a custom metrics API server and configuring the necessary monitoring tools, such as Prometheus.
2.  Define custom metrics in your application code, if necessary, and expose them through an appropriate endpoint.
3.  Configure the HPA to use custom metrics by specifying them in the HPA manifest.

### Examples of custom metrics and their use cases:

**1 – Request Rate** : For applications where the number of requests received has a significant impact on resource consumption, you can define a custom metric based on the request rate. This allows HPA to scale the number of replicas based on actual workload, rather than just CPU or memory usage.

**Use case** : an API gateway that needs to handle different levels of inbound traffic.

**2 – Queue size** : For applications that process tasks from a queue, you can create a custom metric based on the queue size. This allows the HPA to scale the application based on the accumulation of tasks, ensuring that processing capacity matches the workload.

**Use case** : a background job processing service that consumes tasks from a message queue.

**3 – Application-specific metrics** : You can have unique performance indicators specific to your application, such as the number of active user sessions or the database transaction rate. Creating custom metrics based on these indicators can help the HPA make more informed scaling decisions, tailored to your application's behavior.

**Use case** : an e-commerce platform that experiences fluctuations in user activity and needs to scale its services accordingly.

In summary, custom metrics in HPA allow for more precise and specific automatic scaling of the application, extending the resource metrics that are supported by [Kubernetes](/en/Applying-observability-in-Kubernetes/) by default.

By leveraging custom metrics, you can optimize resource utilization and performance across a wide variety of applications and use cases.

## How to adopt solutions that use Kubernetes?

Vertigo has been operating in the market for over 20 years, providing innovative solutions and helping to achieve better results for companies in various sectors.

Within our portfolio of partnerships, [Mirantis Kubernetes](/en/partnerships/Mirantis/) delivers containerized solutions capable of reducing costs and improving team performance.

Talk to our team of experts, get your questions answered, and have access to the best solutions to boost your company's projects.

*Technical content authored by our DevOps Analyst, Caio Barbieri.*

![](/wp-content/uploads/2023/05/Assinaturas-site_Caio-300x100.png)
