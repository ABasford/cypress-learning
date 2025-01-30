import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/',
    defaultCommandTimeout: 10000,
    excludeSpecPattern: ['**/1-getting-started/**', '**/2-advanced-examples/**'],
    
  },
  
}


);
