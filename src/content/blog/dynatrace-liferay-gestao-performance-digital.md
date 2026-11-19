---
title: "Dynatrace & Liferay: 10 dicas para obter o máximo resultado"
slug: "dynatrace-liferay-gestao-performance-digital"
date: "2016-11-09T07:26:58"
modified: "2026-02-02T20:38:42"
status: "publish"
author: "admin"
excerpt: "As palavras “transformação digital” podem significar muitas coisas, certo? E uma delas é a dificuldade em gerenciar as aplicações que surgem nesse cenário cada vez mais digital. Nesse post vamos falar sobre como gerenciar e monitorar as suas aplicações que estejam utilizando a plataforma Liferay. Vemos que muitas empresas estão querendo transformar e enriquecer suas […]"
categories: ["gestao-de-performance-digital", "plataformas-digitais"]
tags: ["dasboards", "dynatrace", "liferay", "liferay-7", "liferay-portal", "monitar-aplicacao", "monitoramento-das-aplicacoes", "monitorar-performance", "portal"]
featuredImage: "/wp-content/uploads/2026/02/dynatrace-liferay-gestao-performance-digital.png"
wpId: 1157
originalUrl: "https://vertigo.com.br/dynatrace-liferay-gestao-performance-digital/"
contentSource: "rest"
seo:
  title: "Dynatrace & Liferay: 10 dicas para obter o máximo resultado"
  description: "Viemos aqui para compartilhar como você pode monitorar e saber a saúde das suas aplicações que estão em Liferay. Entre nesse post e conheça as 10 dicas!"
  canonical: "https://vertigo.com.br/dynatrace-liferay-gestao-performance-digital/"
  ogImage: "/wp-content/uploads/2026/02/dynatrace-liferay-gestao-performance-digital.png"
  robots: "index, follow"
---

As palavras “transformação digital” podem significar muitas coisas, certo? E uma delas é a dificuldade em gerenciar as aplicações que surgem nesse cenário cada vez mais digital. Nesse post vamos falar sobre como gerenciar e monitorar as suas aplicações que estejam utilizando a plataforma Liferay. Vemos que muitas empresas estão querendo transformar e enriquecer suas experiências digitais para clientes, parceiros e funcionários.

Segundo a Forrester, o desafio de integrar sistemas numerosos e complexos de back-end e fontes de dados representa um desafio real, e uma ameaça real, para o sucesso de qualquer empresa. E não saber como está a saúde dessas aplicações, é um risco absurdo que pode colocar em risco toda a operação da sua empresa.

Como somos parceiros Liferay e Dynatrace, viemos aqui para compartilhar o conhecimento que adquirimos, a partir de alguns clientes que estão utilizando a Solução de Gestão de Performance Digital da Dynatrace em seus ambientes Liferay.
O [Dynatrace FastPack](https://www.dynatrace.com/technologies/liferay-monitoring/) para Liferay, junto com screenshots que vamos utilizar ao longo do post estão disponíveis gratuitamente na [Comunidade APM Dynatrace](https://community.dynatrace.com/community/display/DL/Liferay+Portal+FastPack?_ga=1.161769468.1564637137.1449584425) e foram atualizados para trabalhar com Liferay na versão 7.

Se você tiver interesse em testar, baixe e teste por 30 dias e confira o desempenho das suas aplicações Liferay, você pode baixá-lo aqui: [Personal License](https://www.dynatrace.com/en/products/dynatrace-personal-license.html?utm_medium=VertigoParceiro&utm_source=dynatrace&utm_campaign=devops&utm_term=agrabner)

## Dica 1: Liferay Overview

Há muitos aspectos positivos no Liferay,  um deles é a questão de identificar problemas com desempenho e, utilizando Dynatrace, isso acaba ficando de fácil identificação. Nesse exemplo criamos este dashboard de alto nível para fornecer informações sobre os principais serviços em Liferay, como por exemplo: Blogs, Media Gallery e Pesquisa. Além de ver a saúde do desempenho das página, essa visão geral fornece uma janela para as principais métricas que podem estar afetando o desempenho da aplicação. Estes incluem carga do site, a atividade de banco de dados e outros. Além disso, o Breakdown fornece uma visão na camada em que as classes estão consumindo mais tempo, enquanto o Breakdown Agent destaca quanto tempo e, mais importante, quem – CPU, Banco de Dados, Sync, Wait & Suspensão – está sendo consumido em cada camada.

Começando pelo Overview Liferay, as equipes podem rapidamente determinar a natureza do problema em questão e avançar para definir um diagnóstico, envolvendo apenas as pessoas responsáveis, em vez de colocar todos juntos para uma sala de guerra desnecessária, onde cada pessoa estará mais preocupado em se defender do que entender onde está o problema.

Todos os widgets do Dashboard são interativos. Para mais informações você pode se aprofundar no contexto para determinar o que está causando o problema.

![](/wp-content/uploads/2016/11/Liferay-Overview.png)

## Dica 2: Entenda as suas Páginas e Portlet

A maioria dos portlets usa o framework MVC Liferay. A identificação de páginas com uma transação de negócios não é apenas a chave para o fornecimento dos alertas no dashboard, mas uma chave para a compreensão do desempenho dos diferentes tipos de página dentro da sua plataforma Liferay. A maioria dos portlets podem ser identificados por qualquer tipo de resquest ou Resource Served.  Ao identificar e monitorar portlets por Portlet Phase, uma página Wiki lenta pode ser identificada como realmente uma ação Wiki lenta sendo Processada pela página. Isso restringe o âmbito de uma emissão, e imediatamente fornece as equipes um subconjunto sistemática de dados para analisar melhor causa raiz dessa lentidão.

![](/wp-content/uploads/2016/11/Entenda-as-suas-Paginas-e-Portlet.png)

## **Dica 3: Entenda o seu CMS**

Uma parcela muito grande de páginas embarcadas em solução Liferay poderão utilizar o Gerenciamento de Conteúdo Liferay (CMS). Dizer que as páginas em CMS são lentas não é tão útil, pois essas páginas podem ser páginas de site privado, páginas de usuários privados ou páginas públicas. Além disso, elas podem ser afetados por portlets individuais que estejam  presentes na página, certo? Em última análise, então, quando as “páginas são lentas”, é importante saber:

1. Quais são essas páginas;
2. se de fato estão apresentando um carregamento lento;
3. Comparadas com quais outras páginas elas são lentas.

Isso ajuda a determinar se é por causa de um portlet específico na página ou se é algo mais amplo, como uma consulta lenta ou problemas em outras partes do código.

Dynatrace traz essa clareza através da identificação e análise de páginas CMS . A Visão geral do CMS fornece detalhes sobre o desempenho, rendimento e erros, através de múltiplas dimensões. Ele ainda permite que você saiba se há algum problema de saúde no Host ou nos processos que podem estar contribuindo para tal lentidão.

![](/wp-content/uploads/2016/11/Dica-3_Entenda-o-seu-CMS.png)

## Dica 4: O que tem no seu cache?

Liferay utiliza Ehcache para ajudar a fornecer uma experiência rápida ao usuário. Uma regra comum, se algo pode ser armazenado em cache, então assim deve ser feito. O que não é bom é ignorar se o cache está otimizado. Frequentemente, o erro acontece por ativar o cache sem ter certeza que ele está otimizado, ou até mesmo se está sendo aproveitado da melhor forma.

O painel Ehcache, com alertas de limite pré-definidos, foi projetado para fornecer uma visão do uso consciente do cache. Este painel monitora, especificamente, a Taxa de ocupação do Cache na memória e a In-Memory Hit monitora o percentual para os diferentes caches Ehcache. Se o desempenho da página estiver mais lento, é muito fácil determinar se a má configuração da Ehcache está contribuindo para esse problema. Após sintonizar os parâmetros de cache, você pode confirmar, no Dynatrace, se o caching está se comportando melhor, e se o desempenho melhorou ou não.

![](/wp-content/uploads/2016/11/Dica-4_O-que-tem-no-seu-cache.png)

## Dica 5: Monitorar processos e hosts

Nem todo problema está relacionado ao código. Na verdade, muitos problemas são simplesmente o resultado de uma JVM mal-definida. E, mesmo com o código finamente ajustado, um host de JVM terá sempre um limite. Os dois painéis relacionados a host/processos relacionados no Fastpack fornecem uma visão do estado desses componentes. As causas mais comuns de latência em um sistema Liferay incluem pausas do GC e pool de thread mal configuradas. O Dashboard  “Processo de Desempenho Liferay” monitora:

- o estado da CPU;
- a utilização de heap/GC;
- o impacto do GC sobre os tempos de resposta;
- a pool de Thread JVM / Liferay.

Estas informações fornecem compreensão sobre quando se deve ajustar ou não, thread e memória.

![](/wp-content/uploads/2016/11/Dica-5_-Monitorar-processos-e-hosts_1.png)

O Dashboard do Sistema de Monitoramento do Liferay acrescenta contexto ao cenário de métricas de desempenho do host como CPU host, memória do host, disco I/O, e rede de I/O juntamente com o desempenho da página e carga de visita. Às vezes, um problema é tão simples como um disco cheio, pois a limpeza de log foi configurada incorretamente. Com um olho na página e na carga de visita, é simples determinar se o server/processo está simplesmente sobrecarregado com o tráfego, ou se há um problema maior como baixa carga.

![](/wp-content/uploads/2016/11/Dica-5_Monitorar-processos-e-hosts_2.png)

## Dica 6: Desempenho do banco de dado Liferay

Em quase todas as aplicações, o desempenho do banco de dados ainda se classifica como um dos maiores problemas de desempenho. As equipes que trabalham com Liferay vêm a mesma coisa também no compromisso com seus clientes. Três dos problemas mais comuns no lado do banco de dados são:

1. a consulta N + 1;
2. consultas lentas;
3. uso da pool JDBC.

O Dashboard de Desempenho de banco de dados Liferay tem um grande destaque sobre estes e outros problemas de banco de dados, incluindo o estado do banco de dados do host, o que é algo relevante e significativo.

![](/wp-content/uploads/2016/11/Dica-6_Desempenho-do-banco-de-dado-Liferay.png)

## Dica 7: Corrija seus piores desempenhos

A chave para uma ótima experiência do usuário não é tão simples como consertar o que está quebrado. A chave está em ter uma experiência uniforme em todo o site. Para fornecer uma experiência digital de qualidade, devemos ter como orientação e prevenção, ou seja, se a aplicação ainda não está caiu, corrija-a e melhore o seu desempenho. O que realmente queremos dizer é: dê uma olhada nas partes com pior desempenho no seu site.

Os piores desempenhos Liferay fornecem uma visão das operações mais lentas. Na metade superior, há uma comparação de níveis e pacote de desempenho comparando o nonagésimo percentual mais rápido com o décimo mais lento. No geral, este te diz de onde a latência vem, ou seja, qual é a atividade mais lenta em seu site. A metade inferior contém o que nós gostamos de pensar como uma lista de verificação de melhoria. Ela inclui as solicitações como:

- as solicitações web mais lentas;
- as ações mais lentas que os usuários chamam;
- os web service mais lentos;
- consultas do banco de dados lentas;
- erros do principal client (navegador/dispositivo);
- erros dos principais aplicativos.

A partir dessas listas, é possível facilmente priorizar onde gastar tempo fazendo melhorias para os sites existentes, certo?

![](/wp-content/uploads/2016/11/Dica-7_Corrija-seus-piores-desempenhos.png)

## Dica 8: Retorne sempre com uma resposta

Não deixe seus usuários encalhados em uma pesquisa. Liferay utiliza motores de busca externos para fazer o trabalho, e é importante monitorar o estado e o desempenho da pesquisa. A ferramenta de busca Liferay trabalha com pesquisa Elastic, mas também pode ser configurado para usar Solr. O buscador Index determina qual dos dois motores está implementado, e delega a busca para a implementação mais adequada para este motor de busca.

A pesquisa facetada retorna documentos correspondentes à pesquisa de forma específica. O Liferay Fastpack expõe o tempo gasto em cada uma delas, e seu impacto sobre as operações reais de pesquisa individuais. Além disso, é importante para monitorar o desempenho geral da página do portlet de Pesquisa por visualização renderizada. Ao utilizar os Dashboards de Visão Geral de Pesquisa Liferay, você pode ter certeza que seus usuários não estarão presos, sem resultados, o que é frustrante para quem está pesquisando algo.

## Dica 9: Faça seu visitante ter uma boa experiência

Quando você tem convidados, é sempre importante fornecer-lhes tanto uma recepção calorosa em sua casa quanto uma despedida afeiçoada. É por isso que é importante monitorar, as entradas e saídas das aplicações. Os visitantes logam em seu site e devem se sentir bem-vindos entrando e saindo do seu site. O Dashboard de visão geral “Entrada” e “Saida” aparecem semelhante as Páginas portlet, descritas na Dica 2. O Login pode ser identificado no Liferay de duas maneiras diferentes: Acesso de SSO e autenticação não-SSO, que monitora o desempenho da ação de entrada e saída. Há também dois sinal em vista de portlets para monitorar páginas com esse elemento. Entrada por visualização renderizada e entrada pela ação processada.

![](/wp-content/uploads/2016/11/Dica-9_Faca-seu-visitante-ter-uma-boa-experiencia.png)

## Dica 10: Arquivos JavaScript e CSS

O Fraco desempenho de páginas Web, geralmente é causada quando se ignora as melhores práticas, e isso tem atormentado os gestores de sites há anos, e continua a atormentar hoje em dia. Gestão de Experiência de Usuário (UEM), fornece uma visão profunda sobre o desempenho da página como um todo, bem como pelos componentes da página e objetos de terceiros. No entanto, não importa o quão otimizadas estão suas páginas, as questões de server side ainda podem criar sérios problemas.

O Fastpack Dynatrace Liferay fornece dois dashboards Liferay que você pode usar para monitorar o desempenho do JS e CSS, a fim de garantir que a latência back-end não arruine uma boa experiência digital dos seus usuários. O dashboard de Server Side CSS e JavaScript Overview acompanha o desempenho desses elementos individuais do servidor web através de cargas. Client Side CSS & JavaScript rastreia essas mesmas operações por todo o caminho até o navegador dos usuários.

![](/wp-content/uploads/2016/11/Dica-10_Arquivos-JavaScript-e-CSS.png)

## Conclusão

Entregar ao cliente uma experiência incrível e de alta qualidade é mais do que ter uma interface bonita, responsiva ou mesmo nativa para aquele device . É sobre desencadear e utilizar o valor intrínseco que está incorporado em sistemas back-end e em fontes de dados, a fim de enriquecer e envolver clientes e funcionários na entrega da melhor experiência digital. A plataforma Liferay fornece uma estrutura ampla para realizar esse engajamento. No entanto, para garantir que a experiência entregue ao cliente está excepcional, é essencial ter a profundidade e amplitude de todas as aplicações que estão sendo envolvidas naquela solução de negócios.

E você, gostou do artigo? Aproveite para indicar esse post para quem esteja utilizando Liferay.
