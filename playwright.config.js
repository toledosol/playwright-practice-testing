const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
});