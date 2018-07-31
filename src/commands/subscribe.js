const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(message.guild.id != '473203113717923840') return message.channel.send(`This command is only enabled if you are in the support guild`);
  let guild = client.guilds.get("473203113717923840");
  let role = guild.roles.find("name", "Subscriber");
  message.member.addRole(role);

  let embed = new Discord.RichEmbed()
    .setColor('36393F')
    .addField(`${message.author.username}`, 'You have sucessfully subscribed')
  message.channel.send(embed);
}
module.exports.help = {
  name: "subscribe"
}
