import BasePage from './BasePage'

class CadastroPage extends BasePage {
  constructor() {
    super()
    this.url = '/customer/account/create/'
  }

  // Seletores
  get elementos() {
    return {
      campoNome: '#firstname',
      campoSobrenome: '#lastname',
      campoEmail: '#email_address',
      campoSenha: '#password',
      campoConfirmarSenha: '#password-confirmation',
      botaoCriarConta: 'button[title="Create an Account"]',
      mensagemSucesso: '.message-success',
      mensagemErro: '.message-error',
      erroValidacao: '.mage-error',
      titulo: '.page-title'
    }
  }

  // Ações
  preencherFormularioCadastro(dadosUsuario) {
    this.digitar(this.elementos.campoNome, dadosUsuario.nome)
    this.digitar(this.elementos.campoSobrenome, dadosUsuario.sobrenome)
    this.digitar(this.elementos.campoEmail, dadosUsuario.email)
    this.digitar(this.elementos.campoSenha, dadosUsuario.senha)
    this.digitar(this.elementos.campoConfirmarSenha, dadosUsuario.senha)
  }

  submeterFormulario() {
    this.clicar(this.elementos.botaoCriarConta)
  }

  realizarCadastro(dadosUsuario) {
    this.preencherFormularioCadastro(dadosUsuario)
    this.submeterFormulario()
  }

  verificarPaginaCarregada() {
    this.verificarElementoVisivel(this.elementos.titulo)
    this.verificarTextoVisivel('Create New Customer Account')
  }

  verificarCadastroSucesso() {
    cy.get(this.elementos.mensagemSucesso)
      .should('be.visible')
      .and('contain', 'Thank you for registering')
  }

  verificarErroValidacao(mensagem) {
    cy.get(this.elementos.erroValidacao)
      .should('be.visible')
      .and('contain', mensagem)
  }

  verificarMensagemErro(mensagem) {
    cy.get(this.elementos.mensagemErro)
      .should('be.visible')
      .and('contain', mensagem)
  }
}

export default CadastroPage
