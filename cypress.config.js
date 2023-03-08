const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8repu8',
  chromeWebSecurity:false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: { 
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    // implement node event listeners here
    },
  },
});


require('@applitools/eyes-cypress')(module);
