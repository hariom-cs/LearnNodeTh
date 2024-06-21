const path=require("path")
const pathdata=path.dirname('C:/Users/hario/OneDrive/Desktop/FJP5/nodeThapa/path module/path.js');
console.log(pathdata);
const extensionName= path.extname('C:/Users/hario/OneDrive/Desktop/FJP5/nodeThapa/path module/path.js');
console.log(extensionName);
const fileName= path.basename('C:/Users/hario/OneDrive/Desktop/FJP5/nodeThapa/path module/path.js');
console.log(fileName);
const FullInfo = path.parse('C:/Users/hario/OneDrive/Desktop/FJP5/nodeThapa/path module/path.js');
console.log(FullInfo);