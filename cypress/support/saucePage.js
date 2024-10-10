// Define una clase llamada SaucePage para encapsular los métodos relacionados con la página de SauceDemo.
class SaucePage {

  // Método para autenticar al usuario con nombre de usuario y contraseña.
  login(username, password) {
    cy.get('#user-name') // Selecciona el campo de nombre de usuario.
      .type(username); // Escribe el nombre de usuario en el campo.
    cy.get('#password') // Selecciona el campo de contraseña.
      .type(password); // Escribe la contraseña en el campo.
    cy.get('#login-button') // Selecciona el botón de inicio de sesión.
      .click(); // Hace clic en el botón para iniciar sesión.
  }

  // Método para agregar un producto al carrito utilizando su nombre.
  addProductToCart(productName) 
  {
    cy.contains(productName) // Busca el producto por su nombre en la página.
      .click(); // Hace clic en el nombre del producto para agregarlo al carrito.
  }

  // Método para proceder al checkout y completar el formulario de compra.
  proceedToCheckout(firstName, lastName, postalCode) {
    cy.get('.shopping_cart_link') // Selecciona el enlace del carrito de compras.
      .click(); // Hace clic en el enlace para ir al carrito.
    cy.get('[data-test="checkout"]') // Selecciona el botón de checkout.
      .click(); // Hace clic para iniciar el proceso de checkout.
    cy.get('[data-test="firstName"]') // Selecciona el campo de nombre.
      .type(firstName); // Escribe el nombre en el campo.
    cy.get('[data-test="lastName"]') // Selecciona el campo de apellido.
      .type(lastName); // Escribe el apellido en el campo.
    cy.get('[data-test="postalCode"]') // Selecciona el campo de código postal.
      .type(postalCode); // Escribe el código postal en el campo.
    cy.get('[data-test="continue"]') // Selecciona el botón de continuar.
      .click(); // Hace clic para continuar con el proceso.
    cy.get('[data-test="finish"]') // Selecciona el botón para finalizar la compra.
      .click(); // Hace clic para completar la compra.
  }

  // Método para verificar que la orden fue completada exitosamente.
  verifyOrder() {
    cy.contains('Thank you for your order!') // Busca el mensaje de confirmación.
      .should('be.visible'); // Asegura que el mensaje sea visible en la página.
  }
}

// Exporta una instancia de la clase SaucePage para su uso en otras pruebas.
export const saucePage = new SaucePage();
