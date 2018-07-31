const Discord = require('discord.js');
const gif = require('pokemon-gif');

module.exports.run = async (client, message, args) => {
    let pokemon = args[0];
    let img = gif(`${pokemon}`);
    let embed = new Discord.RichEmbed()
        .setColor('36393F')
        .setImage(img);
    message.channel.send(embed);
}

module.exports.help = {
    name: "pokemon"
}