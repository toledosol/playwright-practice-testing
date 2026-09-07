const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    testIdAttribute : "data-test",
    trace: 'on-first-retry',
  },
});