---
title: "Segurança de APIs: confira as top 10 falhas de segurança do OWASP"
slug: "seguranca-de-apis-confira-as-top-10-falhas-de-seguranca-do-owasp"
date: "2022-11-22T16:13:02"
modified: "2022-11-22T16:13:02"
status: "publish"
author: "admin"
excerpt: "A sigla OWASP significa Open Web Application Security Project e representa uma organização internacional sem fins lucrativos, que tem suas operações focadas no desenvolvimento de práticas dedicadas à segurança de aplicações web. A organização é conhecida por disponibilizar o Top 10 do OWASP, que lista as 10 maiores preocupações de segurança para aplicações web. Vale […]"
categories: ["apis"]
tags: ["api"]
featuredImage: "/wp-content/uploads/2022/11/Seguranca_para_APIs_BLOG_IMAGEM_DESTAQUE.png"
wpId: 161515
originalUrl: "https://vertigo.com.br/seguranca-de-apis-confira-as-top-10-falhas-de-seguranca-do-owasp/"
contentSource: "rest"
seo:
  title: "Segurança de APIs: confira as top 10 falhas de segurança do OWASP  - Vertigo"
  description: "Segurança das APIs. Confira as top 10 falhas de segurança do OWASP. Acesse agora e leia mais em nosso blog."
  canonical: "https://vertigo.com.br/seguranca-de-apis-confira-as-top-10-falhas-de-seguranca-do-owasp/"
  ogImage: "/wp-content/uploads/2022/11/Seguranca_para_APIs_BLOG_IMAGEM_DESTAQUE.png"
  robots: "index, follow"
---

A sigla OWASP significa Open Web Application Security Project e representa uma organização internacional sem fins lucrativos, que tem suas operações focadas no desenvolvimento de práticas dedicadas à segurança de aplicações web. A organização é conhecida por disponibilizar o Top 10 do OWASP, que lista as 10 maiores preocupações de segurança para aplicações web. Vale destacar que o OWASP também mantém uma lista separada e semelhante com foco em APIs, que são a base de integração entre a maioria das aplicações web.

Preparamos esse artigo mostrando o Top 10 riscos de segurança para [APIs](/a-evolucao-das-apis-a-jornada-de-rpc-a-soap-e-xml/) do OWASP.

Boa leitura.

## Cuidados com a segurança das APIs sofrem constantes mudanças

No último ano, houve a atualização dentro das categorias que compõem o OWASP TOP 10. A última havia sido em 2017, mas de lá para cá muita coisa mudou e, com isso, a alternância das categorias se modificou.

Através do novo TOP 10, que foi composto em 2021, temos agora acesso a nova lista de  informações, retiradas diretamente do [site da OWASP](https://owasp.org/Top10/), confira.

### A01:2021- Broken Access Control

Controle de acesso se trata de um sistema que controla o acesso a informações. Os controles de acesso que estão corrompidos dão brecha para que os hackers burlem a autorização e executem tarefas como se fossem usuários privilegiados, como administradores.

Em 2019 essa falha estava na 5ª posição, mas 94% das aplicações que foram testadas pela OWASP sofreram alguma violação no controle de acesso.

### A02:2021-Cryptographic Failures

Subiu uma posição em relação à última lista, ficando na 2ª posição, anteriormente conhecida como Sensitive Data Exposure, o qual era tratado como um sintoma, e não uma causa raiz.

A renovação está nas falhas relacionadas à criptografia, que geralmente levam à exposição de dados confidenciais ou comprometimento do sistema.

### A03: 2021-Injection

Cai para a terceira posição. 94% dos aplicativos que foram testados na pesquisa sofreram alguma forma de injeção, tendo o segundo maior número de ocorrências em aplicativos.

Cross-site Scripting agora faz parte desta categoria nesta edição.

### A04: 2021-Insecure Design

É uma nova categoria para 2021, com foco nos riscos relacionados a falhas de design. Se quisermos genuinamente “ir para a esquerda” como indústria, precisamos de mais modelagem de ameaças, padrões e princípios de design seguros e arquiteturas de referência. Um design inseguro não pode ser corrigido por uma implementação perfeita, pois, por definição, os controles de segurança necessários nunca foram criados para se defender contra ataques específicos.

### A05: 2021-Security Misconfiguration

Subiu da 6ª posição na edição anterior; 90% das aplicações foram testadas quanto a algum tipo de configuração incorreta, com uma taxa média de incidência de 4,5% e mais de 208 mil ocorrências de CWEs mapeadas para essa categoria de risco. Com mais mudanças em software altamente configurável, não é surpreendente ver esta categoria subir. A antiga categoria para A4:2017-XML External Entities (XXE) agora faz parte desta categoria de risco.

### A06:2021-Vulnerable and Outdated Components

Anteriormente intitulado Using Components with Known Vulnerabilities. Esta categoria passou da 9ª posição em 2017 e é um problema conhecido onde muitos não avaliam os riscos que pode gerar. É a única categoria que não tem vulnerabilidades e exposições comuns (CVEs) mapeadas para os CWEs incluídos, portanto, uma exploração padrão e pesos de impacto de 5,0 são considerados em suas pontuações.

### A07: 2021-Identification and Authentication Failures

Era uma autenticação quebrada e está caindo da posição 2 para a sétima colocação, e agora inclui CWEs que estão mais relacionados a falhas de identificação. Essa categoria ainda é parte integrante do Top 10, mas a maior disponibilidade de estruturas padronizadas parece estar ajudando.

### A08:2021-Software and Data Integrity Failures

Essa é uma nova categoria para 2021, com foco em fazer suposições relacionadas a atualizações de software, dados críticos e [pipelines de CI / CD](/o-que-e-um-pipeline-de-ci-cd-entenda/) sem verificar a integridade.

### A09:2021-Security Logging and Monitoring Failures

Anteriormente Insufficient Logging & Monitoring, subiu uma posição. Esta categoria foi expandida para conter mais tipos de falhas que podem impactar diretamente a visibilidade, o alerta de incidentes e a perícia.

### A10: 2021-Server-Side Request Forgery

Essa categoria representa o cenário em que os membros da comunidade de segurança estão nos dizendo que isso é importante, mesmo que não esteja ilustrado nos dados no momento. Os dados mostram que a taxa de incidência desta categoria é relativamente baixa.

## Tenha as melhores práticas de implementação de APIs com a Vertigo Tecnologia

A Vertigo é especialista em integração de APIs e tem como parceria a [Kong Inc](/parcerias/kong/), eleita líder do Quadrante Mágico do Gartner por dois anos consecutivos em gerenciamento de APIs.

Ter as melhores práticas de segurança para a sua empresa é fundamental para sobreviver a uma rotina constante de vulnerabilidades que tendem a trazer prejuízos a sua operação.

Dessa forma, é fundamental ter parceiros de confiança para melhorar os resultados obtidos.

Fale com os nossos especialistas, temos um time preparado e pronto para te orientar e apresentar as melhores soluções do mercado.
