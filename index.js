#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const postcssConfig = require("./postcss.config");
const prefixer = require("postcss-prefixer");

const filenames = require("./config/filenames");
let config = require("./default.config");

const grid = require("./src/generators/grid");
const colors = require("./src/generators/colors");
const helpersSpacers = require("./src/generators/helpers-spacers");
const themes = require("./src/generators/themes");

/**
 * Load userland config, if any, and merge with defaults
 */
let userConfigPath = path.resolve(process.cwd(), "etherui.config.js");
if (fs.existsSync(userConfigPath)) {
  const userConfig = require(userConfigPath);
  config = { ...config, ...userConfig };
}

/**
 * Construct CSS
 */
console.info(
  "[EtherUI] Building PostCSS files out of config and generators..."
);
helpersSpacers(config);
grid(config);
colors(config);
themes(config);

let pcss = fs.readFileSync(path.resolve(__dirname, "./src/_index.pcss"));
let pcssTW = fs.readFileSync(
  path.resolve(__dirname, "./src/_index.tailwind-compatibility.pcss")
);

if (config.legacyPrefix) {
  postcssConfig.plugins.push(prefixer({ prefix: config.legacyPrefix }));
} else {
  pcss +=
    "\n" + fs.readFileSync(path.resolve(__dirname, "./src/body-styles.pcss"));
  pcssTW +=
    "\n" + fs.readFileSync(path.resolve(__dirname, "./src/body-styles.pcss"));
}

try {
  fs.mkdirSync("./dist");
} catch (e) {
  // do nothing, means folder already exists
}
console.info("[EtherUI] Building final CSS files");
/**
 * Build Main File
 */
postcss(postcssConfig.plugins)
  .process(pcss, {
    from: path.resolve(__dirname, "./src/_index.pcss"),
    to: filenames.min,
  })
  .then((result) => {
    fs.writeFile(filenames.min, result.css, (e) => {
      if (e) {
        console.error(e);
      } else {
        console.info(
          `[EtherUI] Built ${path.resolve(process.cwd(), filenames.min)}`
        );
      }
    });
    // TODO add source maps
    //  result.map.toJSON() //=> { version: 3, file: 'a.css', … }
  });

/**
 * Build Tailwind Compatibility File
 */
postcss(postcssConfig.plugins)
  .process(pcssTW, {
    from: path.resolve(__dirname, "./src/_index.pcss"),
    to: filenames["min-tw-comp"],
  })
  .then((result) => {
    fs.writeFile(filenames["min-tw-comp"], result.css, (e) => {
      if (e) {
        console.error(e);
      } else {
        console.info(
          `[EtherUI] Built ${path.resolve(
            process.cwd(),
            filenames["min-tw-comp"]
          )}`
        );
      }
    });
  });
