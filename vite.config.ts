import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import viteCompression from 'vite-plugin-compression'
import externalGlobals from "rollup-plugin-external-globals"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions:{
          // 如果不想让编译器解析这个自定义标签
          isCustomElement: tag => tag.startsWith('lottie-player')
        }
      }
    }),
    // 使用 gzip 来压缩资源.
    viteCompression(),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve("./src")
      }
    ]
  },
  server: {
    host: "0.0.0.0",
    port: 3000
  },
  // 打包
  build: {
    // 指定输出路径 (相对于 项目根目录).
    outDir: "demo",
    assetsDir: "assets",
    rollupOptions: {
      plugins: [
        //此项只会在打包的文件中使用，未打包状态下的dev模式中不会走这里
        externalGlobals({
          // 如果您想过滤掉包导入，例如import ElementPlus from 'element-plus'
          //其中key就是你引入的时候的名字，value就是引入的那个第三方库的全局变量名字
          vue: "Vue",
          'vue-router': 'VueRouter',
          axios: 'axios',
          'element-plus': "ElementPlus",
          'element-plus/dist/index.css': 'element-plus/dist/index.css',
          echarts: 'echarts',
          'vue-echarts': 'VueECharts',
          pinia: "Pinia",
          '@lottiefiles/lottie-player': "@lottiefiles/lottie-player"
        })
      ]
    }
  },
})
