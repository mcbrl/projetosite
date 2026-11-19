---
title: "Evitando antipadrões em serverless com a observabilidade"
slug: "evitando-antipadroes-em-serverless-com-a-observabilidade"
date: "2020-12-30T11:57:30"
modified: "2026-02-02T20:39:12"
status: "publish"
author: "admin"
excerpt: "Aplicações serverless oferecem oportunidades que estão transformando a maneira como pensamos sobre desenvolvimento cloud native. Os dias de preocupação com uma infraestrutura em nuvem complexa e frágil estão chegando ao fim. Todas essas responsabilidades são cada vez mais delegadas a um fornecedor, permitindo que você se concentre em sua lógica de negócios. No entanto, conforme […]"
categories: ["observabilidade"]
tags: ["cloud-native", "observabilidade", "serverless", "serverless-container", "ti-moderna", "transformacao-cloud-native", "transformacao-digital"]
featuredImage: "/wp-content/uploads/2026/02/evitando-antipadroes-em-serverless-com-a-observabilidade.png"
wpId: 5441
originalUrl: "https://vertigo.com.br/evitando-antipadroes-em-serverless-com-a-observabilidade/"
contentSource: "rest"
seo:
  title: "Evitando antipadrões em serverless com a observabilidade - Vertigo"
  description: "Analisamos alguns dos principais antipadrões exclusivos de serverless e descrevemos como a estratégia certa de observabilidade pode diminuir este impacto."
  canonical: "https://vertigo.com.br/evitando-antipadroes-em-serverless-com-a-observabilidade/"
  ogImage: "/wp-content/uploads/2026/02/evitando-antipadroes-em-serverless-com-a-observabilidade.png"
  robots: "index, follow"
---

Aplicações serverless oferecem oportunidades que estão transformando a maneira como pensamos sobre desenvolvimento cloud native. Os dias de preocupação com uma infraestrutura em nuvem complexa e frágil estão chegando ao fim. Todas essas responsabilidades são cada vez mais delegadas a um fornecedor, permitindo que você se concentre em sua lógica de negócios.
No entanto, conforme colocamos mais responsabilidades em terceiros, abrimos mão do controle e da capacidade de observação. Isso leva a uma situação de caixa preta, em que nos tornamos inconscientes de como e porquê nossa arquitetura serverless se comporta de certa maneira. Isso torna mais difícil detectar os antipadrões, que são certos padrões no desenvolvimento de software que são considerados más práticas de programação.
Os novos usuários de serverless são mais suscetíveis a antipadrões, portanto, não estar ciente ou não entender este efeito pode ser frustrante, pois cria uma barreira para a adoção deste tipo de abordagem.
A capacidade de observação atenua esse efeito de caixa preta e a compreensão dos possíveis antipadrões nos permite monitorar as métricas corretas e, assim, tomar as ações adequadas.
Neste artigo analisamos alguns dos principais antipadrões exclusivos de serverless e descrevemos como a estratégia certa de [observabilidade](/por-que-a-observabilidade-e-o-futuro-do-monitoramento-de-sistemas/) pode diminuir este impacto. Boa leitura!

## Use sincronização

À medida que equipes e empresas começam a adotar serverless, um dos maiores erros que podem cometer é projetar sua arquitetura sem deixar de ter uma mentalidade de monólito. Isso traz a introdução de funções do controlador e a perda de funções de espera. Como resultado, a função que está ociosa também será cobrada, pois, ainda está tecnicamente ativa. Isso vai contra o princípio de repartição serverless.
Este problema ainda é mais evidente quando as funções são encadeadas. Este é o processo pelo qual uma função faz uma chamada assíncrona para outra função, esperando por uma resposta, enquanto a segunda função executa uma operação de leitura/gravação em um serviço de armazenamento. O que aumenta a possibilidade de falta de confiabilidade, pois a primeira função pode expirar. Isso é ainda pior quando as funções fazem chamadas para dispositivos de armazenamento locais ou fora do ecossistema do fornecedor.

## O que é preciso observar?

Os efeitos visíveis de um antipadrão são custos potencialmente mais altos e maior probabilidade de timeout. Portanto, o primeiro passo é ficar de olho nisso.
Dependendo de sua ferramenta de monitoramento, o processo pode se tornar mais eficiente configurando alerta nessas métricas. Para uma análise aprofundada, investigar os rastros disseminados da sua aplicação pode levar à percepções melhor fundamentadas. Isso porque, conforme ocorre a transição para microsserviços, o próprio sistema se torna distribuído.
Assim, a [observabilidade](/a-observabilidade-no-processo-de-evolucao-dos-novos-negocios/) facilita uma abordagem mais holística, na qual cada fluxo de transação deve ser rastreado. Um erro ou atraso em um serviço pode ser causado por upstream, downstream ou ambos.

## Compartilhar é preciso?

Existem cenários em que bibliotecas, negócios ou até mesmo codebase precisam ser compartilhados entre as funções. Isso, entretanto, leva a uma forma de dependência e acoplamento que vai contra a arquitetura serverless.
A armadilha mais frequente resultante disso é que a escalabilidade se torna difícil de ser executada. Como a escala de seus sistemas e funções dependem constantemente uns dos outros, há um risco maior de erros, downtime e latência. Como resultado, cria-se um antipadrão para a propriedade de escalabilidade serverless.
Um exemplo em que tais problemas surgem é no aprendizado de máquina, quando grandes bibliotecas precisam ser compartilhadas entre várias funções usadas para processar conjuntos de dados de teste, validação e treinamento.
Na maioria dos casos, a necessidade de compartilhar bibliotecas de código e lógica não gera apenas um antipadrão, mas também um limite técnico para funções serverless.

## O que é preciso observar?

Se a intenção é compartilhar informações e acoplamento de funções serverless, nenhuma medida preventiva resolve o problema. Nesse caso, torna-se imperativo medir os efeitos da configuração arquitetônica. Se uma das funções experimentar latência, isso pode ter um efeito cascata em todas as outras funções acopladas.
Geralmente, toda a arquitetura deve ser mapeada. Ter a consciência de como a arquitetura cloud native está sendo desenvolvida é a única maneira pela qual o problema pode ser evitado com eficácia.

## Funções granulares

Ao dividir grandes negócios compactados em funções menores independentes, existe a possibilidade de atingir um nível de granularidade que, eventualmente, se mostra prejudicial.
A necessidade de comunicar eventos entre funções individuais leva a pensar sobre [APIs](/as-melhores-praticas-de-seguranca-para-o-uso-de-api/). Ou seja, um aumento nos esforços de engenharia, riscos de segurança e latência. 
Nestes momentos em que as preocupações se multiplicam à medida que o número de funções aumenta, nós utilizamos nossa solução de **Integração de Sistemas & Gerenciamento de APIs** nos projetos de nossos clientes. 
O conceito é simples: integre os processos da sua empresa, organize seus dados e disponibilize para que outras pessoas ou empresas os usem. Ou seja, crie um novo negócio dentro do seu negócio.
Como um dos principais  parceiros da Kong no Brasil, estamos preparados para conectar o seu ecossistema de clientes e parceiros, permitindo que a sua TI troque informações com seu público de forma muito mais fácil, rápida e segura. Além disso, veja quais são os outros benefícios de iniciar a integração de seus sistemas e sua estratégia de APIs:

- Aplicações móveis mais ágeis;
- Novas fontes de receita;
- Monetização do seu negócio digital;
- Rastreabilidade.

## O que é preciso observar?

As arquiteturas, em geral, podem se tornar extremamente complicadas à medida que seu sistema cresce. Portanto, a primeira coisa a buscar quando começar a adotar o serverless é um mapa da arquitetura  de seu sistema.
Outro sinal de arquiteturas excessivamente granulares é quando as funções serverless começam a produzir muita comunicação. A sobrecarga de comunicação e chamadas desnecessárias significa mais complexidade de engenharia e custos potencialmente mais altos. 
Além disso, conforme foi mencionado, a mudança de monólito para microsserviços e, eventualmente, para uma arquitetura serverless resulta na necessidade de infraestrutura de comunicação. Portanto, torna-se necessário monitorar a carga útil dos dados que estão sendo enviados entre esses canais.

## Conclusão

A verdade é que serverless está crescendo, mas não sem suas próprias armadilhas. Existem várias práticas recomendadas para evitar antipadrões. No entanto, a solução final é uni-las à observabilidade. Quem adota essa abordagem precisa estar ciente não apenas dos antipadrões possíveis, mas também do que monitorar.
Observabilidade ainda é uma área em desenvolvimento. É necessário ter uma ferramenta de monitoramento especializada para alcançar a verdadeira observabilidade de acordo com os três pilares de “métricas”, “traces” e “logs”. Para saber mais sobre como essa metodologia influencia na TI Moderna e no processo de Transformação Digital, sugerimos que leia nosso Whitepaper “[Resiliência e Observabilidade](https://materiais.vertigo.com.br/resiliencia-observabilidade?_fs=cb445e0d-89fc-4623-8fbe-72abea1c06ea)”.
Gostou do nosso conteúdo? Quer saber como introduzir o conceito de observabilidade na sua empresa? [Fale com um dos nossos especialistas](/contato/)! Teremos prazer em ajudá-lo.

## Descubra o quanto sua empresa é Cloud Native com este questionário e receba um relatório com propostas de aceleração

[![](/wp-content/uploads/2021/03/cloud-native-quadrado.png)](/cloud-native-assessment/)

## Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
