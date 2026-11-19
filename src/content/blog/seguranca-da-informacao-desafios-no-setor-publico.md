---
title: "Segurança da informação: desafios no setor público"
slug: "seguranca-da-informacao-desafios-no-setor-publico"
date: "2021-03-01T15:53:27"
modified: "2021-03-01T15:53:27"
status: "publish"
author: "admin"
excerpt: "Os ataques hackers realizados no final de 2020 a sistemas informatizados de diferentes órgãos públicos brasileiros, como o Superior Tribunal de Justiça, Ministério da Saúde e Governo do Distrito Federal, revelam a situação da TI no setor público e apontam que a segurança da informação precisa estar no centro de cada sistema de software lançado […]"
categories: ["devsecops"]
tags: ["adotar-devops", "devops", "devsecops", "seguranca-da-informacao", "vault"]
featuredImage: "/wp-content/uploads/2021/03/setor_publico_V2.png"
wpId: 5485
originalUrl: "https://vertigo.com.br/seguranca-da-informacao-desafios-no-setor-publico/"
contentSource: "rest"
seo:
  title: "Segurança da informação: desafios no setor público - Vertigo"
  description: "Neste artigo vamos explorar como é a realidade da segurança da informação no setor público e seus principais desafios atuais. Boa leitura!"
  canonical: "https://vertigo.com.br/seguranca-da-informacao-desafios-no-setor-publico/"
  ogImage: "/wp-content/uploads/2021/03/setor_publico_V2.png"
  robots: "index, follow"
---

Os ataques hackers realizados no final de 2020 a sistemas informatizados de diferentes órgãos públicos brasileiros, como o Superior Tribunal de Justiça, Ministério da Saúde e Governo do Distrito Federal, revelam a situação da TI no setor público e apontam que a segurança da informação precisa estar no centro de cada sistema de software lançado pelo governo.
Estes acontecimentos mostram ser necessário que as autoridades reconheçam urgentemente a importância de investir em segurança da informação. Afinal, a maioria dos órgãos públicos não possui corpo técnico para elaborar essas normas e gerenciar soluções em casos de ataques.
A digitalização dos serviços públicos aumenta os riscos de ataques e, com isso, é necessário estar atento não apenas ao número de entregas, mas também na qualidade e segurança dos serviços oferecidos.
O [DevSecOps](/como-a-cultura-devsecops-pode-auxiliar-no-processo-de-adaptacao-a-lgpd/) incorpora atividades de segurança no ciclo de vida de desenvolvimento de software. A abordagem ajuda a desenvolver equipes que integram perfeitamente as funções de segurança e conformidade em seus fluxos de trabalho regulares, inserindo as etapas necessárias no pipeline de integração e entrega contínua CI/CD.
Neste artigo vamos explorar como é a realidade da segurança da informação no setor público e seus principais desafios atuais. Boa leitura!

## Colaboração e canais confiáveis

A comunicação é um catalisador extremamente eficaz para criar um processo dinâmico de construção e para facilitar a colaboração entre as equipes de segurança, operações e desenvolvimento. É fundamental envolver estes times nas discussões relacionadas ao pipeline para garantir que as etapas corretas de segurança sejam integradas.
Conversas consistentes entre as equipes ajudam a construir e reforçar a confiança no pipeline usado na fabricação do software. Estabelecer os requisitos de segurança no início do processo de construção ajuda os desenvolvedores a incorporar as proteções de segurança necessárias em seus fluxos de trabalho e estabelecer canais de entrega em que as equipes confiem.

## Pipelines automatizados reduzem erros

O [DevSecOps permite que as organizações automatizem processos](/3-maneiras-de-superar-gargalos-do-cloud-com-devsecops/), o que minimiza as falhas causadas ​​por erro humano. As agências públicas fornecem aplicações com melhor desempenho e qualidade ao incorporar controles e testes de segurança automatizados em seus pipelines.
Eles também evitam gargalos e fornecem recursos de maneira mais rápida, automatizando as tarefas e os *gates* de validação que realmente não precisam de um profissional no *loop*.

## Entrega segura e mais rápida

Em muitas organizações, a segurança ainda é vista como um obstáculo à entrega de software, um bloqueador que é trabalhoso e inevitável. No entanto, a segurança pode, na prática, promover a velocidade.
O DevSecOps, quando executado corretamente, [acelera a entrega do software](/devsecops-e-seus-principais-indicadores-de-desempenho/) porque as verificações de segurança são concluídas e os defeitos são corrigidos continuamente em todo o ciclo de vida de desenvolvimento de software.
O que é uma ótima notícia para os desenvolvedores (suas criações entram em operação mais cedo), para as equipes de segurança (podem autorizar mais facilmente o sistema porque sabem que foi desenvolvido em conformidade com a política organizacional) e para as equipes de operações (herdam um sistema que é digno de ser executado em sua infraestrutura).

## Insight contínuo e conformidade em tempo real

As equipes de segurança ganham transparência e percepções úteis em cada etapa da construção de software por meio de uma trilha de auditoria, medidas de governança e relatórios de conformidade em tempo real, sem esperar que os desenvolvedores criem e compartilhem relatórios pós-desenvolvimento.
Essas percepções contínuas, juntamente com pipelines confiáveis, eliminam a burocracia entre o escritório de segurança e as equipes de desenvolvimento, resultando em uma TI mais rápida e segura.

## Criptografia e gerenciamento de chaves

A maioria das empresas privadas tem várias camadas de segurança, começando no perímetro e continuando por toda a infraestrutura para estabelecer *defense in depth*. É isso que as organizações públicas também precisam fazer. 
O **Vault, solução de segurança da Hashicorp,** foi desenvolvido para resistir ao ataque já em seu perímetro. Essa característica se tornou extremamente importante com o aumento de ameaças e ataques, como os mencionados no início do artigo.
Os dados criptografados pelo Vault são capazes de resistir a ataques independentes devido ao design de sua barreira criptográfica em *rest* – que oferece opções para os usuários protegerem sua infraestrutura de acordo com seu modelo de ameaça.

## A barreira criptográfica e o desbloqueio

O Vault protege seus dados independente do host de seu sistema de armazenamento em uma estrutura conhecida como Barreira Criptográfica. Isso é feito por dois motivos: para permitir que os operadores não fiquem “presos” a um determinado armazenamento ou infraestrutura de computação e, em última instância, garantir que um invasor que comprometa a infraestrutura de armazenamento não tenha acesso aos segredos ou a sua configuração confidencial de dados.
Na prática: se todos os dados do Vault forem roubados, uma camada independente de criptografia – que não é controlada nem operada pelo sistema de armazenamento – trava os dados e os protege mesmo após violação e vazamento bem-sucedidos do back-end de armazenamento.

## Gerenciamento seguro de chaves

Independente do mecanismo de desbloqueio, o Vault é projetado para complicar o roubo de material da chave com finalidade de contornar a criptografia. Nenhuma das abordagens armazena diretamente a chave de criptografia real para os dados, garantindo que mesmo se um invasor com recursos suficientes violar um sistema de desbloqueio automático, ele não poderá roubar as chaves para descriptografar a barreira de criptografia fora do processo de desbloqueio.
O Vault vai um passo além ao garantir que os usuários e operadores nunca interajam com as chaves usadas para proteger seus segredos. O provedor gerencia, com profundidade, o processo de recuperação de chaves do armazenamento criptografado.
Embora isso simplifique o processo de uso, também minimiza a possibilidade de um ataque de subtração de chave. Um invasor que violou a infraestrutura de um usuário não pode roubar o material da chave e usá-lo para atacar dados criptografados em *rest*.
Além do gerenciamento seguro, a infraestrutura do Vault foi projetada para proteger e encorajar as práticas recomendadas para gerenciamento do acesso seguro a segredos, que são:

- Segurança multinível;
- Controle de acesso baseado em função e atributos;
- Registro de auditoria;
- Credenciais dinâmicas;
- Confiança independente da rede.

## Última linha de defesa

O Vault foi projetado para servir como uma última linha independente de defesa de segredos. Situações recentes de ataque destacam a importância de projetar a criptografia e o gerenciamento de chaves para resistir a ataques combinados de invasores habilidosos e com bons recursos.
No futuro, será possível permitir que os usuários migrem para novas cifras comprovadamente seguras. Mas, hoje o objetivo permanece o mesmo: ter a melhor tecnologia possível de modo a manter os dados protegidos com criptografia suficiente para obter o sigilo total do software.

## Conclusão

Implementar DevSecOps é uma maneira simples, mas elegante de promover a segurança contínua e reduzir as vulnerabilidades lançadas no ambiente de produção.
As organizações do setor público se beneficiam muito ao reduzir falhas e ganhar a confiança de que as verificações de segurança relevantes foram executadas.
Gostou do nosso conteúdo? Quer saber mais sobre como a cultura DevSecOps e o Vault podem ajudar a sua organização a atender as demandas cada vez mais urgentes, sem abrir mão da segurança de proteção de dados? [Fale com um dos nossos especialistas!](/contato/) Teremos prazer em ajudá-lo.

###

### Avalie o nível de adoção e maturidade DevOps na sua empresa e entenda os pontos fortes, fracos, lacunas e oportunidades de aprimoramento.

[![](/wp-content/uploads/2021/05/Sem-Titulo-1.png)](/indice-de-maturidade-devops/)

## Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
