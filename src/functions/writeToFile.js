const fs = require("fs");
const prettier = require("prettier");

module.exports = function writeToFile(filename, contents) {
  fs.writeFile(
    filename,
    prettier.format(contents, { parser: "css" }),
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
};
