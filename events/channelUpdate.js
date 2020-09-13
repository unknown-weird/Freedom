Discord = require('discord.js')
module.exports = async (client, oldChannel, newChannel) => {
if(oldChannel.type === 'dm') return;
if(oldChannel.id == '625398670266990602' || oldChannel.id == '625394253987840075' || oldChannel.id == '625394545420664842' || oldChannel.id == '622151060697513995') return;
if(oldChannel.guild.id == '548899664544399389'){
client.channels.get('622151060697513995').edit({name: `Участников: ${oldChannel.guild.memberCount}`})
client.channels.get('625394545420664842').edit({name: `Ботов: ${oldChannel.guild.members.filter(m => m.user.bot).size}`})
client.channels.get('625394253987840075').edit({name: `Каналов: ${oldChannel.guild.channels.size}`})
client.channels.get('625398670266990602').edit({name: `Ролей: ${oldChannel.guild.roles.size}`})
}
const entry = await newChannel.guild.fetchAuditLogs({type: 'CHANNEL_UPDATE'}).then(audit => audit.entries.first())
let user = ""
let tag = ""; id = ""
  user = entry.executor.username
  tag = entry.executor.discriminator
  id = entry.executor.id
 const embed = new Discord.RichEmbed()
 .setTitle('Обновлён канал')
 .addField(`Информация ДО:`, ` 
Имя канала: **${oldChannel.name}**
ID: **${oldChannel.id}**`, true)
.addField(`Информация ПОСЛЕ:`, ` 
Имя канала: **${newChannel.name}**
ID: **${newChannel.id}**`, true)
.addField(`Обновил канал:`, `
Сервер: **${newChannel.guild.name}**
Пользователь: **${user}#${tag}**
ID: **${id}**`)
 .setFooter('Обновлён был')
 .setThumbnail(oldChannel.guild.iconURL)
 .setColor('BLURPLE')
 .setTimestamp();
 client.channels.get('572059182698594306').send(embed)
}