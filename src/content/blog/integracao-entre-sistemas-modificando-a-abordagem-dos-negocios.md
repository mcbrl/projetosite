---
title: "Integração entre sistemas: modificando a abordagem dos negócios"
slug: "integracao-entre-sistemas-modificando-a-abordagem-dos-negocios"
date: "2019-07-02T13:47:57"
modified: "2019-07-02T13:47:57"
status: "publish"
author: "admin"
excerpt: "A integração entre sistemas é um dos caminhos mais promissores que conduzem as equipes de TI a promover a verdadeira Transformação Digital. Contudo, mesmo as empresas que têm essa consciência, muitas vezes, apresentam um cenário de integração rudimentar ponto a ponto.  Em nosso último artigo, mostramos de que forma os princípios de franchising podem ser […]"
categories: ["plataformas-de-integracao"]
tags: ["api-led-connectivity", "apis", "codigo-espaguete", "integracao-entre-sistemas", "mulesoft", "mulesoft-anypoint-platform"]
featuredImage: "/wp-content/uploads/2019/07/integracao-entre-sistemas-.jpg"
wpId: 4463
originalUrl: "https://vertigo.com.br/integracao-entre-sistemas-modificando-a-abordagem-dos-negocios/"
contentSource: "rest"
seo:
  title: "Descubra como a integração entre sistemas transforma os negócios"
  description: "Descubra como a integração entre sistemas pode ajudar a sua equipe a melhorar a produtividade em até 300%, através de entregas agéis e seguras."
  canonical: "https://vertigo.com.br/integracao-entre-sistemas-modificando-a-abordagem-dos-negocios/"
  ogImage: "/wp-content/uploads/2019/07/integracao-entre-sistemas-.jpg"
  robots: "index, follow"
---

A **integração entre sistemas** é um dos caminhos mais promissores que conduzem as equipes de TI a promover a verdadeira **Transformação Digital**. Contudo, mesmo as empresas que têm essa consciência, muitas vezes, apresentam um cenário de integração rudimentar ponto a ponto. 

Em nosso último artigo, mostramos de que forma os princípios de franchising podem ser aplicados no contexto de TI. Esta prática pode impulsionar sua estratégia para adoção de um novo modelo operacional mais eficiente. 
Agora falaremos sobre um aspecto igualmente importante: de que forma estabelecer uma disciplina estratégica de integração de sistemas liderada por APIs? 

[**Perdeu este artigo? Não tem problema! Clique aqui e confira na íntegra.**](/novo-modelo-operacional/)

Muitas empresas percebem que as integrações ponto a ponto, necessárias para criar aplicações, tendem a se acumular ao longo do tempo. Isso cria uma dívida técnica, uma arquitetura frágil e gera uma incapacidade de responder rapidamente às necessidades de negócios em constante mudança.

#### Para melhorar o entendimento, vamos ilustrar com o seguinte exemplo:

Uma empresa precisa desenvolver um aplicativo da web para fornecer status de pedidos em tempo real. Além disso, precisa armazenar o histórico de pedidos, para as equipes de vendas fornecerem atendimento ao cliente.
Agora imagine que a empresa possua os dados dos seus clientes no **SAP** e no **Salesforce** (dados de inventário) e os dados solicitados no seu sistema de comércio eletrônico. 

Neste caso, a empresa poderia determinar que sua equipe de TI participasse e agregasse dados de clientes, conectando os dados de ambos os sistemas – através de código. Em seguida, os dados agregados do cliente seriam combinados com os dados colhidos no sistema de comércio eletrônico, para produzir o status do pedido e os dados do histórico do pedido – através de mais um código. Desta forma, essas duas fontes de dados estariam conectadas a um aplicativo WEB de API, podendo ser utilizadas através dele.  

![](/wp-content/uploads/2019/07/WEB-APP-API-768x632-1.jpg)

## **O nascimento do complicado “código espaguete”**

O projeto criado pelos desenvolvedores do exemplo acima poderia ser considerado um sucesso. Afinal, seria lançado no prazo, dentro do orçamento e teria a funcionalidade correta. 

Porém, vamos inserir um complicador muito comum: a equipe de vendas exige que a mesma funcionalidade rode em seus **dispositivos móveis**, pois frequentemente participam de negociações fora do ambiente empresarial.
Deste modo, a equipe de TI agora tem a tarefa de criar um aplicativo para dispositivos móveis. Mas para isso, os desenvolvedores, que utilizam pouco ou nenhum código presente em projetos anteriores, terão que refazer quase todo o trabalho, o que em si não representa um ótimo resultado.

Este retrabalho frequentemente é justificado pela pressão que os desenvolvedores sofrem para atender às inúmeras demandas de diversos setores, que costumam ter um fluxo de trabalho grande.

Quando há consultores envolvidos, o problema se agrava, porque estes tendem a focar no curto prazo. Muitas vezes, desconsideram que o projeto precisa de um bom planejamento, pois mudanças durante o período de execução do projeto podem ser muito caras ou até mesmo impossíveis. Neste cenário de mudanças constantes, fica quase impossível manter a agilidade. É então que o padrão conhecido como “código de espaguete” toma a sua forma, conforme ilustrado na figura a seguir.
![](/wp-content/uploads/2019/07/CODIGO-ESPAGUETE.jpg)

## **Os impactos do “código espaguete”**

Com todos os projetos subsequentes, mais **códigos não reutilizáveis** são criados. Isso deprecia todo o aprendizado do primeiro projeto. E além de desmotivar os desenvolvedores, cria também uma base de código não gerenciável, não replicável e cara, estabelecendo as bases para estrangular a agilidade. 

As aplicações agora estão fortemente acopladas aos pontos de extremidade subjacentes. Se alguma coisa mudar com esses pontos ou com os requisitos de negócios, todo o aplicativo ou partes principais do código precisarão ser reescritos.
Isso implica dizer que o próximo aplicativo a ser construído, mesmo usando dados semelhantes, terá que ser construído do zero. Também significa que as equipes de desenvolvimento precisarão dos mesmos especialistas em sistema para obter os dados dos sistemas de origem, adicionando mais tempo à entrega do projeto. 

E, como nada está registrado para segurança, governança e gerenciamento, acaba perdendo-se a visibilidade do que realmente está acontecendo. Isto pode gerar vulnerabilidades de segurança com o passar do tempo.

Por isso, uma boa forma de realizar esse processo é por meio de uma estratégia chamada **API-led connectivity.**Ela viabiliza o novo modelo operacional de TI.  Quando pensamos em fazer a transição para um modelo de produção + consumo, há dois recursos essenciais que devem ser empacotados, em nome de uma **API bem projetada**. São eles: os recursos de TI e as suas capacidades.

## **A integração entre sistemas com API-led connectivity**

![](/wp-content/uploads/2019/07/API-LED-CONNECTIVITY.jpg)
A **conectividade liderada por APIs** é um termo utilizado pela [MuleSoft](/mulesoft/), que expressa o método de integração entre sistemas baseado na adoção de **APIs públicas e privadas** para conectar todos os sistemas de uma empresa.
[idea][Já fizemos um artigo aqui no blog sobre API-led connectivity. Clique aqui para conferir!](/integracao-de-sistemas/)[/idea]

Nesta abordagem para conectividade as APIs são classificadas em três tipos:

- APIs de sistemas
- APIs de processo
- APIs de experiência

Abaixo iremos detalhar melhor cada um desses tipos de APIs e suas funcionalidades.

### **APIs de sistemas:**

Seus principais sistemas de registro – tais como: ERP, sistemas de faturamento e clientes, bancos de dados proprietários e outros – geralmente não são facilmente acessíveis porque eles possuem interfaces de conectividade proprietárias e **exigem habilidades altamente específicas**. E essas não estão prontamente disponíveis dentro da empresa – normalmente um grande obstáculo. 

As APIs do sistema fornecem um meio de isolar o usuário da complexidade ou de quaisquer alterações nos sistemas subjacentes. Isso porque, uma vez criados, muitos usuários podem acessar dados sem precisar aprender os sistemas subjacentes. A grande sacada é poder reutilizar as APIs em vários projetos. 

Como, por exemplo, uma API do cliente para alavancar um aplicativo móvel ou um portal de parceiro. Outro ponto importante, é que especialistas em sistemas não são mais necessários para cada projeto que exija acesso a esse sistema. 
É a central de TI quem mantém e controla essas APIs, dada a importância dos sistemas subjacentes. O escopo de uma API de sistema é abrir e fornecer acesso gerenciado consistente aos dados subjacentes. Sem, com isto, tentar filtrar muito os dados nem combinar dados de outras origens.

### **APIs de processo:**

Oferecem, naturalmente, uma visão do cliente, status do pedido, status de prescrição, etc. Nessa camada, **as APIs interagem e modelam dados em um único sistema ou entre sistemas** (dividindo silos de dados). Assim, elas são criadas sem depender dos sistemas de origem dos quais esses dados se originam, bem como dos canais de destino pelos quais esses dados serão entregues. 

Por exemplo, as informações do cliente podem ser expostas através de 2 ou 3 APIs do sistema. Desta forma, cria-se uma visão do cliente, compondo os campos dessas três APIs. 

Essa visão do cliente pode ser um modelo canônico, ou pode ser específico para o domínio em que a API está inserida. A API do cliente é mais consumível porque restringe todas as informações possíveis apenas às necessidades de um conjunto de aplicações. E também, é mais fácil adicionar novos campos ou criar uma visualização diferente do cliente para um domínio diferente.

### **APIs de Experiência:**

Aqui os dados são consumidos em um amplo conjunto de canais. Cada um dos quais solicitando acesso aos mesmos dados, com formatos variados. Por exemplo, um sistema de ponto de venda de filial de varejo, um site de comércio eletrônico e um aplicativo de compras para celular, podem querer acessar os mesmos campos de informações do cliente, mas cada um exigirá essas informações em formatos muito diferentes. 

As APIs de experiência são os meios pelos quais os dados podem ser reconfigurados. Isto possibilita que sejam mais facilmente consumidos por seu público-alvo. Tudo a partir de uma fonte de dados comum, em vez de configurar integrações ponto a ponto separadas para cada canal. 

Geralmente, uma API de experiência é criada com os princípios de design da API, nos quais a API é projetada para a experiência de uso especificamente.

Com essa abordagem, o negócio será liderado por APIs. Permitindo compor, recompor e adaptar os blocos de construção (APIs) para atender às necessidades de mudança de negócios. 

Com a **API-led connectivity**, quando as equipes de TI precisarem criar um  app mobile, ela terá **recursos reutilizáveis.** Isto tende a eliminar todo o trabalho necessário para criá-los. E, também será muito mais fácil inovar e adicionar informações como, por exemplo, o status de envio de um produto. Este recurso é semelhante ao que já estava programado referente ao acesso do status ou histórico do pedido. 

## **Aplicações mobile e web criadas com uma abordagem API-led connectivity**

Utilizar uma abordagem de API-led connectivity para entregar projetos de TI pode ajudar a manter os prazos de entrega. Outra vantagem é manter o orçamento dos primeiros projetos, através da criação de recursos reutilizáveis. Estes recursos são fundamentais para economizar tempo e investimento financeiro para a empresa.

Através desta abordagem, cria-se uma infraestrutura projetada para mudança, visibilidade embutida, conformidade e governança. E o mais importante: isso irá atender às necessidades do negócio, que é a agilidade sustentada a longo prazo. 
A **API-led connectivity** permite que você avance rapidamente em seu primeiro projeto. Isto acelera ainda mais a partir do seu segundo, devido a recursos reutilizáveis e a uma capacidade organizacional integrada. Em resumo é isso: esta abordagem libera recursos, permitindo que você inove e se mova rapidamente.

No último artigo desta série, falaremos sobre como mudar o mindset da sua equipe de TI. Como criar um centro de habilitação conhecido como **Center for Enablement (C4E).** Este centro concentra-se em colocar ativos valiosos nas mãos de toda a organização. 

Implementar uma estratégia de integração entre sistemas liderada por APIs torna-se muito mais fácil, quando amparada pela tecnologia oferecida pela MuleSoft. Não por acaso a MuleSoft tem sido a escolha das empresas mais inovadoras do mundo.

O know-how da **Vertigo na Mulesoft** contribui com a implementação do Anypoint Plataform nas empresas desde 2012. Os times de TI conseguem aumentar a produtividade em até 300%.
Preencha o formulário abaixo, converse com nossos especialistas e solicite uma demonstração ao vivo da ferramenta.
