const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

try {


    var rules = new discord.RichEmbed()
    .setTitle("Regels:")
    .setDescription(" ``Algemene Regels`` \n\n Niet pesten! \n Niet schelden. \n Luister naar staff leden! \n Heb respect voor elkaar! \n Niet spamen. \n geen staff tagen. \n\n ``Spraak kanaal``  \n\n Gebruik geen Voice Changer. \n Niet blazen in je mic \n Geen seksuele geluiden maken \n Speel geen muziek af (Launge & Spraakkanaal 1/2) \n Niet pesten! \n  Niet schelden \n  Heb respect! \n\n ``Ticket regels`` \n\n Niet AFK gaan tijdens een open ticket. \n Heb respect in je ticket. \n Niet brutaal doen. \n Niet schelden \n")
    .setColor("#FF0000")
    .setFooter("Regels TTCraft")

    message.author.send(rules);

    message.channel.send("De regels staan in je DM.").then(m => message.delete(5000));




} catch (error) {
    message.channel.send("Er is wat fout gegaan.");
}



}


module.exports.help = {
    name: "regels"
}