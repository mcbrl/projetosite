---
title: "Kubernetes: Configuring the HPA with CPU and memory limits"
slug: "kubernetes_hpa_memoria"
date: "2023-05-15T16:07:26"
modified: "2026-02-02T20:40:34"
status: "publish"
author: "admin"
excerpt: "Managing resources is an important step in ensuring applications function properly. When we define CPU and memory limits within an application that uses Kubernetes clusters , we achieve operational gains, greater stability, and reduced costs. See below for the importance of intelligent resource management and the benefits of configuring the HPA with CPU and memory […]"
categories: ["kubernetes"]
tags: ["kubernetes"]
featuredImage: "/wp-content/uploads/2026/02/kubernetes_hpa_memoria.png"
wpId: 162048
originalUrl: "https://vertigo.com.br/kubernetes_hpa_memoria/"
contentSource: "rest"
lang: "en"
seo:
  title: "Kubernetes: Configuring the HPA with CPU and memory limits - Vertigo"
  description: "Kubernetes: Learn how to configure HPA with memory limits and get the best performance for your applications."
  canonical: "https://vertigo.com.br/en/kubernetes_hpa_memoria/"
  ogImage: "/wp-content/uploads/2026/02/kubernetes_hpa_memoria.png"
  robots: "index, follow"
---

Managing resources is an important step in ensuring applications function properly.

When we define CPU and memory limits within an application that uses [Kubernetes](/en/Veecode-platform/) clusters , we achieve operational gains, greater stability, and reduced costs.

See below for the importance of intelligent resource management and the benefits of configuring the HPA with CPU and memory limits.

## Setting CPU and memory limits for your application is crucial; see the benefits.

1.  **Resource management:** By specifying resource limits, you prevent individual pods or containers from consuming excessive resources, which can affect other workloads running on the same cluster.
2.  **Predictable performance:** Defining limits ensures that your application has sufficient resources to function optimally under varying workloads, minimizing the chances of performance degradation.
3.  **Cost optimization:** By limiting resource usage, you can avoid unnecessary expenses on cloud resources or on-premises hardware.
4.  **Efficient automatic sizing:** Properly configured resource limits allow the Horizontal Pod Autoscaler (HPA) to make better scaling decisions, ensuring that your application scales up or down based on actual resource needs.

<iframe title="YouTube video player" src="https://www.youtube.com/embed/2PJyREGF3zc?si=BRAe3owz6DdepjGh" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

## Step-by-step guide: how to configure HPA with custom metrics and resource limits

**1 –** Configure Prometheus. My recommendation is to use the Helm Chart kube-prometheus-stack, which deploys cAdvisor and other necessary components.

**2 –** Create custom metrics in Prometheus to monitor CPU and memory usage based on resource limits. Add the following examples to your Prometheus configuration:

**Example of a custom CPU usage limit metric:**

\- record: pod:cpu\_usage\_percentage:ratio expr: | summer

**Example of a custom metric for memory usage limits:**

\- record: pod:memory\_usage\_percentage:ratio expr: | sum by (pod, namespace) ( container\_memory\_working\_set\_bytes{cluster="",container!="",image!="",job="kubelet",metrics\_path="/metrics/cadvisor",namespace!="",pod!=""} ) / sum by (pod, namespace) ( kube\_pod\_container\_resource\_limits{cluster="",job="kube-state-metrics",namespace!="",pod!="",resource="memory"} ) \* 100

**3 –** Configure the [Prometheus Adapter Chart](https://artifacthub.io/packages/helm/prometheus-community/prometheus-adapter) that will replace the [default Kubernetes Metrics-Server](https://github.com/kubernetes-sigs/metrics-server).

**4 –** Configure the Prometheus Adapter to use Prometheus metrics:

prometheus: url: http://prometheus.monitoring.svc port: 9090

**5 –** Add custom metrics to the Prometheus Adapter (these metrics will be found in Prometheus):

rules: default: true custom: - seriesQuery: 'pod:memory\_usage\_percentage:ratio{namespace!="",pod!=""}' resources: overrides: namespace: {resource: "namespace"} pod: {resource: "pod"} metricsQuery: '<<.Series>>{<<.LabelMatchers>>} / 100' - seriesQuery: 'pod:cpu\_usage\_percentage:ratio{namespace!="",pod!=""}' resources: overrides: namespace: {resource: "namespace"} pod: {resource: "pod"} metricsQuery: '<<.Series>>{<<.LabelMatchers>>} / 100'

You can find more information about the Prometheus Adapter rules in the [official documentation](https://github.com/kubernetes-sigs/prometheus-adapter/blob/master/docs/config-walkthrough.md).

**6 –** For resource metrics, you can customize queries to collect CPU and memory data:

resource: cpu: containerQuery: | sum by (<<.GroupBy>>) ( rate(container\_cpu\_usage\_seconds\_total{container!="",<<.LabelMatchers>>}\[3m\]) ) nodeQuery: | sum by (<<.GroupBy>>) ( rate(node\_cpu\_seconds\_total{mode!="idle",mode!="iowait",mode!="steal",<<.LabelMatchers>>}\[3m\]) ) resources: overrides: node: resource: node namespace: resource: namespace pod: resource: pod containerLabel: container memory: containerQuery: | sum by (<<.GroupBy>>) ( avg\_over\_time(container\_memory\_working\_set\_bytes{container!="",<<.LabelMatchers>>}\[3m\]) ) nodeQuery: | sum by (<<.GroupBy>>) ( avg\_over\_time(node\_memory\_MemTotal\_bytes{<<.LabelMatchers>>}\[3m\]) - avg\_over\_time(node\_memory\_MemAvailable\_bytes{<<.LabelMatchers>>}\[3m\]) ) resources: overrides: node: resource: node namespace: resource: namespace pod: resource: pod containerLabel: container window: 3m

**7 –** Implement the Prometheus Adapter

helm repo add --force-update prometheus-community https://prometheus-community.github.io/helm-charts helm upgrade --install -n monitoring prometheus-adapter prometheus-community/prometheus-adapter --version 4.1.1 -f metrics-server.yaml

**8 –** Verify that the custom metric was successfully applied.

kubectl get --raw "/apis/custom.metrics.k8s.io/v1beta1/" | jq

**9 –** For demonstration purposes, deploy NGINX with defined resource and request limits:

helm repo add --force-update bitnami https://charts.bitnami.com/bitnami helm upgrade --install \\ --set resources.limits.cpu=100m \\ --set resources.limits.memory=128Mi \\ --set resources.requests.cpu=50m \\ --set resources.requests.memory=64Mi \\ nginx bitnami/nginx --version 13.2.29

**10 –** Apply HPA with custom metrics:

apiVersion: autoscaling/v2 kind: HorizontalPodAutoscaler metadata: name: nginx-hpa spec: scaleTargetRef: apiVersion: apps/v1 kind: Deployment name: nginx minReplicas: 1 maxReplicas: 10 metrics: - type: Pods pods: metric: name: pod:memory\_usage\_percentage:ratio target: type: Utilization averageValue: 0.8 # 80% - type: Pods pods: metric: name: pod:cpu\_usage\_percentage:ratio target: type: Utilization averageValue: 0.8 # 80%

kubectl apply -f demo/nginx-hpa.yaml

In the Helm Chart, a model of an HPA would look like this:

*templates/hpa.yaml*

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
          name: pod:cpu\_usage\_percentage:ratio
        target:
          type: AverageValue
          averageValue: {{ .Values.autoscaling.targetCPUUtilizationPercentage }}
    {{- end }}
    {{- if .Values.autoscaling.targetMemoryUtilizationPercentage }}
    - type: Pods
      pods:
        metric:
          name: pod:memory\_usage\_percentage:ratio
        target:
          type: AverageValue
          averageValue: {{ .Values.autoscaling.targetMemoryUtilizationPercentage }}
    {{- end }}
{{- end }}

*values.yaml*

autoscaling: enabled: true minReplicas: 1 maxReplicas: 2 targetCPUUtilizationPercentage: 80 targetMemoryUtilizationPercentage: 80

**11 –** Check if the HPA is working:

kubectl get hpa nginx-hpa

## Conclusion: run tests with Kubernetes

In this article, we explore the importance of Kubernetes' Horizontal Pod Autoscaler (HPA) for effectively managing the resources and scalability of your applications. We discuss the limitations of the standard HPA, which is based on pod resource requests, and the benefits of using custom metrics based on resource limits to achieve better performance.

When configuring Prometheus and the Prometheus Adapter, we demonstrated how to create custom metrics for CPU and memory usage and configure the HPA to use these metrics for more accurate automatic scaling. By following this step-by-step guide, you can implement these concepts and techniques to optimize your applications' resource usage and improve their overall performance.

We recommend that you apply these principles and techniques to your Kubernetes deployments and experience the advantages of efficient and resilient automatic scaling based on custom metrics. Happy scaling!

## Do you want to use Kubernetes in your company?

Vertigo, a strategic partner to [major companies](/en/partnerships/) for over two decades, understands the importance of observability in the process of building projects in successful business models. A container orchestration solution like [Kubernetes](https://materiais.vertigo.com.br/ebook-kubernetes) can offer numerous advantages to your company.

By using Kubernetes, it's possible to automate the deployment, scaling, and management of containerized applications, ensuring your applications are always available and performing at a high level. By leveraging Kubernetes solutions offered by partners like Docker and Weaveworks, Vertigo can help your company achieve a successful digital transformation.

These solutions offer additional tools that help manage and monitor your Kubernetes clusters, as well as automate application deployment and updates. Furthermore, Kubernetes is a highly scalable and flexible solution, allowing your business to quickly adapt its applications to the constantly changing demands of the market.

It's also highly portable, meaning you can run your applications on different clouds and platforms without significant code changes. Contact our sales team for more information on how to implement Kubernetes and partner solutions for container orchestration in your projects, and achieve a successful digital transformation for your business.

*This article was written by our DevOps Analyst, Caio Barbieri.*

![](/wp-content/uploads/2023/05/Assinaturas-site_Caio-1.png)
