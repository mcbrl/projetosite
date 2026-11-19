---
title: "Por que API gateway e Service Mesh são padrões complementares?"
slug: "por-que-api-gateway-e-service-mesh-sao-padroes-complementares"
date: "2020-12-14T15:42:24"
modified: "2020-12-14T15:42:24"
status: "publish"
author: "admin"
excerpt: "Por muitos anos, API Management (APIM), e a adoção de um API gateway, foi a principal metodologia usada para implementar APIs dentro e fora do data center. Porém, essas tecnologias evoluíram muito na última década. Não é apenas o tempo de execução que conecta, protege e governa o tráfego de API no plano de dados […]"
categories: ["mundo-das-apis"]
tags: ["api", "api-gateway", "api-management", "arquitetura-de-microsservicos", "microservices", "microsservicos", "service-mesh"]
featuredImage: "/wp-content/uploads/2020/12/API-gateway.png"
wpId: 5389
originalUrl: "https://vertigo.com.br/por-que-api-gateway-e-service-mesh-sao-padroes-complementares/"
contentSource: "rest"
seo:
  title: "Por que API gateway e Service Mesh são padrões complementares? - Vertigo"
  description: "O padrão de API gateway realiza um salto adicional na rede pelo qual cada solicitação terá que passar para consumir as APIs subjacentes."
  canonical: "https://vertigo.com.br/por-que-api-gateway-e-service-mesh-sao-padroes-complementares/"
  ogImage: "/wp-content/uploads/2020/12/API-gateway.png"
  robots: "index, follow"
---

Por muitos anos, API Management (APIM), e a adoção de um API gateway, foi a principal metodologia usada para implementar APIs dentro e fora do data center. Porém, essas tecnologias evoluíram muito na última década.
Não é apenas o tempo de execução que conecta, protege e governa o tráfego de API no plano de dados das solicitações, mas também uma série de funcionalidades que permitem criação, teste, documentação, monetização, monitoramento e exposição geral das APIs em um contexto muito mais amplo, visando um conjunto maior de usuários.

Ou seja, há um ciclo de vida completo de criação e exposição de APIs como um produto aos usuários e clientes , não sendo apenas o gerenciamento do tempo de execução da rede que nos permite expor e consumir as APIs (RESTful ou não).
Por volta do ano de 2017, outro padrão surgiu no setor: Service Mesh. Mas a indústria falhou em reconhecer como ele funcionava com API gateway e uma grande confusão começou a surgir.

Com o tempo, as implementações de tecnologia alcançaram a visão original desta infraestrutura e cada vez mais usuários implementaram este padrão e compartilharam suas histórias. Isso nos permite, agora, ter uma racionalização mais séria sobre o que é Service Mesh (e o que não é) e qual é o papel da API gateway (e APIM) neste processo.
Muitas pessoas já tentaram descrever as diferenças entre API gateway e Service Mesh, sendo comumente comunicado que a primeira é para o tráfego norte-sul e a segunda para o tráfego leste-oeste. Essa afirmação, além de não ser precisamente correta, também expõe um mal-entendido primordial sobre estes padrões.

Neste artigo vamos mostrar como as abordagens de API gateway e Service Mesh são complementares e explicar em quais casos usar um ou outro. Boa leitura!

## API Gateway

O padrão de API gateway realiza um salto adicional na rede pelo qual cada solicitação terá que passar para consumir as APIs subjacentes. Nesse contexto, algumas pessoas a chamam de implantação centralizada.
Estando no caminho de execução de cada API call, o API gateway recebe solicitações de um cliente e pode aplicar as políticas de tráfego e de usuário antes de finalmente servir de proxy reverso dessas solicitações para as APIs subjacentes. Também pode impor políticas sobre a resposta recebida da API subjacente antes de enviar a solicitação de volta ao cliente original.
Essa infraestrutura pode possuir um *control plane* integrado para gerenciar e configurar o que o *data plane* faz, ou tanto um quanto o outro pode ser agrupado no mesmo processo.
O API gateway é implantado em sua própria instância (sua própria VM, host ou pod) separada do cliente e das APIs. A implantação é, portanto, muito simples porque está totalmente separada do resto do sistema e vive em sua própria camada de arquitetura.
Este tipo de API geralmente abrange três casos de uso para conectividade de serviço interno e externo, bem como para tráfego fora e dentro do data center. Veja quais são:

## API como produto

O primeiro tipo de uso é sobre empacotar a API como um produto que outros desenvolvedores, parceiros ou equipes irão consumir.
As aplicações do cliente podem iniciar solicitações de fora da organização (como no caso de um aplicativo móvel) ou de dentro da mesma empresa (outro produto, construído por outra equipe ou outra linha de negócios). De qualquer forma, serão executados fora do escopo do produto (que está expondo a API) que estão consumindo.
Essa situação é muito comum sempre que diferentes produtos/aplicativos precisam se comunicar, especialmente se tiverem sido criados por equipes diferentes.
Ao oferecer APIs como um produto, um API gateway encapsulará requisitos comuns que governam e gerenciam solicitações originadas do cliente para os serviços de API. Por exemplo, casos de *rate limit*, integração do desenvolvedor ou monetização. Esses são casos de uso implementados por políticas de usuário que vão além do gerenciamento do protocolo subjacente, pois controlam como os usuários usarão o produto.
Um API gateway também é usado ​​como uma camada de abstração que permite alterar as APIs subjacentes ao longo do seu tempo de uso, sem ter que necessariamente atualizar os clientes que as consomem. Isso é especialmente importante nos cenários em que as aplicações do cliente são construídas por desenvolvedores de fora da organização. Nesse caso, este padrão pode ser utilizado para manter a compatibilidade reversa, afinal as APIs subjacentes atualizam com o tempo.

## Conectividade do serviço

Outro caso de uso é sobre a aplicação de políticas de rede para conectar, proteger, criptografar e observar o tráfego entre o cliente e o API gateway, bem como com as APIs.
Após uma solicitação ser processada pelo API gateway, o próprio terá que fazer uma solicitação à API subjacente para obter uma resposta (afinal gateway é um proxy reverso).
Normalmente, queremos proteger a solicitação por meio de Transport Layer Security (TLS) mútuo, registrar as solicitações e, de maneira geral, observar a comunicação da rede.
O gateway também atua como um balanceador de carga e implementa recursos como roteamento HTTP, suporte de proxy da solicitação para diferentes versões de APIs, bem como tratamento de exceções e assim por diante.
As APIs subjacentes que são expostas por meio do API gateway podem ser construídas em qualquer arquitetura (monolítica ou microsserviços), desde que exponham uma interface apta para consumo.

## Gerenciamento completo do ciclo de vida da API

Gerenciar as APIs e seus usuários, além de aplicações do cliente e seu tráfego, são apenas algumas das muitas etapas envolvidas na execução de uma estratégia de API bem-sucedida.
As APIs precisam ser criadas, documentadas, testadas e simuladas. Uma vez em execução, devem ser monitoradas e observadas para detectar anomalias em seu uso.
Além disso, ao oferecer APIs como um produto, elas terão que fornecer um portal para que os usuários finais registrem seus aplicativos, recuperem as credenciais e comecem a consumi-las.
Esta experiência mais ampla, e que atinge vários pontos do ciclo de vida da API, é chamada de gerenciamento completo do ciclo de vida da API. A maioria das soluções API do mercado fornece resposta para implementar todas as questões acima agrupada em um ou mais produtos que se conectarão à API gateway para executar a aplicação da política.

## Service Mesh

Com Service Mesh, cada vez que um serviço deseja fazer uma solicitação de rede para outro serviço (por exemplo, um monólito consumindo o banco de dados ou um microsserviço consumindo outro microsserviço), é preciso cuidar dessa solicitação, tornando-a mais segura e observável.
É um padrão que pode ser aplicado em qualquer arquitetura (monolítica ou orientada a microsserviço) e em qualquer plataforma (VMs, contêineres, Kubernetes).
Nesse sentido, Service Mesh não apresenta novos casos de uso, mas implementa melhor os casos já existentes. Mesmo antes de seu surgimento, as equipes de aplicações já implementavam políticas de tráfego como segurança, capacidade de observação e tratamento de erros para que pudessem aprimorar a conectividade de qualquer solicitação de rede de entrada ou saída.
Nesta situação, as equipes estavam escrevendo mais código em seus serviços. Isso significa que diferentes times reimplementariam a mesma funcionalidade continuamente – em diferentes linguagens de programação – criando fragmentação e riscos de segurança para a organização no gerenciamento da conectividade de rede.
Com Service Mesh, há uma “terceirização” do gerenciamento de rede de qualquer solicitação de entrada ou saída feita por qualquer serviço para uma aplicação proxy que gerenciará todas as solicitações.
Como o proxy será executado na réplica de cada serviço, o Service Mesh também é chamado de implantação descentralizada. Além disso, como há saltos extras na rede para manter a latência no mínimo, o proxy é executado na mesma máquina (VM, host, pod) do serviço que já está em execução.
Como uma instância da aplicação de proxy será executada para cada réplica, haverão muitos proxies em execução nos sistemas. Para configurar todos, seria preciso um *control plane* que atue como fonte para a configuração e que se conecte aos proxies para propagar dinamicamente a configuração. 
O padrão Service Mesh, portanto, é mais invasivo do que o padrão API gateway porque exige que um proxy de *control plane* seja implantado próximo a cada instância de cada serviço, exigindo que os trabalhos de CI/CD sejam atualizados de maneira substancial ao implantar as aplicações. 
Embora existam outros tipos de implantação, o descrito acima é considerado o padrão da indústria, pois garante a melhor e mais alta disponibilidade, além de permitir atribuição de uma identidade única (por meio de um certificado mTLS) para cada réplica de cada serviço.
Com Service Mesh, lidamos fundamentalmente com um caso de uso primário:

## Conectividade do serviço

Ao terceirizar o gerenciamento de rede para um aplicativo proxy de terceiros, as equipes podem evitar a implementação do gerenciamento de rede em seus próprios serviços.
O proxy pode então implementar recursos como criptografia TLS mútua, identidade, roteamento, registro, rastreamento, balanceamento de carga para cada serviço e carga de trabalho implantada, incluindo serviços de terceiros.
Uma vez que a conectividade de serviço na organização será executada em um grande número de protocolos, uma implementação de Service Mesh completa suportará não apenas HTTP, mas também qualquer outro tráfego TCP, independentemente de ser norte-sul ou leste-oeste.
Nesse contexto, é oferecido suporte a uma gama mais ampla de serviços e implementação de políticas de tráfego L4/L7, enquanto as APIs gateways têm sido historicamente mais focadas em políticas L7.
Do ponto de vista conceitual, a Service Mesh possui uma visão muito simples das cargas de trabalho em execução: tudo é um serviço e os serviços podem se comunicar entre si. Como a API gateway também é um serviço que recebe e faz solicitações, ou seja, esta seria apenas mais um serviço entre tantos outros em uma malha.
Como cada réplica de cada serviço requer um proxy de *data plane*próximo – e os proxies de *data plane* são efetivamente balanceadores de carga do cliente – o *control plane* de uma Service Mesh deve saber o endereço de cada proxy para que a capacidade de roteamento L4/L7 possa ser realizada.
O endereço pode ser associado a qualquer metadado. Ao fazer isso, a Service Mesh fornece uma descoberta de serviço integrada que não requer necessariamente uma solução de terceiros. Uma ferramenta de descoberta de serviço ainda pode ser usada para se comunicar fora da malha, mas muito provavelmente não para o tráfego que vai por dentro.

## Quando API gateway e Service Mesh se complementam?

Observando os casos de uso, fica claro que há uma área de sobreposição entre API gateway e Service Mesh, como é o caso de conectividade de serviço.
Os recursos de conectividade de serviço que a Service Mesh fornece complementam os recursos de conectividade que API gateway fornece. No entanto, os fornecidos pela primeira são mais inclusivos e completos. Mas também há casos de uso que a Service Mesh não fornece “API como um produto”, nem o gerenciamento completo do ciclo de vida de API.
Um grande ponto divergente entre os dois padrões é o modelo de implantação: em Service Mesh é preciso implantar um proxy *data plane* ao lado de cada réplica de cada serviço.
Isso é fácil de fazer quando uma equipe deseja implantá-la no escopo de seu próprio produto, mas fica mais difícil quando o proxy tem que ser implantado fora desse escopo por três motivos:

1. A implantação de uma aplicação proxy para cada serviço de cada produto pode obter resistência na organização, uma vez que diferentes produtos, equipes e linhas de negócios podem ter maneiras fundamentalmente diferentes de construir, executar e implantar seu software.
2. Cada proxy *data plane* deve iniciar uma conexão com o *control plane* e, em certos casos, não há permissão para conceder acesso aos que são implantados fora dos limites de um produto, equipe ou linha de negócios.
3. Não é possível implantar o proxy *data plane* com cada serviço porque não são controláveis em seu todo, como no caso de aplicação de terceiros construída por um desenvolvedor, cliente ou parceiro externo à organização.
4. Os serviços implantados na mesma Service Mesh terão que usar a mesma CA (Autoridade de Certificação) para serem fornecidos com um certificado TLS válido para consumir uns aos outros. Compartilhar uma CA pode não ser possível ou desejável entre serviços que pertencem a produtos ou equipes diferentes. Neste caso, duas Service Mesh separadas (cada uma com seu próprio CA) podem ser criadas e se comunicar por meio de API gateway intermediário.

Dado que API gateway e Service Mesh se concentram em diferentes casos de uso, é proposta a seguinte orientação para determinar quando usar um ou outro, partindo do pressuposto de que, na maioria das organizações, ambos serão usados em momentos diferentes.

## Quando usar cada padrão?

### API gateway

Para oferecer APIs “como um produto” para clientes e usuários internos ou externos por meio de um ponto de entrada centralizado para governar e controlar como estão sendo expostos e integrados por meio de uma plataforma APIM de ciclo de vida completo.
Normalmente usado quando diferentes aplicações precisam comunicar-se entre si, e também para criar uma camada de abstração entre os clientes e as APIs subjacentes.

### Service Mesh

Para construir conectividade de tráfego L4/L7 confiável, segura e observável entre todos os serviços que estão sendo executados em seus sistemas por meio de um modelo de implantação *sidecar* descentralizado que pode ser adotado e aplicado em seu todo.
Normalmente usado no escopo de uma aplicação ou com finalidade de criar conectividade ponto a ponto entre todos os serviços pertencentes.

## Conclusão

Os padrões API gateway e Service Mesh quando combinados como complementares são grandes aceleradores de negócio que ajudam a garantir a aplicação das melhores práticas e políticas de segurança.
Simplificam a arquitetura, diminuindo preocupações desnecessárias dos desenvolvedores, permitindo que estes profissionais usem seu tempo para desenvolver apps e melhorar as funcionalidades de negócio.
Projetada sobre uma base open source, Kong Enterprise é uma plataforma completa e extensível de gestão de APIs que gerencia todo o ciclo de serviços, permitindo clientes como GLOBO, Natura, iFood, entre outros, proteger, conectar, monetizar e orquestrar suas APIs.

Uma vez que somos parceiros oficiais da Kong Inc. no Brasil, nossos clientes têm acesso a uma plataforma *world-class* para o gerenciamento e entrega de APIs e Service Mesh. Somado com os produtos e serviços da Vertigo, estamos preparados para entregar ainda mais valor e agilidade ao mercado.
Para implantar e gerenciar o melhor padrão de integração para a sua aplicação, [entre em contato com nossos especialistas](/contato/).

##

## Descubra o quanto sua empresa é Cloud Native com este questionário e receba um relatório com propostas de aceleração

[![](/wp-content/uploads/2021/03/cloud-native-quadrado.png)](/cloud-native-assessment/)

## Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
