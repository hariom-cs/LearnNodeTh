const fs= require("fs");
// fs.mkdirSync("thapa");//run one time only
fs.writeFileSync("bio.txt", "this is the first data in bio text file.");
fs.appendFileSync("bio.txt","\nthis is the append through append method.");
fs.renameSync("bio.txt","mybio.txt");

fs.unlinkSync("mybio.txt");//deleted

//read data without getting buffer data
