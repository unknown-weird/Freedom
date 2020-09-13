Discord = require('discord.js')
module.exports = async (client, oldRole, newRole) => {
  if(oldRole.guild.id == '548899664544399389'){
client.channels.get('622151060697513995').edit({name: `Участников: ${newRole.guild.memberCount}`})
client.channels.get('625394545420664842').edit({name: `Ботов: ${newRole.guild.members.filter(m => m.user.bot).size}`})
client.channels.get('625394253987840075').edit({name: `Каналов: ${newRole.guild.channels.size}`})
client.channels.get('625398670266990602').edit({name: `Ролей: ${newRole.guild.roles.size}`})
  }
const entry = await newRole.guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first())
let user = ""
let tag = ""; id = ""
  user = entry.executor.username
  tag = entry.executor.discriminator
  id = entry.executor.id
 const embed = new Discord.RichEmbed()
 .setTitle('Обновлена роль')
 .addField(`Информация ДО:`, ` 
Имя роли: **${oldRole.name}**
ID: **${oldRole.id}**`, true)
.addField(`Информация ПОСЛЕ:`, ` 
Имя роли: **${newRole.name}**
ID: **${newRole.id}**`, true)
.addField(`Обновил роль:`, `
Сервер: **${newRole.guild.name}**
Пользователь: **${user}#${tag}**
ID: **${id}**`)
 .setFooter('Обновлена была')
 .setThumbnail(newRole.guild.iconURL)
 .setColor('BLURPLE')
 .setTimestamp();
 client.channels.get('572059182698594306').send(embed)
}