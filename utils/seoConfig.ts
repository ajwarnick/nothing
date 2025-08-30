// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://void.anthonywarnick.com", // Change this to your production URL.
	description:
		"Void - asocial network", // Change this to be your website's description.
	type: "website",
	image: {
		url: "public/light-icons/icon-512x512.png", // Change this to your website's thumbnail.
		alt: "Void logo", // Change this to your website's thumbnail description.
		width: 512,
		height: 512
	},
	siteName: "Void", // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	}
}
