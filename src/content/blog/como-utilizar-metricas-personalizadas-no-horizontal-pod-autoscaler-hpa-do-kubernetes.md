---
title: "Como utilizar métricas personalizadas no Horizontal Pod Autoscaler (HPA) do Kubernetes"
slug: "como-utilizar-metricas-personalizadas-no-horizontal-pod-autoscaler-hpa-do-kubernetes"
date: "2023-05-08T15:54:41"
modified: "2026-02-02T20:37:30"
status: "publish"
author: "admin"
excerpt: "Introdução às métricas personalizadas no HPA As métricas personalizadas são indicadores de desempenho definidos pelo usuário que estendem as métricas de recursos padrão (por exemplo, CPU e memória) suportadas pelo Horizontal Pod Autoscaler (HPA) no Kubernetes. Por padrão, o HPA baseia suas decisões de dimensionamento nas solicitações de recursos do pod, que representam os recursos […]"
categories: ["kubernetes"]
tags: ["kubernetes"]
featuredImage: "/wp-content/uploads/2026/02/como-utilizar-metricas-personalizadas-no-horizontal-pod-autoscaler-hpa-do-kubernetes.png"
wpId: 162035
originalUrl: "https://vertigo.com.br/como-utilizar-metricas-personalizadas-no-horizontal-pod-autoscaler-hpa-do-kubernetes/"
contentSource: "rest"
seo:
  title: "Como utilizar métricas personalizadas no Horizontal Pod Autoscaler (HPA) do Kubernetes - Vertigo"
  description: "Veja como utilizar as como utilizar métricas personalizadas no Horizontal Pod Autoscaler (HPA) do Kubernetes. Leia mais em nosso blog."
  canonical: "https://vertigo.com.br/como-utilizar-metricas-personalizadas-no-horizontal-pod-autoscaler-hpa-do-kubernetes/"
  ogImage: "/wp-content/uploads/2026/02/como-utilizar-metricas-personalizadas-no-horizontal-pod-autoscaler-hpa-do-kubernetes.png"
  robots: "index, follow"
---

## Introdução às métricas personalizadas no HPA

As métricas personalizadas são indicadores de desempenho definidos pelo usuário que estendem as métricas de recursos padrão (por exemplo, CPU e memória) suportadas pelo Horizontal Pod Autoscaler (HPA) no Kubernetes.

Por padrão, o HPA baseia suas decisões de dimensionamento nas solicitações de recursos do pod, que representam os recursos mínimos necessários para o mesmo ser executado. No entanto, esta abordagem pode não ser ideal para um desempenho ótimo. Em vez disso, é frequentemente mais benéfico escalar com base nos limites de recursos, pois isso garante que seu aplicativo não atinja suas restrições máximas de recursos.

As métricas personalizadas permitem decisões de dimensionamento automático mais granulares e específicas do aplicativo, levando a uma melhor utilização de recursos e desempenho do sistema.

## Por que as métricas personalizadas do Kubernetes são necessárias?

Embora as métricas que como padrão são fornecidas pelo [Kubernetes](/solucoes-kubernetes-com-a-mirantis/), como o uso de CPU e memória com base nas solicitações de recursos sejam úteis para muitos cenários, elas podem não ser suficientes para todos os aplicativos.

Escalar com base nos limites de recursos garante que seu aplicativo possa lidar com cargas de trabalho variáveis sem atingir seus recursos máximos permitidos. As métricas personalizadas permitem adaptar o comportamento de escalonamento do HPA com base nas necessidades específicas do seu aplicativo, possibilitando um dimensionamento automático mais preciso e eficiente.

### Usando métricas personalizadas no HPA:

Para usar métricas personalizadas no HPA, você precisa:

1. Certificar-se de que seu cluster esteja configurado para suportar métricas personalizadas. Isso normalmente envolve implantar um servidor de API de métricas personalizadas e configurar as ferramentas de monitoramento necessárias, como o Prometheus.
2. Definir métricas personalizadas em seu código de aplicativo, se necessário, e expô-las por meio de um endpoint apropriado.
3. Configurar o HPA para usar as métricas personalizadas especificando-as no manifesto do HPA.

### Exemplos de métricas personalizadas e seus casos de uso:

**1 – Taxa de solicitação**: para aplicativos em que o número de solicitações recebidas tem um impacto significativo no consumo de recursos, você pode definir uma métrica personalizada com base na taxa de solicitação. Isso permite que o HPA escale o número de réplicas com base na carga de trabalho real, em vez de apenas no uso de CPU ou memória.

**Caso de uso**: um gateway de API que precisa lidar com diferentes níveis de tráfego de entrada.

**2 – Tamanho da fila**: para aplicativos que processam tarefas a partir de uma fila, você pode criar uma métrica personalizada com base no tamanho da fila. Isso permite que o HPA escale o aplicativo com base no acúmulo de tarefas, garantindo que a capacidade de processamento seja compatível com a carga de trabalho.

**Caso de uso**: um serviço de processamento de trabalhos em segundo plano que consome tarefas de uma fila de mensagens.

**3 – Métricas específicas do aplicativo**: você pode ter indicadores de desempenho exclusivos específicos para seu aplicativo, como o número de sessões de usuário ativas ou a taxa de transações de banco de dados. Criar métricas personalizadas com base nesses indicadores pode ajudar o HPA a tomar decisões de escalonamento mais informadas, adaptadas ao comportamento do seu aplicativo.

**Caso de uso**: uma plataforma de comércio eletrônico que experimenta flutuações na atividade do usuário e precisa dimensionar seus serviços de acordo.

Em resumo, as métricas personalizadas no HPA permitem um dimensionamento automático mais preciso e específico do aplicativo, estendendo as métricas de recursos que por padrão são suportadas pelo [Kubernetes](/aplicando-a-observabilidade-no-kubernetes/).

Ao aproveitar as métricas personalizadas, você pode otimizar a utilização de recursos e o desempenho de uma ampla variedade de aplicativos e casos de uso.

## Como adotar soluções que utilizem Kubernetes?

A Vertigo atua há mais de 20 anos no mercado, levando soluções inovadoras e ajudando a trazer melhores resultados para as empresas de diversos segmentos.

Dentro do nosso portfólio de parcerias, a [Mirantis Kubernetes](/parcerias/mirantis/) entrega soluções containerizadas capazes de reduzir custos e melhorar a entrega das equipes.

Converse com o nosso time de especialistas, tire suas dúvidas e tenha ao seu alcance as melhores soluções para impulsionar os projetos da sua empresa.

–

*Conteúdo técnico assinado pelo nosso Analista DevOps, Caio Barbieri.*

![](/wp-content/uploads/2023/05/Assinaturas-site_Caio-300x100.png)
