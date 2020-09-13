cfg = require('../config.json')
module.exports.error = function (description, message){
  let embed = new Discord.RichEmbed()
  .setAuthor(`Freedom v${cfg.version}`)
  .setTitle(`Произошла ошибка ${cfg.emojis.error}`)
  .setColor('RED')
  if(description) embed.addField(`**Описание**`, `${description}`, true)
  message.channel.send(embed)
  }