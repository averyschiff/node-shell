const fs = require('fs');
 
module.exports = function head(fileName, done){
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) done('something went wrong');
    else{
      let lineCount = data.split('\n').length;
      console.log(data.split(' '));
      let wordCount = data.split(' ').length;
      done(lineCount + ' ' + wordCount)
    }
  });
}
