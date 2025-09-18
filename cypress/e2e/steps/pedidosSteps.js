import HomePage from '../pages/HomePage'
import ContaPage from '../pages/ContaPage'
import PedidosPage from '../pages/PedidosPage'
import DetalhePedidoPage from '../pages/DetalhePedidoPage'

const homePage = new HomePage()
const contaPage = new ContaPage()
const pedidosPage = new PedidosPage()
const detalhePedidoPage = new DetalhePedidoPage()

// Steps para Validação de Pedidos
export class PedidosSteps {
  
  dadoQueEstouLogadoEFizUmPedido() {
    // Este step assume que já existe um pedido feito pelo usuário
    // Em um cenário real, você executaria o fluxo completo de compra primeiro
    homePage.visitar()
    homePage.acessarPaginaLogin()
    
    // Login com usuário que tem pedidos
    cy.get('#email').type('usuario.teste@exemplo.com')
    cy.get('#pass').type('Teste123!')
    cy.get('#send2').click()
    
    contaPage.verificarPaginaCarregada()
  }

  quandoAcessoAListaDePedidos() {
    contaPage.acessarPedidos()
    pedidosPage.verificarPaginaCarregada()
  }

  entaoDeveriaSer exibidaAListaDePedidos() {
    pedidosPage.obterQuantidadePedidos().then((quantidade) => {
      expect(quantidade).to.be.greaterThan(0)
    })
  }

  eOsPedidosDevemConterInformacoesBasicas() {
    // Verificar se os pedidos contêm informações essenciais
    cy.get(pedidosPage.elementos.numeroPedido).should('be.visible')
    cy.get(pedidosPage.elementos.dataPedido).should('be.visible')
    cy.get(pedidosPage.elementos.statusPedido).should('be.visible')
    cy.get(pedidosPage.elementos.totalPedido).should('be.visible')
  }

  quandoClicoEmVerDetalhesDoUltimoPedido() {
    pedidosPage.acessarDetalhesPedido(0)
  }

  quandoBuscoUmPedidoEspecifico() {
    cy.get('@numeroPedido').then((numeroPedido) => {
      pedidosPage.buscarPedidoPorNumero(numeroPedido)
    })
  }

  entaoDeveriaSer redirecionadoParaODetalheDoPedido() {
    detalhePedidoPage.verificarPaginaCarregada()
  }

  eODetalheDeveConterTodasAsInformacoes() {
    // Verificar informações do pedido
    detalhePedidoPage.verificarInformacoesEnvio()
    detalhePedidoPage.verificarInformacoesPagamento()
    
    // Verificar itens do pedido
    detalhePedidoPage.obterQuantidadeItens().then((quantidade) => {
      expect(quantidade).to.be.greaterThan(0)
    })
  }

  eDeveExibirOStatusAtualDoPedido() {
    detalhePedidoPage.obterStatusPedido().then((status) => {
      expect(status).to.not.be.empty
    })
  }

  // Cenário: Pedido específico
  dadoQueConhecoONumeroDoPedido() {
    // Usar número de pedido conhecido ou gerado em teste anterior
    cy.wrap('000000123').as('numeroPedidoConhecido')
  }

  quandoBuscoEssePedidoNaLista() {
    cy.get('@numeroPedidoConhecido').then((numeroPedido) => {
      pedidosPage.buscarPedidoPorNumero(numeroPedido)
    })
  }

  entaoDeveExibirOsProdutosComprados() {
    cy.get(detalhePedidoPage.elementos.itensPedido).should('have.length.greaterThan', 0)
    cy.get(detalhePedidoPage.elementos.nomeProduto).should('be.visible')
    cy.get(detalhePedidoPage.elementos.precoProduto).should('be.visible')
    cy.get(detalhePedidoPage.elementos.quantidadeProduto).should('be.visible')
  }

  eOTotalDoPedido() {
    detalhePedidoPage.obterTotalPedido().then((total) => {
      expect(total).to.not.be.empty
      expect(total).to.match(/\$\d+\.\d{2}/) // Formato de preço
    })
  }

  // Cenário: Reordenar
  quandoClicoEmReordenar() {
    detalhePedidoPage.reordenar()
  }

  entaoOsProdutosDevemSerAdicionadosAoCarrinho() {
    // Verificar se foi redirecionado para o carrinho com os produtos
    cy.url().should('include', '/checkout/cart')
    cy.get('.cart-item').should('have.length.greaterThan', 0)
  }

  // Cenário: Nenhum pedido
  dadoQueNaoFizNenhumPedido() {
    // Login com usuário novo que não tem pedidos
    homePage.visitar()
    homePage.acessarPaginaLogin()
    
    cy.gerarEmailUnico().then((email) => {
      // Para este cenário, assumimos um usuário sem pedidos
      cy.get('#email').type('usuario.sem.pedidos@exemplo.com')
      cy.get('#pass').type('Teste123!')
      cy.get('#send2').click()
    })
  }

  entaoDeveExibirMensagemDeNenhumPedido() {
    pedidosPage.verificarNenhumPedido()
  }
}
