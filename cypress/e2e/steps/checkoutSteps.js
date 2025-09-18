import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import CarrinhoPage from '../pages/CarrinhoPage'
import CheckoutPage from '../pages/CheckoutPage'
import ContaPage from '../pages/ContaPage'

const homePage = new HomePage()
const loginPage = new LoginPage()
const carrinhoPage = new CarrinhoPage()
const checkoutPage = new CheckoutPage()
const contaPage = new ContaPage()

// Steps para Finalização de Compra
export class CheckoutSteps {
  
  dadoQueEstouLogado() {
    // Realizar login com usuário de teste
    homePage.visitar()
    homePage.acessarPaginaLogin()
    loginPage.realizarLogin('usuario.teste@exemplo.com', 'Teste123!')
    contaPage.verificarPaginaCarregada()
  }

  dadoQueTenhoUmProdutoNoCarrinho() {
    // Adicionar produto ao carrinho
    homePage.visitar()
    homePage.selecionarPrimeiroProduto()
    
    // Aguardar página do produto carregar e adicionar ao carrinho
    cy.wait(2000)
    cy.get('body').then(($body) => {
      // Verificar se há opções de tamanho/cor para selecionar
      if ($body.find('.swatch-attribute').length > 0) {
        cy.get('.swatch-attribute').first().find('.swatch-option').first().click()
      }
    })
    
    cy.get('#product-addtocart-button').click()
    cy.wait('@adicionarCarrinhoRequest', { timeout: 10000 })
  }

  quandoAcessoOCarrinho() {
    homePage.abrirCarrinho()
    carrinhoPage.verificarPaginaCarregada()
  }

  quandoProsseguirParaOCheckout() {
    carrinhoPage.prosseguirParaCheckout()
    checkoutPage.aguardarCarregamento()
  }

  quandoPreenchoAsInformacoesDeEnvio() {
    const dadosEnvio = {
      nome: 'João',
      sobrenome: 'Silva',
      endereco: 'Rua das Flores, 123',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      cep: '01234-567',
      pais: 'Brazil',
      telefone: '11999999999'
    }
    
    cy.wrap(dadosEnvio).as('dadosEnvio')
    checkoutPage.preencherInformacoesEnvio(dadosEnvio)
  }

  quandoSelecionoOMetodoDeEnvio() {
    checkoutPage.selecionarMetodoEnvio(0)
  }

  quandoProsseguirParaOPagamento() {
    checkoutPage.prosseguirParaPagamento()
    checkoutPage.aguardarCarregamento()
  }

  quandoSelecionoOMetodoDePagamento() {
    checkoutPage.selecionarMetodoPagamento(0)
  }

  quandoFinalizoOPedido() {
    checkoutPage.finalizarPedido()
    cy.wait('@finalizarPedidoRequest', { timeout: 15000 })
  }

  entaoOPedidoDeveSerFinalizadoComSucesso() {
    checkoutPage.verificarCheckoutSucesso()
  }

  eDeveSerExibidoONumeroDoPedido() {
    checkoutPage.obterNumeroPedido().then((numeroPedido) => {
      cy.wrap(numeroPedido).as('numeroPedido')
      expect(numeroPedido).to.not.be.empty
    })
  }

  // Cenários de erro
  quandoTentoFinalizarSemPreencherCamposObrigatorios() {
    checkoutPage.finalizarPedido()
  }

  entaoDeveriaSer exibidasMensagensDeValidacao() {
    cy.contains('This is a required field').should('be.visible')
  }

  // Checkout como convidado
  dadoQueNaoEstouLogado() {
    homePage.visitar()
    homePage.verificarPaginaCarregada()
  }

  quandoPreenchoAsInformacoesDeEnvioComoConvidado() {
    const dadosEnvio = {
      email: 'convidado@exemplo.com',
      nome: 'João',
      sobrenome: 'Silva',
      endereco: 'Rua das Flores, 123',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      cep: '01234-567',
      pais: 'Brazil',
      telefone: '11999999999'
    }
    
    checkoutPage.preencherInformacoesEnvio(dadosEnvio)
  }
}
