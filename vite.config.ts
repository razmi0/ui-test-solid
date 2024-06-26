import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// import devtools from 'solid-devtools/vite';
// import solid from "vite-plugin-solid"; // or solid-start/vite

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    solidPlugin(),
    // solid(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
