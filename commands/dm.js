const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var author = message.author; 

    if(!author.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je moet staff zijn om dit te kunnen doen!");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Speler niet gevonden.");

    if(!args[1]) return message.channels.send("Geef ook een bericht mee!");

    var bericht = args.join(" ");

    

    user.send(bericht);


}


module.exports.help = {
    name: "dm"
}