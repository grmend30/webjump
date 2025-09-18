import '../hooks/hooks'
import { PedidosSteps } from '../steps/pedidosSteps'

const pedidosSteps = new PedidosSteps()

describe('Funcionalidade: Validação de Pedidos', () => {
  
  context('Cenário: Visualizar lista de pedidos', () => {
    it('Deve exibir a lista de pedidos do usuário logado', () => {
      // Dado que estou logado e fiz um pedido
      pedidosSteps.dadoQueEstouLogadoEFizUmPedido()
      
      // Quando acesso a lista de pedidos
      pedidosSteps.quandoAcessoAListaDePedidos()
      
      // Então deve ser exibida a lista de pedidos
      pedidosSteps.entaoDeveriaSer exibidaAListaDePedidos()
      
      // E os pedidos devem conter informações básicas
      pedidosSteps.eOsPedidosDevemConterInformacoesBasicas()
    })
  })

  context('Cenário: Visualizar detalhes de um pedido', () => {
    it('Deve exibir os detalhes completos de um pedido específico', () => {
      // Dado que estou logado e fiz um pedido
      pedidosSteps.dadoQueEstouLogadoEFizUmPedido()
      
      // Quando acesso a lista de pedidos
      pedidosSteps.quandoAcessoAListaDePedidos()
      
      // E clico em "Ver detalhes" do último pedido
      pedidosSteps.quandoClicoEmVerDetalhesDoUltimoPedido()
      
      // Então devo ser redirecionado para o detalhe do pedido
      pedidosSteps.entaoDeveriaSer redirecionadoParaODetalheDoPedido()
      
      // E o detalhe deve conter todas as informações
      pedidosSteps.eODetalheDeveConterTodasAsInformacoes()
      
      // E deve exibir o status atual do pedido
      pedidosSteps.eDeveExibirOStatusAtualDoPedido()
    })
  })

  context('Cenário: Buscar pedido específico', () => {
    it('Deve permitir buscar e visualizar um pedido específico', () => {
      // Dado que conheço o número do pedido
      pedidosSteps.dadoQueConhecoONumeroDoPedido()
      
      // E estou logado
      pedidosSteps.dadoQueEstouLogadoEFizUmPedido()
      
      // Quando acesso a lista de pedidos
      pedidosSteps.quandoAcessoAListaDePedidos()
      
      // E busco esse pedido na lista
      pedidosSteps.quandoBuscoEssePedidoNaLista()
      
      // Então devo ser redirecionado para o detalhe do pedido
      pedidosSteps.entaoDeveriaSer redirecionadoParaODetalheDoPedido()
      
      // E deve exibir os produtos comprados
      pedidosSteps.entaoDeveExibirOsProdutosComprados()
      
      // E o total do pedido
      pedidosSteps.eOTotalDoPedido()
    })
  })

  context('Cenário: Reordenar produtos de um pedido', () => {
    it('Deve permitir reordenar produtos de um pedido anterior', () => {
      // Dado que estou logado e fiz um pedido
      pedidosSteps.dadoQueEstouLogadoEFizUmPedido()
      
      // Quando acesso a lista de pedidos
      pedidosSteps.quandoAcessoAListaDePedidos()
      
      // E clico em "Ver detalhes" do último pedido
      pedidosSteps.quandoClicoEmVerDetalhesDoUltimoPedido()
      
      // E clico em "Reordenar"
      pedidosSteps.quandoClicoEmReordenar()
      
      // Então os produtos devem ser adicionados ao carrinho
      pedidosSteps.entaoOsProdutosDevemSerAdicionadosAoCarrinho()
    })
  })

  context('Cenário: Usuário sem pedidos', () => {
    it('Deve exibir mensagem adequada para usuário sem pedidos', () => {
      // Dado que não fiz nenhum pedido
      pedidosSteps.dadoQueNaoFizNenhumPedido()
      
      // Quando acesso a lista de pedidos
      pedidosSteps.quandoAcessoAListaDePedidos()
      
      // Então deve exibir mensagem de nenhum pedido
      pedidosSteps.entaoDeveExibirMensagemDeNenhumPedido()
    })
  })
})
