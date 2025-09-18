import BasePage from './BasePage'

class ContaPage extends BasePage {
  constructor() {
    super()
    this.url = '/customer/account/'
  }

  // Seletores
  get elementos() {
    return {
      menuConta: '.nav-item',
      linkPedidos: 'a[href*="sales/order/history"]',
      linkInformacoesConta: 'a[href*="customer/account/edit"]',
      linkEnderecos: 'a[href*="customer/address"]',
      mensagemBoasVindas: '.welcome',
      informacoesContato: '.contact-info',
      pedidosRecentes: '.recent-orders'
    }
  }

  // Ações
  acessarPedidos() {
    this.clicar(this.elementos.linkPedidos)
  }

  acessarInformacoesConta() {
    this.clicar(this.elementos.linkInformacoesConta)
  }

  acessarEnderecos() {
    this.clicar(this.elementos.linkEnderecos)
  }

  verificarPaginaCarregada() {
    this.verificarElementoVisivel(this.elementos.mensagemBoasVindas)
  }

  verificarUsuarioLogado(nomeUsuario) {
    cy.get(this.elementos.mensagemBoasVindas)
      .should('contain', nomeUsuario)
  }
}

export default ContaPage
