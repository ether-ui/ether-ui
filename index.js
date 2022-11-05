const postcss = require("postcss");
const postcssConfig = require("./postcss.config");
const fs = require("fs");
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

/**
 * Build Main File
 */
postcss(postcssConfig.plugins)
  .process(fs.readFileSync("./src/_index.pcss"), {
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
  .process(fs.readFileSync("./src/_index.tailwind-compatibility.pcss"), {
    from: "./src/_index.pcss",
    to: filenames["min-tw-comp"],
  })
  .then((result) => {
    fs.writeFile(filenames["min-tw-comp"], result.css, () => {});
  });
