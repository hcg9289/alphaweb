import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 每次 build 注入時間戳，確保 JS/CSS bundle URL 唯一，強制瀏覽器重新下載
const BUILD_TS = Date.now();

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        open: true,
    },
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name]-[hash]-${BUILD_TS}.js`,
                chunkFileNames: `assets/[name]-[hash]-${BUILD_TS}.js`,
                assetFileNames: `assets/[name]-[hash]-${BUILD_TS}.[ext]`,
            }
        }
    }
})
