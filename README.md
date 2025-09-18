# Cypress E2E Testing Framework

Este projeto contém uma suíte completa de testes end-to-end (E2E) usando Cypress para testar funcionalidades de e-commerce em uma aplicação Magento.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Executando os Testes](#executando-os-testes)
- [Page Objects](#page-objects)
- [Comandos Customizados](#comandos-customizados)
- [Testes Disponíveis](#testes-disponíveis)
- [Boas Práticas](#boas-práticas)

## 🎯 Visão Geral

Este framework de testes automatizados foi desenvolvido para validar as principais funcionalidades de um e-commerce, incluindo:

- Cadastro e autenticação de usuários
- Busca e navegação de produtos
- Carrinho de compras
- Processo de checkout
- Gerenciamento de pedidos
- Recuperação de senha

## 🔧 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Cypress (instalado via dependências do projeto)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
```

2. Instale as dependências:
```bash
npm install
```

## ⚙️ Configuração

### Configuração do Cypress

O arquivo `cypress.config.js` contém as configurações principais:

```javascript
{
  baseUrl: 'https://magento.nublue.co.uk',
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  pageLoadTimeout: 30000
}
```

### Variáveis de Ambiente

Você pode configurar variáveis de ambiente criando um arquivo `.env` na raiz do projeto:

```env
CYPRESS_BASE_URL=https://sua-url-aqui.com
CYPRESS_USERNAME=seu-usuario
CYPRESS_PASSWORD=sua-senha
```

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── pages/           # Page Objects
│   │   ├── BasePage.js
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── CadastroPage.js
│   │   ├── ProdutoPage.js
│   │   ├── CarrinhoPage.js
│   │   ├── CheckoutPage.js
│   │   └── ...
│   ├── steps/           # Step definitions
│   │   ├── loginSteps.js
│   │   ├── cadastroSteps.js
│   │   └── ...
│   ├── tests/           # Arquivos de teste
│   │   ├── login.cy.js
│   │   ├── cadastro.cy.js
│   │   ├── carrinho.cy.js
│   │   └── ...
│   └── hooks/           # Hooks globais
│       └── hooks.js
├── support/
│   ├── commands.js      # Comandos customizados
│   └── e2e.js          # Configurações globais
└── cypress.config.js    # Configuração principal
```

## 🚀 Executando os Testes

### Modo Interativo (Cypress Test Runner)
```bash
npx cypress open
```

### Modo Headless (CI/CD)
```bash
npx cypress run
```

### Executar testes específicos
```bash
# Executar um arquivo específico
npx cypress run --spec "cypress/e2e/tests/login.cy.js"

# Executar testes por tag
npx cypress run --env grepTags="@smoke"
```

### Executar em diferentes browsers
```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge
```

## 📄 Page Objects

O projeto utiliza o padrão Page Object Model para melhor organização e manutenibilidade:

### BasePage
Classe base com métodos comuns a todas as páginas:
- `visitar(url)` - Navega para uma URL
- `clicar(seletor)` - Clica em um elemento
- `digitar(seletor, texto)` - Digita texto em um campo
- `verificarElementoVisivel(seletor)` - Verifica se elemento está visível

### Páginas Específicas
Cada página herda da BasePage e implementa seus próprios seletores e métodos:
- **HomePage** - Página inicial
- **LoginPage** - Página de login
- **CadastroPage** - Página de cadastro
- **ProdutoPage** - Página de produto
- **CarrinhoPage** - Página do carrinho
- **CheckoutPage** - Página de checkout

## 🛠️ Comandos Customizados

### Comandos de Dados
```javascript
cy.gerarEmailUnico()           // Gera email único para testes
cy.gerarDadosUsuario()         // Gera dados completos de usuário
```

### Comandos de Interação
```javascript
cy.aguardarElementoVisivel(seletor)  // Aguarda elemento ficar visível
cy.aguardarCarregamento()            // Aguarda carregamento da página
cy.limparEDigitar(texto)             // Limpa campo e digita texto
cy.scrollAteElemento(seletor)        // Faz scroll até elemento
```

## 🧪 Testes Disponíveis

### Testes de Autenticação
- **login.cy.js**
  - Login com credenciais válidas
  - Login com credenciais inválidas
  - Validação de campos obrigatórios

### Testes de Cadastro
- **cadastro.cy.js**
  - Cadastro de novo usuário
  - Validação de campos obrigatórios
  - Validação de email duplicado

### Testes de Carrinho
- **carrinho.cy.js**
  - Adicionar produtos ao carrinho
  - Atualizar quantidade de produtos
  - Remover produtos do carrinho
  - Aplicar cupons de desconto

### Testes de Checkout
- **checkout.cy.js**
  - Processo completo de compra
  - Validação de informações de envio
  - Seleção de métodos de pagamento

### Testes de Pedidos
- **pedidos.cy.js**
  - Visualizar histórico de pedidos
  - Detalhes do pedido
  - Reordenar produtos

### Testes de Recuperação de Senha
- **esqueciSenha.cy.js**
  - Solicitar recuperação de senha
  - Validação de email

## 📋 Boas Práticas

### Seletores
- Use seletores estáveis (data-testid, data-cy)
- Evite seletores baseados em texto que pode mudar
- Prefira IDs únicos quando disponíveis

### Dados de Teste
- Use dados dinâmicos para evitar conflitos
- Limpe dados de teste após execução quando necessário
- Use fixtures para dados complexos

### Organização
- Mantenha testes independentes
- Use Page Objects para reutilização de código
- Agrupe testes relacionados em describes

### Performance
- Use `cy.intercept()` para aguardar requisições específicas
- Evite `cy.wait()` com tempo fixo
- Configure timeouts apropriados

## 📊 Relatórios

### Configuração de Relatórios
Para gerar relatórios HTML, instale e configure:

```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

Adicione ao `cypress.config.js`:
```javascript
reporter: 'mochawesome',
reporterOptions: {
  reportDir: 'cypress/reports',
  overwrite: false,
  html: false,
  json: true
}
```

---

**Desenvolvido com ❤️ por Grazielle Mendonça**
