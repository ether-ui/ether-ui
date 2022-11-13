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
    max-width: 1400px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.row > * {
    width: 100%;
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

`;

  let dimensions = [{ suffix: "", width: "" }];
  for (const [key, value] of Object.entries(config.breakpoints)) {
    dimensions.push({ suffix: key, width: value });
  }
  for (let i = 0; i < dimensions.length; i++) {
    let suffix = dimensions[i].suffix ? "-" + dimensions[i].suffix : "";

    if (suffix) {
      output += `@media (min-width: ${dimensions[i].width}px) {\n`;
    }

    for (let i = 0; i <= 12; i++) {
      if (i === 0) {
        output += `
.col${suffix} {
    flex: 1 0 0%;
    max-width: 100%;
    min-width: 0;
}
`;
      } else {
        let calc = ((i / 12) * 100).toFixed(2);
        output += `
.col${suffix}-${i} {
    flex: 0 0 ${calc}%;
    max-width: ${calc}%;
}
`;
      }
    }

    if (suffix) {
      output += `}\n`;
    }
  }

  writeToFile("./src/grid.pcss", output);
};
