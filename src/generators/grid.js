const writeToFile = require("../functions/writeToFile");

/**
 * @param {EtherUIConfig} config
 */
module.exports = function grid(config) {
  let output = `
.container-fluid {
    width: 100%;
}

.container {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.gap-1 {
    gap: 1rem;
}

.gap-1-5 {
    gap: 1.5rem;
}

.gap-2 {
    gap: 2rem;
}

.gap-3 {
    gap: 3rem;
}

.gap-4 {
    gap: 4rem;
}

.col {
    flex: 1 0 0;
}

`;

  for (const [key, value] of Object.entries(config.breakpoints)) {
    let suffix = key === "xs" ? "" : `${key}-`;
    if (suffix) {
      output += `@media (min-width: ${value}px) {\n`;
    }
    for (let i = 1; i < 12; i++) {
      output += `
.col-${suffix}${i} {
    flex: 0 0 ${((i / 12) * 100).toFixed(2)}%;
}
`;
    }
    if (suffix) {
      output += `}\n`;
    }
  }

  writeToFile("./src/grid.pcss", output);
};
