describe('Testando o site do Inatel', () => {

  it('Caso de teste: Realizando um login no moodle com falha', ()=>{
    cy.visit('https://moodle.inatel.br/login/index.php')
    cy.get('#username').type('error')
    cy.get('#password').type('error')
    cy.get('#loginbtn').click()
    cy.get('.alert').should('contain.text', 'Nome de usuário ou senha errados. Por favor tente outra vez.')
}) 
  it('Teste de Página Inicial', () => {
    cy.visit('https://inatel.br/home/');
    cy.title().should('eq', 'Instituto Nacional de Telecomunicações - Inatel')
})
  it('Teste aba cursos', () => {
    cy.visit('https://inatel.br/vestibular/');
    cy.contains('Cursos').click();
    cy.contains('Engenharia Biomédica').click();
    cy.url().should('include', '/engenharia-biomedica');
})
  it('3. Teste de Navegação', () => {
    cy.visit('https://inatel.br/home/');
    cy.contains('Conheça o Inatel ').click();
    cy.url().should('include', '/quem-somos');
})
  it('Teste aba Pos', () => {
    cy.visit('https://inatel.br/home/');
    cy.contains('Especialização').click();
})
  it('Exibe o logotipo do INATEL', () => {
    cy.visit('https://inatel.br/home/')
    cy.wait(10000) // Aguarda 10 segundos para o carregamento da página
    cy.get('.slickComTexto > picture > img')
})

})

