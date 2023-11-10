describe('Testando o site do Inatel', () => {

  it('Caso de teste: Realizando um login no moodle com falha', ()=>{
    cy.visit('https://moodle.inatel.br/login/index.php')
    cy.get('#username').type('error')
    cy.get('#password').type('error')
    cy.get('#loginbtn').click()
    cy.get('.alert').should('contain.text', 'Nome de usuário ou senha errados. Por favor tente outra vez.')
}) 

})

