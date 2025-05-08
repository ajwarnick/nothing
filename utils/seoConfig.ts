// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://example.com", // Change this to your production URL.
	description:
		"Astro PWA Starter is an opionated Astro starter for building robust static websites.", // Change this to be your website's description.
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630", // Change this to your website's thumbnail.
		alt: "OpenGraph thumbnail description.", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: "Astro PWA Starter", // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	}
}
