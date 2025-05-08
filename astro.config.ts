import { defineConfig } from "astro/config";
import { VitePWA } from 'vite-plugin-pwa';

// Astro integration imports
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// Helper imports
import { seoConfig } from "./utils/seoConfig";

import vercel from "@astrojs/vercel";

export default defineConfig({
  site: seoConfig.baseURL,

  integrations: [
      sitemap(),
      compress()
	],

  devToolbar: {
      enabled: false
	},
  vite: {
    optimizeDeps: {
      include: ['@glidejs/glide'],
    },
	},

  adapter: vercel()
})