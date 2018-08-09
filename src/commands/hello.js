const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.channel.send(`Hello, <@${message.author.id}> but why did you do this command. Do you not have any friends?`)
}

module.exports.help = {
  name: "hello"
 }
