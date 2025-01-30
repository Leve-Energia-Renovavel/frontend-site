# Leve Energia Renovável

## Front-end

O projeto front-end da **Leve Energia Renovável** engloba o site institucional, cadastro de adesão, portal do cliente, política de privacidade e landing pages de parceria. Este repositório contém o código-fonte do projeto, que pode ser executado localmente ou em um ambiente Docker.

### Links dos Repositórios

- **BitBucket**: [Acessar repositório](https://bitbucket.org/leveenergia/new-cliente.leveenergia.com.br)
- **GitHub**: [Acessar repositório](https://bitbucket.org/leveenergia/new-cliente.leveenergia.com.br)


### Branches

`main` &#8594; versão completa (pronta para retomada)

`master` &#8594; versão intermediária (para comunicar clientes)

`site` &#8594; versão simplificada (apenas com site)

---

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

1. **Git**: Para clonar o repositório. [Baixar Git](https://git-scm.com/download/win) (versão 2.48.1 ou superior).
2. **Node.js**: Para executar o projeto localmente. [Baixar Node.js](https://nodejs.org/dist/v20.18.2/node-v20.18.2-x64.msi) (versão 18 ou superior).
3. **Docker** (opcional): Para rodar o projeto em um container. [Baixar Docker](https://www.docker.com/get-started/).

---

## Clonando o Repositório

Para clonar o repositório, execute o seguinte comando no terminal:

```bash
git clone https://bitbucket.org/leveenergia/new-cliente.leveenergia.com.br.git
cd new-cliente.leveenergia.com.br
```

## Instalação e Execução

Existem duas maneiras de instalar e executar o projeto localmente:

### 1. Usando NPM

#### Instalação das Dependências

Primeiro, instale todas as dependências do projeto:

```bash
npm install
```

Ou, para instalar as dependências com versões exatas:

```bash
npm install @builder.io/partytown@0.10.3 @emotion/react@11.11.3 @emotion/styled@11.11.0 @mui/icons-material@5.15.3 @mui/lab@5.0.0-alpha.166 @mui/material@5.15.11 @mui/x-charts@6.19.5 @next/third-parties@14.2.3 apexcharts@3.49.1 axios@1.6.3 date-fns@3.6.0 js-cookie@3.0.5 next@14.2.3 react@18.2.0 react-apexcharts@1.4.1 react-confetti-explosion@2.1.2 react-dom@18.2.0 react-input-mask@2.0.4 sharp@0.33.5 yup@1.3.3 zustand@4.5.1 serve@14.2.4
```

#### Instalação das Dependências de Desenvolvimento

Instale as dependências de desenvolvimento:

```bash
npm install -D cypress@13.12.0 eslint@8.57.0 eslint-config-next@14.0.4 start-server-and-test@2.0.4
```

### Executando o Projeto
Após a instalação, execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em: http://localhost:3000.

### 2. Usando Docker

#### Construindo e Executando o Container
Para rodar o projeto em um container Docker, execute o seguinte comando no diretório do projeto:

```bash
docker-compose up --build
```

O projeto estará disponível em: http://localhost:3000.


### Equipe  

Gerente de Produto - [Elaine Marques](https://br.linkedin.com/in/e-marques)

Tech Lead - [Fabrício Yukio Munhoz](https://br.linkedin.com/in/fabricioyukio/pt)

Desenvolvedor Front-end - [Marcos Vinicius Ferreira](https://br.linkedin.com/in/marcosvmferreira)

Analista de Marketing - [Nicolle Marzola](https://br.linkedin.com/in/nicolle-marzola-2b4391119)

