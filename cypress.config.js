const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/index.html',
  },
  fixturesFolder: false,
  video: false,
});
