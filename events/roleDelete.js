module.exports = async (client, role) => {
Discord = require('discord.js')
const entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first())
if(role.guild.id == '548899664544399389'){
client.channels.get('622151060697513995').edit({name: `Участников: ${role.guild.memberCount}`})
client.channels.get('625394545420664842').edit({name: `Ботов: ${role.guild.members.filter(m => m.user.bot).size}`})
client.channels.get('625394253987840075').edit({name: `Каналов: ${role.guild.channels.size}`})
client.channels.get('625398670266990602').edit({name: `Ролей: ${role.guild.roles.size}`})
}
let user = ""
let tag = ""; id = ""
user = entry.executor.username
tag = entry.executor.discriminator
id = entry.executor.id;
const embed = new Discord.RichEmbed()
.setTitle('Удалена роль на сервере')
.addField(`Информация:`,`
Имя роли: **${role.name}**
ID: **${role.id}**`, true)
.addField(`Удалил роль:`, `
Сервер: **${role.guild.name}**
Пользователь: **${user}#${tag}**
ID: **${id}**`, true)
.setFooter('Удалена была')
.setColor('RED')
.setThumbnail(role.guild.iconURL)
.setTimestamp();
client.channels.get('572059182698594306').send(embed)
}