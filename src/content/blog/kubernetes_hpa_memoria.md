---
title: "Kubernetes: Configurando o HPA com limites de CPU e memória"
slug: "kubernetes_hpa_memoria"
date: "2023-05-15T16:07:26"
modified: "2026-02-02T20:40:34"
status: "publish"
author: "admin"
excerpt: "Fazer a gestão de recursos é um passo importante para que aplicações funcionem de forma adequada. Quando definimos limites de CPU e memórias dentro de uma aplicação que utilizam clusters Kubernetes, temos um ganho operacional, maior estabilidade e redução de custos. Veja a seguir a importância da gestão de recursos inteligente e os benefícios de […]"
categories: ["kubernetes"]
tags: ["kubernetes"]
featuredImage: "/wp-content/uploads/2026/02/kubernetes_hpa_memoria.png"
wpId: 162048
originalUrl: "https://vertigo.com.br/kubernetes_hpa_memoria/"
contentSource: "rest"
seo:
  title: "Kubernetes: Configurando o HPA com limites de CPU e memória - Vertigo"
  description: "Kubernetes: Veja como configurar o HPA com limites de memória e ter o melhor desempenho nas suas aplicações."
  canonical: "https://vertigo.com.br/kubernetes_hpa_memoria/"
  ogImage: "/wp-content/uploads/2026/02/kubernetes_hpa_memoria.png"
  robots: "index, follow"
---

Fazer a gestão de recursos é um passo importante para que aplicações funcionem de forma adequada.

Quando definimos limites de CPU e memórias dentro de uma aplicação que utilizam clusters [Kubernetes](/veecode-platform/), temos um ganho operacional, maior estabilidade e redução de custos.

Veja a seguir a importância da gestão de recursos inteligente e os benefícios de configurar o HPA com limites de CPU e memória.

## Definir limites de CPU e memória para sua aplicação é crucial, veja os benefícios

1. **Gerenciamento de recursos:** ao especificar limites de recursos, você impede que pods ou contêineres individuais consumam recursos excessivos, o que pode afetar outras cargas de trabalho em execução no mesmo cluster.
2. **Desempenho previsível:** a definição de limites garante que sua aplicação tenha recursos suficientes para funcionar de maneira ideal em cargas de trabalho variáveis, minimizando as chances de degradação do desempenho.
3. **Otimização de custos:** ao limitar o uso de recursos, você pode evitar despesas desnecessárias com recursos em nuvem ou hardware local.
4. **Dimensionamento automático eficiente:** limites de recursos adequadamente configurados permitem que o Horizontal Pod Autoscaler (HPA) tome melhores decisões de dimensionamento, garantindo que sua aplicação escale para cima ou para baixo com base nas necessidades reais de recursos.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/2PJyREGF3zc?si=BRAe3owz6DdepjGh" title="YouTube video player" width="560"></iframe>

## Guia passo a passo: como configurar o HPA com métricas personalizadas e limites de recursos

**1 –** Configure o Prometheus. Minha recomendação é usar o Helm Chart kube-prometheus-stack, que implanta o cAdvisor e outros componentes necessários.

**2 –** Crie métricas personalizadas no Prometheus para monitorar o uso de CPU e memória com base nos limites de recursos. Adicione os seguintes exemplos à sua configuração do Prometheus:

**Exemplo de métrica personalizada de limites de uso de CPU:**

```
- record: pod:cpu_usage_percentage:ratio
 expr: |
   sum by (pod, namespace) (
  node_namespace_pod_container:container_cpu_usage_seconds_total:sum_irate{
cluster="",namespace!="",pod!=""}
   )
   /
   sum by (pod, namespace) (
     kube_pod_container_resource_limits{cluster="",job="kube-state-metrics",namespace!="",pod!="",resource="cpu"}
   ) * 100
```

**Exemplo de métrica personalizada de limites de uso de memória:**

```
- record: pod:memory_usage_percentage:ratio
 expr: |
   sum by (pod, namespace) (
     container_memory_working_set_bytes{cluster="",container!="",image!="",job="kubelet",metrics_path="/metrics/cadvisor",namespace!="",pod!=""}
   )
   /
   sum by (pod, namespace) (
     kube_pod_container_resource_limits{cluster="",job="kube-state-metrics",namespace!="",pod!="",resource="memory"}
   ) * 100
```

**3 –** Configure o [Prometheus Adapter Chart](https://artifacthub.io/packages/helm/prometheus-community/prometheus-adapter) que substituirá o [Metrics-Server padrão do Kubernetes](https://github.com/kubernetes-sigs/metrics-server).

**4 –** Configure o Prometheus Adapter para usar as métricas do Prometheus:

```
prometheus:
    url: http://prometheus.monitoring.svc
    port: 9090
```

**5 –** Adicione métricas personalizadas ao Prometheus Adapter (essas métricas serão encontradas no Prometheus):

```
rules:
default: true
custom:
- seriesQuery: 'pod:memory_usage_percentage:ratio{namespace!="",pod!=""}'
resources:
overrides:
namespace: {resource: "namespace"}
pod: {resource: "pod"}
metricsQuery: '<<.Series>>{<<.LabelMatchers>>} / 100'
- seriesQuery: 'pod:cpu_usage_percentage:ratio{namespace!="",pod!=""}'
resources:
    overrides:
      namespace: {resource: "namespace"}
      pod: {resource: "pod"}
  metricsQuery: '<<.Series>>{<<.LabelMatchers>>} / 100'
```

Você pode encontrar mais informações sobre as regras do Prometheus Adapter na [documentação oficial](https://github.com/kubernetes-sigs/prometheus-adapter/blob/master/docs/config-walkthrough.md).

**6 –** Para métricas de recursos, você pode personalizar consultas para coletar CPU e memória:

```
resource:
 cpu:
   containerQuery: |
     sum by (<<.GroupBy>>) (
       rate(container_cpu_usage_seconds_total{container!="",<<.LabelMatchers>>}[3m])
     )
   nodeQuery: |
     sum  by (<<.GroupBy>>) (
       rate(node_cpu_seconds_total{mode!="idle",mode!="iowait",mode!="steal",<<.LabelMatchers>>}[3m])
     )
   resources:
     overrides:
       node:
         resource: node
       namespace:
         resource: namespace
       pod:
         resource: pod
   containerLabel: container
 memory:
   containerQuery: |
     sum by (<<.GroupBy>>) (
       avg_over_time(container_memory_working_set_bytes{container!="",<<.LabelMatchers>>}[3m])
     )
   nodeQuery: |
     sum by (<<.GroupBy>>) (
       avg_over_time(node_memory_MemTotal_bytes{<<.LabelMatchers>>}[3m])
       -
avg_over_time(node_memory_MemAvailable_bytes{<<.LabelMatchers>>}[3m])
     )
   resources:
     overrides:
       node:
         resource: node
       namespace:
         resource: namespace
       pod:
         resource: pod
   containerLabel: container
 window: 3m
```

**7 –** Implemente o Prometheus Adapter

```
helm repo add --force-update prometheus-community https://prometheus-community.github.io/helm-charts

helm upgrade --install -n monitoring
prometheus-adapter prometheus-community/prometheus-adapter --version 4.1.1 -f metrics-server.yaml
```

**8 –** Verifique se a métrica personalizada foi aplicada com sucesso

```
kubectl get --raw "/apis/custom.metrics.k8s.io/v1beta1/" | jq
```

**9 –** Para demonstração, implante o NGINX com limites de recursos e solicitações definidas:

```
helm repo add --force-update bitnami https://charts.bitnami.com/bitnami

helm upgrade --install \
--set resources.limits.cpu=100m \
--set resources.limits.memory=128Mi \
--set resources.requests.cpu=50m \
--set resources.requests.memory=64Mi \
nginx bitnami/nginx --version 13.2.29
```

**10 –** Aplique HPA com métricas personalizadas:

```
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
 name: nginx-hpa
spec:
 scaleTargetRef:
apiVersion: apps/v1
   kind: Deployment
   name: nginx
 minReplicas: 1
 maxReplicas: 10
 metrics:
 - type: Pods
   pods:
     metric:
       name: pod:memory_usage_percentage:ratio
     target:
       type: Utilization
       averageValue: 0.8 # 80%
 - type: Pods
   pods:
     metric:
       name: pod:cpu_usage_percentage:ratio
     target:
       type: Utilization
       averageValue: 0.8 # 80%
```

```
kubectl apply -f demo/nginx-hpa.yaml
```

No Helm Chart, um modelo de HPA se pareceria com isso:

*templates/hpa.yaml*

```
{{- if .Values.autoscaling.enabled }}
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: {{ include "app.fullname" . }}
  labels:
    {{- include "app.labels" . | nindent 4 }}
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: {{ include "app.fullname" . }}
  minReplicas: {{ .Values.autoscaling.minReplicas }}
  maxReplicas: {{ .Values.autoscaling.maxReplicas }}
  metrics:
    {{- if .Values.autoscaling.targetCPUUtilizationPercentage }}
    - type: Pods
      pods:
        metric:
          name: pod:cpu_usage_percentage:ratio
        target:
          type: AverageValue
          averageValue: {{ .Values.autoscaling.targetCPUUtilizationPercentage }}
    {{- end }}
    {{- if .Values.autoscaling.targetMemoryUtilizationPercentage }}
    - type: Pods
      pods:
        metric:
          name: pod:memory_usage_percentage:ratio
        target:
          type: AverageValue
          averageValue: {{ .Values.autoscaling.targetMemoryUtilizationPercentage }}
    {{- end }}
{{- end }}
```

*values.yaml*

```
autoscaling:
  enabled: true
  minReplicas: 1
  maxReplicas: 2
  targetCPUUtilizationPercentage: 80
  targetMemoryUtilizationPercentage: 80
```

**11 –** Cheque se o HPA está funcionando:

```
kubectl get hpa nginx-hpa
```

## Conclusão: faça testes com o Kubernetes

Nesse artigo, exploramos a importância do Horizontal Pod Autoscaler (HPA) do Kubernetes para gerenciar efetivamente os recursos e a escalabilidade de suas aplicações. Discutimos as limitações do HPA padrão, que se baseia em solicitações de recursos do pod, e os benefícios de usar métricas personalizadas com base em limites de recursos para obter melhor desempenho.

Ao configurar o Prometheus e o Prometheus Adapter, demonstramos como criar métricas personalizadas para uso de CPU e memória e configurar o HPA para usar essas métricas para um dimensionamento automático mais preciso. Seguindo este guia, passo a passo, você pode implementar esses conceitos e técnicas para otimizar o uso de recursos de suas aplicações e melhorar seu desempenho geral.

Recomendamos que você aplique esses princípios e técnicas em suas implantações do Kubernetes e experimentar as vantagens do dimensionamento automático eficiente e resiliente com base em métricas personalizadas. Feliz escalonamento!

## Quer utilizar Kubernetes na sua empresa?

A Vertigo, parceira estratégica de [grandes empresas](/parcerias/) há mais de duas décadas, entende a importância da observabilidade no processo de construção de projetos em modelos de negócio bem-sucedidos. Uma solução para orquestração de containers como o [Kubernetes](https://materiais.vertigo.com.br/ebook-kubernetes) pode oferecer inúmeras vantagens para sua empresa.

Através da utilização de Kubernetes, é possível automatizar a implantação, o dimensionamento e a gestão de aplicações containerizadas, garantindo que seus aplicativos estejam sempre disponíveis e com alto desempenho. Ao utilizar soluções Kubernetes oferecidas por parceiros como Docker e Weaveworks, a Vertigo pode ajudar sua empresa a obter uma transformação digital de sucesso.

Essas soluções oferecem ferramentas adicionais que ajudam a gerenciar e monitorar seus clusters Kubernetes, bem como a automatizar a implantação e atualização de aplicações. Além disso, o Kubernetes é uma solução altamente escalável e flexível, permitindo que sua empresa adapte rapidamente seus aplicativos às demandas em constante mudança do mercado.

Também é altamente portátil, o que significa que você pode executar seus aplicativos em diferentes nuvens e plataformas sem alterações significativas no código. Entre em contato com o nosso time comercial para obter mais informações sobre como implementar o Kubernetes e as soluções de parceiros para orquestração de containers em seus projetos, e obter uma transformação digital de sucesso para sua empresa.

–

*Quem assina esse artigo é o nosso Analista DevOps, Caio Barbieri.*

![](/wp-content/uploads/2023/05/Assinaturas-site_Caio-1.png)
