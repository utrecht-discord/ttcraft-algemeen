const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

try {


    var help = new discord.RichEmbed()
    .setTitle("Bot status: _100%_")
    .setDescription("Bot werkt volledig!")
    .setColor("#FF0000")

    message.author.send(help);

    message.channel.send("Je kan de status van de bot vinden in je DM!").then(message => message.delete(5000));

    message.delete((5000))




} catch (error) {
    message.channel.send("Er is wat fout gegaan.");
}



}


module.exports.help = {
    name: "status"
}