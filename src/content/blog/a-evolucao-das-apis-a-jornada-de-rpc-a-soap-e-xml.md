---
title: "A evolução das APIs: a jornada de RPC a SOAP e XML"
slug: "a-evolucao-das-apis-a-jornada-de-rpc-a-soap-e-xml"
date: "2022-11-18T16:44:01"
modified: "2022-11-18T16:44:01"
status: "publish"
author: "admin"
excerpt: "Sua empresa utiliza APIs? A realidade tecnológica dos dias atuais, nos tornam dependentes de aplicações interconectadas, que podem ser massivas e altamente complexas, mas também costumam ser construídas a partir de blocos de construção reutilizáveis. Chamamos cada um desses blocos de construção de Interface de Programação de Aplicações, também conhecido pelo termo “API”. Interagimos com […]"
categories: ["apis"]
tags: ["apis"]
featuredImage: "/wp-content/uploads/2022/11/Historia_das_APIs_BLOG_IMAGEM_DESTAQUE.png"
featuredImageAlt: "A história das APIs."
wpId: 161504
originalUrl: "https://vertigo.com.br/a-evolucao-das-apis-a-jornada-de-rpc-a-soap-e-xml/"
contentSource: "rest"
seo:
  title: "A evolução das APIs: a jornada de RPC a SOAP e XML - Vertigo"
  description: "Saiba a história das APIs e como elas são vitais para a melhoria do processo de integração das aplicações. Leia mais em nosso blog."
  canonical: "https://vertigo.com.br/a-evolucao-das-apis-a-jornada-de-rpc-a-soap-e-xml/"
  ogImage: "/wp-content/uploads/2022/11/Historia_das_APIs_BLOG_IMAGEM_DESTAQUE.png"
  robots: "index, follow"
---

Sua empresa utiliza APIs? A realidade tecnológica dos dias atuais, nos tornam dependentes de aplicações interconectadas, que podem ser massivas e altamente complexas, mas também costumam ser construídas a partir de blocos de construção reutilizáveis.

Chamamos cada um desses blocos de construção de Interface de Programação de Aplicações, também conhecido pelo termo “API”.

Interagimos com [APIs](/apis-no-setor-financeiro-veja-5-motivos-para-utilizar/) todos os dias, e às vezes nem nos damos conta. Quando fazemos um pedido pelo iFood, pegamos um Uber ou navegamos na Netflix, estamos usando APIs. Usamos uma API quando exibimos a câmera do celular no Instagram ou fazemos login em uma aplicação via Google ou Facebook. No entanto, as APIs são resultados da evolução natural de como o software de computador é escrito. Entender o que são APIs e como elas surgiram é fundamental para sua capacidade de prosperar como arquiteto de software, desenvolvedor de aplicações ou tomador de decisões de TI.

Preparamos esse artigo com base na tradução de boa parte do conteúdo do [ebook](https://konghq.com/resources/e-book/apis-rpc-soap-xml) produzido pela nossa parceira, Kong. Saiba mais sobre a história das APIs e a sua evolução.

Boa leitura!

## APIs: blocos de construção de aplicações modernas

Uma API é um software que permite que um programa de computador comunique-se com outra aplicação para trocar dados ou consumir algum tipo de serviço. Esses programas podem ser executados no mesmo computador ou em diferentes redes de computadores separados por milhares de quilômetros.

## Como funcionam as APIs

Uma [API](/integracao-de-apis-criando-conectividade-no-setor-industrial/) conecta uma aplicação que realiza a chamada (o cliente) e uma aplicação que é chamada (o serviço).

O “serviço” pode ser um servidor web, um servidor de banco de dados, um middleware ou até mesmo uma aplicação monolítica escrita em COBOL. No que diz respeito ao cliente, ele só precisa saber como se comunicar com a API (endpoint URI, protocolo, parâmetros necessários, etc.) sem se preocupar com a implementação subjacente do serviço.

A API é a lógica do programa para autenticar, validar, verificar e entender a entrada do usuário. Em seguida, ele deve processar a solicitação e responder ao cliente.

O cliente começa enviando uma solicitação – uma consulta ao endpoint da API.

Depois que a API autentica a identidade do cliente, ela valida a mensagem de solicitação e realiza processamento adicional. Em seguida, a API passa a solicitação para o serviço (às vezes chamado de “back-end” ou “aplicação de back-end”).

O serviço executa sua operação com base na solicitação, provavelmente buscando algum dado solicitado. Em seguida, ele retorna uma mensagem de resposta à API, que inclui o status da operação (sucesso ou falha) e os dados solicitados.

## APIs no passado distante

Ao contrário de muitos outros desenvolvimentos em tecnologia da informação, a API não foi uma invenção de um único indivíduo ou empresa, nem sua evolução e adoção ocorreram com a velocidade vertiginosa que normalmente vemos no cenário tecnológico atual. Em vez disso, as raízes da API são anteriores à era do computador pessoal moderno, remontando aos primórdios da computação.

## Período Pré APIs

Durante as décadas de 1960 e 1970, os programas de computador foram escritos para grandes mainframes e mini computadores. A programação e a entrada de dados começaram com cartões perfurados.  Em seguida, mudou-se para terminais que fariam a interface dos humanos com o computador.

Não havia sistema operacional de rede dedicado. A internet ainda estava em construção e os programas eram executados principalmente dentro dos limites do computador físico. Na época, os programas eram grandes documentos monolíticos de código que você digitava em um disquete.

Tendo deixado este e outros trabalhos em lote com o operador do computador para serem executados durante a noite, você só poderia esperar que eles fossem executados sem erros. As linguagens de programação evoluíram como os sistemas operacionais. Eles começaram a incorporar instruções de depuração e não precisavam mais executar tarefas de baixo nível, como alocação de memória física.

Os programas poderiam então usar bibliotecas de código já compiladas e incluídas no sistema operacional. Este foi o primeiro passo para a reutilização do código.

## Sub-rotinas e funções

Em seguida veio o uso de sub-rotinas, dividindo o código em partes gerenciáveis e chamando essas partes do programa principal. Esse desenvolvimento ajudou significativamente a limpar o código existente e promoveu a colaboração entre os desenvolvedores.

As pessoas poderiam escrever uma sub-rotina com base em critérios específicos, que outros programadores poderiam incluir em seu código. As sub-rotinas logo deram lugar a seus primos mais versáteis: as funções. Uma função pode aceitar um ou mais argumentos (dados de entrada) e produzir uma saída previsível.

Funções foram incorporadas em linguagens de programação para tarefas diárias (como cálculos numéricos ou manipulação de texto). Os desenvolvedores podem chamar essas funções de seu código.

## Linguagens de script

Os sistemas operacionais também expuseram seus recursos de script, que os administradores de sistema poderiam usar para automatizar os fluxos de trabalho mais comuns. Esses scripts reutilizáveis incluiriam uma série de comandos do sistema operacional para executar tarefas específicas de administração do sistema. Embora não fossem linguagens de programação completas, as linguagens de script tinham todos os elementos da programação de alto nível: looping, ramificação condicional e validação de entrada do usuário.

Como o sistema operacional executava o script, não havia mais necessidade de compilações e tempos de execução.

## Linguagens de Programação para PC

Quando a era do PC começou no início dos anos 80, mais e mais linguagens de programação estavam disponíveis em computadores pessoais.

Uma das primeiras linguagens nativas do PC foi o Microsoft BASIC. Essa linguagem interpretada é fornecida com o sistema operacional Microsoft DOS. Outras linguagens de programação como C, PASCAL e FORTRAN logo seguiram o exemplo. O desenvolvimento de software comercial começou a surgir quando os fornecedores começaram a escrever aplicações para o mercado corporativo e consumidores de massa.

Essas aplicações tinham interfaces gráficas de usuário, faziam uso de hardware mais recente, como mouses e placas gráficas, e acessavam bibliotecas de código de sistema operacional de baixo nível. Os pacotes de programas seriam divididos em binários principais e arquivos de suporte.

Os binários iniciam e carregam a aplicação na memória. Se uma função solicitada não fizesse parte do binário da aplicação, ela também acessaria o arquivo de suporte e o carregaria. Essas foram as sementes da computação cliente-servidor.

## APIs na década de 90

Uma mudança significativa aconteceu no final dos anos 80 e início dos anos 90, quando a Microsoft trouxe o sistema operacional Windows.

Na época, o Windows não era popular e não aumentou em popularidade até o lançamento do Windows 3.1 muito mais tarde.

## O uso de APIs com Windows

O Windows foi um dos precursores do paradigma de programação moderno, modularizado e reutilizável.

Introduziu o uso da biblioteca de links dinâmicos (DLL) que encapsulava diferentes módulos de programa. O Windows ou aplicações hospedadas no Windows, podem carregar ou descarregar essas DLLs na memória durante a execução.  Para distribuir software, as DLLs personalizadas precisavam ser empacotadas com o instalador da aplicação, mas as DLLs fornecidas pelo sistema já estariam presentes na máquina de destino. Enquanto isso, a Microsoft expôs mais funções do sistema operacional como parte do Kit de desenvolvimento de software do Windows (SDK).

A comunidade de desenvolvimento pode usar essas funções para acessar componentes de hardware, executar operações de armazenamento de baixo nível ou renderizar recursos gráficos avançados. Ainda hoje, os SDKs ainda são oferecidos por sistemas operacionais modernos como iOS ou Android.

Muitas aplicações também fornecem suas bibliotecas por meio de SDKs específicos da linguagem. Dois outros desenvolvimentos significativos ocorreram durante o início e meados dos anos 90: a ampla adoção da Programação Orientada a Objetos (OOP) e o surgimento da empresa em rede com computação cliente-servidor.

## Programação Orientada a Objetos

A adoção mais ampla de OOP na última parte do século ajudou os desenvolvedores a criar componentes genuinamente reutilizáveis. Um objeto é um pedaço de código de software que encapsula comportamento e dados que são expostos por meio de funções.

Os objetos eram instanciados a partir de classes, que eram as plantas dos objetos. Por exemplo, um desenvolvedor pode facilmente criar três objetos de botão do mesmo botão de comando classe e usá-los em um objeto de caixa de diálogo criado a partir de uma caixa de diálogo classe, o programador não teria que escrever nenhum botão de comando ou caixa de diálogo código do zero porque as classes já estariam fornecidas pela linguagem de programação.

Na aplicação de chamada, o programador escreve código para eventos quando um usuário interage com a caixa de diálogo ou os botões. O código do evento, por exemplo, pode chamar os métodos do objeto associado para salvar os dados de entrada em um arquivo.

A ascensão da OOP facilitou muito o desenvolvimento de software corporativo. As equipes criariam bibliotecas de classes que poderiam usar em projetos subsequentes. As linguagens de programação surgiram com ricas bibliotecas de classes para interagir com o hardware, gráficos, impressoras, sistema de arquivos ou até mesmo com a rede.

Juntamente com a ascensão do OOP, vimos uma popularidade crescente em sistemas operacionais com capacidade de rede, como Netware da Novell, Windows NT da Microsoft e a primeira versão do Linux no início dos anos 90. A maioria dos servidores conectados à Internet atualmente é executada em algum tipo de Linux.

A adoção da internet pelas massas estava bem encaminhada em meados dos anos 90. No entanto, a empresa média ainda estava longe de executar cargas de trabalho de aplicações pelo protocolo HTTP. Eles usaram HTTP apenas para seus sites voltados para o público. Internamente, porém, as empresas estavam começando a criar aplicações centrados na rede usando o modelo cliente-servidor.

## Computação Cliente-Servidor

A computação cliente-servidor inicial usava uma arquitetura de duas camadas na qual um servidor seria executado em uma rede corporativa.

Ao mesmo tempo, as estações de trabalho dos usuários (os clientes) se conectariam a ele por TCP/IP ou NetBIOS. O servidor pode ser um servidor de banco de dados, um servidor de aplicações ou até mesmo um servidor da Web. Em meados dos anos 90, essa abordagem de duas camadas logo cedeu quando a Microsoft introduziu duas novas tecnologias de desenvolvimento para programação cliente-servidor: Component Object Model (COM) e Distributed COM (DCOM).

## APIs no início da era da Internet

A terceira fase da evolução da API surgiu entre o final dos anos 90 e os primeiros anos deste século. As empresas perceberam o potencial da Internet para fazer mais do que apenas fornecer seus sites corporativos voltados para o público; eles poderiam usar a internet para fornecer serviços de aplicações.

O Java já estava no mercado há algum tempo como um produto estabelecido. Applets Java interativos foram muito usados como objetos embutidos em websites. A tendência natural era hospedar a aplicação middleware, neste caso, um Java Application Server. Essas aplicações eram conhecidas como componentes Enterprise Java Beans (EJB).

## Enterprise Java Beans

EJB é uma especificação Java que permite aos desenvolvedores escrever aplicações distribuídas. Os componentes EJB são aplicações de back-end hospedados em um servidor de aplicações como Apache Tomcat ou IBM WebSphere. As aplicações EJB podem encapsular a lógica de negócios, escalar com o aumento da demanda e ser acessíveis com aplicações de clientes escritos em Java.

O servidor de aplicações que hospeda EJBs também pode hospedar servlets e Java Server Pages (JSPs). Os usuários acessam a aplicação por meio de um navegador, comunicando-se com um servidor web.

O servidor da Web interage com o servidor de aplicações para atender dinamicamente as páginas da aplicação. Como os componentes EJB eram portáteis, eles podiam ser hospedados em qualquer servidor de aplicações Java, permitindo assim escalabilidade.

## Internet

No início do século, a Microsoft lançou uma de suas revolucionárias estruturas de desenvolvimento de software: .NET. Essa nova estrutura foi um afastamento significativo de como as aplicações seriam escritas. Ele veio com uma estrutura (a estrutura .NET) que incluía o Common Language Runtime (CLR). O CLR é o mecanismo que cuida dos serviços de baixo nível necessários para qualquer aplicação (como segurança de tipos, gerenciamento de memória, coleta de lixo, tratamento de exceções, segurança ou gerenciamento de threads).

O .NET também veio com uma extensa biblioteca de classes (como ADO. NET para conectividade de banco de dados ou ASP.NET para aplicações da web). Linguagens de programação diferentes das desenvolvidas pela Microsoft poderiam criar aplicações .NET, desde que estivessem usando o framework. Como o Enterprise Java, o .NET também permitia a criação de aplicações distribuídas.

## XML

Outro desenvolvimento nessa época foi a eXtensible Markup Language (XML). XML é um mecanismo de intercâmbio de dados que permite a qualquer pessoa criar um conjunto de regras para codificar dados. Os dados escritos no formato XML podem ser lidos tanto por máquinas quanto por humanos. XML é uma linguagem baseada em tags, semelhante ao HTML.

No entanto, ao contrário do HTML, as tags XML podem ser qualquer coisa – com base no esquema XML – usado para descrever os dados. Por exemplo, um caso de uso de intercâmbio de dados para dados do cliente pode definir um esquema XML para incluir nome, sobrenome, endereço de e-mail e telefone. 

Usando XML, a troca de dados entre aplicações (e até mesmo entre empresas) de repente se tornou bastante simplificada. Tudo o que eles precisavam fazer era concordar com um esquema XML para os dados que eles trocariam por duas aplicações de comunicação. A aplicação de chamada criaria um documento XML para codificar os parâmetros de entrada para a aplicação remoto e enviá-lo pela rede. O receptor então usaria o mesmo esquema XML para analisar o document e descompacte os parâmetros de entrada. Os resultados seriam retornados usando outro documento XML, talvez até mesmo com base em um esquema diferente.

A computação distribuída amadureceu, com diferentes tecnologias e linguagens disponíveis.

O desenvolvimento de servidores de aplicações e componentes independentes de plataforma mudou o foco da inovação para encontrar um protocolo comum que permitisse que humanos e aplicações acessem aplicações remotas, independentemente de onde fossem executados. Esse protocolo era HTTP e o formato de mensagens era XML, iniciando assim a jornada dos serviços da web.

## Serviços web

Um serviço da Web é um software independente acessível por HTTP. A aplicação cliente que acessa um serviço da Web pode ser executado no mesmo servidor ou, mais comumente, em um servidor diferente se comunicando pela rede. O cliente e o serviço da Web podem ser escritos em diferentes idiomas e executados em diferentes sistemas operacionais.

A razão pela qual clientes e serviços da Web podem ser independentes de plataforma e idioma é porque eles trocam informações em XML. Quando um cliente deseja chamar um serviço da Web, ele envia uma mensagem XML. O serviço web executa a operação solicitada e também envia o resultado de volta em XML. A comunicação entre o cliente e o serviço da web ocorre por HTTP.

## Agora pergunte a si mesmo: os serviços da Web são APIs modernas?

A resposta é sim. Os serviços da Web são APIs porque um serviço da Web expõe os dados de uma aplicação, executa algum tipo de operação para recuperar esses dados e é invocado por um cliente. Além de HTTP e XML, dois outros componentes são comuns aos serviços da Web: SOAP e WSDL.

O Simple Object Access Protocol (SOAP) é uma estrutura de mensagens leve para clientes e serviços trocarem dados XML padronizados em uma rede.

Ele usa XML como formato de mensagem. O SOAP é relativamente rígido em como estipula a sintaxe de solicitação e resposta. Para transferência de mensagens, o SOAP usa a aplicação-protocolos de camada HTTP ou Simple Mail Transfer Protocol (SMTP). SOAP ainda é usado por algumas APIs da web hoje.

Web Services Description Language (WSDL) é uma linguagem baseada em XML para descrever as funções de um serviço da web. Lembre-se de que o XML permite que você crie formatos de mensagem personalizados baseados em tags — WSDL é apenas isso. Este é um documento que um serviço da web usa para descrever sua funcionalidade e clientes para encontrar um serviço da web.

## Acoplamento apertado versus acoplamento solto

Na engenharia de software de computador, acoplamento rígido significa que todas as partes de uma pilha de aplicações são tão dependentes umas das outras que você não pode alterar uma parte sem fazer uma grande alteração nas outras partes. Por exemplo, para publicar uma aplicação como um serviço da Web, você precisa garantir que ele obedeça à especificação SOAP. Os dados são codificados como XML e usam HTTP para transporte.

Por exemplo, se você deseja publicar uma aplicação legada como um serviço da Web, mas essa aplicação legada expôs apenas seus dados no formato CSV, isso significaria trabalho extra. Você teria que alterar o código da aplicação para exportar seus dados em XML ou escrever um wrapper para converter os dados CSV em XML.

## Como implementar APIs na minha empresa? Fale com a Vertigo

A Vertigo Tecnologia é especialista na implementação de soluções que envolvem a tecnologia da integração de APIs, gerando assim oportunidade de crescimento para sua empresa. Fale com o nosso [time de especialistas](/contato/) e conheça nossas soluções voltadas para o mercado de APIs.
