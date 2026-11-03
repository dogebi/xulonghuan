// React와 Tailwind를 연결하는 Vite 설정
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({base:'/xulonghuan/',plugins:[react(),tailwindcss()]})
