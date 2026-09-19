// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  // Pages stay prerendered. Only Keystatic's /keystatic and /api/keystatic
  // routes run on demand, which is why the site needs an adapter.
  output: 'static',
  adapter: vercel(),
  // React powers the admin UI only; public pages ship no React.
  integrations: [react(), keystatic()],
  vite: {
    optimizeDeps: {
      // Keystatic's API route imports the virtual `astro:env/server` module,
      // which Vite's dependency pre-scan cannot resolve. It only runs
      // server-side, so keep it out of the client pre-bundle.
      exclude: ['@keystatic/astro/api'],
    },
  },
  prefetch: { prefetchAll: true },
  site: 'https://portfolio-rho-khaki-rqp9hckq00.vercel.app',
});
