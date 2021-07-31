/// <reference types="node" />
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript from '@rollup/plugin-typescript'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'vue3-flip-toolkit': resolve(__dirname, 'lib'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'index',
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'flip-toolkit'],
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          'flip-toolkit': 'flipToolkit',
        },
      },
      plugins: [
        typescript({
          target: 'es2016',
          rootDir: resolve(__dirname, 'lib'),
          sourceMap: false,
          declaration: true,
          declarationDir: resolve(__dirname, 'dist'),
          exclude: [
            resolve(__dirname, 'node_modules/**'),
          ],
          include: [
            resolve(__dirname, 'lib/**'),
          ],
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
})
