---
title: "Docker Enterprise 2.1 on DigitalOcean – Part II"
slug: "digitalocean-parte-ii"
date: "2018-11-29T16:59:13"
modified: "2026-02-02T20:38:27"
status: "publish"
author: "admin"
excerpt: "In the first part of this series, we learned how to set up a new Docker Enterprise 2.1 cluster on DigitalOcean using Terraform and Ansible. If you haven't read the first part yet, click here. In this article we will discuss how to configure Docker Enterprise so that: Persistent volumes create volumes in block storage […]"
categories: ["blog", "devops", "dockeree"]
tags: ["cloud", "devops", "digitalocean", "docker", "vertigo-tecnologia"]
featuredImage: "/wp-content/uploads/2026/02/digitalocean-parte-ii.png"
wpId: 3347
originalUrl: "https://vertigo.com.br/digitalocean-parte-ii/"
contentSource: "rest"
lang: "en"
seo:
  title: "Docker Enterprise 2.1 on DigitalOcean - Part II - Vertigo"
  description: "In the first part of this series, we learned how to set up a new Docker Enterprise 2.1 cluster on DigitalOcean using Terraform and Ansible. Keep reading this article to learn more about the topic!"
  canonical: "https://vertigo.com.br/en/digitalocean-parte-ii/"
  ogImage: "/wp-content/uploads/2026/02/digitalocean-parte-ii.png"
  robots: "index, follow"
---

In the first part of this series, we learned how to set up a new Docker Enterprise 2.1 cluster on DigitalOcean using Terraform and Ansible.

[If you haven't read the first part yet, click here.](/en/Digital-Ocean-Part-1/)

In this article we will discuss how to configure Docker Enterprise so that:

- Persistent volumes create volumes in block storage on DigitalOcean.
- Ingress controllers create load balancers on DigitalOcean

In this way, a Docker Enterprise cluster will behave like a native Kubernetes cluster on Digital Ocean.

## **What will you need?**

Make sure you have completed the first part of this series and check if your current shell is configured to connect to the cluster remotely (by running the client bundle script “env.sh”).

Make sure you have kubectl and helm installed. The “kubectl” tool (command line for Kubernetes) comes with Docker Desktop, but you can install it manually.

On OSX, these tools can be installed using Homebrew:

brew install kubernetes-cli brew install kubernetes-helm

Note that Docker Enterprise uses Kubernetes 1.11, so it is recommended to use the kubectl version closest to 1.11 (1.12 is good).

This assumes you've read the first article and that the project cloned from the repository ( [https://github.com/vertigobr/dockeree-digitalocean](https://github.com/vertigobr/dockeree-digitalocean) ) resides in your shell. You can verify its functionality by running the following command:

**kubectl get nodes**
NAME STATUS ROLES AGE VERSION do-manager Ready master 43m v1.11.2-docker-2 do-worker1 Ready 30m v1.11.2-docker-2 do-worker2 Ready 30m v1.11.2-docker-2

## **Step 1: Configure Secret**

A valid token needs to be used internally to create resources in your DigitalOcean account; that is, you will have to create a Secret and store it in the cluster.

Simply copy the “digitalocean-secret.yml.template” provided in the project to a new “digitalocean-secret.yml” file (please do not rename the original file):

cp digitalocean-secret.yml.template digitalocean-secret.yml

Now edit “digitalocean-secret.yml” and replace the value within the “access-token” entry with your own DigitalOcean token.

You will create the Secret resource by running the following command:

**kubectl apply -f digitalocean-secret.yml**
secret "digitalocean" created

## **Step 2: CSI Storage Installation**

We will install the CSI (Container Storage Interface) located at [https://github.com/digitalocean/csi-digitalocean](https://github.com/digitalocean/csi-digitalocean) . The CSI plugin allows you to use DigitalOcean Block Storage with the Docker Enterprise Kubernetes Orchestrator transparently, making it the default storage for persistent volumes.

A simple command that does this trick:

kubectl apply -f [https://raw.githubusercontent.com/digitalocean/csi-digitalocean/master/deploy/kubernetes/releases/csi-digitalocean-v0.2.0.yaml](https://raw.githubusercontent.com/digitalocean/csi-digitalocean/master/deploy/kubernetes/releases/csi-digitalocean-v0.2.0.yaml)

Several resources will be created (you can find them within the “kube-system” namespace). You can verify that this new storage controller is the cluster default:

**kubectl get sc**
NAME PROVISIONER AGE do-block-storage (default) com.digitalocean.csi.dobs 27m

**Important:** We need to maintain the version in CSI 0.2.0 as long as Docker Enterprise Kubernetes remains on version 1.11.

To test CSI, you need to create a persistent volume claim. Luckily, we already have a YAML file ready for this:

**kubectl apply -f** [**https://raw.githubusercontent.com/digitalocean/csi-digitalocean/master/examples/kubernetes/deployment-single-volume/pvc.yaml**](https://raw.githubusercontent.com/digitalocean/csi-digitalocean/master/examples/kubernetes/deployment-single-volume/pvc.yaml) persistentvolumeclaim “csi-deployment-pvc” created

You can check DigitalOcean to see the new block storage volume that was created:

![](/wp-content/uploads/2018/11/digitalocean.png)

## **Step 3: Install CCM**

DigitalOcean's CCM (Cluster Control Manager) contains an important service controller component, responsible for creating Load Balancers when a LoadBalancer service is created in Kubernetes.

CCM can be installed using the command below:

kubectl apply -f [https://raw.githubusercontent.com/digitalocean/digitalocean-cloud-controller-manager/master/releases/v0.1.8.yml](https://raw.githubusercontent.com/digitalocean/digitalocean-cloud-controller-manager/master/releases/v0.1.8.yml)

## **Step 4: Installing Helm (Tiller)**

Helm (a package manager for Kubernetes) operates with a server-side component (Tiller). You need to install this and grant the appropriate permissions:

helm init kubectl create rolebinding default-view \\ --clusterrole=view \\ --serviceaccount=kube-system:default \\ --namespace=kube-system kubectl create clusterrolebinding add-on-cluster-admin \\ --clusterrole=cluster-admin \\ --serviceaccount=kube-system:default

The output will look something like this:

... Tiller (the Helm server-side component) has been installed into your Kubernetes Cluster. ...Happy Helming! rolebinding.rbac.authorization.k8s.io "default-view" created clusterrolebinding.rbac.authorization.k8s.io "add-on-cluster-admin" created

## **Step 5: Ingress controller setup**

The CCM repository on GitHub has multiple examples of Ingress controllers (load balancers) for different situations. We'll discuss them later. For now, we'll install a general-purpose load balancer using Helm:

helm install stable/nginx-ingress --name my-nginx --set rbac.create=true --namespace nginx-ingress

This ingress controller must have activated itself on a new load balancer in DigitalOcean. Check the DigitalOcean website, on the “Networking/Load Balancers” page, to see if there is anything similar to this:

![](/wp-content/uploads/2018/11/digitalocean-1.png)

Note this IP address; you can test the load balancer now by using curl to access the default backend and the "healthz" endpoint:

**curl**
default backend - 404
**curl -v /healthz**
... < HTTP/1.1 200 OK ...

Great! Let's move on to the next steps. 🙂

## **Step 6: Some spells with Domains**

This would be an excellent time to create a wildcard subdomain on top of the domain you've been controlling on DigitalOcean.

Now you will create a new “A” record in your domain in the DigitalOcean console with the hostname (“\*.apps”) and point it to the IP address of the load balancer.

![](/wp-content/uploads/2018/11/digitalocean2.png)

With this simple trick, any ingress resource that declares its own hostname over this domain “\*.apps.devops.mycompany.com” will be properly served through the load balancer.

On the other hand, any URL on this domain that is not mapped in the ingress resources will be automatically responded to by the backend default:

**curl dummy.apps.*devops.mycompany.com***
default backend - 404

If the new subdomain takes too long to propagate to your current DNS, you can always use curl directly to the load balancer's IP address and use a fake hostname:

**curl -H "Host: dummy.apps.*devops.mycompany.com*"**
default backend - 404

## Step 7: A complete example (HTTP)

Based on the original “nginx-ingress” controller example on Github, a few files residing in the “cafe” folder are used for our environment testing with a set of real applications on the backend.

- **cafe.yaml:** two small examples of web applications
- **cafe-ingress-http.yaml:** An HTTP configuration for an Ingress application for both applications.

Applications can be published using the command below:

**kubectl apply -f cafe/cafe.yaml**
deployment.extensions "coffee" created service "coffee-svc" created deployment.extensions "tea" created service "tea-svc" created

These services are now running on the cluster, scaled to the multiple pods specified in the deployment file.

An ingress resource is what we need for our application to be served through the appropriate URL:

**kubectl apply -f cafe/cafe-ingress-http.yaml**
ingress.extensions "cafe-ingress" created

Both applications can now be accessed, each with its own URL:

**curl cafe.apps.*devops.mycompany.com***
Server address: 192.168.175.76:80 Server name: coffee-7dbb5795f6-k7ffn Date: 20/Nov/2018:19:41:50 +0000 URI: / Request ID: 337252aea94dae202c9da959ecdc333e
**curl tea.apps.*devops.mycompany.com***
Server address: 192.168.175.79:80
Server name: tea-7d57856c44-dshh4
Date: 20/Nov/2018:19:41:57 +0000
URI: /
Request ID: 4f10a61e67e3e8f5a538101ae999f319

Note that the wildcard points to the load balancer, which was automatically configured by the CCM. This way, the request is forwarded from the ingress controller to the running server node.

**In our next article in this series** , we will learn how to use HTTPS certificates for load balancers (i.e., outside the cluster) and in each ingress service (within the cluster). We will also learn other ways to obtain HTTPS certificates.

See you next time!

**Translation: Thor Salgado – Vertigo Technology Intern and Docker Enthusiast**

**Review by: Rubens Freitas – Infrastructure Manager, Vertigo Tecnologia**

* * *

### How about learning how to integrate Docker with Java as well?

[![](/wp-content/uploads/2018/11/Integracao-Docker-com-Java-CTA-1.png)](https://materiais.vertigo.com.br/paper-integracao-docker-java?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)
