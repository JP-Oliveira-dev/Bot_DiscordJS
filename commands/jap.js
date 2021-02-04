const Discord = require('discord.js');
const texts = require('../texts/texts.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.type != 'dm') return;
  const japMessage = args.join(' ');
  message.delete().catch(O_o => {});
  let embed = new Discord.MessageEmbed()
    .setColor('#0000ff')
    .setTitle('Teste de Japonês')
    .setDescription(textJAP.text)
    

  message.channel.send(embed)
}