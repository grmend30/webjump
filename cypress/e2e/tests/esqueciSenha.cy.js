import '../hooks/hooks'
import { EsqueciSenhaSteps } from '../steps/esqueciSenhaSteps'

const esqueciSenhaSteps = new EsqueciSenhaSteps()

describe('Funcionalidade: Esqueci Minha Senha', () => {
  
  context('Cenário: Solicitar recuperação com email válido', () => {
    it('Deve enviar email de recuperação para email válido', () => {
      // Dado que estou na página de login
      esqueciSenhaSteps.dadoQueEstouNaPaginaDeLogin()
      
      // Quando clico em "Esqueci minha senha"
      esqueciSenhaSteps.quandoClicoEmEsqueciMinhaSenha()
      
      // Então devo ser redirecionado para a página de recuperação de senha
      esqueciSenhaSteps.entaoDeveriaSer redirecionadoParaPaginaDeRecuperacaoDeSenha()
      
      // Quando informo um email válido
      esqueciSenhaSteps.quandoInformoUmEmailValido()
      
      // Então deve ser exibida uma mensagem de confirmação
      esqueciSenhaSteps.entaoDeveriaSer exibidaUmaMensagemDeConfirmacao()
    })
  })

  context('Cenário: Solicitar recuperação com email inválido', () => {
    it('Deve exibir erro para email com formato inválido', () => {
      // Dado que estou na página de login
      esqueciSenhaSteps.dadoQueEstouNaPaginaDeLogin()
      
      // Quando clico em "Esqueci minha senha"
      esqueciSenhaSteps.quandoClicoEmEsqueciMinhaSenha()
      
      // E informo um email inválido
      esqueciSenhaSteps.quandoInformoUmEmailInvalido()
      
      // Então deve ser exibida uma mensagem de erro
      esqueciSenhaSteps.entaoDeveriaSer exibidaUmaMensagemDeErro()
    })
  })

  context('Cenário: Solicitar recuperação com email inexistente', () => {
    it('Deve tratar email inexistente adequadamente', () => {
      // Dado que estou na página de login
      esqueciSenhaSteps.dadoQueEstouNaPaginaDeLogin()
      
      // Quando clico em "Esqueci minha senha"
      esqueciSenhaSteps.quandoClicoEmEsqueciMinhaSenha()
      
      // E informo um email inexistente
      esqueciSenhaSteps.quandoInformoUmEmailInexistente()
      
      // Então deve ser exibida uma mensagem de confirmação
      // (Por segurança, muitos sistemas não revelam se o email existe)
      esqueciSenhaSteps.entaoDeveriaSer exibidaUmaMensagemDeConfirmacao()
    })
  })

  context('Cenário: Solicitar recuperação sem informar email', () => {
    it('Deve exibir erro ao não informar email', () => {
      // Dado que estou na página de login
      esqueciSenhaSteps.dadoQueEstouNaPaginaDeLogin()
      
      // Quando clico em "Esqueci minha senha"
      esqueciSenhaSteps.quandoClicoEmEsqueciMinhaSenha()
      
      // E não informo nenhum email
      esqueciSenhaSteps.quandoNaoInformoNenhumEmail()
      
      // Então deve ser exibida uma mensagem de erro
      esqueciSenhaSteps.entaoDeveriaSer exibidaUmaMensagemDeErro()
    })
  })

  context('Cenário: Voltar para página de login', () => {
    it('Deve permitir voltar para a página de login', () => {
      // Dado que estou na página de login
      esqueciSenhaSteps.dadoQueEstouNaPaginaDeLogin()
      
      // Quando clico em "Esqueci minha senha"
      esqueciSenhaSteps.quandoClicoEmEsqueciMinhaSenha()
      
      // E clico em "Voltar para Login"
      esqueciSenhaSteps.quandoClicoEmVoltarParaLogin()
      
      // Então devo ser redirecionado para a página de login
      esqueciSenhaSteps.entaoDeveriaSer redirecionadoParaPaginaDeLogin()
    })
  })
})
