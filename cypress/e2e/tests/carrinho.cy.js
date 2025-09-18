import '../hooks/hooks'
import { CarrinhoSteps } from '../steps/carrinhoSteps'

const carrinhoSteps = new CarrinhoSteps()

describe('Funcionalidade: Carrinho de Compras', () => {
  
  context('Cenário: Adicionar produto ao carrinho via página de produto', () => {
    it('Deve adicionar produto ao carrinho através da página de produto', () => {
      // Dado que estou na página inicial
      carrinhoSteps.dadoQueEstouNaPaginaInicial()
      
      // Quando seleciono um produto
      carrinhoSteps.quandoSelecionoUmProduto()
      
      // E adiciono o produto ao carrinho
      carrinhoSteps.quandoAdicionoOProdutoAoCarrinho()
      
      // Então o produto deve ser adicionado ao carrinho
      carrinhoSteps.entaoOProdutoDeveSerAdicionadoAoCarrinho()
      
      // E o contador do carrinho deve ser atualizado
      carrinhoSteps.eOContadorDoCarrinhoDeveSerAtualizado()
      
      // Quando acesso o carrinho
      carrinhoSteps.quandoAcessoOCarrinho()
      
      // Então o produto deve estar no carrinho
      carrinhoSteps.entaoOProdutoDeveEstarNoCarrinho()
    })
  })

  context('Cenário: Adicionar produto ao carrinho via busca', () => {
    it('Deve adicionar produto ao carrinho através da busca', () => {
      // Dado que estou na página inicial
      carrinhoSteps.dadoQueEstouNaPaginaInicial()
      
      // Quando busco um produto
      carrinhoSteps.quandoBuscoUmProduto()
      
      // E seleciono um produto do resultado da busca
      carrinhoSteps.quandoSelecionoUmProdutoDoResultadoDaBusca()
      
      // E adiciono o produto ao carrinho
      carrinhoSteps.quandoAdicionoOProdutoAoCarrinho()
      
      // Então o produto deve ser adicionado ao carrinho
      carrinhoSteps.entaoOProdutoDeveSerAdicionadoAoCarrinho()
      
      // Quando acesso o carrinho
      carrinhoSteps.quandoAcessoOCarrinho()
      
      // Então o produto deve estar no carrinho
      carrinhoSteps.entaoOProdutoDeveEstarNoCarrinho()
    })
  })

  context('Cenário: Atualizar quantidade de item no carrinho', () => {
    it('Deve permitir atualizar a quantidade de um item no carrinho', () => {
      // Dado que estou na página inicial
      carrinhoSteps.dadoQueEstouNaPaginaInicial()
      
      // E tenho um produto no carrinho
      carrinhoSteps.quandoSelecionoUmProduto()
      carrinhoSteps.quandoAdicionoOProdutoAoCarrinho()
      carrinhoSteps.quandoAcessoOCarrinho()
      
      // Quando atualizo a quantidade do item
      carrinhoSteps.quandoAtualizoAQuantidadeDoItem()
      
      // Então a quantidade deve ser atualizada
      cy.get('.qty').should('have.value', '2')
    })
  })

  context('Cenário: Remover item do carrinho', () => {
    it('Deve permitir remover um item do carrinho', () => {
      // Dado que estou na página inicial
      carrinhoSteps.dadoQueEstouNaPaginaInicial()
      
      // E tenho um produto no carrinho
      carrinhoSteps.quandoSelecionoUmProduto()
      carrinhoSteps.quandoAdicionoOProdutoAoCarrinho()
      carrinhoSteps.quandoAcessoOCarrinho()
      
      // Quando removo um item do carrinho
      carrinhoSteps.quandoRemovoUmItemDoCarrinho()
      
      // Então o carrinho deve ficar vazio
      carrinhoSteps.entaoOCarrinhoDeveFicarVazio()
    })
  })

  context('Cenário: Aplicar cupom de desconto', () => {
    it('Deve permitir aplicar cupom de desconto no carrinho', () => {
      // Dado que estou na página inicial
      carrinhoSteps.dadoQueEstouNaPaginaInicial()
      
      // E tenho um produto no carrinho
      carrinhoSteps.quandoSelecionoUmProduto()
      carrinhoSteps.quandoAdicionoOProdutoAoCarrinho()
      carrinhoSteps.quandoAcessoOCarrinho()
      
      // Quando aplico um cupom de desconto
      carrinhoSteps.quandoAplicoUmCupomDeDesconto()
      
      // Então o desconto deve ser aplicado
      carrinhoSteps.entaoODescontoDeveSerAplicado()
    })
  })
})
