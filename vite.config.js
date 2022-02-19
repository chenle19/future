import { defineConfig } from 'vite'
// defineConfig 工具函数，这样不用 jsdoc 注解也可以获取类型提示：
import vue from '@vitejs/plugin-vue'
// Vue 3 单文件组件支持：@vitejs/plugin-vue
// Vue 3 JSX 支持：@vitejs/plugin-vue-jsx
// Vue 2 支持：underfin/vite-plugin-vue2
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    },
  },
  server: {
    host: '0.0.0.0'
  }
})
