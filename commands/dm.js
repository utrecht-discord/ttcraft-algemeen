const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Speler niet gevonden.");

    var bericht = args.join(" ");

    if(!bericht){
        return message.channels.send("Geef ook een bericht mee!");
    } else message.channel.send("Het bericht is verstuurd naar ", user);


    user.send(bericht);

    

}


module.exports.help = {
    name: "dm"
}