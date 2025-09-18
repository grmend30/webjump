import '../hooks/hooks'
import { LoginSteps } from '../steps/loginSteps'

const loginSteps = new LoginSteps()

describe('Funcionalidade: Login de Usuário', () => {
  
  beforeEach(() => {
    // Configurar usuário de teste para os cenários
    loginSteps.dadoQueExisteUmUsuarioCadastrado()
  })

  context('Cenário: Login com credenciais válidas', () => {
    it('Deve permitir login com credenciais corretas', () => {
      // Dado que estou na página inicial
      loginSteps.dadoQueEstouNaPaginaInicial()
      
      // Quando clico em "Login"
      loginSteps.quandoClicoEmLogin()
      
      // Então devo ser redirecionado para a página de login
      loginSteps.entaoDeveriaSer redirecionadoParaPaginaDeLogin()
      
      // Quando preencho as credenciais válidas
      loginSteps.quandoPreenchoAsCredenciaisValidas()
      
      // Então devo ser redirecionado para a página da conta
      loginSteps.entaoDeveriaSer redirecionadoParaPaginaDaConta()
      
      // E o usuário deve estar logado
      loginSteps.eOUsuarioDeveEstarLogado()
    })
  })

  context('Cenário: Login com credenciais inválidas', () => {
    it('Deve exibir erro ao tentar login com credenciais incorretas', () => {
      // Dado que estou na página inicial
      loginSteps.dadoQueEstouNaPaginaInicial()
      
      // Quando clico em "Login"
      loginSteps.quandoClicoEmLogin()
      
      // E preencho credenciais inválidas
      loginSteps.quandoPreenchoAsCredenciaisInvalidas()
      
      // Então deve ser exibida uma mensagem de erro de login
      loginSteps.entaoDeveriaSer exibidaUmaMensagemDeErroDeLogin()
      
      // E devo permanecer na página de login
      loginSteps.eDeveriaSer permanecerNaPaginaDeLogin()
    })
  })

  context('Cenário: Login com campos vazios', () => {
    it('Deve exibir erro ao tentar login sem preencher os campos', () => {
      // Dado que estou na página inicial
      loginSteps.dadoQueEstouNaPaginaInicial()
      
      // Quando clico em "Login"
      loginSteps.quandoClicoEmLogin()
      
      // E não preencho nenhum campo
      loginSteps.quandoPreenchoCamposVazios()
      
      // Então deve ser exibida uma mensagem de erro
      loginSteps.entaoDeveriaSer exibidaUmaMensagemDeErroDeLogin()
      
      // E devo permanecer na página de login
      loginSteps.eDeveriaSer permanecerNaPaginaDeLogin()
    })
  })
})
