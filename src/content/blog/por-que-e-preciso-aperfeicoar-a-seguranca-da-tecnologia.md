---
title: "Por que é preciso aperfeiçoar a segurança da tecnologia?"
slug: "por-que-e-preciso-aperfeicoar-a-seguranca-da-tecnologia"
date: "2021-05-06T11:29:00"
modified: "2021-05-06T11:29:00"
status: "publish"
author: "admin"
excerpt: "O ambiente multicloud tornou ainda mais complexo o gerenciamento humano. A Transformação Digital teve forte aceleração no último ano devido à pandemia de COVID-19, aumentando a adoção de tecnologias cloud native. Esse movimento mostra que é necessária uma atenção especial à segurança da tecnologia. Afinal, o nível de complexidade de DevOps tem algumas desvantagens. As […]"
categories: ["devops"]
tags: ["devops", "devsecops", "multicloud", "seguranca-da-tecnologia", "transformacao-digital", "vault"]
featuredImage: "/wp-content/uploads/2021/05/seguranca-da-tecnologia-1200x675-1.jpg"
wpId: 5522
originalUrl: "https://vertigo.com.br/por-que-e-preciso-aperfeicoar-a-seguranca-da-tecnologia/"
contentSource: "rest"
seo:
  title: "Por que é preciso aperfeiçoar a segurança da tecnologia? - Vertigo"
  description: "Uma ótima solução para promover melhorias na segurança da tecnologia na sua TI é o Vault, ferramenta da Hashicorp utilizada em projetos pela Vertigo."
  canonical: "https://vertigo.com.br/por-que-e-preciso-aperfeicoar-a-seguranca-da-tecnologia/"
  ogImage: "/wp-content/uploads/2021/05/seguranca-da-tecnologia-1200x675-1.jpg"
  robots: "index, follow"
---

O ambiente multicloud tornou ainda mais complexo o gerenciamento humano. A [Transformação Digital](/ti-tradicional-pode-ser-um-inimigo-da-transformacao-digital/) teve forte aceleração no último ano devido à pandemia de COVID-19, aumentando a adoção de tecnologias cloud native. Esse movimento mostra que é necessária uma atenção especial à segurança da tecnologia.
Afinal, o nível de complexidade de DevOps tem algumas desvantagens. As integrações via APIs e web services estão criando brechas nos firewalls. Já os sistemas de detecção de intrusão estão falhando e os scanners de vulnerabilidade estão perdendo as mudanças em tempo real nos ambientes de produção e pré-produção.
**Essas lacunas mostram como a multicloud torna insuficiente a abordagem tradicional de segurança.** Esses modelos não conseguem mais atender às necessidades das equipes de DevSecOps e de C-Levels, deixando a porta aberta para brechas perigosas.
As empresas que adotam DevOps entendem que precisam incluir a segurança em seus processos de trabalho de forma colaborativa. Elas reconhecem a necessidade de mudança para capacitar seus desenvolvedores a encontrar e corrigir falhas de segurança mais precocemente.
Muitas dessas organizações fazem esse movimento ao integrar seus scanners de segurança em seu pipeline de CI usando APIs e plugins, bem como scripts de CI, com objetivo de fornecer resultados de varredura para desenvolvedores.
Neste artigo vamos abordar as razões pelas quais as estratégias tradicionais de segurança não são mais suficientes para a TI moderna. Boa leitura!

## No que a segurança da tecnologia está falhando?

### Risco e complexidade

Aplicações de código aberto e Kubernetes apresentam um novo nível de risco e complexidade que as abordagens de segurança existentes não conseguem lidar.
Com essa atualização, estão sendo introduzidas novas camadas de complexidade que dificultam o monitoramento de vulnerabilidade através de microsserviços, contêineres e diferentes versões.
Além disso, a falta de visibilidade levanta vários problemas, porque os métodos convencionais são incorporados ao pipeline de entrega contínua e podem ser expostos a vulnerabilidades potenciais. Por exemplo:

- Exposição a hosts, contêineres, credenciais e armazenamento de informações;
- Determinar e identificar o que está rodando no ambiente em tempo real;
- Diferenciar e controlar as reais vulnerabilidades;
- Priorizar ações sem conhecimento do que, onde e quem está executando e acessando.

Tudo isso aponta para a necessidade de soluções automáticas e inteligentes de segurança, que expandem o seu alcance em aplicações de ambiente multicloud.

### Falta de confiança na proteção de vulnerabilidade

As varreduras do ambiente de pré-produção são importantes para a detecção de vulnerabilidades, mas se tornaram insuficientes por vários motivos:

- As reversões de produção podem acabar reintroduzindo vulnerabilidades;
- Falsos positivos apresentam um risco adicional, pois seu alerta distrai os desenvolvedores de seu trabalho real;
- Novas vulnerabilidades podem ser identificadas após o deploy;
- Stacks cloud native podem construir ou atualizar contêineres em tempo real, criando configurações diferentes daquelas em teste e em pré-produção;

**O que conecta todos esses pontos é a falta de contexto.** Se os scanners de vulnerabilidade não puderem capturar todas as mudanças em um ambiente, as equipes de [DevSecOps](/descubra-a-diferenca-entre-devops-devsecops-netops/) não possuirão um entendimento completo de sua exposição e vulnerabilidade.

### Gargalo entre ferramentas tradicionais de segurança e DevOps

Atualmente, é difícil manter-se atualizado com os requisitos de segurança, verificações e cobertura. Fica ainda mais complicado à medida que os ambientes e pipelines DevSecOps mudam em um ritmo cada vez mais rápido.
As ferramentas de segurança atuais dificultam o Agile em DevSecOps. São demoradas, não amigáveis ​​e estão repletas de falsos positivos. Isto é um problema, pois os scanners não possuem o contexto necessário para determinar se são vulnerabilidades reais ou se estão sendo sinalizadas incorretamente.
Consequentemente, as equipes DevSecOps são forçadas a perder tempo procurando e analisando problemas que não são relevantes – ou que podem nem mesmo existir.

### Frágil integração

**Integrações são muito difíceis de alcançar e manter.** O desafio de teste de segurança mais significativo inerente ao fluxo de trabalho de CI/CD é a falta de ferramentas de segurança integradas e automatizadas. 
Embora a maioria delas tenha uma interface de linha de comando para integrar a ferramenta ao pipeline de CI/CD, é necessário considerar os vários pontos de verificação definidos no pipeline onde são executadas.
O profissional de segurança deve considerar o que os que trabalham com DevOps já sabem: uma única plataforma com integração de segurança em CI/CD pode não apenas eliminar esse pesadelo de manutenção, mas fornecer eficiência e risco reduzido.

###

### Necessidade de aplicação de políticas de verificação

As equipes de operações são conhecidas por trabalharem mais rápido do que as de segurança, porque sempre haverá mais desenvolvedores do que profissionais de segurança.
Se você tiver uma cadeia complexa de ferramentas, pode ser um desafio aplicar as configurações de segurança adequadas em todos os lugares em que são necessárias.
Cada scanner normalmente tem suas próprias configurações, então você deve definir o pipeline de CI para aplicar o que é aceitável (ou não) passar para o deploy. Essas configurações são replicadas frequentemente.

###

### Falta de visibilidade

Implementar uma cadeia inteira de ferramentas de segurança em qualquer pipeline existente pode ser um desafio. É possível ver, nas suas ferramentas DevOps, quem mudou o quê, onde, quando e por quê?
Se alguém conceder uma exceção e validar uma pull request em CI, seu dashboard consegue te passar essa informação? **Sem visibilidade de ponta a ponta, ao longo do ciclo de vida de desenvolvimento, as equipes são desafiadas quando confrontadas com auditorias e conformidade regulatória**.

###

### Capacidade de escala

Digamos que você deseja aplicar um deploy manual para projetos que usam diferentes linguagens de programação. Você precisará de um novo pipeline para isso. Ou seja, é mais um pipeline para manter. O que garante que eles sejam mantidos em sincronia?
O que você realmente precisa é de um modelo de CI que identifica automaticamente o scanner correto para a linguagem de programação usada. **Quanto maior se torna uma organização, mais complexidade haverá entre os projetos.**

###

### Imprevisibilidade de custos

Se você está pagando pela quantidade de scanners de segurança, por seu tamanho ou pela aplicação, pode ser difícil prever os custos até que você receba a conta.
Quantas varreduras, aplicações ou mais espaço serão exigidos quando as práticas de DevOps forem implementadas de maneira mais completa em sua organização?
Você precisa de uma solução que carregue uma variável muito mais estável e previsível. **Escolha adotar uma abordagem mais holística com relação a CI e segurança.**

## Multicloud exige uma segurança da tecnologia dinâmica

Uma atualização significa deploy automático em produção, que não requer configurações manuais. E também mapeamento em tempo real e análise de fluxo de transação para avaliação de risco de exposições e vulnerabilidade.
**São necessárias atualizações automáticas e contínuas para entender as vulnerabilidades da aplicação em tempo de execução e seus impactos nos ambientes de produção.**
Isso também significa código de stack completo, observabilidade e análise da infraestrutura para os vetores de ataque. A análise inteligente elimina falsos positivos que não foram executados.
E, finalmente, a Inteligência Artificial automatiza a avaliação de riscos e prioriza as ações por seu impacto nos negócios. Tudo isso é impulsionado por um entendimento básico de que o tempo para ação, após uma exposição, é limitado e crucial. Ou seja, cada segundo conta.
Em um mundo dinâmico e com vários provedores de nuvem, a segurança tradicional de aplicações não é mais adequada. A detecção de vulnerabilidades e a avaliação de riscos agora precisam de uma atualização de automação contínua orientada que mantenha a sua organização realmente segura.
A chave para uma implementação de DevSecOps bem-sucedida, que pode ser escalonada, é a **automação de segurança integrada em seu CI**. Isso não apenas ajuda a eliminar gargalos de segurança, mas também capacita os desenvolvedores e permite que o time de segurança concentre esforços em problemas maiores.

## Considere uma plataforma única e integrada para aperfeiçoar a segurança da tecnologia

Uma única plataforma pode não apenas poupar seus problemas de integração, mas também fornecer visibilidade para auditorias em todo o ciclo de vida de desenvolvimento de software.
Por ter uma única fonte para registrar mudanças, gerenciar acesso e capturar vulnerabilidades, você pode encorajar a transparência entre ferramentas compartilhadas e construir confiança entre desenvolvedores e equipes de segurança.
Uma ótima solução para promover melhorias na segurança da sua TI é o **Vault, ferramenta da Hashicorp utilizada em projetos pela Vertigo**. A sua gestão de segredos e proteção de dados em infraestrutura dinâmica promove maior cobertura de segurança.

- **Estende e integra:** solicite segredos para qualquer aplicação através de um fluxo de trabalho consistente, auditado e seguro.

- **Orientado por API:** habilite a automação e o uso de CI/CD enquanto prepara a sua política para codificar, proteger e controlar o acesso a segredos.

- **Seguro com qualquer identidade:** possibilita o uso de qualquer provedor de identidade confiável.

Com o uso desta solução pela Vertigo, é possível oferecer suporte à nuvens públicas, data centers privados e uma ampla variedade de aplicações endpoint.
Gostou do nosso conteúdo? **Quer saber mais sobre como a Vault pode ajudar a aperfeiçoar a segurança em sua organização?** [Entre em contato](/contato/) com um dos nossos especialistas! Teremos prazer em ajudá-lo em seu desafio.

### Avalie o nível de adoção e maturidade DevOps na sua empresa e entenda os pontos fortes, fracos, lacunas e oportunidades de aprimoramento.

[![](/wp-content/uploads/2021/05/Sem-Titulo-1.png)](/indice-de-maturidade-devops/)

## Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
