const express = require('express');
const app = express();
const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("../config/config.json"); 

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});


app.listen(process.env.PORT); 

client.on('ready', () => {
  client.user.setActivity('prefixo ()', {type: undefined});
});


client.on('message', message => {
     if (message.author.bot) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
    

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    if(!message.content.startsWith(config.prefix)) return;
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`../commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }

});

client.on('message', message => {
   if (message.content.startsWith(`<@!${client.user.id}>`) || 
    message.content.startsWith(`<@${client.user.id}>`)) return;
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    
    if(comando === 'sites') {
      let embed1 = new Discord.MessageEmbed()
        .setColor('#0000ff')
        .setDescription(" \n**Site Oficial**: <https://www.google.com/> \nSite que **Solo Leveling** está hospedado: <https://www.google.com/> ")
      message.channel.send(embed1)
  };

  if(comando === 'obrasativas') {
      let embed2 = new Discord.MessageEmbed()
        .setColor('#0000ff')
        .setDescription("Atualmente nos encontramos com **9500** obras ativas")

      message.channel.send(embed2)
}});  // siga o padrão e add mais se desejar. 

client.login(config.token); 