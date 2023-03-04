Feature: US 1 | Clasificar y Ordenar el PLP según 7 categorías

    # As usuario web
    # I Want to clasificar el resultado de productos a mi gusto
    # So poder visualizar los mismos que más me interesan.
        Scenario: Usuario clasifica el resultado de productos por una categoría
            Given el usuario se sitúe en el PLP
            When hace click y abre el dropdown list de “Default Sorting” de las categorías: Price Low-High, Price High-Low, Title A-Z, Title Z-A, Newest, Best Rating, Most Viewed
            And elige una opción deseada de las desplegadas
            Then el listado de productos se cargará por unos segundos para aparecer ahora el listado de productos con la categoría seleccionada según su etiqueta y lógica (RULES SPEC)


