module.exports = (client, message, oldMessage, newMessage) => {
Discord = require('discord.js')
if(message.channel.type === 'dm') return;
if(message.author.bot) return;
if(message.content.length > 1000) return
const embed = new Discord.RichEmbed()
.setTitle('Сообщение обновлено')
.setDescription(`Автор сообщения: **${message.author.tag}**
Айди: **${message.author.id}**
ID сообщения: **${message.id}**
Канал: <#${message.channel.id}> (**${message.channel.id}**)
URL ссылка: ${message.url}`)
.addField(`Сообщение ДО:`, `**${message.content}**`, true)
.addField(`Сообщение ПОСЛЕ:`, `**${oldMessage.content}**`, true)
.setFooter('Обновление было')
.setTimestamp()
.setThumbnail(message.author.avatarURL)
.setColor('BLURPLE')
client.channels.get('572059182698594306').send(embed)
}