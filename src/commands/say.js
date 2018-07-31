const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let sayText = args.join(' ');

  let embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(` | ${message.author.username}`, message.author.displayAvatarURL)
    .addField(`Received arguments`, sayText)
  message.channel.send(embed);
}

module.exports.help = {
  name: "say"
}
