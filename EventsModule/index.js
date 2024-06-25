
const EventEmitter =  require("events");
const event = new EventEmitter();

event.on('saymyname',()=>{
    console.log("My name is Hariom\"");
});
event.on('saymyname',()=>{
    console.log("My name is Kumar\"");
});
event.on('saymyname',()=>{
    console.log("My name is Harry\"");
});
event.on('saymyname',()=>{
    console.log("My name is Potter\"");
});
  
event.emit("saymyname"); 
event.on('checkPage', (sc,msg)=>{ //simply like function define
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit("checkPage", 200, "ok");//AND this is like function call