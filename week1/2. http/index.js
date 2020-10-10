//  importing modules
const http = require('http');
const path = require('path');
const fs = require('fs');

// variables
const hostname = ('localhost');
const port = 3000;

// creating the server
const server = http.createServer((req,res)=>
{
    console.log(`Request for the URL ${req.url} by the method ${req.method}`);

    if(req.method  == "GET")
    {
        // define File URL
        var fileURL;
        if(req.url =='/')
        {
            fileURL = '/index.html';
        }
        else
        {
            fileURL = req.url
        }

        // defining file path
        var filepath = path.resolve('./public'+fileURL);

        // chech the file is exist or not
        var fileExt = path.extname(filepath);
        if(fileExt == '.html')
        {
            fs.exists(filepath,(exist)=>
            {
                if(!fs.exists)
                {
                    res.statusCode = 404;
                    res.setHeader('Content_Type','text/html');
                    res.end('<html><body><h1>Error 404: ' + fileUrl + 
                    ' not found</h1></body></html>');
                    return;
                }
                else
                {
                    res.statusCode = 200;
                    res.setHeader('Content_Type','text/html');
                    fs.createReadStream(filepath).pipe(res);
                }
            });
        }

    }
    else 
    {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method + 
                ' not supported</h1></body></html>');
    }
});

server.listen(port,hostname,()=>
{
    console.log(`The server is running at ${hostname}:${port}`);
});