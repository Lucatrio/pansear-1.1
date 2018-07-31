const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor("36393F")
        .addField(`Fun`, 'ascii - ascii your text\navatar - see your avatar')
        .addField(`Moderation`, 'ban - ban any member you please\nkick - kick any member you please')
        .addField(`Informational`, `dbl - see any bot's dbl page\ngay - see your gay rate\nguild - see your guild info\nguilds - see all guilds ${client.user.username} is connected to\nstatistics - see statistics about ${client.user.username}`)
        .addField(`Pokemon`, `pokemon - say any pokemon's name for a gif`)
        .addField(`Image`, `meme - see a random meme`);
    message.channel.send(embed);
}

module.exports.help = {
    name: "help"
}