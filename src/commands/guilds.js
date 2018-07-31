const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const guildNames = client.guilds.map(g => g.name).join("\n");

  let embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
    .setDescription(guildNames)
    .addField(`Current guild ${message.guild.name}`);
  message.channel.send(embed);
}

module.exports.help = {
  name: "guilds"
}
