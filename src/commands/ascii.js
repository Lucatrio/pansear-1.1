const Discord = require('discord.js');
const text = require('ascii-art');

module.exports.run = async (client, message, args) => {
    text.font(args.join(''), 'doom', function(rendered) {
        rendered = rendered.trimRight();

        if(rendered.length < 20) return message.channel.send(`Sorry, that message was too long`);

        message.channel.send(rendered, {
            code: 'css'
        });
    });
}

module.exports.help = {
    name: "ascii"
}
