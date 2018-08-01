const Discord = require('discord.js');
const client = new Discord.Client();
const log = client.channels.get('472911334330335242');

client.on("message", async message => {
client.on("guildCreate", (guild) => {
    let embed = new Discord.RichEmbed()
    .setColor('36393F')
    .setDescription(`I have joined ${message.guild.name} (${message.guild.id})`)
    .setFooter(`Joined guild`);
  log.send(embed);
});

client.on("guildRemove", (guild) => {
  let embed = new Discord.RichEmbed()
    .setColor('36393F')
    .setDescription(`I have been removed on ${message.guild.name} (${message.guild.id})`)
    .setFooter(`Left guild`);
  log.send(embed);
});
});
client.login(process.env.TOKEN);
