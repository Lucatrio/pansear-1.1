const Discord = require('discord.js');
const startDateTime = new Date();
const moment = require('moment');

module.exports.run = async (client, message, args) => {
  let users = client.users.size;
  let guilds = client.guilds.size;
  let channels = client.channels.size;
  let sender = message.author;
  let d = moment(startDateTime); // Date uptime start - this line could not be necessary, but you'd have to check that yourself.
  let duration = moment.duration(moment().diff(d)); // Difference from now to then
  let days = Math.floor(duration.asDays()); // asDays calculates it in days. Floor it, because the rest is the hours/minutes/seconds/milliseconds
  let hours = duration.hours();
  let minutes = duration.minutes();
  let seconds = duration.seconds();

  let embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(` | ${sender.username}`, sender.displayAvatarURL)
    .addField(`Statistics`, `Guilds : ${guilds}\nUsers : ${users}\nChannels: : ${channels}`)
    .addField(`Other`, `Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
  message.channel.send(embed);
}

module.exports.help = {
  name: "statistics"
}
