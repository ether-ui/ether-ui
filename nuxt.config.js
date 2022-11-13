export default {
  srcDir: "docs/",
  generate: {
    dir: ".output",
  },
  head: {
    title: "EtherUI Docs",
    meta: [
      { charset: "utf-8" },
      { viewport: "width=device-width, initial-scale=1.0" },
    ],
    htmlAttrs: {
      "data-ether-theme": "ether-light",
    },
  },
  modules: [
    [
      "nuxt-highlightjs",
      {
        style: "atom-one-dark",
      },
    ],
  ],
};
