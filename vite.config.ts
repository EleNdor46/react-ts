import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

function pathResolve(dir: string) {
    return resolve(__dirname, ".", dir);
}

export default defineConfig({
    plugins: [
        react(),
        svgr({
            exportAsDefault: true,
        }),
    ],
    resolve: {
        alias: {
            "@": pathResolve("src"),
        },
    },
});
