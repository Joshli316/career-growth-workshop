const { defineConfig } = require('@playwright/test');

const PORT = 4833;

module.exports = defineConfig({
  testDir: './tests',
  use: { baseURL: `http://localhost:${PORT}` },
  webServer: {
    command: `python3 -m http.server ${PORT}`,
    port: PORT,
    reuseExistingServer: false,
  },
});
