Discord = require('discord.js')
module.exports = async (client, guild, ban) => {
Users = client.enmap.Users;
const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first());
let user = ""
let tag = ""; id = ""
  user = entry.executor.username
  tag = entry.executor.discriminator
  id = entry.executor.id
  if(id !== client.user.id) Users.inc(id, 'info.admin.score')
const embed = new Discord.RichEmbed()
.setTitle('Забанен пользователь:')
.addField(`Информация`, `
Пользователь: **${ban.tag}**
ID: **${ban.id}**
Причина бана: **${entry.reason ? entry.reason : 'Без причины'}**
Аккаунт создан: **${ban.createdAt.toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false})}**`, true)
.addField(`Забанил:`, `
Сервер, где произошёл бан: **${guild.name}**
Пользователь: **${user}#${tag}**
ID: **${id}**
Произошло это в **${new Date().toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false})}**`, true)
.setFooter('Забанен был')
.setThumbnail(ban.avatarURL)
.setColor('RED')
.setTimestamp();
client.channels.get('572059182698594306').send(embed)
if(guild.id == '548899664544399383'){
const lolkek = new Discord.RichEmbed()
.setTitle(`На сервере забанили участника **${ban.tag}**`)
.setDescription(`Забанил: **${user}#${tag}**
Забанен по причине \`${entry.reason ? entry.reason : 'Без причины'}\``)
.setFooter(`Участников осталось ${guild.memberCount}.`)
.setColor('RED')
.setTimestamp()
.setImage('https://cdn.discordapp.com/attachments/548899664544399389/605025317731434496/Time-to-say-goodbye-1200x628-compressed.jpg')
.setThumbnail(ban.avatarURL)
client.channels.get('586498218192535553').send(lolkek)
} else if(guild.id == '588011221677113354'){
const lolkek = new Discord.RichEmbed()
.setTitle(`На сервере забанили участника **${ban.tag}**`)
.setDescription(`Забанил: **${user}#${tag}**
Забанен по причине \`${entry.reason ? entry.reason : 'Без причины'}\``)
.setFooter(`Участников осталось ${guild.memberCount}.`)
.setColor('RED')
.setTimestamp()
.setThumbnail(ban.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/548899664544399389/605025317731434496/Time-to-say-goodbye-1200x628-compressed.jpg')
client.channels.get('586498218192535553').send(lolkek)
}
}