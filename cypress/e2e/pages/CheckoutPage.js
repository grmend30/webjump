import BasePage from './BasePage'

class CheckoutPage extends BasePage {
  constructor() {
    super()
    this.url = '/checkout/'
  }

  // Seletores
  get elementos() {
    return {
      // Informações de envio
      campoEmail: '#customer-email',
      campoNome: 'input[name="firstname"]',
      campoSobrenome: 'input[name="lastname"]',
      campoEmpresa: 'input[name="company"]',
      campoEndereco: 'input[name="street[0]"]',
      campoCidade: 'input[name="city"]',
      seletorEstado: 'select[name="region_id"]',
      campoCep: 'input[name="postcode"]',
      seletorPais: 'select[name="country_id"]',
      campoTelefone: 'input[name="telephone"]',
      
      // Métodos de envio
      metodosEnvio: '.shipping-method',
      
      // Botões
      botaoProximo: '.continue',
      botaoFinalizarPedido: '.checkout',
      
      // Pagamento
      metodosPagamento: '.payment-method',
      
      // Resumo do pedido
      resumoPedido: '.order-summary',
      itensResumo: '.minicart-items',
      totalPedido: '.grand.totals',
      
      // Mensagens
      mensagemSucesso: '.checkout-success',
      numeroPedido: '.order-number'
    }
  }

  // Ações - Informações de Envio
  preencherInformacoesEnvio(dadosEnvio) {
    if (dadosEnvio.email) {
      this.digitar(this.elementos.campoEmail, dadosEnvio.email)
    }
    
    this.digitar(this.elementos.campoNome, dadosEnvio.nome)
    this.digitar(this.elementos.campoSobrenome, dadosEnvio.sobrenome)
    
    if (dadosEnvio.empresa) {
      this.digitar(this.elementos.campoEmpresa, dadosEnvio.empresa)
    }
    
    this.digitar(this.elementos.campoEndereco, dadosEnvio.endereco)
    this.digitar(this.elementos.campoCidade, dadosEnvio.cidade)
    
    cy.get(this.elementos.seletorEstado).select(dadosEnvio.estado)
    this.digitar(this.elementos.campoCep, dadosEnvio.cep)
    cy.get(this.elementos.seletorPais).select(dadosEnvio.pais)
    this.digitar(this.elementos.campoTelefone, dadosEnvio.telefone)
  }

  selecionarMetodoEnvio(indice = 0) {
    cy.get(this.elementos.metodosEnvio).eq(indice).click()
  }

  prosseguirParaPagamento() {
    this.clicar(this.elementos.botaoProximo)
  }

  selecionarMetodoPagamento(indice = 0) {
    cy.get(this.elementos.metodosPagamento).eq(indice).click()
  }

  finalizarPedido() {
    this.clicar(this.elementos.botaoFinalizarPedido)
  }

  realizarCheckoutCompleto(dadosEnvio) {
    this.preencherInformacoesEnvio(dadosEnvio)
    this.selecionarMetodoEnvio()
    this.prosseguirParaPagamento()
    this.aguardarCarregamento()
    this.selecionarMetodoPagamento()
    this.finalizarPedido()
  }

  obterNumeroPedido() {
    return cy.get(this.elementos.numeroPedido).invoke('text')
  }

  verificarCheckoutSucesso() {
    cy.get(this.elementos.mensagemSucesso)
      .should('be.visible')
      .and('contain', 'Thank you for your purchase')
  }

  verificarResumoCarregado() {
    this.verificarElementoVisivel(this.elementos.resumoPedido)
    this.verificarElementoVisivel(this.elementos.totalPedido)
  }
}

export default CheckoutPage
