const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8repu8',
  chromeWebSecurity:false,
  e2e: {
    setupNodeEvents(on, config) {
    // implement node event listeners here
    },
  },
});


require('@applitools/eyes-cypress')(module);
