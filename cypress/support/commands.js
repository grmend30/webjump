// ***********************************************
// Comandos customizados para os testes
// ***********************************************

// Comando para gerar email único
Cypress.Commands.add('gerarEmailUnico', () => {
  const timestamp = Date.now()
  return `teste${timestamp}@exemplo.com`
})

// Comando para gerar dados de usuário únicos
Cypress.Commands.add('gerarDadosUsuario', () => {
  const timestamp = Date.now()
  return {
    nome: `Teste`,
    sobrenome: `Usuario${timestamp}`,
    email: `teste${timestamp}@exemplo.com`,
    senha: 'Teste123!',
    telefone: '11999999999'
  }
})

// Comando para aguardar elemento estar visível
Cypress.Commands.add('aguardarElementoVisivel', (seletor, timeout = 10000) => {
  cy.get(seletor, { timeout }).should('be.visible')
})

// Comando para aguardar carregamento da página
Cypress.Commands.add('aguardarCarregamento', () => {
  cy.get('body').should('be.visible')
  cy.wait(1000) // Aguarda um pouco mais para garantir carregamento completo
})

// Comando para limpar e digitar
Cypress.Commands.add('limparEDigitar', { prevSubject: 'element' }, (subject, texto) => {
  cy.wrap(subject).clear().type(texto)
})

// Comando para scroll até elemento
Cypress.Commands.add('scrollAteElemento', (seletor) => {
  cy.get(seletor).scrollIntoView()
})
