/// <reference types="node" />
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      outputDir: 'types',
    }),
    vue(),
  ],
  resolve: {
    alias: {
      'vue3-flip-toolkit': resolve(__dirname, 'lib'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'Vue3FlipToolkit',
      formats: ['es', 'umd', 'iife'],
      fileName: format => `index.${format === 'iife' ? 'min' : format}.js`
    },
    rollupOptions: {
      external: ['vue', 'flip-toolkit'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'flip-toolkit': 'FlipToolkit',
        },
      },
    },
  },
})
