const fs = require("fs");

module.exports = function cat(fileName, done) {
  fs.readFile(fileName, function (err, data) {
    done(data);
  });
};
