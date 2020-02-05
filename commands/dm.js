const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen staff leden kunnen dit.").then(m => message.delete(5000));

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Speler niet gevonden.");

    var bericht = args.join(" ").slice(22);

    var berichtStuur = new discord.RichEmbed()
        .setDescription("Bericht")
        .setColor("#FF0000")
        .addField("U heeft een bericht ontvangen van: ", message.author)
        .addField("Bericht: ", bericht)
        .setFooter("ttcraft dm system");
user.send(berichtStuur);

    if(bericht){ 
        var berichtSucces = new discord.RichEmbed()
        .setDescription("Bericht succesvol gestuurd!")
        .setColor("#FF0000")
        .addField("U heeft een bericht gestuurd naar: ", user)
        .addField("Bericht: ", bericht);
        return message.channel.send(berichtSucces);
    } else if(!bericht) return message.channel.send(`Geef ook een bericht mee om te sturen naar ${user}!`);

    

}


module.exports.help = {
    name: "dm"
}