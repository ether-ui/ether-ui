import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default defineNuxtPlugin((nuxtApp) => {
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("javascript", css);
  nuxtApp.vueApp.use(hljsVuePlugin);
});
