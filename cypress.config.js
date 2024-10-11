module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    pageLoadTimeout: 30000, // 120 segundos
    setupNodeEvents(on, config) {
      // implementar los event listeners aquí si es necesario
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
};


