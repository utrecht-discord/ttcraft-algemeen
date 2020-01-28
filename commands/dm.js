const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Speler niet gevonden.");

    var bericht = args[1];

    if(bericht){ 
        return message.channel.send(`Het bericht is verstuurd naar ${user}!`);
    } else if(!bericht) return message.channel.send(`Geef ook een bericht mee om te sturen naar ${user}!`);


    user.send(bericht);

    

}


module.exports.help = {
    name: "dm"
}