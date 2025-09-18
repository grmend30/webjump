import BasePage from './BasePage'

class CarrinhoPage extends BasePage {
  constructor() {
    super()
    this.url = '/checkout/cart/'
  }

  // Seletores
  get elementos() {
    return {
      itensCarrinho: '.cart-item',
      nomeProduto: '.product-item-name',
      preco: '.price',
      quantidade: '.qty',
      subtotal: '.subtotal',
      total: '.grand.totals',
      botaoFinalizarCompra: '.checkout-methods-items button',
      botaoAtualizarCarrinho: 'button[name="update_cart_action"]',
      botaoRemoverItem: '.action-delete',
      cupomDesconto: '#coupon_code',
      botaoAplicarCupom: 'button[value="Apply Discount"]',
      mensagemCarrinhoVazio: '.cart-empty',
      titulo: '.page-title'
    }
  }

  // Ações
  atualizarQuantidade(indiceItem, novaQuantidade) {
    cy.get(this.elementos.itensCarrinho)
      .eq(indiceItem)
      .find(this.elementos.quantidade)
      .clear()
      .type(novaQuantidade.toString())
    
    this.clicar(this.elementos.botaoAtualizarCarrinho)
  }

  removerItem(indiceItem = 0) {
    cy.get(this.elementos.itensCarrinho)
      .eq(indiceItem)
      .find(this.elementos.botaoRemoverItem)
      .click()
  }

  aplicarCupomDesconto(codigoCupom) {
    this.digitar(this.elementos.cupomDesconto, codigoCupom)
    this.clicar(this.elementos.botaoAplicarCupom)
  }

  prosseguirParaCheckout() {
    this.clicar(this.elementos.botaoFinalizarCompra)
  }

  obterQuantidadeItens() {
    return cy.get(this.elementos.itensCarrinho).its('length')
  }

  obterTotal() {
    return cy.get(this.elementos.total).invoke('text')
  }

  verificarPaginaCarregada() {
    this.verificarElementoVisivel(this.elementos.titulo)
  }

  verificarCarrinhoVazio() {
    cy.get(this.elementos.mensagemCarrinhoVazio)
      .should('be.visible')
      .and('contain', 'You have no items in your shopping cart')
  }

  verificarProdutoNoCarrinho(nomeProduto) {
    cy.get(this.elementos.nomeProduto)
      .should('contain', nomeProduto)
  }
}

export default CarrinhoPage
