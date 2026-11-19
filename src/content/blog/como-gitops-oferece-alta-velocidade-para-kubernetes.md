---
title: "Como GitOps oferece alta velocidade para Kubernetes"
slug: "como-gitops-oferece-alta-velocidade-para-kubernetes"
date: "2021-02-11T12:49:50"
modified: "2021-02-11T12:49:50"
status: "publish"
author: "admin"
excerpt: "GitOps baseia-se em DevOps com o Git como uma única fonte para infraestrutura declarativa e aplicações de todo o sistema. O Kubernetes é um exemplo de ferramenta moderna e declarativa que permite que todo o conjunto de arquivos de configuração possa ser controlado por versão no Git, ou seja, toda uma infraestrutura pode ser reproduzida […]"
categories: ["transformacao-cloud-native"]
tags: ["cloud-native", "git", "gitops", "kubernetes", "observabilidade", "transformacao-cloud-native", "weave-kubernetes", "weaveworks", "wkp"]
featuredImage: "/wp-content/uploads/2021/02/Gitops-kubernetes.png"
wpId: 5471
originalUrl: "https://vertigo.com.br/como-gitops-oferece-alta-velocidade-para-kubernetes/"
contentSource: "rest"
seo:
  title: "Como GitOps oferece alta velocidade para Kubernetes - Vertigo"
  description: "Gerenciar clusters de maneira consistente em uma infraestrutura heterogênea pode ser difícil - e sujeito a erros - sem a simplicidade e automação que o GitOps fornece."
  canonical: "https://vertigo.com.br/como-gitops-oferece-alta-velocidade-para-kubernetes/"
  ogImage: "/wp-content/uploads/2021/02/Gitops-kubernetes.png"
  robots: "index, follow"
---

GitOps baseia-se em DevOps com o Git como uma única fonte para infraestrutura declarativa e aplicações de todo o sistema. O Kubernetes é um exemplo de ferramenta moderna e declarativa que permite que todo o conjunto de arquivos de configuração possa ser controlado por versão no Git, ou seja, toda uma infraestrutura pode ser reproduzida nele.
Durante a execução dos nossos projetos utilizando algumas ferramentas da Weaveworks, aprendemos que o sucesso se resume em três pilares:

1. Ter um pipeline de entrega completamente automatizado que pode implementar alterações na sua infraestrutura quando são realizadas no Git;
2. Operar um negócio rápido e totalmente disponível requer monitoramento e observabilidade desde o início. A segurança é de extrema importância;
3. Tudo tem que ser controlado pela versão e armazenado em uma única fonte a partir da qual será possível realizar a recuperação, caso necessário.

Os atributos principais do GitOps no [Weave Cloud](https://www.weave.works/product/cloud/), plataforma de automação e gerenciamento de equipes de desenvolvimento e DevOps da Weaveworks,  são as ferramentas de CI / CD, a implantação contínua e o gerenciamento de versões que oferecem suporte à sincronização do cluster Git. 
A implantação do Weave Cloud foi projetada especificamente para sistemas de controle de versão e stacks de aplicações declarativas. Cada desenvolvedor pode usar o Git para fazer pull requests, além de acelerar e simplificar as tarefas operacionais do Kubernetes.
As organizações querem se beneficiar de um aumento na velocidade e inovação que vem com a adoção do [Kubernetes](/como-kubernetes-pode-reduzir-complexidade-da-nuvem/). Mas, para isso, é preciso uma estratégia sólida.
É necessária uma abordagem automatizada e consistente para o gerenciamento de clusters que possa ser executada com eficiência, não importando a quantidade destes, de nuvens ou de outras configurações que estejam incluídas na combinação.
Neste artigo explicaremos como GitOps oferece alta velocidade para Kubernetes. Boa leitura!

## Gerenciamento da complexidade

O Kubernetes proporciona aceleração e inovação desde que seja possível gerenciar a complexidade da configuração de plataformas. Um dos maiores desafios é manter e implantar plataformas Kubernetes consistentes enquanto são usadas por várias equipes que precisam operar em diferentes ambientes e nuvens.
A implementação do Kubernetes envolve muito mais do que simplesmente ativar um cluster. Além da sua instalação básica, existem complementos para executá-lo, tanto em sua infraestrutura (incluindo uma maneira de monitorar sua integridade), bem como as ferramentas e aplicações que as equipes de desenvolvimento exigem para pipelines de CD, rastreamento de código e registro.
Além disso, talvez haja necessidade de considerar ferramentas para requisitos específicos de negócios como *Machine Learning,* cujas aplicações também precisam ser configuradas para funcionar com o Kubernetes.

## Definições de configuração de cluster

Quase todos os elementos do Kubernetes usam configuração declarativa: o cluster e cada componente dentro dele, bem como as aplicações em execução. Isso permite que a configuração da plataforma seja armazenada em conjunto no Git. 
Com o GitOps, no caso de um desvio na configuração, um alerta é acionado e o cluster pode ser reconciliado automaticamente com um estado conhecido armazenado no Git. Essa abordagem traz os seguintes benefícios:

- A segurança apoiada pelo Git garante a procedência através de uma trilha de auditoria integrada;
- Maior confiabilidade para automatizar o processo de atualização com GitOps integrado e seguro;
- Gerenciamento escalável do cluster em aplicações;
- Economia de tempo e custos com configurações completas de plataforma enviadas para Git;
- Monitoramento proativo com alerta de desvio na configuração do cluster.

## Política baseada em Git

No núcleo da configuração do cluster está a capacidade de gerenciar políticas com GitOps. Este é um componente padrão na Weave Kubernetes Platform (WKP) que pode ajudar a atender aos requisitos de conformidade regulatória com mais eficiência.
Políticas e regras podem ser configuradas pelas equipes para determinar os papéis e as permissões de quem pode confirmar alterações na configuração básica do Kubernetes.
As permissões de controle de acesso baseado em função (RBAC) podem ser verificadas e confirmadas no Git no momento do *commit*. Antes de qualquer alteração ser aplicada, o feedback é fornecido.

## Self service

Com políticas de GitOps, não é preciso escolher entre consistência de configuração e a ferramenta. Em vez disso, você pode permitir que seus desenvolvedores usem tudo que precisarem para construir seus canais de entrega.
Quando todas as informações de configuração são armazenadas no Git, stacks inteiros de clusters podem ser enviados de forma consistente e escalável, não importa quantos você esteja mantendo e implantando.

## Manutenção de clusters

Com o GitOps, não há necessidade de gerar ou aplicar arquivos YAML personalizados para cada cluster em sua infraestrutura. Você pode permitir que as ferramentas façam esse trabalho árduo e tedioso para que sua equipe se concentre em criar as melhores configurações para seus workloads, em vez de aplicá-las.
Essa abordagem não apenas torna o gerenciamento de dezenas de clusters muito mais eficiente, mas também aumenta a segurança, reduzindo o risco de erros ou omissões ocasionadas por configuração manual.

### Consistência entre on premise e cloud native

A infraestrutura atual, na maioria das organizações, inclui uma combinação de recursos locais e várias nuvens públicas. Gerenciar clusters de maneira consistente em uma infraestrutura heterogênea pode ser difícil – e sujeito a erros – sem a simplicidade e automação que o GitOps fornece.
Gerenciar a configuração com GitOps evita o problema de ter que manter ou proteger clusters personalizados. É possível escrever um único conjunto de arquivos de configuração, adaptando-os quando necessário para lidar com as nuances de diferentes nuvens e clusters ou para ferramentas específicas e, em seguida, implantá-los em todas as partes de sua infraestrutura usando um workload comum e seguro.

## Simplificação do controle de acesso

Ao gerenciar manualmente clusters espalhados por várias nuvens, o controle de acesso e as funções do usuário podem se tornar confusos. Um conjunto diferente de funções e políticas de controle para cada cluster é uma receita para gerar omissões e falhas de segurança.
Com gerenciamento baseado em GitOps, torna-se viável definir um único conjunto de políticas de controle de acesso, mantê-las no Git e aplicá-las a todos os clusters e equipes específicas. 
Isso é possível não apenas por aplicar as configurações de maneira automatizada, mas também porque ter uma abordagem centralizada e automatizada para o gerenciamento de políticas permite controlar o número de pessoas com acesso aos seus clusters.

## GitOps e Kubernetes

No modelo de pipeline do GitOps, o Git desempenha o papel central: código, configuração e stack. Isso significa que qualquer desenvolvedor pode usar o GitHub, se juntar à equipe e enviar uma nova aplicação ou realizar alterações facilmente.
Serviços de CI, construção e teste são necessários para desenvolver artefatos implantáveis. Porém, no pipeline do GitOps, a orquestração geral da entrega é coordenada pelo sistema de automação de implantação e release. Esses princípios são integrados ao Weave Cloud e permitem um caminho rápido na produção. 

## CI/CD instantâneo

O Weave Cloud configura um cluster Kubernetes CI/CD para que você possa se beneficiar da entrega contínua de alta velocidade. A partir dessa base, você pode atualizar e reverter aplicações através do Git PRs, CLI ou GUI. Além disso, o monitoramento e gerenciamento de stacks integrados são disponibilizados para completar o círculo operacional.
A abordagem integrada do Weave significa que um desenvolvedor pode observar as implantações conforme elas acontecem para que assim possa medir e reagir ao impacto de uma mudança.

## Observabilidade como catalisador

A observabilidade é um dos principais motivadores do ciclo de entrega contínua para Kubernetes, pois permite a visão holística do estado de execução real do sistema a qualquer momento.
O sistema em execução é observado de modo a entendê-lo e controlá-lo, aplicando novos recursos e correções que são enviados para o Git, alimentando o pipeline.

## Ferramentas centradas em Git

O objetivo do GitOps é ajudar as equipes a acelerar a entrega. Ferramentas centradas em Git unificam pipelines, permitindo que desenvolvedores realizem operações de maneira mais fácil, ágil e leve. 
A função de um painel GitOps no Weave Cloud é permitir a [observabilidade](/por-que-a-observabilidade-e-o-futuro-do-monitoramento-de-sistemas/) e acelerar a compreensão e validação do sistema, além de sugerir ações de mitigação. Isso agiliza o ciclo de operações.

## Conclusão

O GitOps é fundamental para implementar estratégias de Kubernetes altamente escaláveis que sejam confiáveis, eficientes e seguras. Abordagens de configuração manual podem funcionar quando existem apenas um ou dois clusters para gerenciar, mas **não há como trabalhar com grandes quantidades sem a ajuda do gerenciamento de políticas do GitOps**.
As consequências são que suas configurações se tornam inconsistentes, o que, provavelmente, leva a equipe a cometer erros que criam problemas de segurança. O GitOps aborda todos esses desafios para permitir uma estratégia de gerenciamento do Kubernetes que seja verdadeiramente consistente e escalável.
A [Weave Kubernetes Platform (WKP)](https://materiais.vertigo.com.br/automatizando-kubernetes-gitops?_fs=cb445e0d-89fc-4623-8fbe-72abea1c06ea) é uma plataforma pronta para produção com GitOps como arquitetura subjacente. Simplifica a configuração e o gerenciamento de clusters em toda a sua organização, reunindo – em uma única plataforma – todas as ferramentas, serviços e componentes que sua equipe precisa executar.
Juntos, como parceiros oficiais no Brasil para revenda e serviços profissionais da Weaveworks, podemos criar uma arquitetura de referência cloud native que se adapte às suas necessidades de negócios. Você pode se beneficiar de um modelo de projeto já validado ou pode projetar, revisar e selecionar opções de tecnologia com nossa ajuda.  
Tem dúvidas sobre o que você precisa para criar uma plataforma cloud native? [Entre em contato conosco!](/contato/)

## Saiba como realizar deploys frequentes com mais segurança e com menos sobrecarga com GitOps

[![](/wp-content/uploads/2021/01/Kubernetes-com-GitOps.png)](https://materiais.vertigo.com.br/automatizando-kubernetes-gitops?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)

## Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
