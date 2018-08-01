const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const prefix = '>.';
const logs = require('./global.js');
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL, client);

dbl.on("posted", () => {
  console.log(`Posted ${client.guilds.size} servers to the DBL api!`)
});
fs.readdir("./src/commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require("./src/commands/" + `${file}`);
    let eventName = file.split(".")[0];
    console.log(`${file} has loaded`)
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.split(/\s+/g);
  const command = args.shift().slice(prefix.length).toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require("./src/commands/" + `${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.on("ready", () => {

  setInterval(function() {
    let games = [`over ${client.guilds.size} servers`, `over ${client.users.size} users`, `over my update v1.1`];
    let status = games[Math.floor(Math.random()*games.length)];
    client.user.setActivity(status, { type: 'WATCHING' });
  }, 15000)

});
client.login(process.env.TOKEN);
