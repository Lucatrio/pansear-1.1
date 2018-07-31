const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) user = message.author;
  else user = message.mentions.users.first();

  let embed = new Discord.RichEmbed()
    .setAuthor(` | ${message.author.username}`, message.author.displayAvatarURL)
    .setColor('RED')
    .addField(`User`, user)
    .addField(`User ID`, user.id)
    .addField(`Discriminator`, user.discriminator)
    .addField(`Is Bot`, user.bot)
    .setThumbnail(user.displayAvatarURL);

  message.channel.send(embed);
}

module.exports.help = {
  name: "info"
}
