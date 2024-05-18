export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  css: ["@/assets/styles/main.scss"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});
