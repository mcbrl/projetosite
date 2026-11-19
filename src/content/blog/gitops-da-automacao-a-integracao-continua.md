---
title: "GitOps: da automação à integração contínua"
slug: "gitops-da-automacao-a-integracao-continua"
date: "2021-08-18T11:41:46"
modified: "2021-08-18T11:41:46"
status: "publish"
author: "admin"
excerpt: "Definida como uma abordagem para gerenciamento de infraestrutura e aplicações que reúne as melhores práticas de desenvolvimento de software e as aplica aos sistemas e TI, o GitOps cresce, diariamente, sua popularidade entre os desenvolvedores. Através dessa prática é possível gerenciar as configurações da sua aplicação através do Git, sistema open source para controle de […]"
categories: ["devops", "kubernetes"]
tags: ["devops", "gitops", "kubernetes"]
featuredImage: "/wp-content/uploads/2021/08/BLOG_ImgDestaque_GitOps_17-08-21.png"
wpId: 157142
originalUrl: "https://vertigo.com.br/gitops-da-automacao-a-integracao-continua/"
contentSource: "rest"
seo:
  title: "GitOps: da automação à integração contínua - Vertigo"
  description: "GitOps: veja como surgiu essa abordagem para gerenciamento de infraestrutura e aplicações que também é um modelo operacional para Kubernetes."
  canonical: "https://vertigo.com.br/gitops-da-automacao-a-integracao-continua/"
  ogImage: "/wp-content/uploads/2021/08/BLOG_ImgDestaque_GitOps_17-08-21.png"
  robots: "index, follow"
---

Definida como uma abordagem para gerenciamento de infraestrutura e aplicações que reúne as melhores práticas de desenvolvimento de software e as aplica aos sistemas e TI, o [GitOps](/como-gitops-oferece-alta-velocidade-para-kubernetes/) cresce, diariamente, sua popularidade entre os desenvolvedores.

Através dessa prática é possível gerenciar as configurações da sua aplicação através do [Git](https://git-scm.com/), sistema open source para controle de versão. Geralmente é utilizado para desenvolvimento de aplicações [cloud native](/as-seis-melhores-praticas-de-cloud-native-para-lideres-de-ti/) e também é um modelo operacional para Kubernetes.

Mas você sabe como o GitOps surgiu? Neste artigo, veremos como essa prática nasceu através de marcos importantes, desde que ela era uma ideia inicial até atingir o patamar de usabilidade dos dias atuais.

Entenda em ordem cronológica a origem desse modelo operacional para criar aplicações, gerenciamento de cluster Kubernetes e que está presente nas soluções da Vertigo.

## Como era o mundo antes do GitOps?

Em meados **de 2010,** as empresas de serviços em nuvem ofereciam Virtual Machines que prometiam a capacidade de desenvolvimento de aplicações fosse executada em qualquer ambiente na nuvem, com grande facilidade de uso. Até certo ponto, isso realmente funcionava, mas no entanto nenhuma dessas soluções ofereceu algo diferente do que a já existente metodologia de 12 fatores,  que aborda um passo a passo com 12 pontos a serem seguidos, para o desenvolvimento de um [projeto SaaS](/o-que-voce-precisa-saber-sobre-saas/) bem sucedido.

Com o lançamento dos containers Docker **em 2013**, um modelo operacional bastante simples para um único nó passou a existir. Uma grande vantagem é que eles não exigem que os desenvolvedores tenham um grande conhecimento da infraestrutura. Por consequência, isso gerou uma grande adoção aos contêineres por toda a indústria.

## A orquestração de containers aquece o mercado

Vendo a necessidade dos desenvolvedores gerenciarem e monitorarem os containers na nuvem, **em 2015**, a equipe da Weaveworks desenvolveu a Weave Cloud, para minimizar a complexidade operacional dos clusters do Kubernetes com [pipelines CI/CD](/o-que-e-um-pipeline-de-ci-cd-entenda/).

Fato curioso é que o próprio Weave Cloud funciona em containers e por isso era necessário um orquestrador. Então, qual era a solução ideal?

A princípio, construir um orquestrador próprio parecia ser a opção mais viável, mas logo percebeu-se que não era o melhor uso de tempo e recursos. Em vez disso, eles optaram por aproveitar ferramentas de orquestração de containers disponíveis. Após alguns testes, a solução escolhida foi o Kubernetes, na época, era a melhor solução para esse tipo de demanda e a equipe de desenvolvedores tornou-se especialista em instalação, implantação e execução do Kubernetes. Ainda **em 2015**, a equipe desenvolveu sua oferta de SaaS – Weave Cloud, operando Kubernetes em EC2.

## Seria possível melhorar as operações em Kubernetes?

Após inúmeros testes para melhorar suas operações do Kubernetes, a equipe técnica da Weaveworks especializou-se na solução e adquiriu conhecimento técnico para realizar mudanças mais ousadas na sua produção.

Seguindo com o projeto ousado, a equipe de engenharia implementou uma mudança no sistema que em caso de erros inesperados, poderia prejudicar toda a sua integridade. De início, foi o que de fato ocorreu, mas a equipe da Weaveworks conseguiu restaurar o sistema novamente em mais ou menos 1 hora, pois ele estava totalmente descrito em vários arquivos de configuração do Git. O sistema incluiu não apenas o cluster, mas também a aplicação, monitoramento e outras partes.

Dessa forma, mesmo antes de ser nomeado como tal, **em 2016** tivemos o que podemos chamar de “versão beta” do GitOps. Cada modificação precisava ser confirmada no sistema de registro para o estado desejado, que foi armazenado em uma instância do GitHub.

## 2017, surge o GitOps

O progresso dos testes e os resultados satisfatórios fizeram com que a equipe criasse uma lista dos princípios pelos quais operam o sistema Kubernetes, destacando os mais importantes.

O princípio básico GitOps é automatizar operações do sistema com base em um modelo que se encontra fora do próprio sistema e o Git foi o local escolhido para colocar esse modelo.

Então, durante uma das reuniões de equipe, Alexis Richardson, CEO da Weaveworks, chegou ao nome “GitOps”, que na sua visão, é o mais adequado para descrever todo o processo. O fato ocorreu enquanto se discutia o padrão de gerenciamento geral do sistema via Git, o seu objetivo era criar um termo fácil de pronunciar. Hoje, podemos ver que ele realmente estava certo.

## GitOps – A adoção em massa do mercado

Era questão de tempo, a simplicidade da abordagem GitOps logo caiu nas graças das grandes empresas que oferecem serviços cloud como a [AWS](/parcerias/aws/), Azure e Google Cloud.

O GitOps é um termo familiar para as equipes de desenvolvimento de software, em empresas de todos os portes. O fato dele simplificar as operações em Kubernetes e containers garante bastante confiança para as organizações que desejam implantar o código do repositório Git em um cluster Kubernetes.

## Realize entregas sem sobrecargas através das soluções da Vertigo e com o GitOps

A Vertigo atua há mais de duas décadas ajudando líderes do setor público e privado em seus projetos de Transformação Digital. Oferecemos as soluções sob medida para jornada de inovação do seu negócio.

Torne o processo de desenvolvimento de aplicações mais rápido, seguro e permita que as equipes de desenvolvimento realizem entregas mais eficientes. Nós podemos te ajudar a realizar deploys com mais segurança, previsibilidade e governança com GitOps!

Entre em contato conosco para obter uma demonstração.
