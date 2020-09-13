Discord = require('discord.js')
module.exports = async (client, emoji) => {
if(emoji.guild.id == '548899664544399389'){
client.channels.get('622151060697513995').edit({name: `Участников: ${emoji.guild.memberCount}`})
client.channels.get('625394545420664842').edit({name: `Ботов: ${emoji.guild.members.filter(m => m.user.bot).size}`})
client.channels.get('625394253987840075').edit({name: `Каналов: ${emoji.guild.channels.size}`})
client.channels.get('625398670266990602').edit({name: `Ролей: ${emoji.guild.roles.size}`})
}
const entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first())
let user = ""
let tag = ""; id = ""
  user = entry.executor.username
  tag = entry.executor.discriminator
  id = entry.executor.id
  const embed = new Discord.RichEmbed()
  .setTitle('Создан эмодзи:')
  .setColor('GREEN')
  .addField(`Информация:`, `
Название: **${emoji.name}**
ID: **${emoji.id}**
URL: ${emoji.url}`, true)
.addField(`Создал:`, `
Сервер: **${emoji.guild.name}**
Пользователь: **${user}#${tag}**
ID: **${id}**`, true)
  .setFooter('Создан был')
.setThumbnail(emoji.url)
  .setTimestamp();
  client.channels.get('572059182698594306').send(embed)
}