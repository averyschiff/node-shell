const fs = require('fs');
 
module.exports = function head(fileName, done){
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) done('something went wrong');
    else{
      let lines = data.split('\n');
      let ulines = [lines[0]]
      for (let i=0;i<lines.length;i++){
        if (i>0 && lines[i]!=lines[i-1]){
          ulines.push(lines[i]);
        }
      }
      done(ulines.join('\n'));
    }
  });
}
