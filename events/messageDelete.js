module.exports = async (client, message) => {
Discord = require('discord.js')
if(message.author.bot) return;
if(message.channel.type === 'dm') return;
const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE', limit: 1})
let audit = entry.entries.first()
let user, id, tag;
user = audit.executor.username
tag = audit.executor.discriminator
id = audit.executor.id
let userid = audit.target.id
if(message.content.length > 1000) return;
  const embed = new Discord.RichEmbed()
  .setTitle('Удалено сообщение!')
  .addField(`Информация:`, `
Сервер: **${message.guild.name}**
Автор сообщения: **${message.author.tag}**
Айди: **${message.author.id}**
Канал: <#${message.channel.id}> (**${message.channel.id}**)`, true)
  .setFooter('Удалено было')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setColor('RED');
  if(userid === message.author.id) embed.addField(`Удалил сообщение:`, `
Тег: **${user}#${tag}**
ID: **${id}**`, true)
  if(message.content) embed.addField(`Описание сообщения:`, `
**${message.content}**`)
if(!message.content) embed.addField(`Описание сообщения:`, `
**Отсутствует**`)
if(message.attachments.size > 0 && message.attachments.first().height) embed.setImage(message.attachments.first().url)
  client.channels.get('572059182698594306').send(embed)
}