const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
    .setColor(0x36393F)
    .addField(`Kiki`, 'Do you love me?')

  message.channel.send(embed);
}

module.exports.help = {
  name: "embed"
}
