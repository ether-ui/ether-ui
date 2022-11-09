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
        <h2 class="font-bold mb-2" id="installation">Installation</h2>
        <p class="text-slategray-600" style="font-size: 1.25rem">
          EtherUI is a modern CSS UI kit which tries to be very simple and
          lightweight, yet powerful and extensible. The package ships with
          <span class="font-bold">no JavaScript</span> and there are no complicated
          build steps, using EtherUI in your project is incredibly simple, you could
          be using it within few seconds!
        </p>
        <hr />
        <p>
          There are multiple ways to use EtherUI, as the UI kit is just a single CSS
          file. <br />
          EtherUI is a combination of semantic CSS classes (e.g. btn), but it also
          ships with a limited (sensible) amount utility classes. Utility classes
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
        need the flexiblity of all utility classes, i wholeheartedly recommend using
        TailwindCSS <span class="font-bold">alongside</span> EtherUI. In fact,
        EtherUI is built with this in mind! In order to eliminate duplicated helper
        classes and minimize you end build file, you should include
        <a
            href="https://github.com/ether-ui/ether-ui/blob/main/dist/ether-ui.tw-comp.min.css"
        >ether-ui.tw-comp.min.css</a
        >
        instead of the original EtherUI file

        <h5 class="mt-8 mb-2 font-bold" id="legacy">Legacy Mode</h5>
        EtherUI acknowledges the struggles of real world legacy web apps. Want to
        use it in your 12 year old legacy back-office app? No worries, EtherUI got
        you covered!
        <br />
        Make sure to create a <code>etherui.config.js</code> file in your project's
        root with the following contents:
        <pre><code v-highlight class="scss" v-html="code[3]"></code></pre>
        Then run
        <pre><code v-highlight class="bash">npm etherui</code></pre>
        And you will receive built css files which you should use:
        <pre><code v-highlight class="txt" v-html="code[4]"></code></pre>


        When you use one of these file,
        <span class="font-bold">all classes</span> will have the
        <code>mycss-</code>
        Literally all of EtherUI css classes will have that prefix, e.g.
        <code>mycss-row</code>, <code>mycss-col</code> etc.<br />
        Prefix itself is, of course, customizable, you can use any other prefix in
        your config file. If you would like to configure EtherUI further, take a
        look at the <NuxtLink to="/configuration">configuration page</NuxtLink>.
      </div>
    </template>
  </e-page>
</template>

<script>
import EPage from "../components/EPage";
export default {
  components: {EPage},
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
        `./public/ether-ui.min.css
./public/ether-ui-tw-comp.min.css`,
      ],
    };
  },
};
</script>
