# Fullstack Cadastro de Currículo

Esta é uma aplicação envio de currículos para o teste Fullstack Paytour, desenvolvida utilizando React com TypeScript no frontend e PHP com Slim Framework no backend. O backend segue o padrão PSR-2 e utiliza Doctrine DBAL para a conexão com o banco de dados MySQL.

## Requisitos

- Node.js (v14 ou superior)
- PHP (v8)
- Composer  
- MySQL

## Configuração do Backend

### 1. Clonar o Repositório

Clone o repositório para a sua máquina local:

```bash
git clone https://github.com/seu-usuario/fullstack-send-resume.git
cd fullstack-send-resume/backend
```

### 2. Rodar Backend

#### Acessar diretório backend e instalar dependências
```bash
cd backend
composer install
```


#### Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do diretório backend e adicione as seguintes variáveis de ambiente, substituindo pelos valores apropriados:

```bash
DB_HOST=localhost
DB_NAME=seu_banco_de_dados
DB_USER=seu_usuario
DB_PASS=sua_senha
```

#### Configurar o Banco de Dados
Crie a tabela resumes no seu banco de dados MySQL. Utilize o seguinte script SQL:

```bash
CREATE TABLE resumes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    desired_position VARCHAR(255) NOT NULL,
    education VARCHAR(255) NOT NULL,
    comments TEXT,
    resume_file VARCHAR(255),
    submitted_at DATETIME NOT NULL
);
```

#### Rodar o Servidor PHP
Inicie o servidor PHP integrado:
```bash
php -S localhost:8000 -t public
```

## Configuração do Frontend


#### Acessar diretório frontend e instalar dependências
Inicie o servidor PHP integrado:
```bash
cd ../frontend
yarn install
```


#### Rodar o Servidor de Desenvolvimento
Inicie o servidor de desenvolvimento do React:
```bash
yarn start
```