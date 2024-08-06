const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      projectId: "pee5ii",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
