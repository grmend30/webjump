import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import EsqueciSenhaPage from '../pages/EsqueciSenhaPage'

const homePage = new HomePage()
const loginPage = new LoginPage()
const esqueciSenhaPage = new EsqueciSenhaPage()

// Steps para Esqueci Minha Senha
export class EsqueciSenhaSteps {
  
  dadoQueEstouNaPaginaDeLogin() {
    homePage.visitar()
    homePage.acessarPaginaLogin()
    loginPage.verificarPaginaCarregada()
  }

  quandoClicoEmEsqueciMinhaSenha() {
    loginPage.acessarEsqueciSenha()
  }

  entaoDeveriaSer redirecionadoParaPaginaDeRecuperacaoDeSenha() {
    esqueciSenhaPage.verificarPaginaCarregada()
  }

  quandoInformoUmEmailValido() {
    esqueciSenhaPage.solicitarRecuperacaoSenha('usuario.teste@exemplo.com')
  }

  quandoInformoUmEmailInvalido() {
    esqueciSenhaPage.solicitarRecuperacaoSenha('email-invalido')
  }

  quandoInformoUmEmailInexistente() {
    esqueciSenhaPage.solicitarRecuperacaoSenha('inexistente@exemplo.com')
  }

  quandoNaoInformoNenhumEmail() {
    esqueciSenhaPage.solicitarRecuperacaoSenha('')
  }

  entaoDeveriaSer exibidaUmaMensagemDeConfirmacao() {
    esqueciSenhaPage.verificarSolicitacaoEnviada()
  }

  entaoDeveriaSer exibidaUmaMensagemDeErro() {
    esqueciSenhaPage.verificarErroEmail()
  }

  quandoClicoEmVoltarParaLogin() {
    esqueciSenhaPage.voltarParaLogin()
  }

  entaoDeveriaSer redirecionadoParaPaginaDeLogin() {
    loginPage.verificarPaginaCarregada()
  }
}
