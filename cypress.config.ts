import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: false,
    screenshotOnRunFailure: false,
    baseUrl: 'http://localhost:3000',
    video: false,
    viewportWidth: 1280,
    viewportHeight: 800,
  },
});
