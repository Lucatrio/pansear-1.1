const Discord = require('discord.js');

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }

module.exports.run = async (client, message, args) => {
    if(message.author.id !== '366283647587713034') return;
        try {
          const code = args.join(" ");
          let evaled = eval(code);
    
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
            
          let embed = new Discord.RichEmbed()
            .setAuthor(` | ${client.user.username}`, client.user.displayAvatarURL)
            .setColor("36393F")
            .addField(`📢 Input`, '`' + code + '`')
            .addField(`📢 Output`, '`' + clean(evaled) + '`')
            .setFooter(`${message.author.username} issued this command`);
          message.channel.send(embed);
        } catch (err) {
          console.log(err);
    }
}

module.exports.help = {
    name: "eval"
}
