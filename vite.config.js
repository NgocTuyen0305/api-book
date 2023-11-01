import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
export default defineConfig(() => {
  return {
    root: "src",
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
    build: {
      ssr: "index.js",
      outDir: "dist",
      emptyOutDir: true,
      minify: true,
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
    optimizeDeps: {
      include: ["express"],
    },
  };
});
