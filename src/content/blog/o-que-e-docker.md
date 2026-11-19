---
title: "O que é Docker?"
slug: "o-que-e-docker"
date: "2018-07-10T12:09:19"
modified: "2018-07-10T12:09:19"
status: "publish"
author: "admin"
excerpt: "Docker é uma plataforma Open Source que possibilita o empacotamento de uma aplicação dentro de um contêiner. A partir desse momento, um software consegue se adequar e rodar em qualquer máquina que tenha essa tecnologia instalada. Abaixo você pode conferir o vídeo apresentado por Thor Salgado, um dos nossos grandes entusiastas da tecnologia. Ele dá um […]"
categories: ["blog", "devops"]
tags: ["container", "conteiner", "conteinerizacao", "docker", "o-que-e-docker"]
featuredImage: "/wp-content/uploads/2018/07/o-que-e-docker.png"
wpId: 2424
originalUrl: "https://vertigo.com.br/o-que-e-docker/"
contentSource: "rest"
seo:
  title: "Aprenda o que é Docker - Modernize a TI da sua empresa!"
  description: "Docker é uma plataforma Open Source que possibilita o empacotamento de uma aplicação dentro de contêineres. A partir desse momento um software consegue se adequar e rodar em qualquer máquina que tenha essa tecnologia instalada.Saiba mais sobre o assunto aqui!"
  canonical: "https://vertigo.com.br/o-que-e-docker/"
  ogImage: "/wp-content/uploads/2018/07/o-que-e-docker.png"
  robots: "index, follow"
---

**Docker**é uma plataforma Open Source que possibilita o empacotamento de uma aplicação dentro de um contêiner. A partir desse momento, um software consegue se adequar e rodar em qualquer máquina que tenha essa tecnologia instalada.

Abaixo você pode conferir o vídeo apresentado por Thor Salgado, um dos nossos grandes entusiastas da tecnologia. Ele dá um panorama, super detalhado, sobre Docker, abordando suas funcionalidades e vantagens.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/0ZgMjpy_vQQ" width="560"></iframe>

Docker não é um sistema de virtualização. Uma máquina virtual executa um sistema operacional inteiro (além das aplicações). Já um contêiner, apenas isola uma aplicação, empacotando-a com todas as suas dependências.

## Vamos nos aprofundar para entender melhor **o** **que é um Contêiner.**

Inscreva-se no nosso blog para ser notificado quando publicarmos conteúdos como este!

Em tempo de execução, um contêiner é uma forma de isolamento de um processo (programa em execução) ao nível do sistema operacional.

Quando construídos, contêineres definem todo o sistema de arquivos que a aplicação enxerga, tornando previsível (e imutável) a forma com que a aplicação executa e o que ela encontra à sua volta. Os arquivos armazenados neste empacotamento são chamados de “imagens”, que são uma espécie de formato de distribuição e entrega das aplicações.

[Veja aqui nosso conteúdo sobre DevOps! O assunto tem tudo a ver com Docker.](/o-que-e-devops/)

Ou seja, imagens são a forma de distribuir uma aplicação e, ao mesmo tempo, a garantia que a aplicação sempre encontrará o mesmo ambiente imutável à sua volta.

Agora com conceitos definidos, vamos seguir em frente. Docker é construído na **linguagem de programação GO**, que é leve e de código aberto, adequada aos tempos que vivemos de comunicação em nuvem. Não é à toa que empresas como Google, Spotify e Facebook, que precisam de data centers imensos, são entusiastas da tecnologia.

## **Vantagens e Aplicabilidade**

Docker tem sido a menina dos olhos de diversos eventos tecnológicos que ocorrem ao redor do planeta. Não é para menos. Conforme já falamos, a tecnologia possibilita uma série de ganhos a um baixíssimo custo, em comparação com as maneiras tradicionais de fazer TI.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/3yXLMI4LzIA" width="560"></iframe>

Caso você não queira ver o vídeo todo, elencamos algumas vantagens da utilização de Docker abaixo:

### **Redução do tempo de entrega**

Uma mudança de sistema costuma ser algo tenso e artesanal em companhias com TI tradicional. Com o Docker, não apenas as entregas são muito agilizadas e simplificadas, mas sobretudo a forma de entrega de uma aplicação fica reduzida a um denominador comum (o contêiner), *não importando a tecnologia, framework ou linguagem* em que é escrita.

O uso de imagens torna trivial a reprodução do ambiente original definido pelo desenvolvedor (infraestrutura como código). Dessa maneira, não é necessário demandar tempo da área de infraestrutura de uma empresa para instalação e configuração de aplicações.

A ferramenta **Docker Compose**, por exemplo, executa múltiplos contêineres de uma só vez, evitando que se tenha que iniciar um por um,  definindo como eles se enxergam mutuamente. Isso agiliza a configuração de ambiente e execução da aplicação, não importando onde elas irão executar.

### **Redução do uso de recursos**

O uso de [Docker](/docker/) simplifica o uso de infraestrutura sob demanda. Ou seja, não apenas o provisionamento de servidores é trivial, como também qualquer provedor de nuvem pública também será capaz de rodar as aplicações.

O baixo custo do isolamento de uma aplicação em contêiner garante a otimização do uso de recursos de hardware disponíveis. Diferente de VMs que demandam muito mais recursos para operar (por conta dos seus sistemas operacionais), com o Docker utiliza-se apenas o necessário para a aplicação. Isso vale tanto para *bare metal*, quanto para nuvem.

### **Escalabilidade**

Sistemas em nuvem são uma mão na roda para empresas e usuários comuns, barateando provisionamento e gestão. No caso das companhias, elas conseguem potencializar a escalabilidade dos seus sistemas, contando com a elasticidade disponível. Sites de e-commerce podem utilizar Docker para potencializar e controlar seus sistemas. Com os orquestradores – [Kubernetes](/docker-kubernetes-mesos/) ou Swarm Mode, por exemplo – é possível criar sistemas que atenderiam, de forma rápida e eficiente, demandas extras por um determinado serviço.

## **Que tal experimentar um pouco Docker?**

Como dissemos no início do nosso conteúdo, Docker é uma plataforma open source. Isso significa que ela é aberta para a comunidade, sem custos. A própria empresa disponibiliza tutoriais e ambientes gratuitos de contêineres no site [**Play with Docker**](https://labs.play-with-docker.com/).

Nós da Vertigo Tecnologia também queremos contribuir com seu aprendizado. Sabemos que Java é uma das linguagens de programação mais utilizadas no mundo. Recentemente, o Pacote de Desenvolvimento teve alguns upgrades, que facilitam sua integração com [Docker](/docker/).

Elaboramos um material detalhados explicando as melhorias a fundo. Você, com toda certeza, vai aumentar ainda mais sua curiosidade sobre a tecnologia. Para baixar basta clicar na imagem.

[![](/wp-content/uploads/2018/07/IMAGEM-BLOG-1-768x432-1.png)](http://materiais.vertigo.com.br/paper-integracao-docker-java?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)

Esperamos que esse texto tenha sido interessante para você. Aproveitamos sua atenção para te convidar a fazer parte da nossa newsletter para receber nossos conteúdos diretamente em seu e-mail. Basta inserir seu endereço eletrônico no campo localizado no rodapé desta página.

Aguardamos você em breve. Até mais!

---
