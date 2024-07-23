import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'


// // https://vitejs.dev/config/
// export default defineConfig(
//   {
//   plugins: [react()],
//   server: {
//     port: 3000,
//   }
// })

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env.API_URL': JSON.stringify(env.API_URL)
    },
    plugins: [react()],
  }
})