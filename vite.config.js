import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.vue', '.js', '.ts', '.jsx', '.tsx', '.json','.less','.css'],
    alias: {
      '@': resolve(__dirname,'src')
    }
  },
  server: {//
    open: true,
    host: 'localhost',
    port: 3000,
    cors: true,// 允许跨域
    // proxy: { // api接口代理 
    //   '/api': {
    //     target: 'http://127.0.0.1:9502',
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, '')
    //   }
    // }
  },
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: true
        }),// ant design vue  按需加载
      ]
    })
  ]
})
