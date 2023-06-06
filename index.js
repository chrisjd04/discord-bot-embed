const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const ytdl = require("ytdl-core");
const fs = require("fs");


const keepAlive = require("./server");
keepAlive();



var queue = new Map();


client.once('ready', () => {
  console.log('your bot is now online!')
});

//BOT ACTIVITY STATUS

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  client.user.setActivity('YOUR MESSAGE', { type: "PLAYING" }).catch(console.error)

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();


//EMBED 

  const y = new Discord.MessageEmbed()
    .setColor("#your-color")
    .setTitle("***your title***")
    .setDescription(` your description` )

    .setFooter("your footer")

  if (command == "YOUR_COMMAND") {
    message.channel.send(y)
  }





});




client.login(process.env.DISCORD_BOT_TOKEN);
client.login('YOUR_TOKEN_HERE');
