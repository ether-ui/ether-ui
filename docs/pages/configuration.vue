<template>
  <e-page>
    <template v-slot:sidebar>
      <p class="text-base-content-light">Table of Contents</p>
      <ul class="list-none m-0 p-0 list-toc">
        <li>
          <a href="#colors">Colors</a>
        </li>
        <li>
          <a href="#themes">Themes</a>
        </li>
        <li>
          <a href="#legacy">Legacy Prefix</a>
        </li>
      </ul>
    </template>
    <template v-slot:content>
      <div>
        <h2 class="font-bold mb-2">Configuration</h2>
        <p class="text-slategray-600" style="font-size: 1.25rem">
          To configure EtherUI all you need is Node.js installed locally on your
          dev machine, you don't need webpack or Vite, or any other tool. That
          is because configuring EtherUI basically means that you get to rebuild
          it yourself with your options.<br />
          And with very low amount of dependencies, rebuilding locally should be
          very fast and it should guarantee minimal or no issues on pretty much
          every machine.
        </p>
        <hr />
        <p>
          In order to configure EtherUI, start by creating a file called
          <code>etherui.config.js</code> in your project's root folder, with the
          following contents:
        </p>

        <pre><code v-highlight class="js">module.exports = {

}</code></pre>
        When you are done with configuration it (more info below), you need to
        run
        <pre><code v-highlight class="bash">npx etherui</code></pre>
        And you will receive
        <pre><code v-highlight class="bash">./dist/ether-ui.min.css
./dist/ether-ui-tw-comp.min.css</code></pre>

        You are free to take the file which you plan on using (standard, or
        <NuxtLink to="/#tailwind">Tailwind Compatibility</NuxtLink> file), move
        it and/or integrate it into whichever build process you are using, and
        then you can delete the dist folder altogether if you don't need the
        file there.
        <h5 class="mt-8 mb-2 font-bold" id="colors">Colors</h5>
        <pre><code v-highlight class="js">const etherColors = require("@ether-ui/ether-ui/config/colors.js");

let myColors = {
  ...etherColors,
  ...{
    "mycolor": "#ff0000",
    "megagreen": "#00ff00",
  }
};

module.exports = {
  colors: myColors
};</code></pre>
        <p>
          It is advised to import the default colors and extend the object with
          your own colors so that you still keep all of the original
          <NuxtLink to="/colors">colors</NuxtLink>. Removing them could also
          cause themes to malfunction.
        </p>
        <p>
          When you rebuild EtherUI, essentially you'll get the following things:
        </p>
        <ul>
          <li>
            <code>var(--mycolor)</code> and <code>var(--megagreen)</code>
            <a
              href="https://www.w3schools.com/css/css3_variables.asp"
              target="_blank"
            >
              CSS variables</a
            >
            that you can use in your CSS
          </li>
          <li>
            <code>.bg-mycolor</code> and <code>.bg-megagreen</code> CSS classes
            that you can use in your HTML
          </li>
          <li>
            <code>.text-mycolor</code> and <code>.text-megagreen</code> CSS
            classes that you can use in your HTML
          </li>
          <li>
            <code>.border-mycolor</code> and <code>.border-megagreen</code> CSS
            classes that you can use in your HTML
          </li>
        </ul>
        The names of the classes should be self-explanatory. <br />

        Read on in the <NuxtLink to="/colors">colors</NuxtLink> section to find
        out more about EtherUI colors as well.
        <h5 class="mt-8 mb-2 font-bold" id="themes">Themes</h5>
        <pre><code v-highlight class="js">const etherThemes = require("@ether-ui/ether-ui/config/themes.js");

let myThemes = {
  ...etherThemes,
  ...{
    "my-custom-theme": {
      "neutral": "slategray-600",
      "neutral-content": "slategray-100",
      "primary": "indigo-500",
      "primary-content": "white",
      "secondary": "citrus-600",
      "secondary-content": "citrus-100",
      "tertiary": "cerise-800",
      "tertiary-content": "cerise-200",

      "base-0": "white",
      "base-50": "slategray-50",
      "base-100": "slategray-100",
      "base-200": "slategray-200",
      "base-content-light": "slategray-500",
      "base-content": "black-700",
      "base-content-heavy": "black-900",
      "rounded-radius": "0.25rem",
    },
  },
};

module.exports = {
  themes: myThemes,
};</code></pre>
        <p>
          To use your new theme, you will need to apply the following data-
          attribute to your HTML
        </p>

        <pre><code v-highlight class="html" >&lt;html data-ether-theme="my-custom-theme"></code></pre>
        Read on in the <NuxtLink to="/themes">themes</NuxtLink> section to find
        out what is each color for.<br />
        Colors <span class="font-bold">must</span> be defined as references to
        <span class="font-bold">existing</span> colors (i.e. color names).<br />
        So if you want to add a theme which uses non-ether colors, you first
        need to define that color and then use it in a theme. <br />
        Here's a full example:
        <pre><code v-highlight class="js">const etherColors = require("@ether-ui/ether-ui/config/colors.js");
const etherThemes = require("@ether-ui/ether-ui/config/themes.js");

let myColors = {
  ...etherColors,
  ...{
    mycolor: "#ff0000",
  },
};

let myThemes = {
  ...etherThemes,
  ...{
    "my-custom-theme": {
      neutral: "mycolor",
      "neutral-content": "slategray-100",
      primary: "indigo-500",
      "primary-content": "white",
      secondary: "citrus-600",
      "secondary-content": "citrus-100",
      tertiary: "cerise-800",
      "tertiary-content": "cerise-200",

      "base-0": "white",
      "base-50": "slategray-50",
      "base-100": "slategray-100",
      "base-200": "slategray-200",
      "base-content-light": "slategray-500",
      "base-content": "black-700",
      "base-content-heavy": "black-900",
      "rounded-radius": "0.25rem",
    },
  },
};

module.exports = {
  colors: myColors,
  themes: myThemes,
};</code></pre>
      </div>
    </template>
  </e-page>
</template>
<script>
import EPage from "~/components/EPage";
export default {
  head() {
    return {
      title: "Configuration - EtherUI",
    };
  },
  components: { EPage },
};
</script>
