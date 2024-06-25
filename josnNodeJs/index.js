const biodata={
    name:"Hariom",
    age:22,
    college:"GCE Gaya",
}
// JSON.stringify turns a JavaScript object into JSON text and stores that JSON text in a string eg:
const josnData= JSON.stringify(biodata);
// // JSON.parse turns a string of JSON text into a JavaScript object, eg:
// const objData= JSON.parse(josnData);
const fs= require("fs");
fs.writeFile("Json1.json",josnData,(err)=>{//json data ko "json1.json" me write kiye
    console.log("data write: Done");
});
fs.readFile("json1.json","utf-8",(err, data)=>{
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});

