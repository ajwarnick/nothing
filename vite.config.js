import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";
import vercel from 'vite-plugin-vercel';
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), vercel(), VitePWA({ 
    registerType: 'autoUpdate',
    injectRegister: "inline",

    manifest: {
      name: 'nothing',
      short_name: 'nothing',
      description: 'nothing',
      theme_color: '#ffffff',
      display: "fullscreen",

      icons: [
        {
          src: "icons/icon-48x48.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "icons/icon-128x128.png",
          sizes: "128x128",
          type: "image/png"
        },
        {
          src: "icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "icons/icon-152x152.png",
          sizes: "152x152",
          type: "image/png"
        },
        {
          src: "icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "icons/icon-256x256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png"
        },
        {
          src: "icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ],
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],

  root: './',
    build: {
        outDir: 'dist',
    },
    publicDir: 'assets'
})
