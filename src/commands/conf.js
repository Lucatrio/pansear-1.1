const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
        .setColor("36393F")
        .setAuthor(`${message.author.username}.js`);
    message.channel.send(embed);
}

module.exports.help = {
    name: "conf"
}