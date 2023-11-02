import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: ["src/tests/e2e/**/*.cy.ts", "src/tests/e2e/**/*.spec.ts"],
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
