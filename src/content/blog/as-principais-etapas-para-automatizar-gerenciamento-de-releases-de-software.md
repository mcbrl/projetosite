---
title: "As principais etapas para automatizar o gerenciamento de releases de software"
slug: "as-principais-etapas-para-automatizar-gerenciamento-de-releases-de-software"
date: "2020-12-18T17:36:07"
modified: "2020-12-18T17:36:07"
status: "publish"
author: "admin"
excerpt: "Desenvolvedores de software têm a difícil tarefa de tomar decisões sobre dados que, frequentemente, estão incompletos. Dependendo da organização, podem existir várias funções diferentes (como engenheiros de software, operadores de infraestrutura e, às vezes, autoridades legais na empresa) que participam da decisão de liberar ou não o release de um software, dificultando o processo. Essas […]"
categories: ["desenvolvimento-de-software"]
tags: ["cloud-native", "desenvolvimento-de-software", "produtos-digitais", "slo", "transformacao-digital"]
featuredImage: "/wp-content/uploads/2020/12/gerenciamento-releases-software.png"
wpId: 5406
originalUrl: "https://vertigo.com.br/as-principais-etapas-para-automatizar-gerenciamento-de-releases-de-software/"
contentSource: "rest"
seo:
  title: "As principais etapas para automatizar o gerenciamento de releases de software - Vertigo"
  description: "Várias perguntas surgem quando o risco de um novo release de software é avaliado e há esforços para tornar esse processo mais transparente e mensurável."
  canonical: "https://vertigo.com.br/as-principais-etapas-para-automatizar-gerenciamento-de-releases-de-software/"
  ogImage: "/wp-content/uploads/2020/12/gerenciamento-releases-software.png"
  robots: "index, follow"
---

Desenvolvedores de software têm a difícil tarefa de tomar decisões sobre dados que, frequentemente, estão incompletos. Dependendo da organização, podem existir várias funções diferentes (como engenheiros de software, operadores de infraestrutura e, às vezes, autoridades legais na empresa) que participam da decisão de liberar ou não o release de um software, dificultando o processo.
Essas funções estão mudando com a automação contínua e Agile. Não há tempo para reunir manualmente todos os fatos necessários. Organizações que fizeram a transição para o desenvolvimento ágil, DevOps, entrega contínua ou automação de teste, impõem a automação de qualquer tomada de decisão.
A automação dos processos permite (e leva) a maiores frequências de lançamento e estratégias de entrega progressivas, com várias versões funcionando em paralelo, tanto na pré-produção quanto na produção.
A velocidade com a qual os ciclos de lançamento estão aumentando resulta na necessidade de automatizar as operações o máximo possível, para garantir que as organizações possam competir neste ambiente dinâmico e em rápida mudança. De acordo com uma pesquisa da [Cloud Native Computing Foundation](https://www.cncf.io/blog/2020/03/04/2019-cncf-survey-results-are-here-deployments-are-growing-in-size-and-speed-as-cloud-native-adoption-becomes-mainstream/) divulgada este ano, o número de releases diários, semanais e *ad hoc* aumentou dramaticamente.
Para a maioria das organizações, o ciclo de vida dos softwares envolve conjuntos de ferramentas, muitas vezes excedendo dez diferentes que contribuem para a automação.
Não foi apenas a difusão e automação de ferramentas que aumentou, o mesmo acontece com o número de validações e processos de tomada de decisão para cada versão. O esforço de coletar dados manualmente se torna o gargalo da automação de versões e dos ciclos de vida de softwares automatizados.
Automatizar qualquer tomada de decisão com base nos riscos de release não se trata apenas da implementação de conjuntos de regras e de fazer alguns scripts. Também requer conhecimento de domínio para incluir considerações sobre quais serviços são fornecidos pelo software, quais  SLAs são configurados e como qualquer versão de software pode impactá-los.
Leia o nosso artigo e descubra o passo a passo para automatizar o gerenciamento de release de software de forma segura e controlada.

## As etapas da análise de impacto e reconhecimento de versão de software

Várias perguntas surgem quando o risco de um novo release de software é avaliado e há esforços para tornar esse processo mais transparente e mensurável. A seguir montamos uma lista de perguntas que você deve fazer para realizar uma verificação típica:

### Etapa 1: temos um novo release?

- Foi validado em ambientes de qualidade?
- Quais são as novas versões que temos no pipeline atualmente?
- Quão desenvolvidas estão as versões em no processo de entrega?
- Qual é o registro de alterações?
- Que bugs conhecidos são esperados?
- Os resultados de teste e de qualidade de software foram seguros?

### Etapa 2: qual o status atual do software rodando em produção?

- Qual disponibilidade as versões atuais fornecem em produção?
- Qual é o desempenho das versões atuais em produção?
- Quantos recursos as versões atuais consomem em produção?
- Temos algum release em andamento em produção? Ou seja, alguma carga redirecionada de uma versão anterior para uma nova versão?
- Como a nova versão se comporta com relação à disponibilidade, desempenho e consumo de recursos?

### Etapa 3: qual poderia ser o impacto do release?

As perguntas listadas anteriormente precisam ser respondidas para permitir qualquer análise de impacto. Respostas sobre novos releases e status de produção atual ajudam a informar o seguinte:

- Que impacto a nova versão terá no consumo de recursos?
- Qual será o impacto do release no desempenho e na disponibilidade em geral?
- Esse release poderia impactar negativamente na marca?

Definir o impacto de uma versão e tentar quantificá-lo para garantir uma tomada de decisão justa e precisa é um trabalho integral. Frequentemente, as pressões para liberação resultam em uma tomada de decisão com base em dados incompletos ou sob a coação de condições fora do controle.

## Definição e avaliação de SLO para monitoramento de produção

Gerenciar o risco de lançar novas versões de software está intimamente relacionado à confiabilidade das versões atuais em produção. Muitas das perspectivas operacionais sobre a confiabilidade do serviço de software são cobertas por um recurso de engenharia de confiabilidade do site (SRE) publicado pelo Google, com os conceitos de indicadores de nível de serviço (SLIs) para métricas e *service-level objective* (SLOs) usado para definir objetivos. SLIs e SLOs fornecem a base para SLAs (*Service Level Agreement*).
Para o cenário de qualquer lançamento de software, surgem as perguntas:

- Qual é o risco de violar SLAs com qualquer cliente devido a falhas de SLO?
- Qual é o status atual de todos os SLOs em produção?
- Quantos erros, solicitações com falha, tempos de carregamento lentos ou *downtime* ainda tenho antes de violar os SLOs?
- Como uma nova versão do software se comporta com relação aos meus SLIs / SLOs?

A avaliação de SLOs não se restringe à produção e também pode ser aplicada para *gates* de qualidade na pré-produção ou em qualquer cenário de implantação. Projetos open source para automação de releases já fornecem *gates* de qualidade automatizados com base nas definições de SLO – gerando métricas usadas e avaliadas em relação a qualquer objetivo de destino.

## Avaliação de software em produção

Antes de tomar a decisão de realizar ou não o release é essencial ter todas as informações, suas perguntas sobre SLOs em produção respondidas e os dados sobre como uma nova versão de software se comporta em relação a SLOs definidos.
Também é importante considerar a frequência de releases e, consequentemente, a maior quantidade de trabalho que será necessária para reunir manualmente os dados para implantação.
Se a automação não for aplicada para fornecer respostas e recomendações para coleta de dados e tomada de decisão, o gerenciamento de release pode se tornar um gargalo nos ciclos de vida do produto de software.
Avaliar o risco de um novo release de software como base para qualquer tomada de decisão envolve combinar as respostas relacionadas ao status atual dos SLOs em produção e o potencial impacto em seus resultados.
Quando não há um orçamento de falha na produção, a maneira mais fácil de agir pode ser a definição de *backouts* por parte da equipe de operação. No entanto, mesmo com este orçamento, um release pode ser interrompido automaticamente se as versões mais recentes se comportarem pior com relação às avaliações de SLO.
Novas versões de software preparadas em um processo de lançamento precisam ser avaliadas com os resultados da análise de execução de teste com relação às avaliações de SLO. Essas definições fornecidas para produção podem ser avaliadas durante as fases de teste, onde degradações no desempenho são detectadas antecipadamente.
Assim, as violações de SLO podem ser detectadas antes mesmo que o software chegue à produção e aos clientes, fornecendo uma análise da causa raiz para novas versões de software.
O estabelecimento de definições de monitoramento na pré-produção permite uma maneira segura e sólida de mover os releases da preparação para a produção, com risco mínimo de impacto negativo.

## Conclusão

Quando se adota metodologias ágeis, a agilidade geralmente para no momento que a aplicação chega ao estágio final do desenvolvimento. No entanto, o software não fornece nenhum valor até que esteja em produção.
As organizações não podem realmente afirmar serem ágeis até que apliquem os princípios e práticas para o processo de gerenciamento de release e operações. A abordagem indicada é projetada para tornar o gerenciamento de release uma parte integrante do processo de entrega, garantindo que o software esteja pronto para produção desde o início do projeto, para que então os lançamentos se tornem frequentes, confiáveis ​​e de baixo risco.
Possuímos uma equipe de desenvolvimento ágil para produtos digitais customizados, conteinerizados e seguros desde o planejamento até a sustentação. Conte com a nossa expertise para criar produtos digitais incríveis. Deixe conosco o planejamento, a execução e a sustentação da aplicação e alcance todo o potencial que seu projeto precisa ter!
[Fale com nossos especialistas](/contato/) e tenha deployments de aplicações customizadas muito mais seguros e assertivos.

## Descubra o quanto sua empresa é Cloud Native com este questionário e receba um relatório com propostas de aceleração

[![](/wp-content/uploads/2021/03/cloud-native-quadrado.png)](/cloud-native-assessment/)

## Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
