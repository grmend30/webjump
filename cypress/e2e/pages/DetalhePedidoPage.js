import BasePage from './BasePage'

class DetalhePedidoPage extends BasePage {
  constructor() {
    super()
    this.url = ''
  }

  // Seletores
  get elementos() {
    return {
      numeroPedido: '.order-number',
      dataPedido: '.order-date',
      statusPedido: '.order-status',
      enderecoEnvio: '.shipping-address',
      enderecoCobranca: '.billing-address',
      metodoEnvio: '.shipping-method',
      metodoPagamento: '.payment-method',
      itensPedido: '.order-item',
      nomeProduto: '.product-name',
      precoProduto: '.price',
      quantidadeProduto: '.qty',
      subtotal: '.subtotal',
      totalPedido: '.grand-total',
      botaoReordenar: '.reorder',
      titulo: '.page-title'
    }
  }

  // Ações
  reordenar() {
    this.clicar(this.elementos.botaoReordenar)
  }

  obterNumeroPedido() {
    return cy.get(this.elementos.numeroPedido).invoke('text')
  }

  obterStatusPedido() {
    return cy.get(this.elementos.statusPedido).invoke('text')
  }

  obterTotalPedido() {
    return cy.get(this.elementos.totalPedido).invoke('text')
  }

  obterQuantidadeItens() {
    return cy.get(this.elementos.itensPedido).its('length')
  }

  verificarPaginaCarregada() {
    this.verificarElementoVisivel(this.elementos.titulo)
    this.verificarElementoVisivel(this.elementos.numeroPedido)
  }

  verificarDetalhesPedido(numeroPedido) {
    cy.get(this.elementos.numeroPedido)
      .should('contain', numeroPedido)
  }

  verificarProdutoNoPedido(nomeProduto) {
    cy.get(this.elementos.nomeProduto)
      .should('contain', nomeProduto)
  }

  verificarInformacoesEnvio() {
    this.verificarElementoVisivel(this.elementos.enderecoEnvio)
    this.verificarElementoVisivel(this.elementos.metodoEnvio)
  }

  verificarInformacoesPagamento() {
    this.verificarElementoVisivel(this.elementos.enderecoCobranca)
    this.verificarElementoVisivel(this.elementos.metodoPagamento)
  }
}

export default DetalhePedidoPage
