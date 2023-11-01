import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import {resolve} from 'path'
export default defineConfig(() => {
    return {
        root: "src",
        server: {
            host: '0.0.0.0',
            port: 5000,
        },
        build: {
            ssr: "index.ts",
            outDir: "../dist",
            emptyOutDir: true,
            minify: true
        },
        plugins: [
            ...VitePluginNode({
                adapter: "express",
                appPath: "./src/app.js",
                exportName: "viteNodeApp",
                tsCompiler: "esbuild",
                swcOptions: {},
            }),
        ],
          resolve: {
            alias: {
                "@": resolve(__dirname, "src"),
            },
        },
        optimizeDeps: {
            include: ['**/*.js'],
        }
    };
});
