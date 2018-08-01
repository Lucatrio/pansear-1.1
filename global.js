const Discord = require('disscord.js');
const client = new Discord.Client();
const date = new Date();
const log = client.channels.get('472911334330335242');

client.on("guildCreate", (guild) => {
    let embed = new Discord.RichEmbed()
    .setColor('36393F')
    .setDescription(`I have joined ${guild.name} (${guild.id})`)
    .setFooter(`Joined guild @ ${date}`);
  log.send(embed);
});

client.on("guildRemove", (guild) => {
  let embed = new Discord.RichEmbed()
    .setColor('36393F')
    .setDescription(`I have been removed on ${guild.name} (${guild.id})`)
    .setFooter(`Left guild @ ${date}`);
  log.send(embed);
});
client.login(process.env.TOKEN);
