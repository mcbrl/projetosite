---
title: "gRPC ou REST: qual utilizar?"
slug: "grpc-ou-rest-qual-utilizar"
date: "2020-10-16T11:39:38"
modified: "2020-10-16T11:39:38"
status: "publish"
author: "admin"
excerpt: "REST tem predominância, mas não é a única alternativa Há algum tempo o REST vem dominando o panorama moderno das APIs, especialmente quando se trata de aplicativos da web e infraestruturas baseadas em microsserviços. Porém, REST não é a única arquitetura de API disponível e, em alguns casos, o uso do modelo gRPC pode ter […]"
categories: ["mundo-das-apis"]
tags: ["api", "api-management", "api-rest", "arquitetura-de-microsservicos", "grpc", "microsservicos", "rest"]
featuredImage: "/wp-content/uploads/2020/10/gRPC-ou-REST.png"
wpId: 5195
originalUrl: "https://vertigo.com.br/grpc-ou-rest-qual-utilizar/"
contentSource: "rest"
seo:
  title: "gRPC ou REST: qual utilizar? - Vertigo"
  description: "O estilo de arquitetura mais amplamente usado para APIs é a API REST. No entanto, também existem APIs gRPC. Confira agora mesmo."
  canonical: "https://vertigo.com.br/grpc-ou-rest-qual-utilizar/"
  ogImage: "/wp-content/uploads/2020/10/gRPC-ou-REST.png"
  robots: "index, follow"
---

## REST tem predominância, mas não é a única alternativa

Há algum tempo o REST vem dominando o panorama moderno das APIs, especialmente quando se trata de aplicativos da web e infraestruturas baseadas em microsserviços. Porém, REST não é a única arquitetura de API disponível e, em alguns casos, o uso do modelo gRPC pode ter um papel crucial.

Quer saber mais sobre o gRPC e se ele pode ser uma alternativa às APIs REST em seu próximo projeto de desenvolvimento? Acompanhe nosso artigo.

Boa leitura!

### As aplicações baseadas em microsserviços

As aplicações baseados em [microsserviços](/o-que-sao-microsservicos/) conseguem superar as maiores limitações existentes em aplicações tradicionais monolíticas.

Uma aplicação monolítica contém a programação de todos os seus serviços e recursos em uma única base de código indivisível que gerencia todos eles. No entanto, à medida que os desenvolvedores acrescentam novos serviços e recursos à estrutura existente, fica mais difícil modificar, atualizar e redimensionar essa aplicação. Nesse caso, uma pequena alteração em determinada área pode afetar de forma negativa outras áreas, sendo necessário reiniciar todo o sistema a partir do zero.

Já com a arquitetura de aplicativo baseada em microsserviços, isso não acontece. Com ela é possível quebrar um monólito e executar cada componente como uma aplicação autônoma.

Por sua vez, esses microsserviços individuais usam [APIs](/o-que-e-api-entenda-de-uma-maneira-simples/) para interagir e se conectarem uns com os outros. Juntos, todos esses microsserviços formam a arquitetura maior do aplicativo e você passa a ter sistemas mais eficientes, resilientes, escaláveis ​​e flexíveis.

Como já mencionamos acima, o estilo de arquitetura mais amplamente usado para APIs é a API REST. No entanto, também existem APIs gRPC e a grande questão é quando usar uma ou outra.

### Visão geral sobre REST e gRPC

As APIs possuem regras que tornam possível que os aplicativos se comuniquem e interajam uns com os outros. Uma API define os tipos de chamadas e solicitações que um aplicativo pode fazer a outro, como fazer essas solicitações, os formatos dos dados que serão usados e uma série de outras convenções que os clientes deverão seguir.

Quando falamos de REST e gRPC estamos nos referindo a diferentes estilos de arquitetura para a construção de APIs. E, de maneira simplificada, podemos definir ambos da seguinte maneira:

### API REST (Representational State Transfer)

REST é o estilo de arquitetura mais popular para a construção de APIs, principalmente  para aplicativos baseados na web e infraestruturas baseadas em microsserviços. Ele define restrições específicas que oferecem suporte à operabilidade entre microsserviços e aplicações web-based.

Embora uma API REST possa receber e retornar mensagens gravadas em uma variedade de formatos, o formato mais comum usado é JSON, formato de texto legível que é flexível, eficiente e independente de idioma ou plataforma.

As APIs baseadas em REST são ótimas para modelar seu domínio (isto é, recursos ou entidades), tornando o CRUD (create – criar, read – ler, update – atualizar, delete – excluir) disponível para todos os seus dados.

A arquitetura REST foi popularizada basicamente depois que Facebook e Twitter  publicaram suas APIs abertas que seguiam padrões de arquitetura com base no REST.

### gRPC (Google Remote Procedure Call)

gRPC é uma arquitetura RPC de código aberto projetada pelo Google para obter uma comunicação de alta velocidade entre microsserviços. Ela permite que os desenvolvedores integrem serviços programados em diferentes linguagens.

A arquitetura gRPC usa o formato de mensagem protobuf (buffers de protocolo), que é altamente compactado e eficiente para serializar dados estruturados.

As APIs baseadas em RPC são ótimas para ações (ou seja, procedimentos ou comandos) e, como veremos mais adiante, em alguns contextos, pode servir como uma alternativa mais eficiente do que uma API REST.

### Diferenças entre as APIs REST e gRPC

Vamos examinar agora as diferenças existentes entre APIs REST e gRPC.

1. **Protobuf em vez de JSON / XML**

Tanto as APIs REST quanto as APIs RPC enviam e recebem mensagens usando os formatos de mensagem JSON ou XML.

O JSON se tornou um formato popular, pois é flexível, eficiente, neutro em relação à plataforma, independente de idioma, baseado em texto e legível por humanos. Porém, em determinadas situações de uso, o JSON não é rápido ou leve o suficiente ao transmitir dados entre sistemas.

Em contraste com REST, gRPC não tem problemas com velocidade e peso, oferecendo maior eficiência ao transmitir mensagens usando o formato Protobuf (buffers de protocolo).

2. **Construído em HTTP 2 em vez de HTTP 1.1**

As APIs REST geralmente são construídas em HTTP 1.1, que usa um modelo de comunicação de *request-response*. Isso significa que, quando um microsserviço recebe várias solicitações de mais de um cliente, ele precisa atendê-las uma de cada vez, de forma sequencial, o que torna todo o sistema mais lento.

Já o gRPC usa HTTP 2 e aproveita seu suporte para comunicação bidirecional. Assim, quando um microsserviço recebe várias solicitações de mais de um cliente, ele alcança a multiplexação atendendo a muitas solicitações e respostas simultaneamente.

3. **Geração de código nativo em vez de usar ferramentas de terceiros**

Os recursos de geração de código são nativos do gRPC. Com APIs REST, é necessário usar uma ferramenta de terceiros, como Swagger, para gerar automaticamente o código para chamadas de API em várias linguagens.

O compilador protoc que acompanha o gRPC é compatível com uma ampla variedade de linguagens de programação. E isso o torna excelente para ambientes onde se está conectando vários microsserviços diferentes que são codificados em diferentes idiomas e executados em diferentes plataformas.

4. **Transmissão de mensagens 7 a 10 vezes mais rápida**

De acordo com [testes](https://medium.com/@EmperorRXF/evaluating-performance-of-rest-vs-grpc-1b8bdf0b22da#:~:text=gRPC%20is%20roughly%207%20times,of%20HTTP%2F2%20by%20gRPC.) ,as conexões da API gRPC são mais rápidas do que as conexões da API REST.

Cerca de 7 vezes mais rápido do que REST ao receber dados e cerca de 10 vezes mais rápido do que REST ao enviar dados para esta carga específica.

5. **Implementação mais lenta do que REST**

Apesar dos benefícios na velocidade de transmissão de mensagens, a implementação da API gRPC é muito mais lenta do que a implementação da API REST.

Leva-se aproximadamente 45 minutos para implementar um serviço gRPC simples contra  cerca de apenas 10 minutos para implementar uma API REST.

Isso ocorre, principalmente, porque o gRPC ainda não é amplamente adotado, especialmente em comparação com a onipresença das APIs REST.

### Quando usar API REST vs. API gRPC

#### APIs REST

APIs REST são as APIs mais usadas e populares para conectar infraestruturas baseadas em microsserviços, seja um sistema interno ou que exponha seus recursos para o resto do mundo. São ideais quando um sistema precisa de iteração e padronização de alta velocidade do protocolo HTTP.

Com seu suporte universal de ferramentas de terceiros, APIs REST devem ser sua primeira opção para integrações de aplicações, integração de microsserviços e desenvolvimento de serviços da web.

Quando uma API REST é disponibilizada publicamente como um serviço da web, cada componente fornecido pelo serviço da web é apresentado aos clientes como um recurso. Os clientes podem acessar esses recursos por meio de uma interface comum que aceita diferentes comandos HTTP como GET, POST, DELETE e PUT.

#### APIs gRPC

Quanto ao gRPC, a maioria das ferramentas de terceiros continua sem recursos integrados para compatibilidade do gRPC. Como tal, o gRPC é principalmente usado na construção de sistemas internos e assim, com esta ressalva em mente, as APIs gRPC podem ser úteis nas seguintes circunstâncias:

- **Conexões de microsserviços:** a comunicação de baixa latência e alta velocidade do gRPC o torna particularmente útil para conectar arquiteturas que consistem em microsserviços leves em que a eficiência da transmissão de mensagens é fundamental.
- **Sistemas multilinguagens:** com seu suporte de geração de código nativo para uma ampla gama de linguagens de desenvolvimento, o gRPC é excelente para gerenciar conexões em um ambiente políglota.
- **Streaming em tempo real:** a capacidade do gRPC de gerenciar o streaming bidirecional permite que seu sistema envie e receba mensagens em tempo real sem esperar pela resposta unária do cliente.
- **Redes de baixa largura de banda e baixa potência:** o uso de mensagens serializadas Protobuf pelo gRPC oferece mensagens leves, maior eficiência e velocidade para redes de baixa potência e largura de banda restrita.

### Conclusão sobre API REST

Devido às várias vantagens das APIs gRPC citadas aqui, alguns desenvolvedores enxergam o gRPC como o “futuro”. Porém, o gRPC ainda não foi amplamente adotado, e resta saber se seus benefícios irão estimular uma adoção nos próximos anos.

Em comparação, REST é suportado universalmente e virtualmente por toda infraestrutura baseada em microsserviços e é visto como uma cola que mantém todos unidos.

No mais, a ideia de que você precisa escolher uma abordagem e ter apenas uma arquitetura de API não deve ser considerada como verdade absoluta. Uma aplicação poderia muito facilmente ter várias APIs ou serviços adicionais que não são considerados a API “principal” e você poderia escolher entre seguir as regras de REST ou gRPC e talvez você tenha uma API REST e alguns serviços RPC em paralelo.

Assim, conhecer as diferenças entre REST e gRPC pode ser incrivelmente útil quando você está planejando uma nova API e pode ajudar quando estiver trabalhando em recursos para APIs existentes. Afinal, saber analisar detalhadamente como irão se comportar seus clientes e o que esperar de suas APIs é fundamental na tomada de decisão sobre qual arquitetura usar.

Gostou do nosso conteúdo? Quer saber mais sobre integração de sistemas e gerenciamento de APIs e como isso tudo pode ajudar os seus negócios? [Fale com um dos nossos especialistas](/contato/)! Teremos prazer em ajudá-lo.

#### Avalie o nível de adoção e maturidade DevOps na sua empresa e entenda os pontos fortes, fracos, lacunas e oportunidades de aprimoramento.

[![](/wp-content/uploads/2021/05/Sem-Titulo-1.png)](/indice-de-maturidade-devops/)

#### Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
