const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "nap7v8",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
