//the http.createServer() method includes request and response parameters whichis supplied by node.js.

//http response status code- search and study
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

const http=require('http');
const { type } = require('os');
const server=http.createServer((req, res)=>{
    // console.log(req.url);
    if (req.url=="/") {
        res.end("Hello form the home side");
    }
    else if(req.url=="/contact"){
        res.end("response from the contact");
    }
    else if(req.url=="/about"){
        res.end("response from the about");
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>Error 404: Page Not Found</h1>")
    }
    // res.end('Hello from the other sides');
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});