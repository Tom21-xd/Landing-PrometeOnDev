import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel"; //
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://prometeondev.com",
  output: "server", 
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    ssr: {},
  },
  integrations: [sitemap()],
});
