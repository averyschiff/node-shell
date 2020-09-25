const fs = require('fs');
 
module.exports = function head(fileName, done){
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) done('something went wrong');
    else{
      let lines = data.split('\n');
      done(lines.slice(0,10).join("\n"));
    }
  });
}
