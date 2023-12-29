const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl :'http://192.168.50.161/login-client',
    excludeSpecPattern :['**/1-getting-started','**/2-advanced-examples'],
    specPattern : 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

  },
});
