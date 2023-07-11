import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsChecker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
	base: "",
	plugins: [
		react(),
		federation({
			name: "host",
			remotes: {
				remotePokemon: "http://localhost:5001/assets/pokemon.js",
				remoteRickAndMorty:
					"http://localhost:5002/assets/rickAndMorty.js",
			},
			shared: [
				"react",
				"react-dom",
				"react-intl",
				"styled-components",
				"swr",
			],
		}),
		tsconfigPaths(),
		tsChecker({ typescript: true }),
	],
	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
});
