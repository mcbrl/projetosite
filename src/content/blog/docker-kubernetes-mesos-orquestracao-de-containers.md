---
title: "Docker, Kubernetes e Mesos – Descubra quem é quem?"
slug: "docker-kubernetes-mesos-orquestracao-de-containers"
date: "2017-08-18T14:44:41"
modified: "2026-02-02T20:38:38"
status: "publish"
author: "admin"
excerpt: "Nos deparamos com muitas perguntas quando o assunto é DevOps e Orquestração de Containers,  certo? Quando o assunto é colocar em prática os conceitos abordados pelo tema, entra em discussão o papel de cada ferramenta e qual é a melhor de todas. A verdade é que existem diversas ferramentas no mercado e, a cada momento, um […]"
categories: ["devops"]
tags: ["apache-mesos", "devops", "docker", "kubernetes", "marathon", "orquestracao-de-containers", "transformacao-digital"]
featuredImage: "/wp-content/uploads/2026/02/docker-kubernetes-mesos-orquestracao-de-containers.png"
wpId: 1596
originalUrl: "https://vertigo.com.br/docker-kubernetes-mesos-orquestracao-de-containers/"
contentSource: "rest"
seo:
  title: "Containers | Docker, Kubernetes e Mesos - É hora de saber quem é quem"
  description: "Quais as diferenças entre os Orquestradores de Containers? Conheça os benefícios e diferenças entre o Docker, Kubernetes e Mesos. Veja qual é a melhor forma de utilização de cada um destes orquestradores e como podem ajudar na conteinerização de suas aplicações."
  canonical: "https://vertigo.com.br/docker-kubernetes-mesos-orquestracao-de-containers/"
  ogImage: "/wp-content/uploads/2026/02/docker-kubernetes-mesos-orquestracao-de-containers.png"
  robots: "index, follow"
---

Nos deparamos com muitas perguntas quando o assunto é **DevOps e Orquestração de Containers,** certo? Quando o assunto é colocar em prática os conceitos abordados pelo tema, entra em discussão o papel de cada ferramenta e qual é a melhor de todas. A verdade é que existem diversas ferramentas no mercado e, a cada momento, um novo *release* é lançado. Grandes empresas apostam numa determinada tecnologia, outras criam o próprio combo de ferramenta. A parte boa é que não existe a melhor ferramenta. Nesse post, vamos abordar os principais aspectos e qual a diferença entre: **Docker, Kubernetes e Apache Mesos.**
Confira neste artigo informações importantes que vão trazer informações úteis sobre orquestradores de containers.

## A história do Docker

## [Docker](http://docker.com)

![](/wp-content/uploads/2017/08/docker02.png)

A Docker Inc. começou como uma *startup de PaaS* (plataforma-como-serviço) e transformou-se em uma empresa chamada DotCloud. A equipe da DotCloud partiu do bem conhecido problema de desenvolvimento de aplicações que é: o gerenciamento de muitas aplicações e suas respectivas dependências, que sempre exigia um esforço significativo de manutenção e evolução.

A solução encontrada por eles foi se basear em alguns dos recursos do *Linux Cgroups*. O Objetivo foi construir um formato de empacotamento que facilitasse o uso de aplicativos e fizesse com que eles pudessem ser executados, consistentemente, em qualquer infraestrutura.

[Confira nosso conteúdo completo sobre Docker aqui](/o-que-e-docker/)

### Esse empacotamento fornece os seguintes recursos:

1. Embrulha a aplicação e suas bibliotecas em um único pacote (“Docker Image”), para que aplicativos sejam implantados em muitos ambientes;
2. Usa uma semântica “Git”, bem conhecida no meio de desenvolvedores, tais como “docker pull”, “docker commit”. Isso ajuda a adotar a nova tecnologia e incorporá-la em seus fluxos de trabalho do dia a dia;
3. Define a “Docker Image” com uma camada imutável, de forma a possibilitar a abstração da infraestrutura imutável. As alterações são armazenadas como camadas individuais somente de leitura, tornando fácil a reutilização de imagens e controle de alterações. A organização em camadas também economiza o tráfego de rede e espaço de disco, transportando apenas as atualizações;
4. Executa o contêiner Docker instanciando uma imagem imutável, porém com uma camada gravável. Dessa forma, armazena temporariamente as alterações de tempo de execução, tornando fácil para implantar e escalar várias instâncias das aplicações.

Essa inovadora visão da **Docker** para encapsular software e suas dependências em um único pacote é uma quebra de paradigma para a indústria de software, comparando com o que foi o MP3 na indústria da música. O “Docker File” tornou-se padrão na indústria de fornecedores de tecnologia (incluindo Docker, Google, Pivotal, Mesosphere e muitos outros) tanto que hoje essas mesmas empresas visam garantir a interoperabilidade e interfaces padronizadas em tecnologias de contêiner para assegurar que, uma vez construído usando todas as ferramentas, esse contêiner possa ser executado em qualquer infraestrutura.

*Inscreva-se no nosso blog para ser notificado quando publicarmos conteúdos como este!*

## O desenvolvimento da Docker como orquestrador

O Docker cresceu em popularidade e os desenvolvedores confiaram executar os contêineres além dos notebooks, já se sentindo confortáveis em implantar as soluções em produção. Um ponto importante é que um ferramental adicional era necessário para coordenar estes contêineres com várias máquinas. Isso ficou conhecido como **orquestração de contêiner**. Surgiram (e continuam a surgir) muitas tecnologias de orquestração de contêiner de terceiros como:

- Mesos;
- Kubernetes;
- Docker Swarm, (Oficial da Docker);
- Nomad.

[Veja aqui o nosso conteúdo sobre mitos e verdades sobre contêiner. Eles são seguros?](/verdades-mitos-modernizacao-de-aplicacoes-com-conteiner/)

Docker, que tem em seu núcleo o simples e open-source “docker file”, desenvolveu para a comunidade diversas ferramentas para complementar e apoiar o desenvolvimento e implantação e manutenção. Confira abaixo algumas delas:

- **Docker Hub –** para armazenamento público de “Docker Images”;
- **Docker Registry** – para armazenar imagens em ambiente on-premises;
- **Docker Cloud** – um serviço gerenciado para criar e executar contêiner;
- **Docker Datacenter** – como uma oferta comercial que incorpora muitas tecnologias Docker.

## Orquestrador [Kubernetes](https://kubernetes.io/)

![](/wp-content/uploads/2017/08/Kubernetes2.png)

O Google reconheceu o potencial da tecnologia Docker logo no início e procurou ofertar a orquestração de “contêiner como-a-serviço”(Contêiner as a service) na plataforma Google Cloud. O Google já tinha uma tremenda experiência com contêineres (No passado participaram da criação do Cgroups em Linux), e fizeram com que as tecnologias de contêineres existentes e as ferramentas de computação distribuídas como Borg fossem acopladas diretamente à sua infraestrutura. Dessa maneira a Google construiu o Kubernetes, do zero.
Kubernetes foi lançado em 2015, com os seguintes objetivos e considerações:

1. Capacitar os desenvolvedores de aplicativos com uma ferramenta completa para a orquestração de *contêiner* Docker. E isso sem ter que interagir com a infraestrutura;
2. Fornecer uma experiência de implantação de app consistente e APIs com suporte para tecnologias cloud;
3. Construir uma API modular que permita que os fornecedores integrem sistemas em torno do núcleo Kubernetes.

Em 2016, o Google doou Kubernetes para CNCF (*Cloud Native Computing Foundation cncf.io*). A empresa continua como contribuinte principal para o projeto, que é seguido de Redhat, CoreOS e outros.
O Kubernetes foi muito atraente para os desenvolvedores de aplicativos. Isso porque a ferramenta reduziu sua dependência com as equipes de infraestrutura e operações. Os fornecedores também gostaram porque trouxe uma maneira fácil de abraçar o movimento pró-contêiner e fornecer uma solução comercial para os desafios operacionais da implantação. O Kubernetes, ainda hoje, não é algo de uso simples ou trivial.
Para o futuro existem múltiplas iniciativas com a intenção de expandir o escopo do projeto para que este se integre com mais tarefas, como por exemplo o Google analytics e serviços de monitoração. No entanto, estas iniciativas ainda estão em fases muito iniciais.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/Q4W8Z-D-gcQ?list=PL69nYSiGNLP3pYuoSkyq1M-fbNjQHaNfb" width="560"></iframe>

## Orquestrador [Apache Mesos](http://mesos.apache.org/)

![](/wp-content/uploads/2017/08/mesos-logo.png)
Mesos começou como um projeto da Universidade de Berkeley para criar uma nova tecnologia. Isso incluía clusterizar, gerenciar e aplicar todas as lições aprendidas. Tudo isso com as tecnologias cloud e com as infraestruturas de computação distribuídas (Borg do Google e Tupperware do Facebook).
Enquanto Borg e Tupperware tinham uma arquitetura monolítica e foram tecnologias proprietárias de código-fonte, fechadas e amarradas a infraestrutura física; o Mesos introduziu uma arquitetura modular, com uma abordagem de desenvolvimento de código aberto, pensada para ser completamente independente da infraestrutura. Mesos foi adotado pelo Twitter, Uber e muitas empresas de tecnologia para suportar a orientação a microsserviços, grande volume de dados, análise em tempo real e dimensionamento elástico.
Como um Gerenciador de cluster, Mesos foi arquitetado para resolver os seguintes desafios:

1. Simplificar a alocação de recursos, proporcionando uma aplicação coerente e experiência operacional através de nuvens privadas ou públicas;
2. Manter diversas tarefas de projeto na mesma infraestrutura como: analytics, microsserviços, monitoração, dados distribuídos e até aplicações (tentando melhorar a utilização e reduzir os custos);
3. Automatizar o dia a dia da operação como: implantação, auto-recuperação, dimensionamento e upgrades;
4. Fornecer uma infraestrutura tolerante a falha, de alta disponibilidade e extensibilidade aos aplicativos sem necessidade de recodificar;

Mesos pode inclusive gerenciar individualmente um conjunto diversificado de tarefas, incluindo aplicativos tradicionais em Java.
**Ponto Importante:** Mesos não faz orquestração de contêiner. Sim, é isso mesmo! Ele não faz orquestração de contêiner. Para fazer isso ele precisa do Marathon. Essa ferramenta serve para prover plataforma como serviço (PaaS) para orquestração de contêiner, permitindo assim escalar e evoluir aplicações de forma mais rápida. Ele é totalmente REST e escrito na linguagem Scala.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/hTcZGODnyf0" width="560"></iframe>

## Os Orquestradores

É comum comparar Docker, Kubernetes e Mesos, porém, a comparação deveria ser: Docker Swarm, Kubernetes e Marathon no Mesos.

Mesos não está dedicado a orquestrar contêiner. Para ele, não importa o que corre “em cima” da aplicação. Portanto, é natural que o suporte e a evolução dessa plataforma para *contêiner* fiquem sempre em segundo plano, demorando mais que outros para evoluir.

### Maraton on Mesos

![](/wp-content/uploads/2017/08/Captura-de-Tela-2017-08-17-às-18.12.05.png)

A empresa inventou a tecnologia atual de contêiner e em seguida construiu uma plataforma (segura e simples). Além de dar o suporte necessário com SLA ao mercado corporativo, promovendo economia, agilidade e performance. Kubernetes e Mesos sozinhos não oferecem CaaS.

Podemos incluir o Openshift, que é uma solução de PaaS, fechada e de pouca flexibilidade, não permitindo o uso de apps windows, linux, microsserviços e monólitos em qualquer infra ou framework

Por fim, com o Docker EE temos a plenitude do CaaS, orquestração e gerenciamento da tecnologia de contêiner.

### Ciclo Evolutivo de container

Acreditamos que sempre partirá da Docker para os demais, conforme na imagem abaixo:
![](/wp-content/uploads/2017/08/Captura-de-Tela-2017-08-18-às-11.02.55.png)

Chegamos ao final do nosso conteúdo. Esperamos de verdade que você tenha gostado. O seu aprendizado sobre as funcionalidades que os contêineres possuem não precisa parar por aqui. Por essa razão, oferecemos a você um super material.

[![](/wp-content/uploads/2017/08/CTAs-O-que-os-lideres-de-TI-querem-saber-sobre-Docker.png)](https://materiais.vertigo.com.br/ebook-top-questions-docker?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)
