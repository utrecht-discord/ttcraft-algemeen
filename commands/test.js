const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send(`Hallo ${message.author}! TTCraft bestaat nog hoor!:white_check_mark:`);

}

module.exports.help = {
    name: "test",
    description: "Test of Utrecht nog bestaat."
}