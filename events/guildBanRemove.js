Discord = require('discord.js')
module.exports = async (client, guild, ban) => {
Users = client.enmap.Users
const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_REMOVE'}).then(audit => audit.entries.first());
let user = ""
let tag = ""; id = ""
  user = entry.executor.username
  tag = entry.executor.discriminator
  id = entry.executor.id
  if(id !== client.user.id) Users.inc(id, 'info.admin.score')
const embed = new Discord.RichEmbed()
.setTitle('Разбанен пользователь:')
.addField(`Информация`, `
Пользователь: **${ban.tag}**
ID: **${ban.id}**
Причина бана была: **${entry.reason ? entry.reason : 'Без причины'}**
Аккаунт создан: **${ban.createdAt.toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false})}**`, true)
.addField(`Разбанил:`, `
Сервер, где произошёл бан: **${guild.name}**
Пользователь: **${user}#${tag}**
ID: **${id}**
Произошло это в **${new Date().toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false})}**`, true)
.setFooter('Разбанен был')
.setThumbnail(ban.avatarURL)
.setColor('GREEN')
.setTimestamp();
client.channels.get('572059182698594306').send(embed)
if(guild.id == '548899664544399383'){
const lolkek = new Discord.RichEmbed()
.setTitle(`На сервере был разбанен **${ban.tag}**`)
.setDescription(`Разбанил: **${user}#${tag}**
Он снова может зайти на данный сервер!`)
.setFooter(`Приходи к нам!`)
.setColor('GREEN')
.setTimestamp()
.setThumbnail(ban.avatarURL)
client.channels.get('586498218192535553').send(lolkek)
} else if(guild.id == '588011221677113354'){
const lolkek = new Discord.RichEmbed()
.setTitle(`На сервере был разбанен **${ban.tag}**`)
.setDescription(`Разбанил: **${user}#${tag}**
Он снова может зайти на данный сервер!`)
.setFooter(`Приходи к нам!`)
.setColor('GREEN')
.setTimestamp()
.setThumbnail(ban.avatarURL)
client.channels.get('586498218192535553').send(lolkek)
}
}