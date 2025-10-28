// @ts-check
import { defineConfig } from '@playwright/test';

const config = ({
  // projects: [{}],
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'on',
    trace: 'on',
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
});
module.exports = config;