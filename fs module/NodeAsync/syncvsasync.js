const fs=require("fs");

// //synchronous file ->serve the data in First Call First Serve manners
// fs.writeFileSync("read.txt","this is the synchronus file");
// const dataread=fs.readFileSync("read.txt","utf-8");
// console.log("after the data");


//asynchronous file-> serve the data which come FIRST no  matters when did they call
fs.writeFile("read.txt","this is the synchronus file",(err)=>{
    console.log("file created!");
});
const dataread=fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log("this is the asynchronous file");
});
console.log(" after the asynchrounous");