---
title: "Kubernetes: 6 principais componentes da sua arquitetura"
slug: "kubernetes-6-principais-componentes-da-sua-arquitetura"
date: "2021-09-16T11:02:42"
modified: "2026-02-02T20:40:21"
status: "publish"
author: "admin"
excerpt: "O Kubernetes é um sistema open source para orquestração de containers que está cada vez mais em uso no mercado de tecnologia. Apesar de facilitar e simplificar a criação dos seus deploys, ele tem uma grande complexidade em sua construção devido às muitas partes da sua arquitetura. Por isso, está se tornando uma prática quase […]"
categories: ["kubernetes"]
tags: ["docker", "kubernetes"]
featuredImage: "/wp-content/uploads/2026/02/kubernetes-6-principais-componentes-da-sua-arquitetura.png"
wpId: 157267
originalUrl: "https://vertigo.com.br/kubernetes-6-principais-componentes-da-sua-arquitetura/"
contentSource: "rest"
seo:
  title: "Kubernetes: 6 principais componentes da sua arquitetura -"
  description: "Veja os 6 principais componentes da arquitetura Kubernetes. Acesse o blog e fique por dentro das novidades do mundo da tecnologia."
  canonical: "https://vertigo.com.br/kubernetes-6-principais-componentes-da-sua-arquitetura/"
  ogImage: "/wp-content/uploads/2026/02/kubernetes-6-principais-componentes-da-sua-arquitetura.png"
  robots: "index, follow"
---

O Kubernetes é um sistema open source para orquestração de containers que está cada vez mais em uso no mercado de tecnologia. Apesar de facilitar e simplificar a criação dos seus deploys, ele tem uma grande complexidade em sua construção devido às muitas partes da sua arquitetura.

Por isso, está se tornando uma prática quase obrigatória para as equipes de DevOps terem um bom entendimento sobre os diferentes componentes do Kubernetes e como eles funcionam juntos.

Nesse artigo, vamos explicar os 6 principais componentes da arquitetura que compõem o Kubernetes e demonstrar o papel que cada um deles desempenha.

**Leia também**

- [DevOps e Kubernetes: uma dupla eficiente e complementar](/devops-e-kubernetes-uma-dupla-eficiente-e-complementar/)
- [GitOps: da automação à integração contínua](/gitops-da-automacao-a-integracao-continua/)

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/juIEdQ4UjC4?si=AIwJbVmjY26g2S74" title="YouTube video player" width="560"></iframe>

## Container: a base do Kubernetes

Os containers são os blocos em que os códigos das aplicações são armazenados em nuvem ou data center privado. O Kubernetes foi criado justamente para gerenciar de forma efetiva esses blocos de construção. Ele pode se adaptar a diversas soluções, como as da [Liferay](/parcerias/liferay/) e da [Kong](/parcerias/kong/), nossos parceiros de negócios.

O container “empacota” o código da aplicação no seu tempo de execução e bibliotecas. A maior vantagem ao aplicar a conteinerização, é tornar a sua aplicação portátil, pois os containers podem ser compartilhados com outros membros da sua equipe e executar a aplicação em diferentes máquinas com mais facilidade.

O Kubernetes foi desenvolvido para operar em grande escala. Conteinerizar aplicações corporativas é um grande desafio, mas a arquitetura do Kubernetes consegue simplificar o processo com bastante eficiência.

## Pod: conjunto de containers

Os pods de K8s (sigla em inglês para Kubernetes) são uma coleção de containers que compartilham recursos, como namespace (para isolar recursos por projetos ou funcionalidades), armazenamento e rede. Os pods são dinâmicos quando terminam as suas tarefas, são excluídos. Caso algum nó executado em um pod apresente erro, esse pod também será excluído. Dessa forma, os pods são gerenciados durante todo o seu ciclo, desde a sua criação até o encerramento, sendo substituídos conforme necessário.

Os containers inseridos em um pod, têm diferentes estados: aguardando, executando e encerrando. Geralmente os pods não são criados individualmente pelo administrador, mas sim de forma automática pelo controlador, baseado em especificações definidas pelo administrador.

## Node: infraestrutura Kubernetes

Um node é uma instância de servidor que executa outros componentes de nível superior no Kubernetes. Ele faz parte da infraestrutura em um sistema Kubernetes, pois cada nó é feito de componentes como kubelet e kube-proxy.

O kubelet é executado como um agente em cada node e depois o registra com o APIserver. Depois ele transmite periodicamente as informações sobre os pods em um node. Já o Kube-proxy é um proxy de rede executado em cada node no seu cluster, implementando o conceito de serviço do Kubernetes e mantendo as regras de rede em nodes. Essas regras de rede permitem a comunicação com seus pods a partir de sessões dentro ou fora de seu cluster.

## Cluster Kubernetes

Quando você implementa o Kubernetes, obtém um cluster que consiste em um conjunto de servidores de processamento, os nodes responsáveis por executarem as aplicações conteinerizadas. Todo cluster tem pelo menos um servidor de processamento para hospedar os pods.

O ambiente de gerenciamento monitora os nodes de processamento e os pods contidos no cluster. Nos ambientes de produção, o ambiente de gerenciamento costuma ser executado em vários computadores, quando um cluster geralmente executa em múltiplos nodes.

## Control Plane: gerenciamento de cluster

O plano de controle é o local onde o cluster é gerenciado. Existem muitos componentes que fazem parte do plano de controle, vamos ver alguns deles.

![Componentes do Kubernetes](/wp-content/uploads/2021/09/components-of-kubernetes-scaled.jpg)

**APIserver**

A parte mais importante do plano de controle é o APIserver, pois ele atua como a interface que permite a comunicação entre todos os outros componentes do cluster, além de ser o ponto de entrada para solicitações externas. Por meio dele, você pode consultar e alterar o estado de outros componentes no sistema Kubernetes.

**Controller manager**

O gerenciador do controlador é responsável por alterar o estado atual do cluster para outro mais adequado. Dentro do Kubernetes existem muitos controladores, o de node, de replicação, namespace e o controlador de endpoints.

**etcd**

O etcd é um componente de armazenamento de dados principal do Kubernetes, o sistema padrão para orquestração de containers. Todos os dados armazenados no etcd necessitam de um backup. O etcd pode ser executado no mesmo node do cluster ou até mesmo em uma infraestrutura a parte, dessa forma é fornecida maior capacidade para armazenar o backup e um controle maior sobre o etcd.

**Scheduler**

Para cada pod criado ou outros não escalonados, o scheduler seleciona um node ideal para executá-lo. Contudo, os nodes precisam ser filtrados de acordo com os requisitos de escalonamento específicos, pois cada um deles tem requisitos e recursos diferentes. Atendendo a esses requisitos, o programador tem a liberdade para personalizá-los da forma como melhor atender o seu projeto.

## Armazenamento de dados Kubernetes

Existem dados que fatalmente seriam perdidos quando um pod ou container tem erro ou é excluído, dessa forma, o Kubernetes utiliza os chamados volumes de armazenamento.

É possível ter volumes de armazenamento externo para Kubernetes e esses volumes podem ser provisionados por você ou dinamicamente pelo sistema.

## **A Vertigo é a parceira ideal para implementar Kubernetes**

Agora que você teve uma visão mais detalhada sobre os componentes do Kubernetes, é capaz de compreender de forma mais íntima, como a orquestração de containers pode agilizar a construção da sua aplicação.

A Vertigo Tecnologia é especializada em promover a transformação digital no setor público e privado e conta com profissionais capacitados que conhecem a fundo a arquitetura do Kubernetes. Somos parceiros da [Weaveworks](/parcerias/weaveworks/) e da Docker, especialistas no processo de orquestração de aplicações, operando e gerenciando [Kubernetes com GitOps](/como-gitops-oferece-alta-velocidade-para-kubernetes/).

Sua empresa já utiliza Kubernetes e conta com todos os benefícios da sua aplicação? Se ainda não, então entre em contato com o nosso time, pois teremos o prazer em te ajudar.

**Leia mais**

- [A Transformação Digital no setor de Utilities](/a-transformacao-digital-no-setor-de-utilities/)
- [O que é um pipeline de CI/CD? Entenda](/o-que-e-um-pipeline-de-ci-cd-entenda/)
