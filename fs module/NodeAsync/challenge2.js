//#6 CRUD OPERATION on asynchronous file (Create Read Update Delete)

//create a folder name bio.txt and data inot it
//create a file into it and name "bio.txt"
//Add more data into the file at the end of the existing data.
//read data without getting buffer data 
//rename the file name to "mybio.txt"
//now delete both the file and the folder

const fs=require("fs")
// fs.mkdir("Hariom",(err)=> {console.log("Folder created")});//run  only one time //folder created
// fs.writeFile("./Hariom/bio.txt","My name is Hariom Kumar", (err)=>{ //file created and updated with some data
//     console.log("file created!");
// });
fs.readFile("./Hariom/bio.txt","utf-8",(err,data)=>{ //file read
    console.log(data);
});

fs.appendFile("./Hariom/bio.txt","Gaya College Of Engineering", (err)=>{
    console.log("file  appended");
});

fs.rename("./Hariom/bio.txt","./Hariom/mybio.txt",(err)=>{
    console.log("File Renamed");
})
fs.readFile("./Hariom/bio.txt","utf-8",(err,data)=>{
    console.log(data);
})

fs.unlink("./Hariom/bio.txt",(err)=>{
    console.log("file  Deleted");
})