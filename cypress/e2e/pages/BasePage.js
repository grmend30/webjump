class BasePage {
  constructor() {
    this.url = 'https://magento.nublue.co.uk/'
  }

  // Métodos comuns para todas as páginas
  visitar(url = this.url) {
    cy.visit(url)
    cy.aguardarCarregamento()
  }

  aguardarElementoVisivel(seletor, timeout = 10000) {
    cy.aguardarElementoVisivel(seletor, timeout)
  }

  clicar(seletor) {
    cy.get(seletor).should('be.visible').click()
  }

  digitar(seletor, texto) {
    cy.get(seletor).should('be.visible').limparEDigitar(texto)
  }

  obterTexto(seletor) {
    return cy.get(seletor).invoke('text')
  }

  verificarTextoVisivel(texto) {
    cy.contains(texto).should('be.visible')
  }

  verificarElementoVisivel(seletor) {
    cy.get(seletor).should('be.visible')
  }

  verificarElementoNaoVisivel(seletor) {
    cy.get(seletor).should('not.exist')
  }

  aguardarCarregamento() {
    cy.aguardarCarregamento()
  }

  scrollAteElemento(seletor) {
    cy.scrollAteElemento(seletor)
  }
}

export default BasePage
