var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use('/public', express.static(__dirname + '/assets'));

app.get('/', function(req, res){
  res.sendFile('index.html', {root: path.join(__dirname, './views')});
});

app.get(/^(.+)$/,function(req, res){
  try {
    if(fs.statSync(path.join(__dirname, './views', req.params[0]+'.html')).isFile()){
      res.sendFile(req.params[0]+'.html', {root: path.join(__dirname, './views')});
    }
  }catch(e){
    res.sendFile('404.html', {root: path.join(__dirname, './views')});
  }
});

app.listen(3000, function(){
  console.log("This server running on port 127.0.0.1:3000");
});
