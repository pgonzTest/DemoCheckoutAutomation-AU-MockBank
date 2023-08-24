const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    baseUrl: 'https://demo.banked.com/new',
    "defaultCommandTimeout": 10000,
    "retries": 1,
  },
});

