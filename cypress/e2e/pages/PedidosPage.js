import BasePage from './BasePage'

class PedidosPage extends BasePage {
  constructor() {
    super()
    this.url = '/sales/order/history/'
  }

  // Seletores
  get elementos() {
    return {
      listaPedidos: '.order-item',
      numeroPedido: '.order-number',
      dataPedido: '.order-date',
      statusPedido: '.order-status',
      totalPedido: '.order-total',
      linkDetalhes: '.view-order',
      mensagemNenhumPedido: '.message',
      titulo: '.page-title'
    }
  }

  // Ações
  acessarDetalhesPedido(indicePedido = 0) {
    cy.get(this.elementos.listaPedidos)
      .eq(indicePedido)
      .find(this.elementos.linkDetalhes)
      .click()
  }

  buscarPedidoPorNumero(numeroPedido) {
    cy.get(this.elementos.numeroPedido)
      .contains(numeroPedido)
      .parents(this.elementos.listaPedidos)
      .find(this.elementos.linkDetalhes)
      .click()
  }

  obterQuantidadePedidos() {
    return cy.get(this.elementos.listaPedidos).its('length')
  }

  verificarPaginaCarregada() {
    this.verificarElementoVisivel(this.elementos.titulo)
    this.verificarTextoVisivel('My Orders')
  }

  verificarPedidoNaLista(numeroPedido) {
    cy.get(this.elementos.numeroPedido)
      .should('contain', numeroPedido)
  }

  verificarNenhumPedido() {
    cy.get(this.elementos.mensagemNenhumPedido)
      .should('be.visible')
      .and('contain', 'You have placed no orders')
  }
}

export default PedidosPage
