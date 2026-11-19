---
title: "Da TI tradicional para a TI moderna: as principais mudanças em relação às entregas contínuas"
slug: "ti-tradicional-ti-moderna-as-principais-mudancas-em-relacao-as-entregas-continuas"
date: "2020-09-21T16:01:05"
modified: "2020-09-21T16:01:05"
status: "publish"
author: "admin"
excerpt: "No cenário competitivo moderno, a entrega de valor de uma companhia está intimamente ligada à sua capacidade de criar experiências excepcionais para seus clientes. Quase sempre isto significa que a capacidade de entregar software confiável continuamente é um diferencial competitivo indispensável: toda empresa é uma empresa de software.  Em uma TI moderna, as equipes responsáveis […]"
categories: ["devops"]
tags: ["cloud-native", "devops", "esteira-de-entregas-continuas", "ti-moderna", "ti-tradicional"]
featuredImage: "/wp-content/uploads/2020/09/blog-6.png"
wpId: 5162
originalUrl: "https://vertigo.com.br/ti-tradicional-ti-moderna-as-principais-mudancas-em-relacao-as-entregas-continuas/"
contentSource: "rest"
seo:
  title: "Da TI tradicional para a TI moderna: as principais mudanças em relação às entregas contínuas - Vertigo"
  description: "Após a automação de compilações e testes de integração na CI, as entregas contínuas automatizam o lançamento desse código validado em um repositório. "
  canonical: "https://vertigo.com.br/ti-tradicional-ti-moderna-as-principais-mudancas-em-relacao-as-entregas-continuas/"
  ogImage: "/wp-content/uploads/2020/09/blog-6.png"
  robots: "index, follow"
---

No cenário competitivo moderno, a entrega de valor de uma companhia está intimamente ligada à sua capacidade de criar experiências excepcionais para seus clientes. Quase sempre isto significa que a capacidade de entregar software confiável continuamente é um diferencial competitivo indispensável: *toda empresa é uma empresa de software*. 

Em uma TI moderna, as equipes responsáveis por entregar aplicações assumiram um papel de protagonismo à medida que a tecnologia deixou de ser vista apenas como mero suporte operacional e passou a ser uma das atividades estratégicas nas empresas. 

Portanto é impossível para uma organização, que pretende ser e se manter competitiva, ainda estar presa a uma [TI tradicional](/ti-tradicional-pode-ser-um-inimigo-da-transformacao-digital/) cujas práticas e modelo de gestão não estejam focados em qualidade e rapidez nas entregas.

Neste contexto, os sistemas de trabalho propostos pelos métodos ágeis e pela cultura [DevOps](/devops/) trazem conceitos e ferramentas que, apesar de não serem novos, precisam ser encarados de uma nova forma. E esse é o caso das entregas contínuas.

Quer saber mais a respeito? Acompanhe nosso novo artigo. Boa leitura!

## A TI tradicional e a TI moderna em relação às entregas contínuas

A TI tradicional foi concebida com o objetivo de manter as coisas como estão, ou seja, buscar estabilidade e disponibilidade pelo represamento de mudanças. Não é por acaso que 80% do budget de TI das empresas é gasto com manutenção. Porém, está claro que esse modelo não serve mais e as organizações que ainda não enxergam isso estão fadadas ao fracasso. 

Nesse cenário uma TI moderna (ou, como preferimos, uma *TI Cloud-Native*) tem um papel fundamental: trazer fluidez para os processos de desenvolvimento, a fim de que as organizações se mantenham competitivas. 
E, entre as estratégias da TI moderna, a adoção dos [microsserviços](/microsservicos-10-novos-desafios-em-relacao-a-seguranca/) e [DevOps](/o-que-e-devops/) surge como solução para que as empresas aumentem a velocidade de lançamento de novas funcionalidades com melhor escalabilidade, qualidade, eficiência e menor custo.

Em decorrência do mantra DevOps – “você constrói, você executa” – as equipes de desenvolvimento passaram a ter muita autonomia e controle, além de lidar com garantia da qualidade e tarefas de liberação. No entanto, com a mudança para o DevOps, os processos, ferramentas e ambientes de desenvolvimento/teste/aceitação/produção (DTAP), normalmente projetados para bases de código e aplicativos tradicionais, não servem mais e acabam atuando como um bloqueio para uma maior eficiência na entrega de software. 

Assim, foi preciso repensar as metodologias de entrega para o desenvolvimento de softwares modernos, bem como reestruturar o processo para assim obter as vantagens da entrega contínua para software e negócios.

## As práticas contínuas em Devops

Várias práticas foram desenvolvidas para otimizar o processo de desenvolvimento e entrega de softwares com objetivo de conquistar qualidade de código e entregas mais rápidas.

### 1. Integração contínua – Continuous integration (CI)

Encontrar e analisar os erros de forma mais ágil, melhorar a qualidade do software, diminuir o tempo de validação e lançamento de novas atualizações do sistema são os principais objetivos da integração contínua (CI) em Devops.
Com ela, é possível ter o controle das versões e alterações feitas no código e dessa forma, será permitido fazer a comparação dos códigos em branches distintos, evitar que desenvolvedores realizem a mesma tarefa, aumentar o controle da produção de cada profissional e, em caso de conflito entre os códigos novos e existentes, a CI facilita a correção de bugs com rapidez e frequência.

### 2. Entrega contínua – Continuous delivery (CD)

Após a automação de compilações e testes de integração na CI, a entrega contínua automatiza o lançamento desse código validado em um repositório. 

Nessa fase, além da realização de testes, é gerada uma versão de release cada vez que uma nova integração é feita. Assim, com essa nova versão, o desenvolvedor pode verificar o comportamento de novas funcionalidades sem precisar se preocupar em enviar ao usuário final qualquer tipo de feature indesejado.

Com essa prática, as entregas acontecem de forma eficaz e objetiva. Pequenas atualizações e correções são feitas quase que diariamente, elevando o fluxo de entregas, ao contrário do que acontecia com TI Tradicional.

### 3. Implantanção contínua – Continuous deployment

A entrega contínua e a implantação contínua são conceitos muito semelhantes. No entanto, enquanto a entrega contínua automatiza o lançamento de compilações prontas para produção em um repositório de códigos, a implantação contínua automatiza o lançamento de uma aplicação para a produção. 

Nela, a aplicação é entregue ao usuário final de maneira automática e a única coisa que vai impedir que o software seja distribuído será uma falha em algum teste feito de forma unitária. 

Essa técnica não se aplica a todas as empresas: além de ter sido pensada, principalmente, para o desenvolvimento de aplicações para web, em algumas delas existem regras rígidas de governança que exigem a aplicação de testes manuais que podem impedir a utilização dessa metodologia.

## Novos desafios em DevOps com entregas contínuas

O objetivo das práticas contínuas é colocar o software para funcionar o mais rápido possível e assim, contribuir para o alcance das metas do negócio. Porém, as coisas nem sempre acontecem como deveriam. 
Os testes são focados em verificações técnicas da saída dos desenvolvedores (o código), ao invés de verificar se há melhorias (conversão, receita) ou impacto (participação no mercado, lucratividade, satisfação do cliente) nos resultados dos negócios. Ou seja, o DTPA tradicional não funciona para DevOps.

Como não estamos mais construindo aplicativos utilizando métodos e silos tradicionais, não podemos usar ambientes de teste e aceitação de pré-produção estáticos para garantir que funcionem como pretendido. Isso ocorre devido à natureza independente dos microsserviços e de suas implantações. 
No mais, muitas empresas, na pressa de aplicar a metodologia [DevOps](/devops/), acabam caindo em algumas armadilhas como, por exemplo, automatizar os processos errados. 

As empresas com processos já existentes, que precisam implantar uma TI moderna, devem migrar do desenvolvimento manual para o altamente automatizado de forma gradual. Essa transição pode levar meses para ser completada, por isso é importante saber como você irá adotar a entrega e a integração contínua.

Em nossa experiência, abordagens “big-bang” nunca têm sucesso; uma abordagem de transformação gradual – “lighthouse projects”, time a time, projeto a projeto – tem custo de adoção muito menor e resultados bem melhores.
Assim, é fundamental seguir algumas etapas, mesmo que se tenha recursos ilimitados e seja tentador optar pela automatização de tudo que for possível já de início, ou mesmo adquirir plataformas “mágicas” caríssimas com grandes promessas. *O maior desafio de transformação é cultural,* e abordagens “lighthouse” não apenas são baseadas em melhores incentivos, como também **postergam decisões de compra para quando estas fizerem sentido**.

Outro erro bastante comum é tratar esta questão como mera automação de esteira de entrega – software ruim com entrega automatizada continua sendo software ruim. Uma nova distribuição de papéis e composição de times é imprescindível, assim como a forma tradicional de lidar com monitoração deve ser suplantada pela [observabilidade](/a-observabilidade-no-processo-de-evolucao-dos-novos-negocios/) disponível para os times de produto.

A TI moderna, com suas entregas contínuas, gera uma melhor experiência de trabalho para a sua equipe e é extremamente vantajosa para os seus negócios já que a evolução contínua, os consertos rápidos e a garantia da qualidade auxiliam a reter os clientes. No entanto, a metodologia deve ser implantada da forma correta. Do contrário, pode atrapalhar mais do que ajudar. 

Gostou do nosso conteúdo? Quer saber mais sobre TI moderna, DevOps, entregas contínuas e como isso tudo pode ajudar os seus negócios? [Fale com um dos nossos especialistas](/contato/)! Teremos prazer em ajudá-lo.

### Avalie o nível de adoção e maturidade DevOps na sua empresa e entenda os pontos fortes, fracos, lacunas e oportunidades de aprimoramento.

[![](/wp-content/uploads/2021/05/Sem-Titulo-1.png)](/indice-de-maturidade-devops/)

## Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
