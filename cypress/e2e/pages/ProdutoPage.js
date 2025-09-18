import BasePage from './BasePage'

class ProdutoPage extends BasePage {
  constructor() {
    super()
    this.url = ''
  }

  // Seletores
  get elementos() {
    return {
      nomeProduto: '.page-title',
      preco: '.price',
      botaoAdicionarCarrinho: '#product-addtocart-button',
      seletorTamanho: '.swatch-attribute[attribute-code="size"] .swatch-option',
      seletorCor: '.swatch-attribute[attribute-code="color"] .swatch-option',
      quantidade: '#qty',
      imagemProduto: '.fotorama__img',
      descricao: '.product-info-main',
      mensagemSucesso: '.message-success',
      abas: '.product-info-detailed',
      avaliacoes: '.reviews-summary'
    }
  }

  // Ações
  selecionarTamanho(indice = 0) {
    cy.get(this.elementos.seletorTamanho).eq(indice).click()
  }

  selecionarCor(indice = 0) {
    cy.get(this.elementos.seletorCor).eq(indice).click()
  }

  definirQuantidade(quantidade) {
    cy.get(this.elementos.quantidade).clear().type(quantidade.toString())
  }

  adicionarAoCarrinho() {
    this.clicar(this.elementos.botaoAdicionarCarrinho)
  }

  adicionarProdutoCarrinho(opcoes = {}) {
    // Selecionar opções se disponíveis
    if (opcoes.tamanho !== undefined) {
      this.selecionarTamanho(opcoes.tamanho)
    }
    
    if (opcoes.cor !== undefined) {
      this.selecionarCor(opcoes.cor)
    }
    
    if (opcoes.quantidade) {
      this.definirQuantidade(opcoes.quantidade)
    }
    
    this.adicionarAoCarrinho()
  }

  obterNomeProduto() {
    return cy.get(this.elementos.nomeProduto).invoke('text')
  }

  obterPreco() {
    return cy.get(this.elementos.preco).invoke('text')
  }

  verificarPaginaCarregada() {
    this.verificarElementoVisivel(this.elementos.nomeProduto)
    this.verificarElementoVisivel(this.elementos.botaoAdicionarCarrinho)
  }

  verificarProdutoAdicionado() {
    cy.get(this.elementos.mensagemSucesso)
      .should('be.visible')
      .and('contain', 'You added')
  }
}

export default ProdutoPage
