---
title: "eBook – Migrando Kong Open Source (OSS) para Kong Enterprise API Gateway"
slug: "ebook-migrando-kong-open-source-oss-para-kong-enterprise-api-gateway"
date: "2024-10-24T09:57:45"
modified: "2024-10-24T09:57:45"
status: "publish"
author: "admin"
excerpt: "1 – Introdução Kong API Gateway O Kong API Gateway é uma plataforma de gerenciamento de APIs open source que funciona como um intermediário para solicitações de API entre clientes (como aplicativos móveis ou da web) e APIs. Ele é projetado para otimizar e gerenciar o tráfego de APIs, oferecendo uma série de funcionalidades para […]"
categories: ["apis", "kong", "kubernetes"]
tags: ["api", "kong", "kubernetes"]
featuredImage: "/wp-content/uploads/2024/10/Blog-migrando-kong-open-source.webp"
featuredImageAlt: "Migrando Kong Open Source"
wpId: 165242
originalUrl: "https://vertigo.com.br/ebook-migrando-kong-open-source-oss-para-kong-enterprise-api-gateway/"
contentSource: "rest"
seo:
  title: "eBook - Migrando Kong Open Source (OSS) para Kong Enterprise API Gateway - Vertigo"
  description: "Veja como migrar do Kong Open Source para o Kong Enterprise e explore vantagens, novos plugins e recursos para um API Gateway robusto."
  canonical: "https://vertigo.com.br/ebook-migrando-kong-open-source-oss-para-kong-enterprise-api-gateway/"
  ogImage: "/wp-content/uploads/2024/10/Blog-migrando-kong-open-source.webp"
  robots: "index, follow"
---

## **1 – Introdução Kong API Gateway**

O Kong API Gateway é uma plataforma de gerenciamento de APIs open source que funciona como um intermediário para solicitações de API entre clientes (como aplicativos móveis ou da web) e APIs. Ele é projetado para otimizar e gerenciar o tráfego de APIs, oferecendo uma série de funcionalidades para melhorar a segurança, o desempenho e a escalabilidade das aplicações.

Este ebook é uma tradução direta realizada pela Vertigo Tecnologia, parceira oficial da Kong Inc. no Brasil, e traz um guia detalhado sobre “Como e Por Que Migrar do Kong Open Source para o Kong Enterprise API Gateway”. Você pode conferir o artigo também [**neste link**](https://konghq.com/blog/engineering/how-and-why-to-migrate-from-kong-open-source-to-kong-enterprise-api-gateway).

Através deste material, buscamos esclarecer os benefícios significativos e as capacidades expandidas que o Kong Enterprise oferece em relação à sua versão de código aberto. Este conteúdo, originalmente criado pela equipe da Kong Inc., serve como uma ferramenta essencial para organizações e desenvolvedores que consideram aprimorar sua gestão de APIs com as funcionalidades avançadas do Kong Enterprise.

Dessa forma, exploramos aspectos cruciais como configuração, migração, e testes após a migração, além de destacar as funcionalidades exclusivas do Kong Enterprise que transformam a plataforma de “uma solução eficaz para encaminhamento de solicitações de API e implementação de recursos básicos de segurança” para “um gateway de API robusto e pronto para produção, equipado com visibilidade integrada, monitoramento, e recursos administrativos prontos para uso empresarial”.

Agradecemos à Kong Inc. pela criação do conteúdo original que possibilitou esta tradução. Exploraremos como migrar um sistema instalado do OSS para o Enterprise.

[![Banner APIops](/wp-content/uploads/2024/10/banner_-APIOps-automatizando-o-ciclo-de-vida-de-APIs.webp)](https://materiais.vertigo.com.br/ebook-apiops)

## **2 – Por que o Kong Gateway Enterprise?**

Existem várias funcionalidades disponíveis no Kong Enterprise que estendem as capacidades básicas do projeto do Kong OSS para fornecer uma plataforma de Gerenciamento de APIs de nível de produção adequado para uso. Vamos revisar algumas dessas capacidades.

- O Kong Manager expõe uma interface gráfica para configuração e monitoramento operacional, sendo uma plataforma fundamental para expor mais recursos do Enterprise.
- O Gerenciamento de Segredos permite armazenar informações sensíveis, como senhas, certificados e chaves de API, em um cofre. Tais cofres podem ser AWS Secrets Manager, GCP Secrets Manager e HashiCorp Vault, por exemplo.
- O Kong Developer Portal fornece um local central para os desenvolvedores descobrirem especificações de APIs publicadas, testá-las, visualizar trechos de código de exemplo em linguagens comuns, como JavaScript, Python ou Ruby, e cadastrar APIs.
- O Kong Vitals expõe acesso ao monitoramento e análise de serviços, rotas e uso de aplicativos diretamente dentro do Kong Manager.
- O Kong Workspaces e o Controle de Acesso Baseado em Funções (RBAC) criam uma estrutura de usuários e funções para permitir que várias equipes compartilhem uma instância do Kong Gateway com separação de atividades (ou seja, multi-tenancy). O Kong Enterprise pode ser integrado com um Sistema de Gerenciamento de Identidade existente para permitir que funções e direitos sejam conduzidos pelos fluxos de identidade e direitos existentes.

As funcionalidades listadas acima realmente transformam o Kong de “ei, legal, eu posso encaminhar solicitações de API e inserir alguns recursos básicos de segurança e controle” para “uau, eu tenho um gateway de API pronto para produção com visibilidade embutida, monitoramento e recursos administrativos que estão prontos para uso empresarial”. Além disso, porém, há um diferenciador chave da versão Enterprise do Kong: os Plugins Enterprise. O Kong Enterprise fornece 29 plugins adicionais que oferecem segurança de nível de produção, transformação, controle de tráfego e capacidades de observabilidade.

Por exemplo:

Vamos dizer que um desenvolvedor queira fornecer o Mocking básico para APIs em desenvolvimento, alinhado com a Especificação OpenAPI. O plugin de [**Mocking do Kong**](https://docs.konghq.com/hub/kong-inc/mocking/) adiciona essa capacidade ao gateway sob a licença Enterprise.

Ou, uma organização deseja impor autenticação usando OpenID Connect (OIDC) a partir de um Provedor de [**Identidade de terceiros**](https://docs.konghq.com/hub/kong-inc/openid-connect/). O plugin OpenID Connect do Kong é outro plugin licenciado pela versão Enterprise.

Veja a lista completa de [**plugins no Plugin Hub**](https://docs.konghq.com/hub/) e confira os marcados com “Enterprise” no título que podem se aplicar ao seu caso:

Por fim, há o benefício do acesso ao Suporte e Serviços, disponíveis na licença do Kong Enterprise. Enquanto a colaboração comunitária ajuda a direcionar o rumo do código-base fundamental do projeto, estabelecer uma parceria com a Kong garantirá sucesso, maximizará o tempo de atividade e o uso da plataforma para obter o maior retorno sobre o uso do Kong.

Uma matriz completa de recursos entre as versões OSS e Enterprise do Kong está [**disponível aqui**](https://docs.konghq.com/gateway/latest/#features).

## **3 – Cenários de Migração**

A Kong é um produto altamente flexível que pode ser implantado de várias maneiras. O executável base do Kong inclui capacidades tanto de plano de controle quanto de plano de dados, que podem ser habilitadas ou desabilitadas com base na configuração específica. As opções de arquitetura de implantação, do modo tradicional a uma abordagem híbrida altamente escalável, são descritas na [**documentação**](https://docs.konghq.com/gateway/latest/production/deployment-topologies/).

**NOTA*****:*** *A implementação Konnect do Kong transfere o acesso, o suporte e a manutenção contínua do plano de controle e armazenamento de configuração do Kong Gateway para uma implementação de SaaS baseada em nuvem pública, com suporte de Kong para diversos “inquilinos” (clientes). Para este artigo, focaremos na migração para o Kong Enterprise, auto-gerenciado. Em um artigo futuro, cobriremos como migrar do Kong Gateway OSS para o Konnect.*

Fundamentais em todos os cenários de migração são os elementos comuns do próprio executável Kong e um armazenamento para dados de configuração. O armazenamento de dados pode ser um dos seguintes:

- Contido em um arquivo yaml declarativo definido estaticamente (referido como instalação sem banco de dados), que é carregado na memória no momento em que o Kong é iniciado. O formato de arquivo para Enterprise inclui opções adicionais, como Workspaces não suportados na versão OSS. No entanto, essa abordagem não gerencia outras entidades exclusivas do Enterprise, como administradores, permissões/funções de RBAC ou qualquer coisa relacionada ao DevPortal
- Derivado de uma fonte externa de estado autoritativo, como o armazenamento de valores-chave etcd na implementação do Kong Kubernetes Ingress Controller (KIC) (que pode ser executado com ou sem um banco de dados). O contêiner do Ingress Controller no pod KIC lê os objetos relevantes por meio do servidor API K8s e os traduz no estado desejado para rotas, serviços e plugins no Kong.
- Armazenado em um banco de dados PostgreSQL. Esta abordagem é usada nas arquiteturas Kong Tradicional e Híbrida. Para oferecer suporte ao Enterprise, a estrutura do banco de dados deve ser atualizada e estendida para suportar os recursos adicionais oferecidos pelos recursos e plugins do Enterprise. O conjunto de comandos “kong migrations” é usado para atualizar e, em seguida, confirmar o estado das atualizações no PostgreSQL.

O processo geral de migração da Kong basicamente se resume a atualizar a versão vigente do executável da Kong e garantir que o formato do armazenamento de dados seja atualizado para corresponder aos recursos adicionais disponíveis na versão Enterprise do Kong. A atualização do formato de arquivo declarativo necessária seria principalmente adicionar o valor “workspace” ao arquivo, se estiver usando um nome de Workspace diferente do padrão. As etapas de atualização do Kubernetes Ingress Controller seriam baseadas nas ferramentas usadas para a instalação original do K8s, seja uma instalação baseada em kubectl apply ou uma atualização usando Helm para gerenciar o processo.

Ao usar um banco de dados, a migração das alterações para ele é automatizada via conjunto de comandos “kong migrations”, abordado na seção final deste artigo.

[![Como implantar um Gateway de API em um cluster Kubernetes?](/wp-content/uploads/2024/10/Banner_Como-implantar-um-Gateway-de-API-em-um-cluster-Kubernetes.png)](https://materiais.vertigo.com.br/ebook-como-implantar-um-gateway-de-api-em-um-cluster-kubernetes)

## **4 – Instalando e Migrando Kong OSS para Kong Enterprise**

A melhor maneira de entender e ver como o processo de migração é fácil é executando os passos você mesmo. Isso pode até ser feito sem ter uma licença Enterprise do Kong. Simplesmente configure um host Linux com uma instalação básica do Kong OSS e um banco de dados PostgreSQL. Crie uma configuração de serviço/rota de exemplo. Em seguida, remova o executável do Kong OSS e substitua-o pela versão executável do Kong Enterprise. Siga as instruções para migrar o banco de dados e iniciar o Kong.

Uma licença Enterprise pode ser aplicada posteriormente usando uma chamada de API, mas não é necessário para o Kong Enterprise iniciar. Vamos verificar os passos para fazer isso agora. Forneceremos primeiro apenas os comandos necessários para construir a configuração do OSS, seguidos de exemplos completos.

**NOTA:** *Estes passos são fornecidos apenas como um exemplo funcional mínimo de uma migração do Kong OSS para o Enterprise usando ferramentas de migração de banco de dados. Eles não pretendem ser aplicáveis de forma geral como estão para todas as tipologias e modos de implantação possíveis com o Gateway de API da Kong. Para um ambiente de produção, é recomendado simular o processo usando uma topologia Kong em uma configuração de laboratório construída como a que você está executando primeiro para entender os comandos e possíveis abordagens que poderiam funcionar melhor para suas necessidades específicas.*

## **5 – Instalação do OSS**

O ambiente de teste usado para este artigo consiste em uma instância da AWS executando Ubuntu focal-20.04. Algumas das sintaxes são específicas para a versão do Linux. Abaixo, está a sequência de comandos usados para instalar e iniciar o Kong.

**NOTA:** *As instruções oficiais de instalação do Gateway da Kong de código aberto da comunidade estão localizadas aqui:*

<https://konghq.com/install#kong-community>.

## Prepare o Ubuntu OS:

plaintext

sudo apt update

### Caso queira executar o código atual:

plaintext

sudo apt upgrade –y

### Para resolver uma dependência do Kong em versões mais novas do Ubuntu, execute:

plaintext

sudo apt install zlib1g-dev

### Instale o utilitário jq para ajudar a visualizar respostas json posteriormente:

plaintext

sudo apt install jq

### Instale e prepare o PostgreSQL:

plaintext

sudo apt install postgresql -y

### Mude para o usuário postgres para preparar o banco de dados:

plaintext

sudo -i -u postgres

### Inicie o prompt interativo do postgresql:

plaintext

psql

### Crie um usuário e um banco de dados para o Kong:

plaintext

CREATE USER kong WITH PASSWORD ‘super\_secret’; CREATE DATABASE kong OWNER kong;

### Saia do prompt do postgres e volte ao prompt de comando do Ubuntu:

plaintext

exit

exit

### Você deve estar de volta ao prompt de comando do Ubuntu agora.

### Baixe e Instale o Kong:

plaintext

curl -Lo kong-3.1.1.amd64.deb “https://download.konghq.com/gateway-3.x-ubuntu-$(lsb\_release -sc)/pool/all/k/kong/kong\_3.1.1\_amd64.deb”

sudo dpkg -i kong-3.1.1.amd64.deb

### Edite o Arquivo de Configuração do Kong:

plaintext

sudo cp /etc/kong/kong.conf.default /etc/kong/kong.conf

sudo vi /etc/kong/kong.conf

Atualize esses campos na seção DATASTORE do arquivo para remover o comentário das linhas e tenha a seguinte aparência, começando na linha 1097:

plaintext

database = postgres

pg\_user = kong

pg\_password = super\_secret

pg\_database = kong

### Execute o comando inicial “kong migrations” do banco de dados e inicie o Kong:

plaintext

sudo KONG\_PASSWORD=Kong1234 kong migrations bootstrap -c /etc/kong/kong.conf

sudo kong start -c /etc/kong/kong.conf

### Crie um serviço e uma rota de exemplo:

plaintext

curl -i -s -X POST http://localhost:8001/services –data name=example\_service –data url=’http://mockbin.org’

curl -i -X POST http://localhost:8001/services/example\_service/routes –data ‘paths[]=/mock’ –data name=example\_route

### Teste a rota:

### Certifique-se de vê-la na configuração do gateway e também de ver um cabeçalho de resposta e saída “200 OK” ao acessar o caminho da rota:

plaintext

curl -X GET http://localhost:8001/services/example\_service/routes | jq

### O comando acima é para exibir a configuração da rota.

plaintext

curl -I -X GET http://localhost:8000/mock

### Já este comando, testa a solicitação de rota real.

Neste ponto, você deve ter uma instância completa em execução do Kong OSS Gateway, com um exemplo de rota e serviço. Isso cria um ambiente de base para garantir que, após a conclusão da migração para o Enterprise, ainda tenhamos uma rota funcional.

[![A diferença entre Gateways de API e Service Mesh_BANNER_INTERNO](/wp-content/uploads/2024/10/A-diferenca-entre-Gateways-de-API-e-Service-Mesh_BANNER_INTERNO.webp)](https://materiais.vertigo.com.br/ebook-a-diferenca-entre-gateways-de-api-e-service-mesh)

## **6 – Migração para o Enterprise**

Para migrar essa instalação para o Enterprise, primeiro desligaremos e removeremos o Kong no modo OSS existente, deixando a configuração salva no banco de dados. Em seguida, instalamos a versão Enterprise do Kong e usaremos o conjunto de comandos “kong migrations” para atualizar o banco de dados PostgreSQL para suportar o Enterprise.

Existem muitas variações desse processo, dependendo da arquitetura instalada do Kong, que podem envolver a construção de um novo host virtual para executar a nova versão ou até mesmo clonar o banco de dados em execução primeiro e usar a cópia clonada para construir a instalação do Enterprise (ou seja, implantação *blue/green*).

Essas opções podem permitir uma transição gradual. A abordagem aqui faz uma atualização in-loco que, se tomada, requer algum tempo de inatividade enquanto a migração ocorre e, portanto, deve ser planejada de acordo.

**NOTA:** *Qualquer atualização entre as versões numeradas do Kong deve ser cuidada separadamente da migração de OSS para Enterprise. A migração deve ser feita lateralmente a partir do mesmo número da versão do Kong OSS para o Kong Enterprise. Existem requisitos específicos para a migração para a versão Kong 3.x, que é a atual. Para detalhes gerais sobre o processo de atualização do Kong, veja o link na* [***documentação***](https://docs.konghq.com/gateway/latest/upgrade/.)*.*

### Pare e desinstale o Kong OSS:

plaintext
sudo kong stop
sudo dpkg -r kong

### Baixe e instale o Kong Enterprise:

**NOTA:** *As instruções oficiais de instalação do Kong Enterprise Gateway estão localizadas* [***aqui***](https://docs.konghq.com/gateway/latest/install/linux/ubuntu/)*: ​​*

plaintext

curl -Lo kong-enterprise-edition-3.1.1.1.all.deb

“https://download.konghq.com/gateway-3.x-ubuntu-$(lsb\_release -sc)/pool/all/k/kong-enterprise-edition/kong-enterprise-edition\_3.1.1.1\_amd64.deb”

sudo dpkg -i kong-enterprise-edition-3.1.1.1.all.deb

### Execute migrações de banco de dados:

**NOTA:** *Para considerar opções para preparar uma migração em um ambiente de produção para as diversas topologias de implantação suportadas pelo Kong, consulte a seguinte* [***documentação***](https://docs.konghq.com/gateway/latest/production/deployment-topologies/)*.*

Este comando atualizará o banco de dados de maneira não destrutiva. Isso significa que, se este fosse um sistema de produção maior em topologias tradicionais ou híbridas, permitiria que a versão OSS continuasse operando, deixando algumas das atualizações pendentes. Ele produzirá muitas linhas de saída, com várias atualizações sendo aplicadas.

No final você deverá ver os totais das atualizações e um aviso de que elas estão pendentes:

plaintext

sudo kong migrations up

Em nosso exemplo, já atualizamos nosso único nó Kong. Para um ambiente de produção, depois que todos os nós do Kong OSS forem atualizados para o Kong Enterprise, pode ser aplicado o seguinte comando para concluir o processo de migração do banco de dados:

plaintext

sudo kong migrations finish

A última linha desta saída mostra que não há migrações pendentes. O Kong Enterprise poderia ter sido apenas iniciado e executado no banco de dados após o comando “migrations up”, mas o comando “migrations finish” é necessário para suportar a funcionalidade completa dos novos recursos.

### Execute o Kong Enterprise:

plaintext

sudo kong start -c /etc/kong/kong.conf

Agora podemos repetir os comandos de teste que usamos na instalação no modo OSS para garantir que tudo esteja funcionando. Aqui está o resultado esperado, instalado e funcionando no Kong Enterprise 3.0:

plaintext

curl -X GET http://localhost:8001/services/example\_service/routes | jq

curl -I -X GET <http://localhost:8000/mock>

[![Migrando Kong Open Source (OSS) para Kong Enterprise API Gateway](/wp-content/uploads/2024/10/Banner_Migrando-Kong-Open-Source-OSS-para-Kong-Enterprise-API-Gateway.webp)](https://materiais.vertigo.com.br/ebook-migrando-para-kong-enterprise-api-gateway)

## **7 – Conclusão**

Como mostramos aqui, a migração do Kong OSS para o Kong Enterprise é facilmente e seguramente alcançável, mantendo sua configuração e obtendo os benefícios da plataforma Kong Enterprise Gateway. O Kong Enterprise traz ótimos novos recursos administrativos e operacionais, bem como o acesso ao conjunto completo de plugins Enterprise, além de suporte e serviços líderes do setor.

Experimente esse exercício em uma máquina virtual simples hoje ou entre em contato com a Kong para discutir licenciamento ou obter ajuda de serviços profissionais, para planejar sua migração.

–

*Este ebook é uma tradução do* [*artigo original*](https://konghq.com/blog/engineering/how-and-why-to-migrate-from-kong-open-source-to-kong-enterprise-api-gateway) *escrito pela equipe da Kong.*

*Para ter acesso a outros conteúdos da Kong e implementar integração de APIs dentro da sua empresa, entre em contato com o* [*time técnico*](/contato/) *da Vertigo Tecnologia. Estamos prontos para te ajudar!*
