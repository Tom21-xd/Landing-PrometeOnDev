import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    ssr: {},
  },
});
