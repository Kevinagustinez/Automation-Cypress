@GX-2096
Feature: Nombre de la US(Corta)  Es el nombre de la USER STORY

    Background:
        #@PREC_GX-2095
        Given Usuario inicia sesion con una cuenta registrada
        And usuario agrega un producto al SC
        And usuario entra en el SCP

    @TC_GX-2094
    Scenario Outline: Gherkin Practice
        Given uper esta en UPEX Galaxy
        When uper solicita un "<review>"
        Then Ely se pondra la capa
        And procedera a hacer el "<review>" amigablemente
        Examples:
            | review       |
            | Code Review  |
            | Story Review |
            | TC Review    |
            | Git Review   |

    Scenario: TC2
        Given Start to type your Given step here
        When Start to type your When step here
        Then Start to type your Then step here
        And Start to type your And step here
        Examples:
            | Header 1 | Header 2 | Header 3 |
            | Value 1  | Value 2  | Value 3  |

    Scenario: Usuario añade un producto simple del PLP al Shopping-Cart exitosamente
        Given el usuario se sitúe en el PLP
        When hace click sobre el botón “Add To Cart” ubicado en la parte inferior de las Cartas Simples de la PLP
        Then encima de la imagen del Producto Simple elegido, aparece un mensaje de loading por unos segundos: “ADDING TO CART…”
        And luego en su lugar, aparece otro mensaje por unos segundos de que el producto ha sido añadido exitosamente: “SUCCESSFULLY ADDED TO YOUR SHOPPING CART”
        And encima del Listado de Productos aparece un ícono de shopping-cart y un mensaje de tipo banner indicando: “View Cart Product successfully added to your cart.”
        And dentro del mensaje, se visualiza un enlace en la palabra “View Cart”