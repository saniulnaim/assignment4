const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello Wosrld')
})

app.post('/index', function(req,res){
    const jsonResult = JSON.stringify(req.body.nameKey); // change  nameKey, depend on your postman key
    res.send(jsonResult);
});

app.listen(3000)


// need to install express, body-perser