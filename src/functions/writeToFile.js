const fs = require("fs");
const prettier = require("prettier");
const path = require("path");

module.exports = function writeToFile(filename, contents) {
  fs.writeFile(
    path.resolve(__dirname, "../../", filename),
    prettier.format(contents, { parser: "css" }),
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
};
