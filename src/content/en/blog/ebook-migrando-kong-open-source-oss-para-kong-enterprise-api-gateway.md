---
title: "eBook – Migrating Kong Open Source (OSS) to Kong Enterprise API Gateway"
slug: "ebook-migrando-kong-open-source-oss-para-kong-enterprise-api-gateway"
date: "2024-10-24T09:57:45"
modified: "2024-10-24T09:57:45"
status: "publish"
author: "admin"
excerpt: "Kong API Gateway is an open source API management platform that acts as an intermediary for API requests between clients (such as mobile or web applications) and APIs. It is designed to optimize and manage API traffic, offering a range of features to improve the security, performance, and scalability of applications. This ebook is a […]"
categories: ["apis", "kong", "kubernetes"]
tags: ["api", "kong", "kubernetes"]
featuredImage: "/wp-content/uploads/2024/10/Blog-migrando-kong-open-source.webp"
featuredImageAlt: "Migrando Kong Open Source"
wpId: 165242
originalUrl: "https://vertigo.com.br/ebook-migrando-kong-open-source-oss-para-kong-enterprise-api-gateway/"
contentSource: "rest"
lang: "en"
seo:
  title: "eBook - Migrating Kong Open Source (OSS) to Kong Enterprise API Gateway - Vertigo"
  description: "Learn how to migrate from Kong Open Source to Kong Enterprise and explore the advantages, new plugins, and features for a robust API Gateway."
  canonical: "https://vertigo.com.br/en/ebook-migrando-kong-open-source-oss-para-kong-enterprise-api-gateway/"
  ogImage: "/wp-content/uploads/2024/10/Blog-migrando-kong-open-source.webp"
  robots: "index, follow"
---

## **1 – Introduction to Kong API Gateway**

Kong API Gateway is an open-source API management platform that acts as an intermediary for API requests between clients (such as mobile or web applications) and APIs. It is designed to optimize and manage API traffic, offering a range of features to improve the security, performance, and scalability of applications.

This ebook is a direct translation by Vertigo Tecnologia, an official Kong Inc. partner in Brazil, and provides a detailed guide on "How and Why to Migrate from Kong Open Source to Kong Enterprise API Gateway". You can also check out the article [**at this link**](https://konghq.com/blog/engineering/how-and-why-to-migrate-from-kong-open-source-to-kong-enterprise-api-gateway).

Through this material, we aim to clarify the significant benefits and expanded capabilities that Kong Enterprise offers compared to its open-source version. This content, originally created by the Kong Inc. team, serves as an essential tool for organizations and developers considering enhancing their API management with the advanced features of Kong Enterprise.

In this way, we explore crucial aspects such as configuration, migration, and post-migration testing, in addition to highlighting the unique features of Kong Enterprise that transform the platform from "an effective solution for routing API requests and implementing basic security features" to "a robust, production-ready API gateway equipped with integrated visibility, monitoring, and enterprise-ready administrative features."

We thank Kong Inc. for creating the original content that made this translation possible. We will explore how to migrate an installed system from OSS to Enterprise.

[![APIops Banner](/wp-content/uploads/2024/10/banner_-APIOps-automatizando-o-ciclo-de-vida-de-APIs.webp)](https://materiais.vertigo.com.br/ebook-apiops)

## **2 - Why Kong Gateway Enterprise?**

There are several features available in Kong Enterprise that extend the core capabilities of the Kong OSS project to provide a production-grade API Management platform suitable for use. Let's review some of these capabilities.

- Kong Manager provides a graphical interface for operational configuration and monitoring, making it a fundamental platform for showcasing more Enterprise features.
- Secrets Management allows you to store sensitive information, such as passwords, certificates, and API keys, in a vault. Such vaults can be AWS Secrets Manager, GCP Secrets Manager, and HashiCorp Vault, for example.
- The Kong Developer Portal provides a central location for developers to discover published API specifications, test them, view sample code snippets in common languages ​​such as JavaScript, Python, or Ruby, and register APIs.
- Kong Vitals exposes access to monitoring and analysis of services, routes, and application usage directly within Kong Manager.
- Kong Workspaces and Role-Based Access Control (RBAC) create a user and role structure to allow multiple teams to share a Kong Gateway instance with separation of activities (i.e., multi-tenancy). Kong Enterprise can be integrated with an existing Identity Management System to allow roles and entitlements to be driven through existing identity and entitlement flows.

The features listed above truly transform Kong from “hey, cool, I can forward API requests and add some basic security and control features” to “wow, I have a production-ready API gateway with built-in visibility, monitoring, and administrative features that are ready for enterprise use.” Beyond that, however, there’s a key differentiator of the Kong Enterprise version: the Enterprise Plugins. Kong Enterprise provides 29 additional plugins that offer production-grade security, transformation, traffic control, and observability capabilities.

Eg

Let's say a developer wants to provide basic mocking for APIs under development, aligned with the OpenAPI specification. The [**Kong Mocking**](https://docs.konghq.com/hub/kong-inc/mocking/) plugin adds this capability to the gateway under the Enterprise license.

Or, an organization wants to enforce authentication using OpenID Connect (OIDC) from a [**third-party Identity**](https://docs.konghq.com/hub/kong-inc/openid-connect/) Provider . The Kong OpenID Connect plugin is another plugin licensed under the Enterprise version.

See the full list of [**plugins on Plugin Hub**](https://docs.konghq.com/hub/) and check out those marked with "Enterprise" in the title that may apply to your needs:

Finally, there is the benefit of access to Support and Services, available with the Kong Enterprise license. While community collaboration helps guide the direction of the project's fundamental codebase, partnering with Kong will ensure success, maximize uptime, and leverage the platform to achieve the greatest return on investment from using Kong.

A complete feature matrix between the OSS and Enterprise versions of Kong is [**available here**](https://docs.konghq.com/gateway/latest/#features).

## **3 – Migration Scenarios**

Kong is a highly flexible product that can be deployed in a variety of ways. The Kong base executable includes both control plane and data plane capabilities, which can be enabled or disabled based on the specific configuration. Deployment architecture options, from traditional to a highly scalable hybrid approach, are described in the [**documentation**](https://docs.konghq.com/gateway/latest/production/deployment-topologies/).

**NOTE** ***:*** *The Kong Konnect implementation transfers access, support, and ongoing maintenance of the Kong Gateway control plane and configuration store to a public cloud-based SaaS implementation, with Kong support for multiple “tenants” (customers). For this article, we will focus on migrating to the self-managed Kong Enterprise. In a future article, we will cover how to migrate from Kong Gateway OSS to Konnect.*

Essential in all migration scenarios are the common elements of the Kong executable itself and a storage for configuration data. The data storage can be one of the following:

- Contained within a statically defined declarative YAML file (referred to as a database-less installation), which is loaded into memory when Kong starts. The Enterprise file format includes additional options such as Workspaces not supported in the OSS version. However, this approach does not manage other Enterprise-specific entities such as administrators, RBAC permissions/roles, or anything related to the DevPortal.
- Derived from an external source of authoritative state, such as the etcd key-value store in the Kong Kubernetes Ingress Controller (KIC) implementation (which can run with or without a database). The Ingress Controller container in the KIC pod reads the relevant objects via the K8s API server and translates them into the desired state for routes, services, and plugins in Kong.
- Stored in a PostgreSQL database. This approach is used in both Traditional and Hybrid Kong architectures. To support Enterprise, the database structure must be updated and extended to support the additional features offered by Enterprise features and plugins. The “kong migrations” command set is used to update and then commit the status of the updates in PostgreSQL.

The overall Kong migration process basically boils down to updating the current version of the Kong executable and ensuring that the data store format is updated to match the additional features available in the Kong Enterprise version. The necessary declarative file format update would primarily involve adding the value “workspace” to the file if using a Workspace name other than the default. The Kubernetes Ingress Controller update steps would be based on the tools used for the original K8s installation, whether it was a kubectl apply-based installation or an upgrade using Helm to manage the process.

When using a database, migrating changes to it is automated via a set of "kong migrations" commands, discussed in the final section of this article.

[![How do I deploy an API Gateway in a Kubernetes cluster?](/wp-content/uploads/2024/10/Banner_Como-implantar-um-Gateway-de-API-em-um-cluster-Kubernetes.png)](https://materiais.vertigo.com.br/ebook-como-implantar-um-gateway-de-api-em-um-cluster-kubernetes)

## **4 – Installing and Migrating Kong OSS to Kong Enterprise**

The best way to understand and see how easy the migration process is is by performing the steps yourself. This can even be done without a Kong Enterprise license. Simply set up a Linux host with a basic Kong OSS installation and a PostgreSQL database. Create a sample service/route configuration. Then, remove the Kong OSS executable and replace it with the Kong Enterprise executable version. Follow the instructions to migrate the database and start Kong.

An Enterprise license can be applied later using an API call, but it's not required for Kong Enterprise to start. Let's review the steps to do this now. We'll first provide only the commands needed to build the OSS configuration, followed by complete examples.

**NOTE:** *These steps are provided only as a minimal working example of a Kong OSS to Enterprise migration using database migration tools. They are not intended to be generally applicable as they are to all possible deployment types and modes with the Kong API Gateway. For a production environment, it is recommended to simulate the process using a Kong topology in a lab configuration built like the one you are running first to understand the commands and possible approaches that might work best for your specific needs.*

## **5 – OSS Installation**

The test environment used for this article consists of an AWS instance running Ubuntu focal-20.04. Some of the syntax is specific to the Linux version. Below is the sequence of commands used to install and start Kong.

**NOTE:** *The official installation instructions for the open-source Kong Gateway from the community are located here:*

[https://konghq.com/install#kong-community](https://konghq.com/install#kong-community).

## Prepare the Ubuntu OS:

plain text

sudo apt update

### If you want to run the current code:

plain text

sudo apt upgrade -y

### To resolve a Kong dependency in newer versions of Ubuntu, run:

plain text

sudo apt install zlib1g-dev

### Install the jq utility to help view JSON responses later:

plain text

sudo apt install jq

### Install and prepare PostgreSQL:

plain text

sudo apt install postgresql -y

### Switch to the postgres user to prepare the database:

plain text

sudo -i -u postgres

### Start the interactive PostgreSQL prompt:

plain text

psql

### Create a user and a database for Kong:

plain text

CREATE USER kong WITH PASSWORD 'super\_secret'; CREATE DATABASE kong OWNER kong;

### Exit the PostgreSQL prompt and return to the Ubuntu command prompt:

plain text

exit

exit

### You should be back at the Ubuntu command prompt now.

### Download and Install Kong:

plain text

curl -Lo kong-3.1.1.amd64.deb “https://download.konghq.com/gateway-3.x-ubuntu-$(lsb\_release -sc)/pool/all/k/kong/kong\_3.1.1\_amd64.deb”

sudo dpkg -i kong-3.1.1.amd64.deb

### Edit the Kong configuration file:

plain text

sudo cp /etc/kong/kong.conf.default /etc/kong/kong.conf

sudo vi /etc/kong/kong.conf

Update these fields in the DATASTORE section of the file to remove the comment from the lines and have the following appearance, starting at line 1097:

plain text

database = postgres

pg\_user = kong

pg\_password = super\_secret

pg\_database = kong

### Execute the initial database command “kong migrations” and start Kong:

plain text

sudo KONG\_PASSWORD=Kong1234 kong migrations bootstrap -c /etc/kong/kong.conf

sudo kong start -c /etc/kong/kong.conf

### Create an example service and route:

plain text

curl -i -s -X POST http://localhost:8001/services –data name=example\_service –data url='http://mockbin.org'

curl -i -X ​​POST http://localhost:8001/services/example\_service/routes –data 'paths\[\]=/mock' –data name=example\_route

### Test the route:

### Make sure you see it in the gateway configuration and also see a "200 OK" response and output header when accessing the route path:

plain text

curl -X GET http://localhost:8001/services/example\_service/routes | jq

### The command above is to display the route configuration.

plain text

curl -I -X GET http://localhost:8000/mock

### This command tests the actual route request.

At this point, you should have a fully functional Kong OSS Gateway instance running, with a sample route and service. This creates a baseline environment to ensure that, after the migration to Enterprise is complete, we still have a working route.

[![The difference between API Gateways and Service Mesh\_BANNER\_INTERNO](/wp-content/uploads/2024/10/A-diferenca-entre-Gateways-de-API-e-Service-Mesh_BANNER_INTERNO.webp)](https://materiais.vertigo.com.br/ebook-a-diferenca-entre-gateways-de-api-e-service-mesh)

## **6 – Migration to Enterprise**

To migrate this installation to Enterprise, we will first shut down and remove the existing Kong OSS mode, leaving the configuration saved in the database. Then, we will install the Enterprise version of Kong and use the “kong migrations” command set to update the PostgreSQL database to support Enterprise.

There are many variations of this process, depending on the installed Kong architecture, which may involve building a new virtual host to run the new version or even cloning the running database first and using the cloned copy to build the Enterprise installation (i.e., *blue/green* deployment ).

These options can allow for a gradual transition. The approach here involves an in-place upgrade which, if taken, requires some downtime while the migration occurs and should therefore be planned accordingly.

**NOTE:** *Any upgrade between numbered Kong versions must be handled separately from the OSS to Enterprise migration. The migration must be done laterally from the same Kong OSS version number to Kong Enterprise. There are specific requirements for migrating to Kong version 3.x, which is the current version. For general details on the Kong upgrade process, see the link in the* [***documentation***](https://docs.konghq.com/gateway/latest/upgrade/.)*.*

### Stop and uninstall Kong OSS:

plain text
sudo kong stop
sudo dpkg -r kong
 

### Download and install Kong Enterprise:

**NOTE:** *The official Kong Enterprise Gateway installation instructions are located* [***here***](https://docs.konghq.com/gateway/latest/install/linux/ubuntu/) *:*

plain text

curl -Lo kong-enterprise-edition-3.1.1.1.all.deb

“https://download.konghq.com/gateway-3.x-ubuntu-$(lsb\_release -sc)/pool/all/k/kong-enterprise-edition/kong-enterprise-edition\_3.1.1.1\_amd64.deb”

sudo dpkg -i kong-enterprise-edition-3.1.1.1.all.deb

### Perform database migrations:

**NOTE:** *To consider options for preparing a migration in a production environment for the various deployment topologies supported by Kong, please refer to the following* [***documentation***](https://docs.konghq.com/gateway/latest/production/deployment-topologies/)*.*

This command will update the database in a non-destructive manner. This means that if this were a larger production system in traditional or hybrid topologies, it would allow the OSS version to continue operating, leaving some of the updates pending. It will produce many lines of output, with several updates being applied.

At the end you should see the totals for the updates and a notification that they are pending:

plain text

sudo kong migrations up

In our example, we have already updated our single Kong node. For a production environment, after all Kong OSS nodes have been updated to Kong Enterprise, the following command can be applied to complete the database migration process:

plain text

sudo kong migrations finish

The last line of this output shows that there are no pending migrations. Kong Enterprise could have simply been started and run on the database after the “migrations up” command, but the “migrations finish” command is required to support the full functionality of the new features.

### Run Kong Enterprise:

plain text

sudo kong start -c /etc/kong/kong.conf

Now we can repeat the test commands we used during the OSS mode installation to ensure everything is working. Here is the expected result, installed and running on Kong Enterprise 3.0:

plain text

curl -X GET http://localhost:8001/services/example\_service/routes | jq

curl -I -X GET [http://localhost:8000/mock](http://localhost:8000/mock)

[![Migrating Kong Open Source (OSS) to Kong Enterprise API Gateway](/wp-content/uploads/2024/10/Banner_Migrando-Kong-Open-Source-OSS-para-Kong-Enterprise-API-Gateway.webp)](https://materiais.vertigo.com.br/ebook-migrando-para-kong-enterprise-api-gateway)

## **7 - Conclusion**

As we've shown here, migrating from Kong OSS to Kong Enterprise is easily and securely achievable, maintaining your configuration and gaining the benefits of the Kong Enterprise Gateway platform. Kong Enterprise brings great new administrative and operational features, as well as access to the full suite of Enterprise plugins, plus industry-leading support and services.

Try this exercise on a simple virtual machine today, or contact Kong to discuss licensing or obtain professional services assistance to plan your migration.

*This ebook is a translation of the* [*original article*](https://konghq.com/blog/engineering/how-and-why-to-migrate-from-kong-open-source-to-kong-enterprise-api-gateway) *written by the Kong team.*

*To access other Kong content and implement API integration within your company, contact the Vertigo Tecnologia* [*technical team*](/en/us/) *. We're ready to help!*
