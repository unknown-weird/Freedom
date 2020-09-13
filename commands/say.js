let Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  if(!args[0]) return message.reply('Введите текст.')
var url = new RegExp(`(discord.gg|discordapp.com/invite)/(.*?)`);
  let embed = new Discord.RichEmbed()
  .setAuthor(`Freedom v${require(`../config.json`).version}`)
  .setTitle('Сработала защита от приглашений.')
  .setDescription(`Сработала автоматическая защита от приглашений в команде **say**. Автор сообщения: **${message.author.tag}**, чтобы такого не произошло, у вас должно быть право \`ADMINISTRATOR\``)
  .setColor('RED')
  .setTimestamp()
if(url.test(message.content)) return await message.delete(), message.channel.send(embed)
   else message.channel.send(args.join(' '))
  }
module.exports.help = {
  name: ["say"],
  d: "Написать сообщение от бота.",
  u: "say <Текст>"
}