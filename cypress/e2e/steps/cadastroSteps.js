import HomePage from '../pages/HomePage'
import CadastroPage from '../pages/CadastroPage'
import ContaPage from '../pages/ContaPage'

const homePage = new HomePage()
const cadastroPage = new CadastroPage()
const contaPage = new ContaPage()

// Steps para Cadastro de Usuário
export class CadastroSteps {
  
  dadoQueEstouNaPaginaInicial() {
    homePage.visitar()
    homePage.verificarPaginaCarregada()
  }

  quandoClicoEmCriarConta() {
    homePage.acessarPaginaCriarConta()
  }

  entaoDeveriaSer redirecionadoParaPaginaDeCadastro() {
    cadastroPage.verificarPaginaCarregada()
  }

  quandoPreenchoOFormularioDeCadastroComDadosValidos() {
    cy.gerarDadosUsuario().then((dadosUsuario) => {
      cy.wrap(dadosUsuario).as('dadosUsuario')
      cadastroPage.realizarCadastro(dadosUsuario)
    })
  }

  quandoPreenchoOFormularioDeCadastroComEmailJaExistente() {
    const dadosUsuario = {
      nome: 'Teste',
      sobrenome: 'Usuario',
      email: 'teste@exemplo.com', // Email que já existe
      senha: 'Teste123!',
      telefone: '11999999999'
    }
    cadastroPage.realizarCadastro(dadosUsuario)
  }

  quandoPreenchoOFormularioDeCadastroComDadosInvalidos() {
    const dadosInvalidos = {
      nome: '',
      sobrenome: '',
      email: 'email-invalido',
      senha: '123',
      telefone: ''
    }
    cadastroPage.realizarCadastro(dadosInvalidos)
  }

  entaoDeveriaSer redirecionadoParaPaginaDaConta() {
    contaPage.verificarPaginaCarregada()
  }

  entaoDeveriaSer exibidaUmaMensagemDeSucesso() {
    cadastroPage.verificarCadastroSucesso()
  }

  entaoDeveriaSer exibidaUmaMensagemDeErro() {
    cadastroPage.verificarMensagemErro('There is already an account with this email address')
  }

  entaoDeveriaSer exibidasMensagensDeValidacao() {
    cadastroPage.verificarErroValidacao('This is a required field')
  }

  eOUsuarioDeveEstarLogado() {
    cy.get('@dadosUsuario').then((dadosUsuario) => {
      contaPage.verificarUsuarioLogado(dadosUsuario.nome)
    })
  }
}
