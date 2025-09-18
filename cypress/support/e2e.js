import './commands'

// Configurações globais
Cypress.on('uncaught:exception', (err, runnable) => {
  // Previne que o Cypress falhe em exceções não capturadas
  return false
})

// Configuração para aguardar carregamento da página
beforeEach(() => {
  cy.intercept('GET', '**/*.js', { middleware: true }).as('jsFiles')
  cy.intercept('GET', '**/*.css', { middleware: true }).as('cssFiles')
})
