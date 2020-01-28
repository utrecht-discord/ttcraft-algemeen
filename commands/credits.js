const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

try {


    var help = new discord.RichEmbed()
    .setTitle("Credits:")
    .setDescription("Bot gemaakt door: @CrazyFedde#5655 & @Chris071_#0001")
    .setColor("#FF0000")
    .setFooter("System &  Engineering");

    message.author.send(help);

    message.channel.send("De credits staan in je DM.").then(m => message.delete(5000));




} catch (error) {
    message.channel.send("Er is wat fout gegaan.");
}



}


module.exports.help = {
    name: "credits"
}