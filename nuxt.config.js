export default {
  srcDir: "docs/",
  generate: {
    dir: '.output'
  },
  head: {
    title: "EtherUI Docs",
    meta: [{ charset: "utf-8" }],
    htmlAttrs: {
      "data-ether-theme": "ether-light",
    },
  },
  modules: [
    ['nuxt-highlightjs', {
      style: 'atom-one-dark'
    }]
  ]
};
