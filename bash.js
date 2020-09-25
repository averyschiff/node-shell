const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");
const date = require("./date");
const echo = require("./echo");
const head = require("./head");
const tail = require("./tail");
const sort = require("./sort");
const wc = require("./wc");
const uniq = require("./uniq");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");

  if (cmd[0] == "pwd") {
    pwd(done);
  } else if (cmd[0] == "ls") {
    ls(done);
  } else if (cmd[0] == "cat") {
    cat(cmd[1], done);
  } else if (cmd[0] === "curl") {
    curl(cmd[1], done);
  } else if (cmd[0] === "date") {
    date(done);
  } else if (cmd[0] === "echo") {
    echo(cmd[1], done);
  } else if (cmd[0] === "head") {
    head(cmd[1], done);
  } else if (cmd[0] === "tail") {
    tail(cmd[1], done);
  } else if (cmd[0] === "sort") {
    sort(cmd[1], done);
  } else if (cmd[0] === "wc") {
    wc(cmd[1], done);
  } else if (cmd[0] === "uniq") {
    uniq(cmd[1], done);
  }
});

const done = (output) => {
  process.stdout.write(output);

  process.stdout.write("\nprompt > ");
};
