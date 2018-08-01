const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", async message => {
client.on("guildCreate", (guild) => {
    const log = client.channels.get('472911334330335242');
    let embed = new Discord.RichEmbed()
    .setColor('36393F')
    .setDescription(`I have joined ${message.guild.name} (${message.guild.id})`)
    .setFooter(`Joined guild`);
  log.send(embed);
});

client.on("guildRemove", (guild) => {
  const log = client.channels.get('472911334330335242');
  let embed = new Discord.RichEmbed()
    .setColor('36393F')
    .setDescription(`I have been removed on ${message.guild.name} (${message.guild.id})`)
    .setFooter(`Left guild`);
  log1.send(embed);
});
});
client.login(process.env.TOKEN);
