Discord = require('discord.js')
module.exports = async (client, channel) => {
if(channel.type === 'dm') return;
if(channel.guild.id == '548899664544399389'){
client.channels.get('622151060697513995').edit({name: `Участников: ${channel.guild.memberCount}`})
client.channels.get('625394545420664842').edit({name: `Ботов: ${channel.guild.members.filter(m => m.user.bot).size}`})
client.channels.get('625394253987840075').edit({name: `Каналов: ${channel.guild.channels.size}`})
client.channels.get('625398670266990602').edit({name: `Ролей: ${channel.guild.roles.size}`})
}
const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
let user = ""
let tag = ""; id = ""
  user = entry.executor.username
  tag = entry.executor.discriminator
  id = entry.executor.id
 const embed = new Discord.RichEmbed()
 .setTitle('Удалён канал')
 .addField(`Информация:`, ` 
Имя канала: **${channel.name}**
ID: **${channel.id}**`, true)
.addField(`Удалил канал:`, `
Сервер: **${channel.guild.name}**
Пользователь: **${user}#${tag}**
ID: **${id}**`, true)
 .setFooter('Удалён был')
 .setThumbnail(channel.guild.iconURL)
 .setColor('RED')
 .setTimestamp();
 client.channels.get('572059182698594306').send(embed)
}