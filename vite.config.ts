import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  plugins: [
    tanstackStart({
      server: {
        entry: "server",
        preset: "vercel",
      },
    }),
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    host: "127.0.0.1",
  },
  ssr: {
    noExternal: [
      "@floating-ui/dom",
      "@floating-ui/core",
      "@floating-ui/react-dom",
      "@floating-ui/utils",
      "react-remove-scroll-bar",
      "react-style-singleton",
      "react-remove-scroll",
      /^@radix-ui\//,
    ],
  },
});
