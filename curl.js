const request = require("request");

module.exports = function curl(url, done) {
  request(url, function (err, response, body) {
    done(body);
    // process.stdout.write("\nprompt > ");
  });
};
