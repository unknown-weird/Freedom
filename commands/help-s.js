let Discord = require('discord.js')
module.exports.run = async (client, message,args) => {
  let embed = new Discord.RichEmbed()
  .setTitle('Моя помощь')
  .setDescription(`Все аргументы:
**{bot}** - Упоминает случайного бота.
**{channel}** - Упоминает случайный канал.
**{server}** - Пишет название сервера. 
**{user}** - Упоминает случайного пользователя.
**{msg}** - Сообщение начинается с "Автор больше всего любит..", вы можете дополнить его.
**{hi}** - Сообщение начинается с "Автор приветствует..", вы можете дополнить его.
**{inv}** - Сообщение начинается с "Автор попросил инвайт на сервер. Держи,..", вы можете дополнить его.
**{bb}** - Сообщение начинается с "Автор прощается..", вы можете дополнить его.
**{age}** - Пишет случайную цифру от 0 до 100. 

**[S]** - Для STAFF
**[M]** - Для MODERATOR
**[A]** - Для ADMINISTRATOR`)
  .setFooter('Все права защищены Вадимом')
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
  .setColor('BLURPLE')
  message.channel.send(embed)
}
module.exports.help = {
  name: ["help-s"],
  d: "Помощь в написании красивого сообщения.",
  u: "help-s"
}