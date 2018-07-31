const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let image = message.author.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        .setColor("36393F")
        .setImage(image);
    message.channel.send(embed);
}

module.exports.help = {
    name: "avatar"
}