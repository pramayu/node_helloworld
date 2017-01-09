var fs = require('fs');

fs.mkdir('assets', function(){
  fs.readFile('package.json', 'utf8', function(err, data){
    fs.writeFile('./assets/write.json', data);
  });
});

fs.unlink('./assets/write.json', function(){
  fs.rmdir('assets');
});
