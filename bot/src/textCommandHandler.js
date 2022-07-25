const fm = require("./helpers/filemanager")
const helpCard = require("./adaptiveCards/helpCommand.json");
const { MessageBuilder } = require("@microsoft/teamsfx");
const fs = require("fs");

class TextCommandHandler {
  triggerPatterns = new RegExp(".*");

  async handleCommandReceived(context, message) {
    // verify the command arguments which are received from the client if needed.
    console.log(`Bot received message: ${message.text}`);

    // do something to process your command and return message activity as the response
    fm.addToJSON(message.text);
    // let jsonObject = {note: message.text}
    // fs.readFile("./journal.json", 'utf8', function (err, data) {
    //   let json = JSON.parse(data);
    //   json.data.push(jsonObject);
    //   fs.writeFileSync("./journal.json", JSON.stringify(json));
    // });

    // render your adaptive card for reply message
    const cardData = {
      title: "JotBot",
      body: "Some information on how to use the bot",
    };

    return MessageBuilder.attachAdaptiveCard(helpCard, cardData);
  }
}

module.exports = {
  TextCommandHandler,
};
