// Hooks para configuração dos testes

// Executado antes de todos os testes
before(() => {
  cy.log('Iniciando execução dos testes automatizados')
  
  // Limpar cookies e localStorage
  cy.clearCookies()
  cy.clearLocalStorage()
  
  // Configurações iniciais se necessário
  cy.window().then((win) => {
    win.sessionStorage.clear()
  })
})

// Executado antes de cada teste
beforeEach(() => {
  cy.log('Preparando ambiente para o teste')
  
  // Interceptar requisições para melhor controle
  cy.intercept('POST', '**/customer/account/loginPost/**').as('loginRequest')
  cy.intercept('POST', '**/customer/account/createPost/**').as('cadastroRequest')
  cy.intercept('POST', '**/checkout/cart/add/**').as('adicionarCarrinhoRequest')
  cy.intercept('POST', '**/checkout/onepage/saveOrder/**').as('finalizarPedidoRequest')
  
  // Visitar página inicial
  cy.visit('/')
  cy.aguardarCarregamento()
})

// Executado após cada teste
afterEach(() => {
  cy.log('Limpando ambiente após o teste')
  
  // Capturar screenshot em caso de falha
  cy.screenshot({ capture: 'runner', onlyOnFailure: true })
  
  // Limpar dados do teste
  cy.clearCookies()
  cy.clearLocalStorage()
})

// Executado após todos os testes
after(() => {
  cy.log('Finalizando execução dos testes automatizados')
  
  // Limpeza final se necessário
  cy.clearCookies()
  cy.clearLocalStorage()
})

// Hook para capturar falhas
Cypress.on('fail', (error, runnable) => {
  cy.log(`Teste falhou: ${runnable.title}`)
  cy.log(`Erro: ${error.message}`)
  
  // Capturar informações adicionais para debug
  cy.url().then((url) => {
    cy.log(`URL atual: ${url}`)
  })
  
  throw error
})
