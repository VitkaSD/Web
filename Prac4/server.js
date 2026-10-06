const http = require('http');
const fs = require('fs');
const { startHeapProfile } = require('v8');


const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req,res) =>{

    console.log(`Req adress: ${req.url}`);

    const filePath = req.url.substring(1);

    const menu = `
    <a href="/index.html">Main</a>
    <a href="/about.html">About</a>
    `
    
    fs.readFile(filePath,(err,data) =>{
        if(err){
            res.statusCode = 404;
            res.end("Not found")
        }
        else{
            
            res.end(menu + data);
        }
    })
});

server.listen(port, hostname, () =>{
    console.log(`server is working at http://${hostname}:${port}/index.html`)
});