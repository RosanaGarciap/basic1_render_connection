//using express as web server

var express = require('express');
var app = express();

app.get('/name', (req,res) => {
    res.send('Rosana Garcia');
})

const port = 3000;
app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.port || port));