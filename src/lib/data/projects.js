// src/lib/data/projects.js

export const projects = [
	{
		title: 'My Resume',
		url: '/', // Link internal
		image: '/images/Resume-thumbnail.png', // Pastikan path image dimulai dengan slash '/'
		description: 'A Resume for a Web Development Project: Progress in Motion!',
		technologies: ['Svelte', 'TailwindCss'] // Kosongkan jika tidak ada tags
	},
	{
		title: 'Garlid Adventure',
		url: 'https://garlidadventure.com/',
		image: '/images/Garlid-thumbnail.png',
		description:
			'A WordPress Landing Page with WooCommerce for Rental, Laundry, and Repair Services!',
		technologies: ['WooCommerce']
	}
];
