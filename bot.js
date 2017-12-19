const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    // This will trigger when the Selfclient Program comes online.
    console.log(`${client.user.tag} Is Active!`);
    console.log(`----------------`);
    client.user.setPresence({game: {name: `over ${client.guilds.size} servers`, type: "2"}});
});

// Variables
let prefix = ">";
let shortcuts = new Map([
  ["lenny", "( ͡° ͜ʖ ͡°)"],
  ["shrug", "¯\\_(ツ)_/¯"],
  ["justright", "✋😩👌"],
  ["tableflip", "(╯°□°）╯︵ ┻━┻"],
  ["ping", "PONG!"],
  ["cat", "https://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg"],
  ["unflip", "┬──┬﻿ ノ( ゜-゜ノ)"]
]);

// End Variables 

client.on("message", message => {
  if (message.author !== client.user) return;
  if (!message.content.startsWith(prefix)) return;

  // custom shortcut check
  let command_name = message.content.slice(1); // removes the prefix, keeps the rest
  if (shortcuts.has(command_name)) {
    // setTimeout is used here because of a bug in message delays in Discord.
    // Otherwise the message would edit and then "seem" to un-edit istelf... ¯\_(ツ)_/¯
    setTimeout(() => {message.edit(shortcuts.get(command_name))}, 50);
    return;
  }

});

client.on('message', async message => {
    if(message.author !== client.user) return;
 
    if(message.isMemberMentioned(client.user)) {
        message.channel.sendMessage("í will answer soon");
    }
});


client.login(BOT_TOKEN);
