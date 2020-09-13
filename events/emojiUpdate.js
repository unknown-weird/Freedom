Discord = require('discord.js')
module.exports = async (client, oldEmoji, newEmoji) => {
  if(oldEmoji.guild.id == '548899664544399389'){
client.channels.get('622151060697513995').edit({name: `Участников: ${newEmoji.guild.memberCount}`})
client.channels.get('625394545420664842').edit({name: `Ботов: ${newEmoji.guild.members.filter(m => m.user.bot).size}`})
client.channels.get('625394253987840075').edit({name: `Каналов: ${newEmoji.guild.channels.size}`})
client.channels.get('625398670266990602').edit({name: `Ролей: ${newEmoji.guild.roles.size}`})
  }
const entry = await newEmoji.guild.fetchAuditLogs({type: 'EMOJI_UPDATE'}).then(audit => audit.entries.first())
let user = ""
let tag = ""; id = ""
  user = entry.executor.username
  tag = entry.executor.discriminator
  id = entry.executor.id
  const embed = new Discord.RichEmbed()
  .setTitle('Обновлён эмодзи:')
  .setColor('BLURPLE')
  .addField(`Информация ДО:`, `
Название: **${oldEmoji.name}**
ID: **${oldEmoji.id}**
URL: ${oldEmoji.url}`, true)
.addField(`Информация ПОСЛЕ:`, `
Название: **${newEmoji.name}**
ID: **${newEmoji.id}**
URL: ${newEmoji.url}`, true)
.addField(`Обновил:`, `
Сервер: **${newEmoji.guild.name}**
Пользователь: **${user}#${tag}**
ID: **${id}**`)
  .setFooter('Обновлён был')
.setThumbnail(newEmoji.url)
  .setTimestamp();
  client.channels.get('572059182698594306').send(embed)
}