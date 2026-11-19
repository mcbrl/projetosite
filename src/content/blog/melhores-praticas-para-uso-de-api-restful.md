---
title: "Melhores práticas para uso de API RESTful"
slug: "melhores-praticas-para-uso-de-api-restful"
date: "2021-02-17T11:45:01"
modified: "2021-02-17T11:45:01"
status: "publish"
author: "admin"
excerpt: "Representational State Transfer (REST) é um modelo de arquitetura de software usado no desenvolvimento de serviços online conhecidos como Web Services RESTful. Em termos de API RESTful especificamente, a API é apenas a camada superficial do serviço subjacente: o que os usuários finais veem e interagem, o front end que transmite os dados inseridos para […]"
categories: ["mundo-das-apis"]
tags: ["api", "api-management", "api-rest", "api-restful", "apis", "estrategia-soa", "kong", "rest", "soa"]
featuredImage: "/wp-content/uploads/2021/02/869683e77646455c99958694fc1b6d78_original.png"
wpId: 5478
originalUrl: "https://vertigo.com.br/melhores-praticas-para-uso-de-api-restful/"
contentSource: "rest"
seo:
  title: "Melhores práticas para uso de API RESTful - Vertigo"
  description: "API RESTful é a camada intermediária entre esses recursos e o usuário final, que pode ser acessada por meio de navegadores da web."
  canonical: "https://vertigo.com.br/melhores-praticas-para-uso-de-api-restful/"
  ogImage: "/wp-content/uploads/2021/02/869683e77646455c99958694fc1b6d78_original.png"
  robots: "index, follow"
---

*Representational State Transfer* (REST) é um modelo de arquitetura de software usado no desenvolvimento de serviços online conhecidos como Web Services RESTful. Em termos de [API RESTful](/grpc-ou-rest-qual-utilizar/) especificamente, a API é apenas a camada superficial do serviço subjacente: o que os usuários finais veem e interagem, o front end que transmite os dados inseridos para o código de programação que constitui a essência do serviço.
O REST ajuda nesse processo porque transmite poucos dados para concluir a solicitação, tornando-o muito mais amigável e com menor largura de banda do que seus predecessores, como o SOAP.
Para serviços da web e, especialmente, serviços online voltados para o cliente, a API RESTful é uma forma simplificada – e baseada em padrões de uso HTTP e outros protocolos padrões – para transferência rápida e eficaz de dados.
Por causa disso, se tornou rapidamente o método preferido do setor, permitindo que os usuários interajam com os serviços da Web ao sustentar muitas das transações online corriqueiras.
Essa funcionalidade diária mandatória é reforçada com códigos de resposta robustos e verificação de erros – com suporte para uma variedade de mídia e recursos – que podem ser paginados ou parcialmente carregados para evitar impactos adversos no alcance do serviço da web.
API RESTful é a camada intermediária entre esses recursos e o usuário final, que pode ser acessada por meio de navegadores da web para interações simplificadas e intuitivas.

## Como funciona?

O modelo REST estabelece uma interface genérica de recursos que é obtida restringindo a interface entre os componentes para garantir um acesso contínuo a recursos acessíveis via HTTP e outros localizados em um servidor FTP, por exemplo.
Essa restrição é uma limitação deliberada para acesso a serviços diversos por meio de um único proxy. Outras arquiteturas, se necessário, podem ser usadas como processos paralelos, como a online que lida com o tráfego de e-mail de forma separada e distinta do tráfego da web.
O [API gateway](/por-que-api-gateway-e-service-mesh-sao-padroes-complementares/) da Kong, utilizado pela Vertigo em projetos de integração e gerenciamento de APIs, pode ser executado com qualquer API RESTful, usando plugins para adicionar novos serviços e estender sua funcionalidade.
À medida que as implantações cloud native continuam aumentando, o REST permite o desenvolvimento de serviços da web que se comunicam perfeitamente com a nuvem e são usados ​​por grandes marcas online, incluindo Google, Amazon e redes sociais como Twitter.

## Quais são as especificações?

As especificações não são limitações no sentido de reduzir o potencial de REST, mas sim diretrizes que estabelecem certas expectativas que devem ser sempre verdadeiras em um sistema RESTful. Trabalhar dentro delas garante que os benefícios de uso sejam alcançados.

### Capacidade de cache

Acessar dados em cache pode eliminar a necessidade de transmissão entre o cliente e o servidor, ajudando a otimizar a escalabilidade e melhorar o alcance. Além disso, um bom gerenciamento de cache deve garantir que eles não se tornem desatualizados ou obsoletos.

### Arquitetura cliente-servidor

Conceitos como [Arquitetura Orientada a Serviços (SOA)](/estrategia-de-api-nao-e-estrategia-de-soa/), microsserviços e web services dividem o código da aplicação monolítica em serviços menores e mais gerenciáveis ​​que podem ser desenvolvidos e atualizados de maneira independente uns dos outros.
A arquitetura cliente-servidor aplica os mesmos princípios ao fluxo de dados em uso. Há o reconhecimento de que os processos *client-side* e os *server-side* podem ser bastante diferentes e independentes uns dos outros. 
Ao desenvolver diferentes interfaces client-side, os web services podem oferecer suporte ao acesso de diferentes plataformas e sistemas operacionais, melhorando a portabilidade e, ao mesmo tempo, permitindo que as equipes desenvolvam cada parte individualmente.

### Código sob demanda

Essa restrição opcional permite que os servidores transfiram o código do programa conforme necessário, como uma forma de estender a funcionalidade do cliente. O JavaScript é renderizado e incorporado de forma mais integrada na página, permitindo funcionalidade extensível sem que o usuário final perceba.

### Sistemas em camadas

As interações cliente-servidor podem ser consideradas como duas engrenagens conectadas. Se você introduzir mais engrenagens no sistema, poderá alterar a natureza dessa saída, sua direção, velocidade e assim por diante.
Os sistemas RESTful adotam uma estrutura em camadas, permitindo que camadas intermediárias sejam inseridas para introduzir, por exemplo, políticas de segurança, proxies e recursos de balanceamento de carga, sem interromper a funcionalidade do próprio sistema.

### *Stateless*

A ausência de estado (*stateless*) é uma das características mais significativas dos serviços da web RESTful e especialmente da API RESTful. Determina que todas as informações exigidas pelo serviço devem estar contidas na solicitação e não armazenadas pelo servidor.
Isso garante que cada vez que o serviço for usado, ele comece com a mesma configuração padrão e que o cliente possa fornecer a ele parâmetros atualizados por meio da API RESTful.

### Interface uniforme

A interface uniforme usada em sistemas RESTful significa que há consistências na arquitetura para tornar o desenvolvimento mais fácil, são elas:

- **Identificação de recursos em solicitações:** os serviços da Web RESTful identificam recursos individuais, por exemplo, por meio do uso de Uniform Resource Identifier (URI);
- **Manipulação de recursos por meio de representações:** garante que uma representação de um recurso client side, completa com metadados, seja suficiente para modificar ou excluir esse recurso;
- **Mensagens autodescritivas:** cada uma das mensagens RESTful contém informações suficientes para permitir que seja processada.

A interface uniforme é uma característica fundamental do REST, desacoplando a arquitetura de uma forma que permite sua evolução. As restrições em sua totalidade são derivadas de outros estilos arquitetônicos comuns.

## Quais são as melhores práticas?

### Convenções de nomenclatura

Algumas práticas recomendadas estão relacionadas à forma como os recursos são definidos e, particularmente, os nomes atribuídos a eles, que idealmente deveriam ser substantivos, plural e minúsculas. Embora nenhuma dessas características necessariamente interrompa a funcionalidade da API.

### Pesquisa e classificação simples

A pesquisa, classificação, filtragem e paginação de dados não exige que os próprios dados sejam alterados. Portanto, o método GET deve ser suficiente. Você pode conseguir isso adicionando um parâmetro de consulta ao URI transmitido via GET.
A paginação é um exemplo adicional útil de prática recomendada, pois permite que grandes conjuntos de dados sejam divididos em partes mais gerenciáveis, mesmo que isso seja feito apenas para fins de renderização visual.
Você pode gerenciar a paginação usando os parâmetros ‘offset’ e ‘limit’, bem como fornecer links para a página anterior e seguinte nos resultados.

### Erro HTTP e códigos de status

Existem mais de 70 códigos de status potenciais definidos no padrão HTTP e, embora nem todos se apliquem a todos os casos, é importante fazer bom uso daqueles que podem surgir de sua API específica.
Muitos desses códigos são familiares até mesmo para usuários iniciantes. Dessa forma, você garante o uso desses códigos de status e códigos de erro em sua API, sabendo que até mesmo um usuário casual entenderá o que um erro 404 está dizendo a eles, caso ocorra.

### Mais semântica HTTP

Não são apenas os códigos de status que devem estar em conformidade com a semântica HTTP. Os tipos de mídia, também conhecidos como *MIME types*, especificam o formato dos dados e podem incluir dados não binários para serviços da web, como application/json e application/xml.
Você pode incluir um cabeçalho *Content-Type* em uma solicitação GET para garantir que os dados recuperados estejam no formato correto ou um cabeçalho *Accept* para listar vários tipos de mídia.
Se os dados não estiverem no formato correto, você gerará um erro 415 (tipo de mídia não suportado) e se o servidor não puder aceitar nenhum dos tipos especificados por meio de um cabeçalho Accept, ele retornará ao erro 406 (não aceitável). Ambos podem ser usados ​​para tratamento de erros em sua API.

### Respostas parciais

Ao solicitar grandes recursos, como arquivos de imagem de alta resolução, pode ser preferível limitar o tamanho da resposta. Verifique se isso é possível usando o cabeçalho *Accept-Ranges*, combinado com *Content-Length*, para determinar o tamanho geral do recurso que você está tentando recuperar. Uma solicitação GET subsequente pode usar *Range* para baixar apenas um número específico de bytes.
Se o recurso completo for necessário posteriormente, o restante pode ser baixado, mas ao limitar a resposta inicial a um tamanho parcial, você pode colocar um limite na quantidade de dados transmitidos e obter respostas completas mais rapidamente.
Este é um princípio de carga de recursos utilizados na web desde os primórdios da internet. Desde imagens jpeg que carregam camadas progressivas de resolução crescente até métodos mais recentes, como carregamento lento de imagens na página à medida que aparecem.
Em serviços da Web RESTful, onde a velocidade costuma ser uma consideração importante, as respostas parciais permitem que a API conclua sua solicitação mais rapidamente.
Isso é bom não apenas para a percepção do usuário final, mas possui aplicações práticas reais em conexões mais lentas, como desktops ainda rodando em conexões dial-up e dispositivos móveis e “coisas conectadas” (IoT) ainda usando 3G.

### Números de versão

É prudente e inteligente dar um número de versão (*version number*) às APIs. Isso pode fazer parte do URI usado para acessá-los e é uma boa maneira de garantir esse acesso para o futuro. Significa que, se posteriormente você decidir lançar uma API completamente nova, não será necessário interromper imediatamente o acesso à versão antiga.
Você pode fazer o release da nova versão com seu próprio URI exclusivo e permitir um período de tolerância – ou de desativação na API antiga – antes de desligar totalmente o acesso.
Há muitos motivos pelos quais isso pode ser desejável, desde APIs de terceiros, nas quais você deseja dar aos desenvolvedores externos a chance de atualizar seu próprio código para usar a nova API, até a solução de problemas em que se deseja reverter para a API antiga.
Ele também fornece uma indicação imediata de como a versão atual da API está na evolução de seus serviços. E, com serviços baseados na web, algumas mudanças provavelmente serão introduzidas em algum momento, mesmo que não sejam previstas em curto prazo.

### Métodos de controle de versão

A API RESTful oferece várias maneiras diferentes de especificar o número da versão e a melhor opção dependerá do seu caso de uso individual, por exemplo:

- **Controle de versão do cabeçalho:** envia o número da versão da API como um cabeçalho personalizado, com a opção de padronizar para uma versão específica se este cabeçalho estiver ausente;
- **Controle de versão da query string:** especifica o número da versão da API usando um parâmetro na query string, por exemplo: https://exemplo.com.br/produtos/2?v=1;
- **Controle de versão de URI:** o número da versão é especificado no URI, por exemplo: https://exemplo.com.br/v1/produtos/2.

##

## Conclusão

A Transformação Digital envolve muito mais do que mudanças de tecnologias. Para prosperar, as empresas devem mudar a forma como operam e até mesmo como pensam.
APIs são fundamentais para essa estratégia vencedora. Produzindo e gerenciando APIs como produtos digitais e sustentando um ecossistema, as empresas podem descompactar e agrupar seus recursos de negócios de uma forma que atenderá dinamicamente às necessidades da economia digital em constante evolução.
Projetada sobre uma base open source, Kong Enterprise é uma plataforma completa e extensível de gestão de microsserviços e APIs que gerencia todo o seu ciclo de vida. 
Somos parceiros oficiais da Kong Inc. no Brasil e nossos clientes têm acesso a uma plataforma world-class para o gerenciamento e entrega de microsserviços e APIs. Somado aos nossos produtos e soluções, estamos preparados para entregar ainda mais valor e agilidade ao mercado.
Para saber mais sobre API RESTful e como pode ajudar os seus negócios, [fale com nossos especialistas](/contato/)! Teremos prazer em ajudá-lo.

##

## Descubra o quanto sua empresa é Cloud Native com este questionário e receba um relatório com propostas de aceleração
