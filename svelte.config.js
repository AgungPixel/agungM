import adapter from '@sveltejs/adapter-cloudflare'; // <--- PENTING: Pakai adapter-cloudflare
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto diganti dengan adapter-cloudflare
		adapter: adapter()
	}
};

export default config;
