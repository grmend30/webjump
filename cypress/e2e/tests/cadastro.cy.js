import '../hooks/hooks'
import { CadastroSteps } from '../steps/cadastroSteps'

const cadastroSteps = new CadastroSteps()

describe('Funcionalidade: Cadastro de Usuário', () => {
  
  context('Cenário: Cadastro com dados válidos', () => {
    it('Deve permitir cadastrar um novo usuário com sucesso', () => {
      // Dado que estou na página inicial
      cadastroSteps.dadoQueEstouNaPaginaInicial()
      
      // Quando clico em "Criar Conta"
      cadastroSteps.quandoClicoEmCriarConta()
      
      // Então devo ser redirecionado para a página de cadastro
      cadastroSteps.entaoDeveriaSer redirecionadoParaPaginaDeCadastro()
      
      // Quando preencho o formulário de cadastro com dados válidos
      cadastroSteps.quandoPreenchoOFormularioDeCadastroComDadosValidos()
      
      // Então devo ser redirecionado para a página da conta
      cadastroSteps.entaoDeveriaSer redirecionadoParaPaginaDaConta()
      
      // E deve ser exibida uma mensagem de sucesso
      cadastroSteps.entaoDeveriaSer exibidaUmaMensagemDeSucesso()
      
      // E o usuário deve estar logado
      cadastroSteps.eOUsuarioDeveEstarLogado()
    })
  })

  context('Cenário: Cadastro com email já existente', () => {
    it('Deve exibir erro ao tentar cadastrar com email já existente', () => {
      // Dado que estou na página inicial
      cadastroSteps.dadoQueEstouNaPaginaInicial()
      
      // Quando clico em "Criar Conta"
      cadastroSteps.quandoClicoEmCriarConta()
      
      // E preencho o formulário com email já existente
      cadastroSteps.quandoPreenchoOFormularioDeCadastroComEmailJaExistente()
      
      // Então deve ser exibida uma mensagem de erro
      cadastroSteps.entaoDeveriaSer exibidaUmaMensagemDeErro()
    })
  })

  context('Cenário: Cadastro com dados inválidos', () => {
    it('Deve exibir mensagens de validação para campos obrigatórios', () => {
      // Dado que estou na página inicial
      cadastroSteps.dadoQueEstouNaPaginaInicial()
      
      // Quando clico em "Criar Conta"
      cadastroSteps.quandoClicoEmCriarConta()
      
      // E preencho o formulário com dados inválidos
      cadastroSteps.quandoPreenchoOFormularioDeCadastroComDadosInvalidos()
      
      // Então devem ser exibidas mensagens de validação
      cadastroSteps.entaoDeveriaSer exibidasMensagensDeValidacao()
    })
  })
})
