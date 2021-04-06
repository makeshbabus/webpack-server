var express = require('express');

var app = express();

var port = 9020;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/dist'))

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/dist/test.html')
})

app.get('*',(req,res)=>{
    res.sendFile(__dirname+'/dist/test.html')
})

module.exports = app;
app.listen(port, () => console.log(`App listening on port ${port}!`));