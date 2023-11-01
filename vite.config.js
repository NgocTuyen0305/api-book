import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
export default defineConfig(() => {
  return {
    root: "src",
    server: {
      host: "0.0.0.0",
      port: 5000,
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
