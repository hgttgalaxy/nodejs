const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

//누군가가 /pet 으로 방문을 하면.. 
//pet 관련된 안내문을 띄어주자

app.get('/pet', function(req, res){
    res.send('냐오오옹');
});

app.get('/beauty', function(req, res){
    res.send('립스틱');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});