const express = require('express');
const http = require('http');

const app = express();
const port = 3000;
const host = 'localhost';



app.use((req,res,next)=>{
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader("Content_Type","text/html");
    res.end("<html><body><h1>Hello World!!</h1></body></html>")
});

const server =  http.createServer(app);
server.listen(port,host,()=>
{
    console.log(`Server is running at ${host}:${port}}`);
});