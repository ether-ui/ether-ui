const config = require("./etherui.config");

const grid = require("./src/generators/grid");
const colors = require("./src/generators/colors");
const helpers = require("./src/generators/helpers");

helpers(config);
grid(config);
colors(config);
