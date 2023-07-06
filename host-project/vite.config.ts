import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsChecker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
	base: "",
	plugins: [react(), tsChecker({ typescript: true })],
});
