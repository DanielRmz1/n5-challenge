import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tsChecker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		tsChecker({ typescript: true }),
		federation({
			name: "pokemon-remote",
			filename: "pokemon.js",
			exposes: {
				"./Pokemon": "./src/components/Pokemon/index.tsx",
			},
			shared: [
				"react",
				"react-dom",
				"react-intl",
				"styled-components",
				"swr",
			],
		}),
	],
	preview: {
		host: "localhost",
		port: 5001,
		strictPort: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	},
	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
});
