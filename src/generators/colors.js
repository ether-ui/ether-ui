const writeToFile = require("../functions/writeToFile");
const types = [
  "primary",
  "secondary",
  "tertiary",
  "base-0",
  "base-50",
  "base-100",
  "base-200",
  "base-content-light",
  "base-content",
  "base-content-heavy",
];

/**
 * @param {EtherUIConfig} config
 */
module.exports = function colors(config) {
  let output = ":root {\n";
  for (const [key, value] of Object.entries(config.colors)) {
    output += `--${key}: ${value};\n`;
  }
  output += "}\n";

  for (let i = 0; i < types.length; i++) {
    output += `
    .bg-${types[i]} {background: var(--${types[i]}) !important}
    .text-${types[i]} {color: var(--${types[i]}) !important}
    .border-${types[i]} {border-color: var(--${types[i]}) !important}
  `;
  }

  for (const [key, value] of Object.entries(config.colors)) {
    output += `
    .bg-${key} {background: var(--${key}) !important}
    .text-${key} {color: var(--${key}) !important}
    .border-${key} {border-color: var(--${key}) !important}
    `;
  }

  writeToFile("./src/colors.pcss", output);
};
