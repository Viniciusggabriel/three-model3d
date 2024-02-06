import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  adapter: vercel(),
  imagesConfig: {
    sizes: [320, 640, 1280],
  },
});
