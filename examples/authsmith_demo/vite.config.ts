import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    clearScreen: false,
    server: {
        host: true,
        port: 3000,
        strictPort: true,
        hmr: {
            protocol: "ws",
            host: "localhost",
            port: 3000,
            clientPort: 3000,
            overlay: true
        },
        watch: {
            ignored: ["**/src-*/**"]
        }
    },
    build: {
        outDir: "dist/wwwroot"
    }
});
