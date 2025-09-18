import BasePage from './BasePage'

class BuscaPage extends BasePage {
  constructor() {
    super()
    this.url = '/catalogsearch/result/'
  }

  // Seletores
  get elementos() {
    return {
      resultadosBusca: '.product-item',
      nomeProduto: '.product-name',
      preco: '.price',
      botaoAdicionarCarrinho: '.tocart',
      filtros: '.filter-options',
      ordenacao: '.sorter',
      paginacao: '.pages',
      mensagemNenhumResultado: '.message',
      titulo: '.page-title'
    }
  }

  // Ações
  selecionarProduto(indice = 0) {
    cy.get(this.elementos.resultadosBusca).eq(indice).click()
  }

  adicionarPrimeiroAoCarrinho() {
    cy.get(this.elementos.resultadosBusca)
      .first()
      .find(this.elementos.botaoAdicionarCarrinho)
      .click()
  }

  aplicarFiltro(filtro, valor) {
    cy.get(this.elementos.filtros)
      .contains(filtro)
      .parent()
      .find(`[option-label="${valor}"]`)
      .click()
  }

  ordenarPor(opcao) {
    cy.get(this.elementos.ordenacao).select(opcao)
  }

  verificarResultadosEncontrados() {
    cy.get(this.elementos.resultadosBusca).should('have.length.greaterThan', 0)
  }

  verificarNenhumResultado() {
    cy.get(this.elementos.mensagemNenhumResultado)
      .should('be.visible')
      .and('contain', 'Your search returned no results')
  }

  obterQuantidadeResultados() {
    return cy.get(this.elementos.resultadosBusca).its('length')
  }
}

export default BuscaPage
