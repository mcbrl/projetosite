---
title: "Como implementar Self-Healing no Kubernetes"
slug: "como-implementar-self-healing-no-kubernetes"
date: "2023-06-01T16:07:50"
modified: "2026-02-02T20:37:05"
status: "publish"
author: "admin"
excerpt: "Durante uma longa jornada de 25 anos na indústria de desenvolvimento, indo desde a programação de sistemas à liderança de equipes, pude observar que alguns eventos nunca deixaram de ser recorrentes e nocivos a toda a cadeia de produção software. Se você está nesse mercado há algum tempo, já deve ter percebido que sistemas falham […]"
categories: ["kubernetes"]
tags: ["kubernetes"]
featuredImage: "/wp-content/uploads/2026/02/como-implementar-self-healing-no-kubernetes.png"
wpId: 162106
originalUrl: "https://vertigo.com.br/como-implementar-self-healing-no-kubernetes/"
contentSource: "rest"
seo:
  title: "Como implementar Self-Healing no Kubernetes - Vertigo"
  description: "Veja como implementar Self-Healing no Kubernetes e obter a capacidade de auto restauração dos seus pods. Leia mais em nosso blog."
  canonical: "https://vertigo.com.br/como-implementar-self-healing-no-kubernetes/"
  ogImage: "/wp-content/uploads/2026/02/como-implementar-self-healing-no-kubernetes.png"
  robots: "index, follow"
---

Durante uma longa jornada de 25 anos na indústria de desenvolvimento, indo desde a programação de sistemas à liderança de equipes, pude observar que alguns eventos nunca deixaram de ser recorrentes e nocivos a toda a cadeia de produção software.

Se você está nesse mercado há algum tempo, já deve ter percebido que sistemas falham de forma recorrente. Desde de um simples software de escritório sendo executado em um notebook, um sistema de transação financeira em um grande servidor, ou até mesmo a injeção eletrônica do seu carro, todos estão sujeitos à falha.

Aceitar e compreender que os sistemas podem falhar e que isso eventualmente acontecerá, é o primeiro passo para aprender a gerenciar de forma eficaz toda a estrutura necessária para manter o negócio em operação.

Para mantermos o foco do artigo, focaremos nos sistemas executados em servidores, como os que são responsáveis por operações bancárias, compras de produtos ou serviços, entre outros.

Há aproximadamente 20 anos atrás, eu costumava acompanhar a implantação de sistemas em servidores Windows NT e até mesmo Mainframes. Com o passar das décadas, tivemos à nossa disposição ferramentas poderosas, tais como servidores Linux estáveis e de fácil operação, containers e orquestradores (como o [Kubernetes](/como-utilizar-metricas-personalizadas-no-horizontal-pod-autoscaler-hpa-do-kubernetes/)).

No entanto, não é incomum encontrar equipes de TI ainda adotando comportamentos semelhantes aos deste passado distante como: **observar e conter danos**.

## Me conte como é familiar para você esses tipos de evento:

- Abertura de chamados para ressuscitar um sistema ou até mesmo um servidor que não está mais operacional.

- Manter uma equipe de plantão de madrugada e nos fins de semana para eventuais paralisações de uma plataforma.

- Convocar participantes para uma sala de guerra para restaurar com urgência o backup de um servidor que foi danificado.

Eu entendo perfeitamente o quanto isso torna o cotidiano das equipes **desgastante**, o quanto gera **insatisfação** nas áreas de negócio e principalmente no usuário final.

Plataformas de baixa disponibilidade não apenas limitam o crescimento de uma empresa, mas também podem acarretar sérios **prejuízos**.

A constante dúvida em relação à eficácia do seu trabalho e da sua equipe começa a surgir com frequência, minando gradualmente a **confiança** da empresa em vocês, já que parece haver uma total falta de controle sobre esse cenário.

## Capacite suas aplicações para a auto-recuperação: o poder do Self-Healing

Sei que se você está lendo esse artigo, é porque é um ótimo profissional e está em busca de entender melhor o que acontece em seu ambiente. Tenho certeza que a infraestrutura para suportar todos requisitos necessários foi eficientemente dimensionada por você e sua equipe.

A inclusão de ferramentas de observabilidade nesse ambiente será benéfica para identificar e prever cenários. No entanto, elas ainda dependem de ações manuais e tradicionais de sua equipe para serem efetivas.

Já aceitamos que não é possível ter um total controle sobre o comportamento de suas aplicações.

Então o que você acha de ensinar a essas aplicações a reconhecerem quando não estão se sentindo bem e solicitarem assistência, assim como um jogador machucado em uma partida de futebol pede para ser substituído? Ou capacitá-las a se protegerem de possíveis danos e até mesmo cuidarem de si mesmas, administrando seus próprios medicamentos, antes que sua **condição se agrave**?

Acredite, **isso é totalmente viável** e estou prestes a compartilhar com você essa estratégia de como mantenho as aplicações dos clientes da **Vertigo** sempre disponíveis e sem o custo de uma equipe de plantão, apenas usando o [Kubernetes](/implementando-microsservicos-com-kubernetes-criando-testando-e-compartilhando-helm-charts-parte-2/).

**Self-healing** é a capacidade de um ambiente corrigir de forma automática e evitar falhas, garantindo a disponibilidade e confiabilidade de suas aplicações.

O Kubernetes faz uso de diversas estratégias para garantir a integridade das aplicações em seu ambiente utilizando **Self-healing**, como as que eu denomino a seguir:

- **Validando a  integridade**: Quando um container entender que não está operando de forma saudável, e suas tentativas de autocorreção não estão surtindo efeito, ele avisa ao Kubernetes que precisa ser removido e solicita a sua reposição por uma nova instância.

- **Evitando danos**: Se uma aplicação recebe requisições sem estar com todas as suas dependências de técnicas e de negócio atendidas, poderá sofrer falhas e gerar inconsistência de dados. O Kubernetes permite que o container somente abra o tráfego de rede quando essas pendências forem atendidas.

- **Modificando o ambiente**: Se um container falhar em um determinado Nó, o Kubernetes pode reiniciá-lo em um diferente, na tentativa de oferecer um cenário que esteja mais propício para a seu funcionamento, com mais memória disponível e menor concorrência de processamento, por exemplo;

- **Criando réplicas e escalando**: Através de métricas de uso de recursos, o Kubernetes cria automaticamente novas réplicas de um  contêiner para atender a uma demanda não prevista, escalando este número para cima ou para baixo.

- **Evitando problemas conhecidos**: É possível através de um agendamento do Kubernetes criar rotinas de verificação de problemas corriqueiros e agir antes que ocorra uma interrupção. Como no caso de um volume estar perto de atingir o seu limite de espaço disponível, onde é possível o aumento automático do armazenamento.

**Descubra como ensinar a sua aplicação a se comunicar com o Kubernetes e solicitar assistência sempre que necessário e garantindo sua integridade**

É evidente que possuímos estratégias altamente eficazes para reduzir o tempo de inatividade e interrupção das aplicações em seu ambiente. Neste artigo, iremos explorar de forma prática a implementação das duas estratégias que considero as mais relevantes:

## Validando a  integridade e Evitando danos

Todo o ambiente de Kuberbernetes onde uma aplicação é executada precisa receber informações constantes sobre a saúde e a disponibilidade de seus serviços. Essas informações permitem ações como a **reposição automática de uma réplica comprometida**  e a **liberação do roteamento de requisições** para essa aplicação.

## O que é necessário para implementarmos essas soluções?

**1 – Notificar ao orquestrador que a aplicação está saudável (Liveness)** – os componentes e integrações online devem estar operacionais;

**2 – Notificar ao orquestrador se a aplicação pode receber requisições (Readness)** – todas as dependências de negócio e a capacidade disponível de processamento devem estar operacionais.

![Kubernetes](/wp-content/uploads/2023/06/notificando_kubernetes.png)

**Para implementar essa solução iremos utilizar uma simulação de três aplicações:**

A **api-internet** é a aplicação principal de nossa demonstração, para que ela entenda que está saudável, precisará verificar com frequência se a aplicação **servico-de-persistencia** está  operacional e que sua integração com ela esteja ativa. Caso contrário ela entenderá que não está saudável e solicitará ao Kubernetes sua **reposição** na tentativa de **corrigir** esta falha de comunicação.

Estar saudável não é o suficiente para manter a integridade da aplicação e dos seus dados. É necessário que todos os componentes de **negócio** também estejam operacionais. Para ter essa garantia, a **api-internet** somente irá abrir tráfego de rede podendo receber novas requisições quando entender que a aplicação **servico-de-negocio** está operacional. Caso contrário irá fechar o tráfego de rede, impedindo a sobrecarga de operações que não poderá responder.

Os passos a seguir irão facilitar e direcionar o nosso entendimento para a construção deste cenário:

A aplicação api-internet irá implementar e disponibilizar **dois pontos de entrada em sua api** que por sua vez irão validar os seguintes cenários:

**1 – Saúde da aplicação** – Se a comunicação com o módulo responsável pela persistência está operacional. Isso é possível através da validação da integração com a aplicação **servico-de-persistencia**. Caso contrário irá solicitar ao Kubernetes **reposição** de si mesma, na tentativa de restabelecer essa conexão.

**2 – Apta para atender o negócio** – Se a comunicação com o módulo responsável em prover informações para operacionalizar o neǵocio está disponível. Isso é possível através da validação da integração com a aplicação **servico-de-negocio**. Caso contrário a aplicação se manterá saudável porém com fluxo de requisições fechado para evitar sobrecarga e talvez a geração de dados inconsistentes, já que não consegue atender ao negócio.

Para apresentar todo esse cenário, já disponibilizei um exemplo com estas três aplicações no **Github** e no **Docker** **Hub**, onde será possível entender na prática como esse processo é configurado.

Os Links para esses repositórios se encontram a seguir:

**Github**: <https://github.com/Vertigo-Learn>

**Docker Hub**: <https://hub.docker.com/search?q=vtglearn>

Vou mostrar para você como configuramos essa comunicação entre a aplicação **api-internet** com o **Kubernetes**.

O exemplo a seguir, considera que a implantação do serviço **api-internet** é do tipo **deployment**, e configura o **Liveness** e o **Readness**. As verificações serão recorrentes e com intervalo de  30 segundos.

O **Liveness** irá verificar a saúde da aplicação utilizando o ponto de entrada **“como-esta-minha-saude”** e o **Readness** verificará se a aplicação está apta a atender o negócio pelo ponto de entrada  **“posso-atender-ao-negocio”** :

```
apiVersion: apps/v1
kind: Deployment
metadata:
 name: api-internet-deployment
 labels:
   app: api-internet
spec:
 replicas: 1
 selector:
   matchLabels:
     app: api-internet
 template:
   metadata:
     labels:
       app: api-internet
   spec:
     containers:
     - name: api-internet
       image: vtglearn/api-internet
       ports:
       - containerPort: 7001
       livenessProbe:
         httpGet:
           path: /hello/como-esta-minha-saude
           port: 7001
         initialDelaySeconds: 15
         timeoutSeconds: 30
       readinessProbe:
         httpGet:
           path: /hello/posso-atender-ao-negocio
           port: 7001
         initialDelaySeconds: 15
         timeoutSeconds: 30
```

Após instalar as 3 aplicações com as configurações mencionadas neste artigo, vamos começar a realizar testes e observar o comportamento.

![](/wp-content/uploads/2023/06/kubernetes2.png)

1 – Remova a aplicação de **servico-de-persistencia** do nosso ambiente, simulando que ela se encontra indisponível. Isso é possível através deste comando:

```
$ kubectl scale deploy servico-de-persistencia-deployment --replicas=0
```

2 – Agora observe que em alguns segundos a **aplicação api-internet** vai solicitar ao Kubernetes uma reposição, incrementando o número de restarts registrado:

![](/wp-content/uploads/2023/06/kubernetes3.png)

3 – Retorne com a aplicação de **servico-de-persistencia**, tornando-a novamente disponível. Isso é possível através deste comando:

```
$ kubectl scale deploy servico-de-persistencia-deployment --replicas=1
```

4 – Observe que agora a aplicação **api-internet** voltou a informar ao Kubernetes que está saudável e parou de solicitar reposição, após 2 solicitações.

![](/wp-content/uploads/2023/06/kubernetes4.png)

5 – Remova a aplicação de **servico-de-negocio** do nosso ambiente, simulando que ela se encontra disponível. Isso é possível através deste comando:

```
$ kubectl scale deploy servico-de-negocio-deployment --replicas=0
```

6 – Agora observe que em alguns segundos a aplicação **api-internet** vai fechar o seu **tráfego** de rede impedindo novas requisições, porém não vai solicitar reposição pois está saudável, apenas não pode atender ao negócio:

![](/wp-content/uploads/2023/06/kubernetes5.png)

7 – Retorne com a aplicação de **servico-de-negocio**, tornando-a novamente disponível. Isso é possível através deste comando:

```
$ kubectl scale deploy servico-de-negocio-deployment --replicas=1
```

8 – Agora observe que em alguns segundos a aplicação **api-internet** vai abrir o seu tráfego de rede permitindo novas requisições:

![](/wp-content/uploads/2023/06/kubernetes6.png)

A solução que apresentei tem a garantia de aprimorar e aumentar a resiliência de seu ambiente. Fazendo com que você e sua equipe deixem para trás o modelo tradicional de **observar** e **conter danos**.

A maturidade deste processo pode ser elevada, quando é possível contar com o suporte de **especialistas** orientando quanto às melhores práticas e capacitando os times internos.

*É importante lembrar que um ambiente estável que consegue se ajustar a imprevistos, melhora a experiência do usuário e garante maior satisfação e tranquilidade dos profissionais envolvidos.*

## Implemente Kubernetes com a Vertigo Tecnologia

Há mais de duas décadas, a Vertigo tem atuado no mercado, proporcionando soluções revolucionárias e contribuindo para o aprimoramento dos resultados das empresas em diferentes setores.

No nosso conjunto de colaborações, a [Mirantis Kubernetes](/parcerias/mirantis/) oferece soluções baseadas em containers que podem diminuir despesas e aprimorar a eficiência das equipes.

Entre em contato com nossa equipe de profissionais especializados, esclareça suas dúvidas e tenha acesso às soluções mais eficazes para impulsionar os projetos da sua empresa.

–

*Esse artigo é assinado pelo nosso Líder de Prática DevOps, Carlos Aiello*

![](/wp-content/uploads/2023/06/Assinaturas-site_Aielo.png)
