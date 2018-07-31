const Discord = require('discord.js');
const meme = require('memejs');

module.exports.run = async (client, message, args) => {
  meme(function(data) {
    const embed = new Discord.RichEmbed()
    .setTitle(data.title[0])
    .setColor("RED")
    .setImage(data.url[0])
    .setFooter(`Thanks for memejs for being created without it we wouldn't have this`)
      message.channel.send(embed);
    })
}
module.exports.help = {
  name: "meme"
}
