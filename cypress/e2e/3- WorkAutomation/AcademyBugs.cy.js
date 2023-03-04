describe('US-1 : Academy | PLP | Sorting | Clasificar y Ordenar el PLP según 7 categorías',function(){
    beforeEach('Usuario debera estar ubicado en el sector "FIND BUGS"',function(){
        cy.visit('https://academybugs.com/find-bugs/')
        cy.url().should('include', '/find-bugs')
    })

    it('US-1 | TC#01 : Validar Clasificar el resultado de productos por la categoria "Price Low-High',function(){        
        cy.get("div #sortfield").select(0)
        cy.get('select').select(1)
        cy.get('.academy-product-description-wrapper').eq(0).should('contain','15')
    })

    it('US-1 | TC#02 : Validar Clasificar el resultado de productos por la categoría "Price High-Low"',function(){
        cy.get("div #sortfield").select(0)
        cy.get('select').select(2)
        cy.get('.academy-product-description-wrapper').eq(0).should('contain','478')
    })

    it('US-1 | TC#03 : Validar Clasificar el resultado de productos por la categoría "Title A-Z',function(){
        cy.get("div #sortfield").select(0)
        cy.get('select').select(3)
        cy.get('.test_title').eq(0).should('contain.text','Anchor Bracelet')
    })

    it('US-1 | TC#04 : Validar Clasificar el resultado de productos por la categoría "Title Z-A',function(){
        cy.get("div #sortfield").select(0)
        cy.get('select').select(4)
        cy.get('.test_title').eq(0).should('contain.text','White Underground Tshirt')
    })
    
    it('US-1 | TC#05 : Validar Clasificar el resultado de productos por la categoría "Newest',function(){
        cy.get("div #sortfield").select(0)
        cy.get('select').select(5)
        cy.get('.test_title').eq(0).should('contain.text','Denim Coat')
    })
    
    it('US-1 | TC#06 : Validar Clasificar el resultado de productos por la categoría "Best Rating',function(){
        cy.get("div #sortfield").select(0)
        cy.get('select').select(6)
        cy.get('.test_title').eq(0).should('contain.text','Blue Hoodie')
    })

    it('US-1 | TC#07 : Validar Clasificar el resultado de productos por la categoría "Most Viewed',function(){
        cy.get("div #sortfield").select(0)
        cy.get('select').select(7)
        cy.get('.test_title').eq(0).should('contain.text','DNK Yellow Shoes')
    })

    it('US-1 | TC#08 : Validar Clasificar el resultado de productos por la categoría "Default Sorting',function(){
        cy.get("div #sortfield").select(0)
        cy.get('select').select(0)
        cy.get('.test_title').eq(0).should('contain','DNK')
    })
})