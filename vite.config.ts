import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      "/api": {
        // target: "https://smoke-shop-68y5q.ondigitalocean.app",
        target: "http://localhost:8080",
      },
    },
  },
})
