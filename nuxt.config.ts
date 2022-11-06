export default defineNuxtConfig({
  meta: {
    htmlAttrs: {
      "data-ether-theme": "ether-light",
    },
  },
  dir: {
    pages: "docs/pages",
    public: "docs/public",
    layouts: "docs/layouts",
  },
});
