const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
    },
    supportFile: 'cypress/support/component.js', // Change to false to disable support file if not needed
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: true,
    screenshotOnRunFailure: false,
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
