const writeToFile = require("../functions/writeToFile");

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
.bg-${key} {background: var(--${key}) !important}
.text-${key} {color: var(--${key}) !important}
.border-${key} {border-color: var(--${key}) !important}
.hover\\:bg-${key}:hover {background: var(--${key}) !important}
.hover\\:text-${key}:hover {color: var(--${key}) !important}
.hover\\:border-${key}:hover {border-color: var(--${key}) !important}
.focus\\:bg-${key}:focus {background: var(--${key}) !important}
.focus\\:text-${key}:focus {color: var(--${key}) !important}
.focus\\:border-${key}:focus {border-color: var(--${key}) !important}
.focus\\:border-${key}:focus {border-color: var(--${key}) !important}
.form-${key} {
  input[type="checkbox"]:checked, input[type="radio"]:checked::before  {
    background-color: var(--${key}) !important;
  }
  input:focus, textarea:focus, input[type="checkbox"]:checked, input[type="radio"]:checked {
    border-color: var(--${key}) !important;
  }
  &:focus-within {
    label {
      color: var(--${key}) !important;
    }
  }
}\n`;
  }

  writeToFile("./src/colors.pcss", output);
};
