import adapter from '@sveltejs/adapter-node'; // <--- EZ A FONTOS SOR
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter() // <--- ÉS EZ A BEÁLLÍTÁS
  }
};

export default config;
