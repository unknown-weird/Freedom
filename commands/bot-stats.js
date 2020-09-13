let Discord = require('discord.js')
exports.run = async (client, message, args, e,s, u, Guilds) => {
  if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
  let embed = new Discord.RichEmbed()
  .setTitle(`Статистика ботов`)
  .addField(`Принятых ботов на серверах`, `**${Guilds.get("guilds", 'info.bots.accepted')}**`, true)
  .addField(`Отклонённых ботов на серверах`, `**${Guilds.get("guilds", 'info.bots.declined')}**`, true)
  .addBlankField(true)
  .addField(`Отложенных ботов на серверах`, `**${Guilds.get("guilds", 'info.bots.wait')}**`, true)
  .addField(`Ботов в очереди на проверку`, `**${Guilds.get("guilds", 'info.bots.queue')}**`, true)
  .setColor(`BLURPLE`)
  .setFooter(`Подать заявку на бота: -addbot`)
  .setTimestamp() 
/*  .setTitle('Выбор вашего языка программирования')
  .setDescription(`<:php:664875843100606494> - PHP
<:js:664875873895186432> - JavaScript
<:kotlin:664876011766415408> - Kotlin
<:cpp:664876099146219540> - C++
<:csharp:664876063436046386> - C#
<:java:664875976538325042> - Java
<:ts:664875899593818144> - TypeScript
<:python:664875936012828674> - Python`)
  .setColor('BLURPLE')
  .setFooter(`Нажмите на реакцию, чтобы Вам добавилась роль одно из этих ЯП.`)
  .setTimestamp() */
  message.channel.send(embed) 
}
exports.help = {
  name: ["bot-stats", "botstats"],
  d: "Посмотреть статистику ботов.",
  u: "bot-stats"
}