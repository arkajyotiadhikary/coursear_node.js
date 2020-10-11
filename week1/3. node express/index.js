const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./router/dishRouter')
const promRouter = require('./router/promotionRouter');
const leaderRouter = require('./router/leaderRouter');

const app = express();
const port = 3000;
const host = 'localhost';

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use('/dishes',dishRouter);
app.use('/promotions',promRouter);
app.use('/leaders',leaderRouter);


app.use((req,res,next)=>{
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader("Content_Type","text/html");
    res.end("<html><body><h1>File Not Found</h1></body></html>")
});


const server =  http.createServer(app);
server.listen(port,host,()=>
{
    console.log(`Server is running at ${host}:${port}}`);
});