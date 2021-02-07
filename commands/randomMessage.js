const Discord = require('discord.js')

module.exports = function globalRandomMessage() {
  let text_sd = new Array();

  text_sd[0] = new Discord.MessageEmbed().setColor('#0000ff').setDescription('seu texto');
  text_sd[1] = new Discord.MessageEmbed().setColor('#0000ff').setDescription('seu texto');
  text_sd[2] = new Discord.MessageEmbed().setColor('#0000ff').setDescription('seu texto');

  let random = Math.floor(3* Math.random()) // lembre-se, a quantidade de textos no array tem que ser a mesma do calculo do random.
  return text_sd[random]
};