---
title: "Kubernetes: 6 key components of its architecture"
slug: "kubernetes-6-principais-componentes-da-sua-arquitetura"
date: "2021-09-16T11:02:42"
modified: "2026-02-02T20:40:21"
status: "publish"
author: "admin"
excerpt: "Kubernetes is an open source container orchestration system that is increasingly used in the technology market. Despite simplifying deployments, it has significant complexity due to the many parts of its architecture. Therefore, it is becoming almost mandatory practice for DevOps teams to have a good understanding of the different components of Kubernetes and how they […]"
categories: ["kubernetes"]
tags: ["docker", "kubernetes"]
featuredImage: "/wp-content/uploads/2026/02/kubernetes-6-principais-componentes-da-sua-arquitetura.png"
wpId: 157267
originalUrl: "https://vertigo.com.br/kubernetes-6-principais-componentes-da-sua-arquitetura/"
contentSource: "rest"
lang: "en"
seo:
  title: "Kubernetes: 6 key components of its architecture -"
  description: "Discover the 6 main components of the Kubernetes architecture. Visit the blog and stay up-to-date on the latest news in the world of technology."
  canonical: "https://vertigo.com.br/en/kubernetes-6-principais-componentes-da-sua-arquitetura/"
  ogImage: "/wp-content/uploads/2026/02/kubernetes-6-principais-componentes-da-sua-arquitetura.png"
  robots: "index, follow"
---

Kubernetes is an open-source container orchestration system that is increasingly used in the technology market. Despite simplifying deployments, it has significant complexity due to the many parts of its architecture.

Therefore, it is becoming almost mandatory practice for DevOps teams to have a good understanding of the different components of Kubernetes and how they work together.

In this article, we will explain the 6 main architectural components that make up Kubernetes and demonstrate the role that each of them plays.

**Read also**

- [DevOps and Kubernetes: an efficient and complementary duo.](/en/DevOps-and-Kubernetes%3A-an-efficient-and-complementary-duo./)
- [GitOps: From Automation to Continuous Integration](/en/Gitops-from-automation-to-continuous-integration/)

<iframe title="YouTube video player" src="https://www.youtube.com/embed/juIEdQ4UjC4?si=AIwJbVmjY26g2S74" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

## Container: the foundation of Kubernetes 

Containers are the building blocks in which application code is stored in the cloud or a private data center. Kubernetes was created precisely to effectively manage these building blocks. It can adapt to various solutions, such as those from [Liferay](/en/partnerships/Liferay/) and [Kong](/en/partnerships/kong/) , our business partners.

The container "packages" the application code at runtime and its libraries. The biggest advantage of applying containerization is making your application portable, as containers can be shared with other team members and the application can be run on different machines more easily.

Kubernetes was developed to operate at scale. Containerizing enterprise applications is a major challenge, but the Kubernetes architecture simplifies the process quite efficiently.

## Pod: a collection of containers

Kubernetes pods are a collection of containers that share resources, such as namespaces (to isolate resources by project or functionality), storage, and networking. Pods are dynamic; when they finish their tasks, they are deleted. If any node running within a pod encounters an error, that pod will also be deleted. In this way, pods are managed throughout their entire lifecycle, from creation to termination, being replaced as needed.

Containers within a pod have different states: waiting, running, and terminating. Generally, pods are not created individually by the administrator, but rather automatically by the controller, based on specifications defined by the administrator.

## Node: Kubernetes infrastructure

A node is a server instance that runs other higher-level components in Kubernetes. It is part of the infrastructure in a Kubernetes system, as each node is made up of components such as kubelets and kube-proxies.

The kubelet runs as an agent on each node and then registers it with the API server. It then periodically transmits information about the pods on a given node. The Kube-proxy, on the other hand, is a network proxy running on each node in your cluster, implementing the Kubernetes service concept and maintaining network rules on the nodes. These network rules allow communication with your pods from sessions inside or outside your cluster.

## Kubernetes Cluster

When you implement Kubernetes, you get a cluster consisting of a set of processing servers, the nodes responsible for running containerized applications. Every cluster has at least one processing server to host the pods.

The management environment monitors the processing nodes and pods contained within the cluster. In production environments, the management environment typically runs on multiple computers, whereas a cluster usually runs on multiple nodes.

## Control Plane: Cluster Management

The control plane is where the cluster is managed. There are many components that make up the control plane; let's look at some of them.

![Kubernetes Components](/wp-content/uploads/2021/09/components-of-kubernetes-scaled.jpg)

**APIserver**

The most important part of the control plane is the API server, as it acts as the interface that allows communication between all other components of the cluster, as well as being the entry point for external requests. Through it, you can query and change the state of other components in the Kubernetes system.

**Controller manager**

The controller manager is responsible for changing the current state of the cluster to a more suitable one. Within Kubernetes there are many controllers: the node controller, the replication controller, the namespace controller, and the endpoint controller.

**etcd**

etcd is a core data storage component of Kubernetes, the standard system for container orchestration. All data stored in etcd needs to be backed up. etcd can run on the same node as the cluster or even on a separate infrastructure, thus providing greater capacity for storing backups and greater control over etcd.

**Scheduler**

For each pod created or other unscheduled pods, the scheduler selects an ideal node to run it. However, the nodes need to be filtered according to specific scaling requirements, as each one has different requirements and resources. By meeting these requirements, the programmer has the freedom to customize them in the way that best suits their project.

## Kubernetes data storage

There is data that would inevitably be lost when a pod or container fails or is deleted; therefore, Kubernetes uses what are called storage volumes.

It is possible to have external storage volumes for Kubernetes, and these volumes can be provisioned by you or dynamically by the system.

## **Vertigo is the ideal partner for implementing Kubernetes.** 

Now that you have a more detailed overview of the components of Kubernetes, you are able to understand more intimately how container orchestration can speed up the building of your application.

Vertigo Tecnologia specializes in promoting digital transformation in the public and private sectors and has qualified professionals with in-depth knowledge of Kubernetes architecture. We are partners with [Weaveworks](/en/partnerships/weaveworks/) and Docker, specialists in application orchestration, operating and managing [Kubernetes with GitOps](/en/How-Gitops-offers-high-speed-for-Kubernetes/).

Does your company already use Kubernetes and enjoy all the benefits of its application? If not, then contact our team, as we will be happy to help you.

**Read more**

- [Digital Transformation in the Utilities Sector](/en/Digital-transformation-in-the-utilities-sector/)
- [What is a CI/CD pipeline? Understand it.](/en/What-is-a-CD-ROM-pipeline-Understand-it./)
