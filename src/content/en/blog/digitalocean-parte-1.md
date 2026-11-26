---
title: "Docker Enterprise 2.1 at DigitalOcean – Part I"
slug: "digitalocean-parte-1"
date: "2018-11-28T16:42:51"
modified: "2026-02-02T20:38:23"
status: "publish"
author: "admin"
excerpt: "I have deep admiration for DigitalOcean, always my first choice for bootstrapping anything, or even when I want to teach cloud computing related topics. While all cloud providers collectively impose a huge \"confusopoly\" (an oligopoly based on the impossibility of simple cost comparison by regular customers), DigitalOcean remains true to its value proposition: cost predictability. […]"
categories: ["blog", "devops", "dockeree"]
tags: ["cloud", "devops", "digitalocean", "docker", "vertigo-tecnologia"]
featuredImage: "/wp-content/uploads/2026/02/digitalocean-parte-1.png"
wpId: 3279
originalUrl: "https://vertigo.com.br/digitalocean-parte-1/"
contentSource: "rest"
lang: "en"
seo:
  title: "Docker Enterprise 2.1 on DigitalOcean - Part I - Vertigo"
  description: "I have deep admiration for DigitalOcean; it's always my first choice for bootstrapping anything, or even when I want to teach cloud computing-related topics. Keep reading this article."
  canonical: "https://vertigo.com.br/en/digitalocean-parte-1/"
  ogImage: "/wp-content/uploads/2026/02/digitalocean-parte-1.png"
  robots: "index, follow"
---

I have deep admiration for DigitalOcean, always my first choice for *bootstrapping* anything, or even when I want to teach cloud computing-related topics. While all cloud providers collectively impose a huge "confusopoly" (an oligopoly based on the impossibility of simple cost comparison by regular customers), DigitalOcean remains true to its value proposition: cost predictability.

In other words: a $5 *droplet (VM) will cost $5 at the end of the month.*

AWS's equivalent competitor product ( *Lightsail* ) was certainly created as a response to DigitalOcean's success, but DigitalOcean will always be my initial choice.

It's a fact that DigitalOcean has its own managed Kubernetes (a very recent release, considering the publication date of this article, late 2018), making the use of DigitalOcean's *cloud storage* and *load balancers* automatic . This product appears to be fantastic – I recommend that developers test and compare its cost and simplicity with EKS, AKS, and GKE.

Since it's not possible to use Docker Enterprise on third-party Kubernetes, this guide is for those who want to test a real Docker Enterprise installation on a cloud provider that doesn't hide the costs.

## **Why Docker Enterprise with DigitalOcean?**

With Docker Enterprise you can have Swarm mode and Kubernetes simultaneously on Linux and Windows servers. Another reason is that everything in Docker Enterprise is designed with developer productivity in mind. And, of course, because Docker Enterprise is really cool.

## ![](/wp-content/uploads/2018/11/imagem-interna1.png)

## **What do you need?**

Make sure you have the following tools before we begin:

- A valid DigitalOcean token that will allow you to create the resources we need (droplets and domains);
- A domain whose DNS you control;
- A trial license and download URL for Docker Enterprise (you can get both for free at \[link\]). [Docker Store](https://store.docker.com/editions/enterprise/docker-ee-server-centos));
- A workstation or laptop with Terraform, Ansible, and Helm installed. All of these tools are well-known, free to use, and easy to install. On macOS, they can all be installed using Brew.

brew install ansible brew install terraform brew install kubernetes-helm

- A local Docker installation (such as Docker Desktop, for example). At some points you will be asked to run Docker commands in your local shell (often against a remote Docker engine).
- O *fingerprint* Your SSH key is required to allow access to the VMs created by Terraform (and which Ansible will use). DigitalOcean displays them on the “Account/Security” page. This assumes, of course, that you have similar private keys on your machine – in the worst case, you can create an SSH key and upload this public key now.

All the steps described in this document will be performed on the readers' machines; you will not have to manually access any machine via SSH even once.

## **Some details about the Domain:**

If your company's domain belongs to a provider other than DigitalOcean (such as AWS), it should be simple to define a new subdomain delegated to DigitalOcean's name server with that provider. Having a delegated subdomain is cheaper than creating a real domain just for this purpose.

If *mycompany.com* is the AWS domain (for example), you can easily define a subdomain (a "name server" entry in Route 53) named *devops.mycompany.com* and delegate it to DigitalOcean's DNS (ns1/ns2/ns3.digitalocean.com).

Regardless of your choice, this document assumes that hosts will be created under this domain and will be known by it on the Internet. So, for example, if the domain you chose is *devops.mycompany.com* , the following resources will be created by Terraform:

devops.mycompany.com # digital ocean domain do-manager.devops.mycompany.com # manager node do-worker1.devops.mycompany.com # worker node do-worker2.devops.mycompany.com # worker node ucp.devops.mycompany.com # DNS entry in domain (do-manager) \*.apps.devops.mycompany.com # DNS wildcard entry

## **Materials on GitHub**

You should clone this project from GitHub:

git clone [https://github.com/vertigobr/dockeree-digitalocean](https://github.com/vertigobr/dockeree-digitalocean)

All resources, scripts, and playbooks are reusable; you just need to always provide a valid domain name.

## **Step 1: Terraforming**

The first thing we need to do is run a utility script that will generate some files from some templates and the domain provided as an argument:

./setdomain.sh "

Where " " is the domain you chose for this exercise (such as "devops.mycompany.com"). The script will generate the following files:

ansible-hosts # ansible inventory babyswarm.auto.tfvars # terraform variables

You still need to edit the “babyswarm.auto.tfvars” file and provide the following fields:

do\_token = "*YOUR-DIGITAL-OCEAN-TOKEN*" ssh\_keys = \["xx:xx:xx:xx:.......:xx", "xx:xx:xx:xx:.......:xx", \]

These are the DigitalOcean access tokens and a set of public key fingerprints. As already mentioned, the available fingerprints are listed on DigitalOcean (and you can always create an SSH key pair and upload the public key anyway). With these settings done, it's time to use Terraform:

terraform init terraform apply

The return should end with something like this:

Apply complete! Resources: 11 added, 0 changed, 0 destroyed. Outputs floating ip address swarm manager = xxx.xxx.xxx.xxx ip address swarm manager = yyy.yyy.yyy.yyy

## **Step 2: Install the Docker engine**

We will use Ansible playbooks and their roles to install the Docker Enterprise engine on all nodes. Some configuration files are required to get things running smoothly.

- ansible.cfg: This file instructs Ansible on where to find the inventory file, where to look for role definitions, and some SSH parameters.
- ssh.cfg: additional SSH settings.

We must first test Ansible's connectivity with all nodes:

ansible -m ping all

An Ansible "Ping" is an SSH connection test. We will test SSH connectivity to all hosts in the inventory file. The output will look something like this:

do-manager.devops.mycompany.com | SUCCESS => { "changed": false, "ping": "pong" } do-worker1.devops.mycompany.com | SUCCESS => { "changed": false, "ping": "pong" } do-worker2.devops.mycompany.com | SUCCESS => { "changed": false, "ping": "pong" }

If all hosts are reachable, we can run the playbook “install-dockeree.yml”:

ansible-playbook install-dockeree.yml

**Tip:** Playbooks are (or should be) idempotent, meaning you can reuse them as many times as you want if one of the hosts fails.

You can test the engine setup by running an "ad-hoc" Ansible command:

ansible -a "docker version" all

All hosts should return something like this:

do-manager.devops.mycompany.com | CHANGED | rc=0 >> Client: Version: 18.09.0 API version: 1.39 Go version: go1.10.4 Git commit: 33a45cd Built: Wed Nov 7 00:24:42 2018 OS/Arch: linux/amd64 Experimental: false Server: Docker Engine - Enterprise Engine: Version: 18.09.0 API version: 1.39 (minimum version 1.12) Go version: go1.10.4 Git commit: 33a45cd Built: Wed Nov 7 00:19:46 2018 OS/Arch: linux/amd64 Experimental: false

## **Step 3: Generate UCP certificates (optional)**

Installing UCP in Docker can use certificates from a volume with a reserved name (“ucp-controller-server-certs”). You can run the commands below to create these volumes remotely (on the “manager” host) and populate them with new certificates generated by Certbot (also known as Let's Encrypt):

export DOCKER\_HOST=ssh://root@do-manager.**devops.mycompany.com**
docker volume create ucp-controller-server-certs # creates certs with certbot docker run --rm -ti \\ -p 80:80 -p 443:443 \\ -v ucp-controller-server-certs:/etc/letsencrypt \\ certbot/certbotcertonly --standalone \\ --email **admin@example.com** -n --agree-tos -d ucp.**devops.mycompany.com**
\# copies certs to UCP "hotspot" docker run --rm -v ucp-controller-server-certs:/dummy \\ -w /dummy/live/ucp.**devops.mycompany.com** \\ alpine sh -c "cp privkey.pem /dummy/key.pem && \\ cp fullchain.pem /dummy/ca.pem && \\ cp fullchain.pem /dummy/cert.pem"

**Note:** You will need to change the email and domains (in bold) above. Also note that the container “/etc/letsencrypt” is connected to an external volume. Since the UCP installation looks for these certificates in a different location, in the last command we copied the certificates to the correct location within the same volume.

The exit is long, but it should contain this:

... IMPORTANT NOTES: - Congratulations! Your certificate and chain have been saved at: /etc/letsencrypt/live/ucp.devops....../fullchain.pem Your key file has been saved at: /etc/letsencrypt/live/ucp.devops....../privkey.pem ...

It's a good idea to have a backup of the certificates locally, in case you destroy these hosts to use Terraform again. You don't want to exceed the limit on how many times Certbot allows you to create certificates for the same domain (see the Certbot documentation on this), so it's good to have a local copy of them. The process is a bit strange because there's no direct way to copy files directly from a volume – we'll use a temporary container for this. Remember that you only need to do this once (and only if you plan to recreate the hosts with Terraform in the future).

export DOCKER\_HOST=ssh://root@do-manager.**devops.mycompany.com**
docker run --rm -d --name dummy \\ -v ucp-controller-server-certs:/etc/letsencrypt \\ alpine tail -f /dev/null docker cp dummy:/etc/letsencrypt . docker stop dummy

A local folder called “letsencrypt” will be created with a copy of the contents of the remote volume. If you ever need to use Terraform to recreate the hosts, instead of regenerating the certificates you can simply create the remote volume and populate it with the commands below:

export DOCKER\_HOST=ssh://root@do-manager.**devops.mycompany.com**
docker volume create ucp-controller-server-certs docker run --rm -d --name dummy \\ -v ucp-controller-server-certs:/etc/letsencrypt \\ alpine tail -f /dev/null docker cp ./letsencrypt dummy:/etc/ docker stop dummy

**Warning:** If you choose not to generate HTTPS certificates for the UCP, a self-signed certificate may be created during installation. To create a self-signed certificate during installation (which is not recommended), you must edit the playbook and reverse the commented-out variables:

vars: docker\_ucp\_fqdn\_san: --san ucp.devops.mycompany.com #docker\_external\_cert: --external-server-cert

## **Step 4: Install Docker CPU**

The playbook we are about to run requires a license file located in the project folder, named “docker\_subscription.lic”. Again, a trial version of the license file can be easily obtained from the [Docker Store](https://store.docker.com/editions/enterprise/docker-ee-server-centos).

ansible-playbook install-ucp.yml

The installation doesn't take long. Once finished, Docker UCP will be available at (use your domain):

[https://ucp.devops.mycompany.com](https://ucp.devops.mycompany.com)

## **Step 5: Add worker nodes**

Worker nodes can be easily added to the cluster:

ansible-playbook install-swarm.yml

The “do-worker1” and “do-worker2” nodes will be added quickly, but the CPU will take a little longer to adjust appropriately.

![](/wp-content/uploads/2018/11/Digital-Ocean-18.png)

## **Step 6: Change orchestrators as desired.**

The default orchestrator for new nodes is Swarm Mode. This can be changed in the CPU settings (affecting new nodes), but you can also change the current orchestrator for all nodes whenever you want.

In “Shared Resources/Nodes/\[do-worker2\]/Edit Node”, for example, you can change your orchestrator from “Swarm” to “Kubernetes”:

![](/wp-content/uploads/2018/11/Digital-Ocean-19.png)

The node will be enabled for Kubernetes workloads almost immediately.

![](/wp-content/uploads/2018/11/Digital-Ocean-20.png)

## **Step 7: Use the Client Bundle**

Even though you can use the SSH protocol (a new feature in Docker 18.09) as seen in the previous steps, you shouldn't rely on it (SSH is not usually allowed for users). It's better to make it a habit to access the cluster through the scripts and certificates of the *client bundle* when connecting.

You can create a bundle at any time in “My Profile/Client Bundles/New Client Bundle”. It will be downloaded as a ZIP file that can be extracted anywhere you want.

Running “env.sh” will configure your shell environment variables to connect to the cluster's CPU when running docker or kubectl commands:

**. ./env.sh docker node ls**
ID HOSTNAME STATUS (...) 3lld4f3lwgl2qpkodj1frmv1r \* do-manager Ready l4odzuj73ekpfij3d6bj7ss20 do-worker1 Ready t1leznuk066kkfbm5jr4ibnbz do-worker2 Ready
**kubectl get nodes**
NAME STATUS ROLES AGE VERSION do-manager Ready master 43m v1.11.2-docker-2 do-worker1 Ready 30m v1.11.2-docker-2 do-worker2 Ready 30m v1.11.2-docker-2

## **What's to come?**

In the next part of this series, we'll learn how to automatically use DigitalOcean's features ( *block volumes* and *load balancers* ) when creating persistent volumes and *Ingress* services.

In this way, Docker Enterprise will behave similarly to DigitalOcean's native Kubernetes cluster.

Have fun!

**Translation: Thor Salgado – Vertigo Technology Intern and Docker Enthusiast**

* * *

### Want to deepen your knowledge of Docker?

Download this amazing material now!

[![](/wp-content/uploads/2018/11/Reduza-custos-de-TI-CTA-2-300x240-1.png)](https://materiais.vertigo.com.br/reduzir-custos-ti-docker-ee?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)
