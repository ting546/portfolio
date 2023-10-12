import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";
import vitePluginRequire from 'vite-plugin-require'



export default defineConfig({
  plugins: [
    vue(),
    vitePluginRequire.default(),
  ],
  resolve: {
    alias: [{ find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) }, { find: "@img", replacement: fileURLToPath(new URL("./src/assets/img", import.meta.url)) }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/mixins.scss";',
      },
    },
  },
});
