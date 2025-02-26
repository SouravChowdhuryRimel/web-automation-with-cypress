const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin; // FIXED IMPORT

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature", // Support for Cucumber feature files
    async setupNodeEvents(on, config) {
      // Setup Cucumber Preprocessor
      await addCucumberPreprocessorPlugin(on, config);

      // Setup Esbuild Preprocessor (✅ Correct Plugin Import)
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));

      return config;
    },
  },
});
