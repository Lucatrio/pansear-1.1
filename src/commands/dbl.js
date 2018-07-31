// Packages | also known as imports for python
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  let user = message.mentions.members.first();
  if(!user) user = client.user
  else user = message.mentions.members.first();
  let link = `https://discordbots.org/api/widget/${user.id}.png`;

  let embed = new Discord.RichEmbed()
    .setColor('RED')
    .setImage(link)
    .setFooter(`If the image does not load then ${user.tag} is not a bot or your bot isn't a accepted bot on dbl`);
  message.channel.send(embed);
}

module.exports.help = {
  name: "dbl"
}
