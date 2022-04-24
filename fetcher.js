const fs = require('fs');
const request = require('request');
const myArgs = process.argv.slice(2);
const url = myArgs[0];
const path = myArgs[1];

request.get(url, function (err, response, body) {
  if(err) {
    console.log(`Error: ${response}`)
  }
  fs.writeFile(path, body, function () {
    const bytes = body.length
    console.log(`Downloaded and saved ${bytes} bytes to ${path}`)
  });
})