const Discord = require('discord.js');
const text = require('../texts/texts')

module.exports.run = async (client, message, args) => {
  if (message.channel.type == 'dm') return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return
  const recrutamentoMessage = args.join(' ');
  message.delete().catch(O_o => {});
  let embed = new Discord.MessageEmbed()
    .setColor('#0000ff')
    .setTitle('Bem-Vindo ao teste de recrutamento!')
    .setDescription(textRECRUT.text)
    .setImage('coloque o link da sua imagem')

    message.author.send(embed)
};