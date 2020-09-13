module.exports = async (client, member) => {
cfg = require('../config.json');
Users = client.enmap.Users
Guilds = client.enmap.Guilds
Mutes = client.enmap.Mutes
Discord = require('discord.js')
let embed = new Discord.RichEmbed()
.setTitle('Пользователь вышел')
.addField(`Информация:`, `
Сервер: **${member.guild.name}**
Тег: **${member.user.tag}**
ID: **${member.user.id}**
Аккаунт был создан: **${member.user.createdAt.toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false})}**`, true)
.addField(`Другая информация:`, `
Имеются начальные роли? **${member.roles.has ? 'Да' : 'Нет'}**
Есть в базе сервера? **${Users.get(member.id) ? 'Да' : 'Нет'}**
Заблокирован? **${Users.get(member.id) && Users.get(member.id).info && Users.get(member.id).info.block ? 'Да' : 'Нет'}**
Замучен? **${Mutes.get(member.id) ? 'Да' : 'Нет'} **`)
.setFooter(`Количество человек на данный момент: ${member.guild.memberCount}`)
.setTimestamp()
.setColor('RED')
.setThumbnail(member.user.iconURL)
  client.channels.get('572059182698594306').send(embed)
if(member.guild.id == '548899664544399383'){
client.channels.get('622151060697513995').edit({name: `Участников: ${member.guild.memberCount}`})
client.channels.get('625394545420664842').edit({name: `Ботов: ${member.guild.members.filter(m => m.user.bot).size}`})
client.channels.get('625394253987840075').edit({name: `Каналов: ${member.guild.channels.size}`})
client.channels.get('625398670266990602').edit({name: `Ролей: ${member.guild.roles.size}`})
 const lolkek = new Discord.RichEmbed()
.setTitle(`От нас ушёл ${member.user.tag}..`)
.setDescription(`${member}, Я надеюсь что ты ещё вернёшься на Freedom Inc. :c`)
.setFooter(`Нас осталось ${member.guild.memberCount} человек`)
.setColor('RED')
.setTimestamp()
.setThumbnail(member.user.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/548899664544399389/605025317731434496/Time-to-say-goodbye-1200x628-compressed.jpg')
client.channels.get('586498218192535553').send(lolkek)
} else if(member.guild.id == '588011221677113354'){
const ke = new Discord.RichEmbed()
.setTitle(`От нас ушёл ${member.user.tag}..`)
.setDescription('Надеюсь ты ещё вернёшься на Freedom Inc. Confirm Center :c')
.setFooter(`Сейчас нас ${member.guild.memberCount} человек.`)
.setColor('RED')
.setTimestamp()
.setThumbnail(member.user.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/548899664544399389/605025317731434496/Time-to-say-goodbye-1200x628-compressed.jpg')
client.channels.get('589115173537841154').send(ke)
}
}