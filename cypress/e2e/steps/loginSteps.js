import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ContaPage from '../pages/ContaPage'

const homePage = new HomePage()
const loginPage = new LoginPage()
const contaPage = new ContaPage()

// Steps para Login
export class LoginSteps {
  
  dadoQueEstouNaPaginaInicial() {
    homePage.visitar()
    homePage.verificarPaginaCarregada()
  }

  dadoQueExisteUmUsuarioCadastrado() {
    // Para este exemplo, assumimos que existe um usuário de teste
    // Em um cenário real, você poderia criar o usuário via API ou banco de dados
    cy.wrap({
      email: 'usuario.teste@exemplo.com',
      senha: 'Teste123!'
    }).as('usuarioTeste')
  }

  quandoClicoEmLogin() {
    homePage.acessarPaginaLogin()
  }

  entaoDeveriaSer redirecionadoParaPaginaDeLogin() {
    loginPage.verificarPaginaCarregada()
  }

  quandoPreenchoAsCredenciaisValidas() {
    cy.get('@usuarioTeste').then((usuario) => {
      loginPage.realizarLogin(usuario.email, usuario.senha)
    })
  }

  quandoPreenchoAsCredenciaisInvalidas() {
    loginPage.realizarLogin('email@inexistente.com', 'senhaerrada')
  }

  quandoPreenchoCamposVazios() {
    loginPage.realizarLogin('', '')
  }

  entaoDeveriaSer redirecionadoParaPaginaDaConta() {
    contaPage.verificarPaginaCarregada()
  }

  entaoDeveriaSer exibidaUmaMensagemDeErroDeLogin() {
    loginPage.verificarErroLogin()
  }

  eOUsuarioDeveEstarLogado() {
    cy.get('@usuarioTeste').then((usuario) => {
      homePage.verificarUsuarioLogado(usuario.email)
    })
  }

  eDeveriaSer permanecerNaPaginaDeLogin() {
    loginPage.verificarPaginaCarregada()
  }
}
