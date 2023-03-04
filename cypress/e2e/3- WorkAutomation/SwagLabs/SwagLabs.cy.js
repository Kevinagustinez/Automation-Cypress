describe('Enter in the Page Swag Labs',function(){
    beforeEach('Precondicion',function(){
        cy.LoginPage()
    })
    it('Type the values of UserName and Password',function(){
        cy.login()
    })
})