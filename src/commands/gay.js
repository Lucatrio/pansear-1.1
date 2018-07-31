const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let random = Math.floor(Math.random()*101);

  message.channel.send(`${message.author.username} is ${random}% gay :gay_pride_flag:`);
}

module.exports.help = {
  name: "gay"
}
