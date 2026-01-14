import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:"0.0.0.0",
    port:5174
  }
})
//docker build -t admin-app .
//docker build -t client-app .
//docker run -p 5173:5173 admin-app
// docker run -p 5174:5174 client-app
