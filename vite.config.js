import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/main.js",
      name: "test-component",
      // the proper extensions will be added
      fileName: "test-component",
    },
  },
  // the following breaks the build process
  // define: {
  //   "process.env": process.env
  // }
})
