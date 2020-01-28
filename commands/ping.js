const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send("Pong! " +  client.ping + "ms");

}

module.exports.help = {
    name: "ping",
    description: "Test de chatvertraging."
}