const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

try {


    var help = new discord.RichEmbed()
    .setTitle("Commands:")
    .setDescription("**Speler commands:** \n ?regels - Bekijk de regels van de server. \n ?credits - Bekijk de bot makers. \n ?hallo - Stuurt hallo terug. \n ?bug - Meld een bug. \n ?help - Krijg dit bericht. \n ?ip - Stuurt het server IP. \n ?level - Stuurt je huidige chat-level. \n ?ping - Stuurt de chat-vertraging. \n ?review - Beoordeel de server. \n ?serverinfo - Stuurt de informatie van deze server. \n ?status - Kijk of de bot af is. \n ?test - Test of de bot nog online is. \n\n\n\n **Ticket Commands:** \n ?ticket [onderwerp] - Maak een ticket aan. \n\n **Staff Ticket Commands:** \n ?close [reden] - Sluit een ticket. \n ?claim - Claim een ticket. \n ?claim2 - Neem een ticket over. \n\n\n\n **Staff Commands:** \n ?ban - Verban iemand van de Discord server. \n ?clear - Verwijder een bepaald aantal berichten. \n ?dm - Stuur iemand een privé bericht. \n ?kick - Gooi iemand uit de Discord server. \n ?say [bericht] - Laat de bot jouw bericht sturen. \n ?warn - Waarschuw iemand. \n\n\n **__Maak voor meer vragen een ticket aan!__**")
    .setColor("#FF0000")
    .setFooter("Play.ttcraft.eu");

    message.author.send(help);

    message.channel.send("De commands staan in je DM.");




} catch (error) {
    message.channel.send("Er is wat fout gegaan.");
}



}


module.exports.help = {
    name: "help"
}
