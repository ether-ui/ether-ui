const fs = require("fs");
const prettier = require("prettier");

/**
 * @param {EtherUIConfig} config
 */
module.exports = function grid(config) {
  let output = `
.container-fluid {
    width: 100%;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.gap-16 {
    gap: 16px;
}

.gap-24 {
    gap: 16px;
}

.gap-32 {
    gap: 32px;
}

.gap-64 {
    gap: 32px;
}

.col {
    flex: 1 0 0;
    background: red;
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

  fs.writeFile(
    "./src/grid.css",
    prettier.format(output, { parser: "css" }),
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
};
