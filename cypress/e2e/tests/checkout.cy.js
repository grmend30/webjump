import '../hooks/hooks'
import { CheckoutSteps } from '../steps/checkoutSteps'

const checkoutSteps = new CheckoutSteps()

describe('Funcionalidade: Finalização de Compra', () => {
  
  context('Cenário: Finalizar compra com usuário logado', () => {
    it('Deve permitir finalizar compra com usuário autenticado', () => {
      // Dado que estou logado
      checkoutSteps.dadoQueEstouLogado()
      
      // E tenho um produto no carrinho
      checkoutSteps.dadoQueTenhoUmProdutoNoCarrinho()
      
      // Quando acesso o carrinho
      checkoutSteps.quandoAcessoOCarrinho()
      
      // E prossigo para o checkout
      checkoutSteps.quandoProsseguirParaOCheckout()
      
      // E preencho as informações de envio
      checkoutSteps.quandoPreenchoAsInformacoesDeEnvio()
      
      // E seleciono o método de envio
      checkoutSteps.quandoSelecionoOMetodoDeEnvio()
      
      // E prossigo para o pagamento
      checkoutSteps.quandoProsseguirParaOPagamento()
      
      // E seleciono o método de pagamento
      checkoutSteps.quandoSelecionoOMetodoDePagamento()
      
      // E finalizo o pedido
      checkoutSteps.quandoFinalizoOPedido()
      
      // Então o pedido deve ser finalizado com sucesso
      checkoutSteps.entaoOPedidoDeveSerFinalizadoComSucesso()
      
      // E deve ser exibido o número do pedido
      checkoutSteps.eDeveSerExibidoONumeroDoPedido()
    })
  })

  context('Cenário: Finalizar compra como convidado', () => {
    it('Deve permitir finalizar compra sem estar logado', () => {
      // Dado que não estou logado
      checkoutSteps.dadoQueNaoEstouLogado()
      
      // E tenho um produto no carrinho
      checkoutSteps.dadoQueTenhoUmProdutoNoCarrinho()
      
      // Quando acesso o carrinho
      checkoutSteps.quandoAcessoOCarrinho()
      
      // E prossigo para o checkout
      checkoutSteps.quandoProsseguirParaOCheckout()
      
      // E preencho as informações de envio como convidado
      checkoutSteps.quandoPreenchoAsInformacoesDeEnvioComoConvidado()
      
      // E seleciono o método de envio
      checkoutSteps.quandoSelecionoOMetodoDeEnvio()
      
      // E prossigo para o pagamento
      checkoutSteps.quandoProsseguirParaOPagamento()
      
      // E seleciono o método de pagamento
      checkoutSteps.quandoSelecionoOMetodoDePagamento()
      
      // E finalizo o pedido
      checkoutSteps.quandoFinalizoOPedido()
      
      // Então o pedido deve ser finalizado com sucesso
      checkoutSteps.entaoOPedidoDeveSerFinalizadoComSucesso()
      
      // E deve ser exibido o número do pedido
      checkoutSteps.eDeveSerExibidoONumeroDoPedido()
    })
  })

  context('Cenário: Tentar finalizar compra sem preencher campos obrigatórios', () => {
    it('Deve exibir mensagens de validação para campos obrigatórios', () => {
      // Dado que estou logado
      checkoutSteps.dadoQueEstouLogado()
      
      // E tenho um produto no carrinho
      checkoutSteps.dadoQueTenhoUmProdutoNoCarrinho()
      
      // Quando acesso o carrinho
      checkoutSteps.quandoAcessoOCarrinho()
      
      // E prossigo para o checkout
      checkoutSteps.quandoProsseguirParaOCheckout()
      
      // E tento finalizar sem preencher campos obrigatórios
      checkoutSteps.quandoTentoFinalizarSemPreencherCamposObrigatorios()
      
      // Então devem ser exibidas mensagens de validação
      checkoutSteps.entaoDeveriaSer exibidasMensagensDeValidacao()
    })
  })

  context('Cenário: Validar resumo do pedido', () => {
    it('Deve exibir corretamente o resumo do pedido no checkout', () => {
      // Dado que estou logado
      checkoutSteps.dadoQueEstouLogado()
      
      // E tenho um produto no carrinho
      checkoutSteps.dadoQueTenhoUmProdutoNoCarrinho()
      
      // Quando acesso o carrinho
      checkoutSteps.quandoAcessoOCarrinho()
      
      // E prossigo para o checkout
      checkoutSteps.quandoProsseguirParaOCheckout()
      
      // Então o resumo deve estar carregado corretamente
      checkoutSteps.verificarResumoCarregado()
    })
  })
})
