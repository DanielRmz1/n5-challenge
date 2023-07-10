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
			name: "rick-morty-remote",
			filename: "rickAndMorty.js",
			exposes: {
				"./RickAndMorty": "./src/components/RickAndMorty/index.tsx",
			},
			shared: ["react", "react-dom", "swr"],
		}),
	],
	preview: {
		host: "localhost",
		port: 5002,
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
