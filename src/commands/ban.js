const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('Sorry, you need the permission `BAN_MEMBERS`');

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(`Please mention someone to ban`);
    if(!member.bannable) return message.channel.send(`Sorry, you cannot ban this member`);

    let reason = args.slice(1).join(' ');
    if(!reason) reason = 'Breaking rules';

    await member.ban(reason)
      .catch(error => message.reply(`I couldn't ban this user because of ${error}`));
    message.channel.send(`${member.user.username} has been banned by ${message.author.username} for ${reason}`);
}

module.exports.help = {
    name: "ban"
}