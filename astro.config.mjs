// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Battleship — TP Frontend',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Français', lang: 'fr' },
			},
			components: {
				PageTitle: './src/components/overrides/PageTitle.astro',
			},
			sidebar: [
				{ label: 'Objectifs', slug: '' },
				{ label: '1. Introduction React.js', slug: 'intro' },
				{ label: '2. Afficher les navires', slug: 'affichage-navires' },
				{ label: '3. Authentification', slug: 'authentification' },
				{ label: '4. Positions des navires', slug: 'positions-navires' },
				{ label: '5. Création de la carte', slug: 'carte' },
				{ label: '6. Suite', slug: 'suite' },
			],
		}),
	],
});
