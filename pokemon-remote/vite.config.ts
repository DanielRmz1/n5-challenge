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
			name: "pokemon",
			filename: "pokemon.tsx",
			exposes: {
				"./Pokemon": "./src/components/Pokemon/index.tsx",
			},
			shared: ["react", "react-dom"],
		}),
	],
});

