# Criando o conteúdo do README para o backend em formato .md

readme_backend_content = """
# Task Manager - Backend

Este é o repositório do backend do projeto **Task Manager**, desenvolvido utilizando **NestJS**. O backend é responsável por gerenciar as operações relacionadas às tarefas e a comunicação com o banco de dados **PostgreSQL** utilizando **TypeORM**.

## Tecnologias Utilizadas

- **NestJS**: Framework Node.js para construção de servidores escaláveis.
- **TypeORM**: ORM para interação com o banco de dados.
- **PostgreSQL**: Banco de dados relacional utilizado.
- **JWT**: Implementação de autenticação com JSON Web Tokens.
- **Docker**: Utilizado para containerização do banco de dados localmente.
- **Render**: Plataforma de deploy para o backend.
- **Neon.tech**: Plataforma de hospedagem do banco de dados PostgreSQL.

## Funcionalidades

- Autenticação de usuários via JWT.
- CRUD de tarefas (criar, ler, atualizar, deletar).
- Validação de dados utilizando **class-validator** e **class-transformer**.
- Integração com o frontend via API RESTful.

## Pré-requisitos

Para rodar o projeto localmente, é necessário ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (para o banco de dados local)

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example` fornecido. Preencha as variáveis de ambiente necessárias para conexão com o banco de dados e outras configurações do sistema.

Exemplo de variáveis de ambiente:

```bash
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your_user
DATABASE_PASSWORD=your_password
DATABASE_NAME=your_db
JWT_SECRET=your_jwt_secret
```


## Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/joaomacaoli/task-manager-server.git
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Rode o Docker para configurar o banco de dados PostgreSQL localmente (caso esteja utilizando):
```bash
docker-compose up -d
```

4. Rode as migrações do banco de dados:

```bash
npm run typeorm migration:run
# ou
yarn typeorm migration:run
```

5. Execute a aplicação:

```bash
npm run start:dev
# ou
yarn start:dev
```

6. O servidor estará disponível em:

```
http://localhost:3000
```

## Deploy

O backend foi deployado utilizando a plataforma Render. Para fazer o deploy da sua própria versão:

1. Crie uma conta no [Render](https://render.com/).
2. Conecte o seu repositório na plataforma.
3. Adicione as variáveis de ambiente no painel da Render.
4. Configure o deploy automático a partir do branch principal.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
