const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  retries: 2,
  reporter: [['html', { open: 'never' }]],
  use: {
    headless: true,   // Run in headless mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
});
