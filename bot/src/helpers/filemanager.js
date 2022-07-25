const fs = require("fs");

function addToJSON(message) {
    console.log(message);
    console.log("Writing to ", process.cwd);
    let jsonObject = {
        note: message,
        time: new Date()
    }
    fs.readFile("./journal.json", 'utf8', function (err, data) {
      let json = JSON.parse(data);
      json.data.push(jsonObject);
      fs.writeFileSync("./journal.json", JSON.stringify(json));
    });
}

module.exports =  {
    addToJSON
}