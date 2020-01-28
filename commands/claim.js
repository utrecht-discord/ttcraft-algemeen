const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 

    message.delete();
    // Id van category van tickets.
    const categoryId = "661293576826781706";
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Jij kunt dit niet doen!");
    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID !== categoryId) {

        return message.channel.send("Gelieve dit commando in een ticket kanaal te doen.");
 
    }
 
    var icon = message.author.displayAvatarURL;

    var embedClaimTicket = new discord.RichEmbed()
        .setTitle("Hoi, " + message.channel.name)
        .setDescription(`Je ticket is geclaimed door: ${message.author}. \nWil je als staff de ticket overnemen, vraag dat dan aan ${message.author}!`)
        .setColor("#FF0000")
        .setThumbnail(icon)
        .setFooter("ticket geclaimed");
 
    // Vind kanaal voor de logs.
 
    return message.channel.send(embedClaimTicket);
    
 
}
 
module.exports.help = {
    name: "claim",
    description: "claim een ticket"
}