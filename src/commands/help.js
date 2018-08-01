const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    /*
        Use Collection.prototype.map to get each command's name from its object, assuming it is stored in module.exports.help like it is in the tutorials.
        Then, join the new array of names with a comma and space to make it look nice when it's displayed.
        Finally, send it to the command invoker's channel.
    */
    message.channel.send(client.commands.map(cmd => cmd.help.name).join(", "));
}

module.exports.help = {
    name: "help"
}
