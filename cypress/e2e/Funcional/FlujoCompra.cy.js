// Importa el Page Object saucePage desde el archivo saucePage.js para reutilizar métodos.
import { saucePage } from '../../support/SaucePage';

// Define el conjunto de pruebas E2E para el flujo de compra en SauceDemo.
describe('Flujo de compra en Sauce', () => 
{
  // Define un caso de prueba para completar todo el proceso de compra.
  it('Debería completar el flujo de compra correctamente', () => {

    cy.visit('https://www.saucedemo.com/');  

    // Inicia sesión con las credenciales dadas.
    saucePage.login('standard_user', 'secret_sauce');

    // Agrega dos productos específicos al carrito de compras.
    saucePage.addProductToCart('Sauce Labs Backpack');
    // saucePage.addProductToCart('Sauce Labs Bike Light');
    
    // Procede al checkout ingresando la información solicitada.
    saucePage.proceedToCheckout('Michael', 'Ayala', '12345');
    
    // Verifica que el mensaje de confirmación de la orden sea visible.
    saucePage.verifyOrder();
  });
});
