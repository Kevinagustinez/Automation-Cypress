Feature: Administrar Usuarios (ESS) en el sistema de gestión de una empresa de forma básica

    Feature Description
    
    Background:
        Given: El administrador este dentro del sistema de gestión de una empresa
        And: Se le autoasigne un perfil de administrador por defecto
        And: Esté situado en el módulo PIM

        Scenario 01: Administrador incorpora un nuevo usuario (ESS) al sistema de gestión
        And: Hace click sobre el botón "Add Employee" OR "ADD"
        And: Rellena todos los datos requeridos (incluyendo credenciales)
        When: Hace click en el botón "Save"
        Then: Se agrega el nuevo usuario a la lista
        And: Se muestra la página con los detalles personales del perfil del usuario creado

        Scenario 02: Administrador busca el perfil de un empleado
        And: Hace click sobre el botón "Employee List"
        And: Selecciona un empleado existente OR escribe alguno de sus datos en buscador
        When: Hace click en el botón "Search"
        Then: Encuentra el empleado especificado
        And: Hace click sobre el para ver más detalle
        And: Se muestra la página con los detalles personales del perfil

        Scenario 03: Administrador elimina el perfil de un empleado
        And: Hace click sobre el botón "Employee List"
        And: Selecciona un empleado existente a través del "Check List button"
        When: Hace click en el botón "Delete"
        Then: Se elimina el empleado seleccionado
        And: Deja de existir en la lista

        Scenario 04: Administrador edita el perfil de un empleado
        And: Hace click sobre el botón "Employee List"
        And: Selecciona un empleado existente OR escribe en el buscador algunos de sus datos hasta encontrarlo
        When: Hace click en el botón "Edit"
        And: Se modifican los campos
        And: Hace click en el botón "Save"
        Then: Se guardan todos los datos editados
        And: Aparece un "Log Message" que dice "Successfully Saved"