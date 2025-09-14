import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'void.app',
  appName: 'void',
  webDir: 'dist/client',
  server: {
    "androidScheme": "https",
    "url": "http://localhost:4321/",
    "cleartext": true
  }
};

export default config;
