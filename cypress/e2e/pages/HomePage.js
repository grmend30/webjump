import BasePage from './BasePage'

class HomePage extends BasePage {
  constructor() {
    super()
    this.url = '/'
  }

  // Seletores
  get elementos() {
    return {
      logo: '.logo',
      menuConta: '.header .customer-welcome',
      linkCriarConta: 'a[href*="customer/account/create"]',
      linkLogin: 'a[href*="customer/account/login"]',
      campoBusca: '#search',
      botaoBusca: '.search button[type="submit"]',
      carrinho: '.minicart-wrapper',
      contadorCarrinho: '.counter-number',
      menuCategorias: '.navigation',
      produtoDestaque: '.product-item',
      bannerPrincipal: '.page-main'
    }
  }

  // Ações
  acessarPaginaCriarConta() {
    this.clicar(this.elementos.linkCriarConta)
  }

  acessarPaginaLogin() {
    this.clicar(this.elementos.linkLogin)
  }

  buscarProduto(termoBusca) {
    this.digitar(this.elementos.campoBusca, termoBusca)
    this.clicar(this.elementos.botaoBusca)
  }

  abrirCarrinho() {
    this.clicar(this.elementos.carrinho)
  }

  selecionarPrimeiroProduto() {
    cy.get(this.elementos.produtoDestaque).first().click()
  }

  verificarPaginaCarregada() {
    this.verificarElementoVisivel(this.elementos.logo)
    this.verificarElementoVisivel(this.elementos.campoBusca)
  }

  verificarUsuarioLogado(nomeUsuario) {
    cy.get(this.elementos.menuConta).should('contain', nomeUsuario)
  }

  verificarContadorCarrinho(quantidade) {
    if (quantidade > 0) {
      cy.get(this.elementos.contadorCarrinho).should('contain', quantidade)
    }
  }
}

export default HomePage
