import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";
import vitePluginRequire from "vite-plugin-require";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "/portfolio",
  plugins: [
    vue(),
    vitePluginRequire.default(),
    viteStaticCopy({
      targets: [
        // Копирование содержимого папки src в папку dist
        { src: "src/project", dest: "." },
      ],
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
      { find: "@img", replacement: fileURLToPath(new URL("./src/assets/img", import.meta.url)) },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/mixins.scss";',
      },
    },
  },
});
