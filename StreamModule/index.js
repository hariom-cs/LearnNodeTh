const fs  = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request",(req, res)=>{
    //1st Way- this is not at all effective bq we download all the data and load to server
    fs.readFile("input.txt", (err, data)=>{
        if (err) return console.error(err);
        res.end(data.toString());
    });



    // // 2nd way-- this is effective (it load  in stream manner)
    // const rstream = fs.createReadStream("input.txt");

    // rstream.on("data",(chunkdata)=>{
    //     res.write(chunkdata);
    // });
    // rstream.on("end",()=>{
    //     res.end();
    // });
    // rstream.on('error',(err)=>{
    //     console.log(err);
    //     res.end ("file not find");
    // });
});

//to start server
server.listen(8000, "127.0.0.1");