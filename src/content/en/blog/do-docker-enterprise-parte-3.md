---
title: "Docker Enterprise 2.1 on DigitalOcean – Part III"
slug: "do-docker-enterprise-parte-3"
date: "2018-11-29T17:49:08"
modified: "2026-02-02T20:38:30"
status: "publish"
author: "admin"
excerpt: "In the first part of this series , we saw how to set up the new Docker Enterprise 2.1 cluster on DigitalOcean using Terraform and Ansible. In the second part , we configured Docker Enterprise to automatically provision volume blocks and load balancers on DigitalOcean. In this article, we will discuss some ways to resolve […]"
categories: ["blog", "devops", "dockeree"]
tags: ["cloud", "devops", "digitalocean", "docker", "vertigo-tecnologia"]
featuredImage: "/wp-content/uploads/2026/02/do-docker-enterprise-parte-3.png"
wpId: 3369
originalUrl: "https://vertigo.com.br/do-docker-enterprise-parte-3/"
contentSource: "rest"
lang: "en"
seo:
  title: "Docker Enterprise 2.1 on DigitalOcean – Part III - Vertigo"
  description: "Concluding the trilogy of articles on Docker Enterprise 2.1 on DigitalOcean, this article will discuss some ways to resolve HTTPS endpoints and certificates. It's worth checking out; the content is quite rich!"
  canonical: "https://vertigo.com.br/en/do-docker-enterprise-parte-3/"
  ogImage: "/wp-content/uploads/2026/02/do-docker-enterprise-parte-3.png"
  robots: "index, follow"
---

[In the first part of this series](/en/Digital-Ocean-Part-1/) , we saw how to set up the new Docker Enterprise 2.1 cluster on DigitalOcean using Terraform and Ansible.

[In the second part](/en/Digital-Ocean-Part-II/) , we configured Docker Enterprise to automatically provision volume blocks and load balancers on DigitalOcean.

In this article, we will discuss some ways to resolve HTTPS endpoints and certificates.

## **What do you need**

Make sure you have completed parts one and two of this series. Additionally, your shell needs to be configured to connect to the cluster remotely (by running the script from the client package “env.sh”).

We will also need the DigitalOcean CLI (Command Line Interface), also known as doctl.

## **Regarding the integration of DigitalOcean Let's Encrypt**

The process is simple, almost reduced to a few mouse clicks, if the highest level of the domain involved (mycompany.com) is controlled by DigitalOcean itself. These steps describe how to create a "wildcard" certificate with Let's Encrypt and how to configure the DigitalOcean load balancer for HTTPS endpoints. Both of these things can be done automatically by DigitalOcean, as described in this article.

In my case, the top-level domain belongs to AWS, where a subdomain was defined and delegated to DigitalOcean. The DigitalOcean Let's Encrypt integration does not work in this scenario.

So here we go!

## **Step 1: Wildcard Certificate**

In Part I, we created an HTTPS certificate for the Docker UCP hostname before installing UCP. This was very simple: we ran a Certbot for each host that has the hostname “ucp.devops.mycompany.com”, which is the natural workflow for the Certbot ACME protocol.

We can't do that again because the necessary ports are currently occupied. However, don't despair! We have an alternative solution. By controlling the DNS (owning a domain/subdomain on DigitalOcean), you can generate the certificates with the Certbot servers in a different way.

**Important: Open a new shell for this** – we will run this command in your local Docker engine, so we need a shell that is not running the UCP script package (“env.sh”). The certificates will be written to a “letsencrypt” folder in the current directory.

The command below will tell the Certbot server to use the DNS challenge (remember to use the domain and email from before):

docker run --rm -ti \\ -v $(pwd)/letsencrypt:/etc/letsencrypt \\ certbot/certbot cernly --agree-tos \\ -d "\*.apps.**devops.mycompany.com**" \\ --preferred-challenges=dns --manual \\ --email=**admin@example.com**

Answer “YES” to the first question and wait for a message similar to the one below:

\- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Please deploy a DNS TXT record under the name \_acme-challenge.apps.*devops.mycompany.com* with the following value:
**NjeNlv9Gxcz.............JxTOgHjqzM**
Before continuing, verify the record is deployed. - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Press Enter to Continue

Don't press <Enter> yet! Now you need to edit your domain on DigitalOcean (“Networking/Domains/<your domain>”), select “TXT” and create a new entry named “ **\_acme-challenge.apps** ” with the value provided in Certbot:

![](/wp-content/uploads/2018/11/docker-enterprise.png)

After this TXT record is created manually, you can enter the domain name. The output will look something like this:

Waiting for verification... Cleaning up challenges IMPORTANT NOTES: - Congratulations! Your certificate and chain have been saved at: /etc/letsencrypt/live/apps.*devops.mycompany.com*/fullchain.pem Your key file has been saved at: /etc/letsencrypt/live/apps.*devops.mycompany.com*/privkey.pem ...

Check the contents of the “letsencrypt/live” folder: there is a new folder “apps.devops.mycompany.com” containing the certificate for the wildcard domain.

You can use Certbot again to verify the received certificates:

docker run --rm -ti \\ -v $(pwd)/letsencrypt:/etc/letsencrypt \\ certbot/certbot certificates

Your output should include this:

... Found the following certs: Certificate Name: apps.*devops.mycompany.com*
    Domains: \*.apps.*devops.mycompany.com*
    Expiry Date: 2019-02-19 06:31:15+00:00 (VALID: 89 days) Certificate Path: /etc/letsencrypt/live/apps.*devops.mycompany.com*/fullchain.pem Private Key Path: /etc/letsencrypt/live/apps.*devops.mycompany.com*/privkey.pem ...

## **How cool is that?**

Remember, we have a load balancer running for this same wildcard domain.

It seems we have two options now:

- Use the load balancer itself for HTTPS endpoints (the cluster only works with HTTP).
- The load balancer forwards all HTTPS traffic to the cluster (the cluster handles the HTTPS endpoint).

## **Step 2: The Load Balancer uses HTTPS.**

The first step is to manually change the DigitalOcean load balancer we just created to resolve HTTPS endpoints on its own (i.e., no HTTPS traffic enters the cluster).

We will make the certificate created in our previous step available to DigitalOcean. The tool that will do this is doctl (DigitalOcean's command-line tool):

doctl compute certificate create \\ --private-key-path letsencrypt/live/apps.*devops.mycompany.com*/privkey.pem \\ --certificate-chain-path ./letsencrypt/live/apps.*devops.mycompany.com*/fullchain.pem \\ --leaf-certificate-path ./letsencrypt/live/apps.*devops.mycompany.com*/fullchain.pem \\ --name apps-devops

If the doctl is not available, you can upload the certificate manually. On DigitalOcean, search for “Account/Security/Certificates”, click on “Add certificate” and then click on “Custom”:

![](/wp-content/uploads/2018/11/docker-enterprise-2.png)

This is a bit tedious, but you will have to copy and paste the contents of the certificate files into “letsencrypt/live/apps.devops.mycompany.com”:

- Name: apps-devops
- Certificate: paste the contents of the “fullchain.pem” file
- Private Key: paste the contents of the “privkey.pem” file
- Certificate chain: paste the contents of the "fullchain.pem" file

![](/wp-content/uploads/2018/11/docker-enterprise-3.png)

**Save this certificate!**

Now we're going to use this in the load balancer we already have.

**Important:** You should never have to waste time manually configuring the load balancer the way we're doing it. Remember: this load balancer was automatically created by the CCM. If it needs to be reconfigured, the CCM should be used for that. Don't worry, we'll look into that later.

Below “Manage/Networking/Load balancers/ In the /Settings section, change the current forwarding rule for port 443 so that it resolves HTTPS endpoints with the certificate we provided. Also, the forwarding for port 443 needs to be the same as for port 80 (32919 in the image below, certainly something different in your case).

![](/wp-content/uploads/2018/11/docker-enterprise-4.png)

Save the changes and test them with two curl commands that should have similar results:

**curl http://cafe.apps.*devops.mycompany.com***
Server address: 192.168.175.76:80
Server name: coffee-7dbb5795f6-k7ffn
Date: 21/Nov/2018:11:01:37 +0000
URI: /
Request ID: 7a57d37fa0a90858961bc16d91fbb641
**curl https://cafe.apps.*devops.mycompany.com***
Server address: 192.168.175.75:80 Server name: coffee-7dbb5795f6-zsngr Date: 21/Nov/2018:11:02:24 +0000 URI: / Request ID: ed77771e9f05531ad3357e4ef7da57ec

Note the same behavior with the other application:

**curl http://tea.apps.*devops.mycompany.com***
Server address: 192.168.175.77:80
Server name: tea-7d57856c44-qdrm2
Date: 21/Nov/2018:11:04:00 +0000
URI: /
Request ID: fb867646ed2ea3b7c769826ac70c9fa4
**curl https://tea.apps.*devops.mycompany.com***
Server address: 192.168.175.79:80
Server name: tea-7d57856c44-dshh4
Date: 21/Nov/2018:11:04:06 +0000
URI: /
Request ID: 82caf8dfa72002f8d98e24ac0f96d4b5

Now that we understand how the load balancer should be configured, let's do it properly (via CCM). We will learn how to deploy an ingress controller that automatically configures the DigitalOcean load balancer, which resolves HTTPS endpoints on its own as shown above.

First, let's remove the current ingress controller that we deployed in Part II using Helm (use the configured shell to access the cluster):

helm delete my-nginx

This deletes the ingress controller and the load balancer controlled by DigitalOcean.

We will recreate the ingress controller in a path that CCM recognizes for the external cloud provider load balancer settings. You will need the certificate ID we created earlier. You can always use doctl to retrieve this:

**doctl compute certificate list \[-t "YOUR-DO-TOKEN-HERE"\]**
ID Name (...)
**9e844bb7-..............-8312c3ff4edc**    apps-devops (...)

The command below will install the same ingress controller, but with the appropriate annotations for the CCM this time (you need to change the certificate ID):

helm install stable/nginx-ingress \\ --name my-nginx \\ --set rbac.create=true \\ --namespace nginx-ingress \\ --set controller.service.annotations."service\\.beta\\.kubernetes\\.io/do-loadbalancer-protocol"="http" \\ --set controller.service.annotations."service\\.beta\\.kubernetes\\.io/do-loadbalancer-algorithm"="round\_robin" \\ --set controller.service.annotations."service\\.beta\\.kubernetes\\.io/do-loadbalancer-tls-ports"="443" \\ --set controller.service.annotations."service\\.beta\\.kubernetes\\.io/do-loadbalancer-certificate-id"="**9e844bb7-.........-8312c3ff4edc**" \\ --set controller.service.annotations."service\\.beta\\.kubernetes\\.io/do-loadbalancer-healthcheck-path"="/healthz" \\ --set controller.service.annotations."service\\.beta\\.kubernetes\\.io/do-loadbalancer-redirect-http-to-https"="true" \\ --set controller.service.targetPorts.https="http"

In summary, the annotations we configured above manage the load balancer settings:

- HTTPS endpoints (certificates and ports)
- Heathcheck of the paths
- HTTP to HTTPS request redirectors
- Simple HTTP between load balancer and cluster (i.e., no HTTPS endpoint to the cluster itself).
- HTTP to HTTPS redirection

Please wait on the DigitalOcean website until the load balancer is created (this takes some time).

**Very important:** If the load balancer's IP address has changed since our previous value (there's a good chance this has happened), you need to update your "\*.apps" DNS entry for your domain to use the new address.

**curl https://cafe.apps.*devops.mycompany.com***
Server address: 192.168.175.96:80
Server name: coffee-7dbb5795f6-62k9d
Date: 22/Nov/2018:15:45:03 +0000
URI: /
Request ID: a0d1e0a56a540630fbc3de08217e1e4b

Much better! You can also test redirecting HTTP to HTTPS:

**curl -L http://cafe.apps.*devops.mycompany.com***
Server address: 192.168.175.95:80 Server name: coffee-7dbb5795f6-v9s7g Date: 22/Nov/2018:15:48:42 +0000 URI: / Request ID: 3377f89127b46d44605127471abad958

**Warning:** Updating the DNS entry for the wildcard domain might not reach the current DNS server immediately. In this case, both commands above will fail, and you will be stuck.

Fortunately, there's a way to work around this using **curl** without relying on name resolution. For example:

**curl -LH "Host: cafe.apps.*devops.mycompany.com*"**

## **Step 3: The Load Balancer makes HTTPS requests.**

Some might argue that passing HTTP traffic through the load balancer to the cluster is somewhat insecure. Therefore, we will try a different approach for the HTTPS endpoint: this way we will allow the cluster even without the endpoint, and thus the load balancer will simply forward the packets blindly.

First, we need to deploy the Secret containing the certificate to the cluster. You can edit the “cafe/cafe-secret.yaml” file to accept the certificate and its key:

The value of “tls.crt” is the content of “fullchain.pem” in Base64 encoding:

base64 -i letsencrypt/live/apps.*devops.mycompany.com*/fullchain.pem

The value “tls.key” is the content of “privkey.pem” in Base64 encoding:

base64 -i letsencrypt/live/apps.*devops.mycompany.com*/privkey.pem

Deploy the Secret to the cluster:

**kubectl apply -f cafe/cafe-secret.yaml**
secret "cafe-secret" created

We must now remove both the ingress controllers and ingress resources that were created in the previous steps of this article:

**helm delete --purge my-nginx**
release "my-nginx" deleted
**kubectl delete -f cafe/cafe-ingress-http.yaml**
ingress.extensions "cafe-ingress" deleted

Now, we need to deploy the new ingress feature that defines TLS (HTTPS) endpoints for the web applications that have already been created:

**kubectl apply -f cafe/cafe-ingress.yaml**
ingress.extensions "cafe-ingress" created

**Tip:** Compare both the “cafe-ingress-http.yaml” and “cafe-ingress.yaml” files to understand the differences (especially the TLS endpoint terminations).

Finally, let's deploy the ingress controller (and also the new load balancer) that defines the HTTPS requests:

helm install stable/nginx-ingress \\ --name my-nginx \\ --set rbac.create=true \\ --namespace nginx-ingress \\ --set controller.service.annotations."service\\.beta\\.kubernetes\\.io/do-loadbalancer-protocol"="http" \\ --set controller.service.annotations."service\\.beta\\.kubernetes\\.io/do-loadbalancer-algorithm"="round\_robin" \\ --set controller.service.annotations."service\\.beta\\.kubernetes\\.io/do-loadbalancer-tls-ports"="443" \\ --set controller.service.annotations."service\\.beta\\.kubernetes\\.io/do-loadbalancer-healthcheck-path"="/healthz" \\ --set controller.service.annotations."service\\.beta\\.kubernetes\\.io/do-loadbalancer-redirect-http-to-https"="true" \\ --set controller.service.annotations."service\\.beta\\.kubernetes\\.io/do-loadbalancer-tls-passthrough"="true"

After some time, the DigitalOcean load balancer will be online and correctly configured with HTTPS passthrough.

![](/wp-content/uploads/2018/11/docker-enterprise-5.png)

Again, the external IP address of the load balancer may change; in this case, you will need to update the DNS entry in your "\*apps" domain.

You can test your web application in the same way we did before:

**curl https://cafe.apps.*devops.mycompany.com***
Server address: 192.168.175.95:80
Server name: coffee-7dbb5795f6-v9s7g
Date: 22/Nov/2018:19:55:27 +0000
URI: /
Request ID: 572cb18edc38b0176c9d79f779f8d8a0

If the DNS resolution name continues to point to the previous DNS address, you can always work around it as we discussed earlier:

**curl -LH "Host: cafe.apps.*devops.mycompany.com*"**

## **Conclusion:**

Once we deploy with the appropriate configurations and annotations, the ingress controller and the load balancer result should last forever. All other resources can come and go (pods, services, and deployments).

This series of articles demonstrates in an easy and transparent way how Docker Enterprise can work in the DigitalOcean cloud. Kubernetes doesn't have to be a nightmare, nor should you give up on [Swarm mode](/en/docker-kubernetes-mesos/) just because everyone else is jumping off the bridge.

Have fun with Docker Enterprise on DigitalOcean!

**Translation: Thor Salgado – Vertigo Technology Intern and Docker Enthusiast**

**Review by: Rubens Freitas – Infrastructure Manager, Vertigo Tecnologia**

* * *

### **Would you like a live Docker demo?**

### **Talk to our experts!**

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
