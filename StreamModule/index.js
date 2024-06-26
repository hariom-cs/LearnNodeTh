const fs  = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request",(req, res)=>{
    fs.readFile("input.txt", (err, data)=>{
        if (err) return console.error(err);
        res.end(data.toString());
    });
});

//to start server
server.listen(8000, "127.0.0.1");