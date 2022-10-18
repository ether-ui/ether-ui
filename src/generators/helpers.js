const writeToFile = require("../functions/writeToFile");

module.exports = function helpers(config) {
  let output = `
.flex {display: flex};
.rounded-min {border-radius: 0.25rem}
.rounded-max {border-radius: 1.5rem}
.font-bold {font-weight: 700}
`;

  for (let i = 0; i < 10; i++) {
    let space = i / 4;

    output += `
.p-${i} {padding: ${space}rem}    
.pl-${i} {padding-left: ${space}rem}    
.pr-${i} {padding-right: ${space}rem}    
.pt-${i} {padding-top: ${space}rem}    
.pb-${i} {padding-bottom: ${space}rem}    
.px-${i} {padding-left: ${space}rem; padding-right: ${space}rem}    
.py-${i} {padding-top: ${space}rem; padding-bottom: ${space}rem}

.m-${i} {margin: ${space}rem}    
.ml-${i} {margin-left: ${space}rem}    
.mr-${i} {margin-right: ${space}rem}    
.mt-${i} {margin-top: ${space}rem}    
.mb-${i} {margin-bottom: ${space}rem}    
.mx-${i} {margin-left: ${space}rem; margin-right: ${space}rem}    
.my-${i} {margin-top: ${space}rem; margin-bottom: ${space}rem}  
`;
  }
  writeToFile("./src/helpers.pcss", output);
};
