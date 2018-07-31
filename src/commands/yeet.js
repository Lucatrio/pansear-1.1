const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let link = 'https://media.giphy.com/media/IcyvokwTobaHC/giphy.gif';
  let embed = new Discord.RichEmbed()
    .setColor('36393F')
    .setImage(link);
  message.channel.send(embed);
}

module.exports.help = {
  name: "yeet"
}
