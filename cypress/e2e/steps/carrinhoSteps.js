import HomePage from '../pages/HomePage'
import ProdutoPage from '../pages/ProdutoPage'
import BuscaPage from '../pages/BuscaPage'
import CarrinhoPage from '../pages/CarrinhoPage'

const homePage = new HomePage()
const produtoPage = new ProdutoPage()
const buscaPage = new BuscaPage()
const carrinhoPage = new CarrinhoPage()

// Steps para Carrinho de Compras
export class CarrinhoSteps {
  
  dadoQueEstouNaPaginaInicial() {
    homePage.visitar()
    homePage.verificarPaginaCarregada()
  }

  // Cenário: Adicionar produto via página de produto
  quandoSelecionoUmProduto() {
    homePage.selecionarPrimeiroProduto()
    produtoPage.verificarPaginaCarregada()
    
    // Armazenar nome do produto para verificação posterior
    produtoPage.obterNomeProduto().then((nome) => {
      cy.wrap(nome.trim()).as('nomeProdutoSelecionado')
    })
  }

  quandoAdicionoOProdutoAoCarrinho() {
    produtoPage.adicionarProdutoCarrinho({
      tamanho: 0,
      cor: 0,
      quantidade: 1
    })
  }

  // Cenário: Adicionar produto via busca
  quandoBuscoUmProduto() {
    const termoBusca = 'shirt'
    homePage.buscarProduto(termoBusca)
    buscaPage.verificarResultadosEncontrados()
  }

  quandoSelecionoUmProdutoDoResultadoDaBusca() {
    buscaPage.selecionarProduto(0)
    produtoPage.verificarPaginaCarregada()
    
    // Armazenar nome do produto para verificação posterior
    produtoPage.obterNomeProduto().then((nome) => {
      cy.wrap(nome.trim()).as('nomeProdutoSelecionado')
    })
  }

  entaoOProdutoDeveSerAdicionadoAoCarrinho() {
    produtoPage.verificarProdutoAdicionado()
  }

  quandoAcessoOCarrinho() {
    homePage.abrirCarrinho()
    carrinhoPage.verificarPaginaCarregada()
  }

  entaoOProdutoDeveEstarNoCarrinho() {
    cy.get('@nomeProdutoSelecionado').then((nomeProduto) => {
      carrinhoPage.verificarProdutoNoCarrinho(nomeProduto)
    })
  }

  eOContadorDoCarrinhoDeveSerAtualizado() {
    homePage.verificarContadorCarrinho(1)
  }

  // Cenários adicionais para gerenciamento do carrinho
  quandoAtualizoAQuantidadeDoItem() {
    carrinhoPage.atualizarQuantidade(0, 2)
  }

  quandoRemovoUmItemDoCarrinho() {
    carrinhoPage.removerItem(0)
  }

  entaoOCarrinhoDeveFicarVazio() {
    carrinhoPage.verificarCarrinhoVazio()
  }

  quandoAplicoUmCupomDeDesconto() {
    carrinhoPage.aplicarCupomDesconto('DESCONTO10')
  }

  entaoODescontoDeveSerAplicado() {
    // Verificação do desconto aplicado
    cy.contains('Discount').should('be.visible')
  }
}
