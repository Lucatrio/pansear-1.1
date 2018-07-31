const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Sorry, you need the permission `KICK_MEMBERS`');

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(`Please mention a someone to kick`);
    if(!member.kickable) return message.channel.send(`Sorry you can not kick this member`);

    let reason = args.slice(1).join(' ');
    if(!reason) reason = 'Breaking rules';

    await member.kick(reason)
        .catch(error => message.reply(`I couldn't kick this user because of ${error}`));
    message.channel.send(`${member.user.username} has been kicked by ${message.author.username} for ${reason}`)
}

module.exports.help = {
    name: "kick"
}