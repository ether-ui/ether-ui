#!/usr/bin/env node

const postcss = require("postcss");
const postcssConfig = require("./postcss.config");
const fs = require("fs");
const prefixer = require("postcss-prefixer");

const filenames = require("./config/filenames");
const config = require("./etherui.config");

const grid = require("./src/generators/grid");
const colors = require("./src/generators/colors");
const helpersSpacers = require("./src/generators/helpers-spacers");
const themes = require("./src/generators/themes");

helpersSpacers(config);
grid(config);
colors(config);
themes(config);

let pcss = fs.readFileSync("./src/_index.pcss");
let pcssTW = fs.readFileSync("./src/_index.tailwind-compatibility.pcss");

if (config.legacyPrefix) {
  postcssConfig.plugins.push(prefixer({ prefix: config.legacyPrefix }));
} else {
  pcss += "\n" + fs.readFileSync("./src/body-styles.pcss");
  pcssTW += "\n" + fs.readFileSync("./src/body-styles.pcss");
}

/**
 * Build Main File
 */
postcss(postcssConfig.plugins)
  .process(pcss, {
    from: "./src/_index.pcss",
    to: filenames.min,
  })
  .then((result) => {
    fs.writeFile(filenames.min, result.css, () => {});
    // TODO add source maps
    //  result.map.toJSON() //=> { version: 3, file: 'a.css', … }
  });

/**
 * Build Tailwind Compatibility File
 */
postcss(postcssConfig.plugins)
  .process(pcssTW, {
    from: "./src/_index.pcss",
    to: filenames["min-tw-comp"],
  })
  .then((result) => {
    fs.writeFile(filenames["min-tw-comp"], result.css, () => {});
  });
