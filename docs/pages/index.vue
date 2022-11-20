<template>
  <e-page>
    <template v-slot:sidebar>
      <p class="text-base-content-light">Table of Contents</p>
      <ul class="list-none m-0 p-0 list-toc">
        <li>
          <a href="#installation">Directly include CSS</a>
        </li>
        <li>
          <a href="#npm">NPM</a>
        </li>
        <li>
          <a href="#tailwind">Tailwind Compatibility Mode</a>
        </li>
        <li>
          <a href="#legacy">Legacy Mode</a>
        </li>
      </ul>
    </template>
    <template v-slot:content>
      <div>
        <div id="peki"></div>
        <h2 class="font-bold mb-2" id="installation">Installation</h2>
        <p class="text-slategray-600" style="font-size: 1.25rem">
          EtherUI is a modern CSS UI kit which tries to be very simple and
          lightweight, yet powerful and extensible. The package ships with
          <span class="font-bold">no JavaScript</span> and there are no
          complicated build steps, using EtherUI in your project is incredibly
          simple, you could be using it within few seconds!
        </p>
        <hr />
        <p>
          There are multiple ways to use EtherUI, as the UI kit is just a single
          CSS file. <br />
          EtherUI is a combination of semantic CSS classes (e.g. btn), but it
          also ships with a limited (sensible) amount utility classes. Utility
          classes
          <span class="font-bold">are named exactly the same</span> as in
          <a href="https://tailwindcss.com/" target="_blank">TailwindCSS.</a>
        </p>
        <h5 class="mt-8 mb-2 font-bold" id="css">Directly include CSS</h5>
        The simplest and fastest way is to grab the CSS file (<a
          class="font-bold"
          href="https://github.com/ether-ui/ether-ui/blob/main/dist/ether-ui.min.css"
          >ether-ui.min.css</a
        >) and include it in your HTML, along with the fonts:
        <pre><code v-highlight class="html">&lt;!DOCTYPE html>
&lt;html data-ether-theme="ether-light">
  &lt;head>
    &lt;title>My Awesome App&lt;/title>
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
    &lt;link rel="stylesheet" href="ether-ui.min.css" />
    &lt;link rel="preconnect" href="https://fonts.googleapis.com" />
    &lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    &lt;link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
  &lt;/head>
  &lt;!--...--></code></pre>
        EtherUI is currently optimized to be compatible with a free font called
        Public Sans font. You can either include it from Google's Fonts CDN
        (previewed above), or you can download it and selfhost it.

        <h5 class="mt-8 mb-2 font-bold" id="npm">NPM</h5>
        <pre><code v-highlight class="shell" v-html="code[1]" ></code></pre>
        <pre><code v-highlight class="scss" v-html="code[2]" ></code></pre>
        Do not forget to add the <code>data-ether-theme</code> attribute to your
        <code>&lt;html></code> tag!
        <pre><code v-highlight class="html" >&lt;html data-ether-theme="ether-light"></code></pre>

        <h5 class="mt-8 mb-2 font-bold" id="tailwind">
          Tailwind Compatibility Mode
        </h5>
        EtherUI comes with a limited set of
        <NuxtLink to="/helpers">utility classes</NuxtLink>, but not with all
        possible variants and combinations, as
        <a href="https://tailwindcss.com/">TailwindCSS</a>. If you feel like you
        need the flexiblity of all utility classes, i wholeheartedly recommend
        using TailwindCSS <span class="font-bold">alongside</span> EtherUI. In
        fact, EtherUI is built with this in mind! In order to eliminate
        duplicated helper classes and minimize you end build file, you should
        include
        <a
          href="https://github.com/ether-ui/ether-ui/blob/main/dist/ether-ui.tw-comp.min.css"
          >ether-ui.tw-comp.min.css</a
        >
        instead of the original EtherUI file.

        <h5 class="mt-8 mb-2 font-bold" id="legacy">Legacy Mode</h5>
        EtherUI acknowledges the struggles of real world legacy web apps. Want
        to use it in your 12 year old legacy back-office app? No worries,
        EtherUI got you covered!
        <br />
        Make sure to create a <code>etherui.config.js</code> file in your
        project's root with the following contents:
        <pre><code v-highlight class="scss" v-html="code[3]"></code></pre>
        Then run
        <pre><code v-highlight class="bash">npx etherui</code></pre>
        <div class="bg-dodgerblue-50 text-dodgerblue-700 p-4 mb-4">
          <p class="font-bold mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              style="width: 20px; vertical-align: text-bottom"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>

            Not using node/npm in your legacy project? No problem!
          </p>
          You can create a temporary empty project, install EtherUI with npm and
          continue following this guide. At the end you will receive final CSS
          files which you can include directly in your HTML
        </div>
        And you will receive built css files which you should use:
        <pre><code v-highlight class="txt" v-html="code[4]"></code></pre>

        When you use one of these files,
        <span class="font-bold">all EtherUI classes</span> will have the
        <code>ether-</code>.
        Literally all of EtherUI CSS classes will have that prefix, e.g.
        <code>.ether-row</code>, <code>.ether-col</code> etc. Prefix itself is,
        of course, customizable, you can use any other prefix in your config
        file. <br />
        Like for all other modes, you'll need to add the
        <pre><code v-highlight class="html" >&lt;html data-ether-theme="ether-light"></code></pre>
        to your HTML. This mode does not set any <code>body {}</code> styles,
        meaning that no font-family is specified globally to not mess up with
        your existing app font-family. You can try using EtherUI with your own
        font, or alternatively you can add this somewhere in your CSS
        <pre><code v-highlight class="css">[class^="ether-"] {
  font-family: "Public Sans", sans-serif;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0.005em;
  color: var(--base-content);
}</code></pre>
        And now only EtherUI elements will have the currently recommended Public
        Sans font.<br />
        If you would like to configure EtherUI further, take a look at the
        <NuxtLink to="/configuration">configuration page</NuxtLink>.
      </div>
    </template>
  </e-page>
</template>

<script>
import EPage from "../components/EPage";
export default {
  components: { EPage },
  head() {
    return {
      title: "Installation - EtherUI",
    };
  },
  data() {
    return {
      code: [
        ``,
        `npm i etherui --save-dev
npm i @fontsource/public-sans --save-dev`,
        `import '@fontsource/public-sans'
import '@ether-ui/dist/ether-ui.min.css'`,
        `module.exports = {
  legacyPrefix: 'mycss-'
}`,
        `./dist/ether-ui.min.css
./dist/ether-ui-tw-comp.min.css`,
      ],
    };
  },
  mounted() {
  }
};
</script>
