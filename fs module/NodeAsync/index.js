const fs =  require("fs");
fs.writeFile("asyncFile.txt","this is the asynchronous file in the data 😊",(err)=>{
    console.log("file Is Created");
    console.log(err);
});

//we pass them a function as an argument- a callback-
//that gets called when that task completes.
//The callback has an argument that tells you weather the operation completed successfully.
//Now we need to say what to do when "fs.writeFile" has completed (even if its nothing),and start checking for errors.

fs.readFile("asyncFile.txt","UTF-8",(err,data)=>{//to write callback function is very important ->IF ANY ERROR OCCURS IT THROW ERROR(ERR) OTHERWISE RETURN THE (DATA)
    console.log(data);
})