import BasePage from './BasePage'

class EsqueciSenhaPage extends BasePage {
  constructor() {
    super()
    this.url = '/customer/account/forgotpassword/'
  }

  // Seletores
  get elementos() {
    return {
      campoEmail: '#email_address',
      botaoEnviar: 'button[type="submit"]',
      mensagemSucesso: '.message-success',
      mensagemErro: '.message-error',
      titulo: '.page-title',
      linkVoltar: '.back-link'
    }
  }

  // Ações
  preencherEmail(email) {
    this.digitar(this.elementos.campoEmail, email)
  }

  submeterFormulario() {
    this.clicar(this.elementos.botaoEnviar)
  }

  solicitarRecuperacaoSenha(email) {
    this.preencherEmail(email)
    this.submeterFormulario()
  }

  voltarParaLogin() {
    this.clicar(this.elementos.linkVoltar)
  }

  verificarPaginaCarregada() {
    this.verificarElementoVisivel(this.elementos.titulo)
    this.verificarTextoVisivel('Forgot Your Password?')
  }

  verificarSolicitacaoEnviada() {
    cy.get(this.elementos.mensagemSucesso)
      .should('be.visible')
      .and('contain', 'email with a link to reset your password')
  }

  verificarErroEmail() {
    cy.get(this.elementos.mensagemErro)
      .should('be.visible')
  }
}

export default EsqueciSenhaPage
