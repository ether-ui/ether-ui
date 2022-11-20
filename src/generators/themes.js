const writeToFile = require("../functions/writeToFile");

/**
 * @param {EtherUIConfig} config
 */
module.exports = function themes(config) {
  let output = "";
  for (const [key, theme] of Object.entries(config.themes)) {
    output += `
    :root[data-ether-theme="${key}"] {
      --neutral: var(--${theme["neutral"]});
      --neutral-content: var(--${theme["neutral-content"]});
      --primary: var(--${theme["primary"]});
      --primary-content: var(--${theme["primary-content"]});
      --secondary: var(--${theme["secondary"]});
      --secondary-content: var(--${theme["secondary-content"]});
      --tertiary: var(--${theme["tertiary"]});
      --tertiary-content: var(--${theme["tertiary-content"]});
      --base-0: var(--${theme["base-0"]});
      --base-50: var(--${theme["base-50"]});
      --base-100: var(--${theme["base-100"]});
      --base-200: var(--${theme["base-200"]});
      --base-content-light: var(--${theme["base-content-light"]});
      --base-content: var(--${theme["base-content"]});
      --base-content-heavy: var(--${theme["base-content-heavy"]});
      --rounded-radius: ${theme["rounded-radius"]};
    }
    `;
  }

  writeToFile(`./src/themes.pcss`, output);
};
