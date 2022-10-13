const fs = require("fs");
const prettier = require("prettier");

/**
 * @param {EtherUIConfig} config
 */
module.exports = function colors(config) {
  let output = ":root {\n";
  for (const [key, value] of Object.entries(config.colors)) {
    output += `--${key}: ${value};\n`;
  }
  output += "}\n";

  for (const [key, value] of Object.entries(config.colors)) {
    output += `
.bg-${key} {background: var(--${key})};
.text-${key} {color: var(--${key})};
.border-${key} {border-color: var(--${key})};
.hover\\:bg-${key}:hover {background: var(--${key})};
.hover\\:text-${key}:hover {color: var(--${key})};
.hover\\:border-${key}:hover {border-color: var(--${key})};
.focus\\:bg-${key}:focus {background: var(--${key})};
.focus\\:text-${key}:focus {color: var(--${key})};
.focus\\:border-${key}:focus {border-color: var(--${key})};
.focus\\:border-${key}:focus {border-color: var(--${key})};
    `;
  }

  fs.writeFile(
    "./src/colors.css",
    prettier.format(output, { parser: "css" }),
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
};
