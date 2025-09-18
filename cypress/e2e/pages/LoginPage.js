import BasePage from './BasePage'

class LoginPage extends BasePage {
  constructor() {
    super()
    this.url = '/customer/account/login/'
  }

  // Seletores
  get elementos() {
    return {
      campoEmail: '#email',
      campoSenha: '#pass',
      botaoLogin: '#send2',
      linkEsqueciSenha: '.remind',
      mensagemErro: '.message-error',
      titulo: '.page-title',
      formularioLogin: '#login-form'
    }
  }

  // Ações
  preencherCredenciais(email, senha) {
    this.digitar(this.elementos.campoEmail, email)
    this.digitar(this.elementos.campoSenha, senha)
  }

  submeterLogin() {
    this.clicar(this.elementos.botaoLogin)
  }

  realizarLogin(email, senha) {
    this.preencherCredenciais(email, senha)
    this.submeterLogin()
  }

  acessarEsqueciSenha() {
    this.clicar(this.elementos.linkEsqueciSenha)
  }

  verificarPaginaCarregada() {
    this.verificarElementoVisivel(this.elementos.titulo)
    this.verificarElementoVisivel(this.elementos.formularioLogin)
  }

  verificarErroLogin() {
    cy.get(this.elementos.mensagemErro)
      .should('be.visible')
      .and('contain', 'incorrect')
  }
}

export default LoginPage
