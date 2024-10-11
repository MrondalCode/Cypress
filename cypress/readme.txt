--Pasoso para la ejecucion 
1.- Clonar el repositorio: 
git clone https://github.com/MrondalCode/Cypress.git
2.- Instala las dependencias: Asegúrate de tener Node.js instalado. Ejecuta el siguiente comando para instalar todas las dependencias:
npm install
3.- Instala Mochawesome:
npm i --save-dev cypress-mochawesome-reporter
4.- ejecucion de script
Prueba Apis ejecute: npx cypress run --spec cypress/e2e/Apis/testApi.cy.js --browser chrome --headed
Prueba Funcional ejecute: npx cypress run --spec cypress/e2e/Funcional/FlujoCompra.cy.js --browser chrome --headed
