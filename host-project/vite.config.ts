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
			name: "host-app",
			remotes: {
				remotePokemon: "http://localhost:5001/assets/pokemon.js",
			},
			shared: ["react", "react-dom"],
		}),
		tsconfigPaths(),
		tsChecker({ typescript: true }),
	],
});
