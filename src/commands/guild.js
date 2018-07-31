const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let guild = message.guild;

  let embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(` | ${message.author.username}`, message.author.displayAvatarURL)
    .addField(`Guild`, guild.name)
    .addField(`ID`, guild.id)
    .addField(`Owner`, guild.owner)
    .addField(`Owner ID`, guild.owner.id)
    .setThumbnail(guild.iconURL);

  message.channel.send(embed);
}

module.exports.help = {
  name: "guild"
}
