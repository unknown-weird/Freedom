let Discord = require('discord.js')
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
  if(!args[0]) return error(`Укажите префикс бота.`, message)
  if(args[0].length > 5) return error(`Префикс Вашего бота слишком длинный.`, message)
  if(!args[1]) return error(`Напишите айди бота.`, message)
  if(isNaN(args[1])) return error(`Укажите нормальное айди Вашего бота.`, message)
  if(args[1].length > 18) return error(`Укажите нормальное айди Вашего бота.`, message)
  if(args[1].length < 18) return error(`Укажите нормальное айди Вашего бота.`, message)
  let bot = await client.fetchUser(args[1]).catch(() => null)
  if(!bot) return error(`Такого юзера в природе не существует.`, message)
  if(!bot.bot) return error(`Ты шо издеваешься? Это не бот.`, message)
let msg = await message.reply(`Ваш бот имеет необходимые требования из канала <#614378824746139667>? Да/Нет`).then(ms => {
let channel = ms.channel;
let collector = channel.createMessageCollector(m => message.author.id == m.author.id, {time: 60000});
let one = 0
collector.on('collect', message => {
if(message.content.toLowerCase().startsWith('да')) {
one = 1
succ(`**${message.author.tag}**, Отлично, бот был добавлен в очередь!`, message)
message.delete(2)
Guilds.math(`guilds`, '+', 1, 'info.bots.queue')
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
} 
 collector.stop()
const elf = random(1, 100)
  let eembed = new Discord.RichEmbed()
  .setTitle(`Поступил новый бот на проверку.`)
  .setDescription(`Префикс: **${args[0]}**
ID: **${elf}**
**${Guilds.get("guilds", 'info.bots.queue')}** в очереди
Приглашение: https://discordapp.com/api/oauth2/authorize?client_id=${args[1]}&permissions=0&scope=bot
Бот: **${bot.tag}, ID: ${args[1]}**
Функционал бота: **${args.slice(2).join(" ") || 'Отсутствует'}**
Автор бота: **${message.author} (\`${message.author.tag}\`)**`)
  .setColor(`GREEN`)
  .setThumbnail(bot.avatarURL)
  .setFooter(`Айди автора: ${message.author.id}, время подачи:`)
  .setTimestamp()
  client.channels.get(`549167825974067210`).send(eembed)
  client.channels.get(`549167825974067210`).send(`<@&659372839211630592>, <@&548958917263360040>, <@&548958836787249195>, <@&548901130151657497>`).then(msg => msg.delete())
  let embed = new Discord.RichEmbed()
  .setTitle('Бот отправлен.')
  .setDescription(`Ваш бот был отправлен на проверку. Ждите ответа на канале <#617317809763909684>.`)
  .addField(`Заявка по ID: **${elf}**`, `** **`, true)
  .setColor('BLURPLE')
  .setFooter('Как только произойдут какие-либо изменения, я сразу Вам напишу!', client.user.avatarURL)
  .setTimestamp()
  .addField(`Место в очереди: **${Guilds.get("guilds", 'info.bots.queue')}**-ое`, `** **`, true)
  message.author.send(embed)
} else if(message.content.toLowerCase().startsWith('нет')) {
  one = 1
  error(`Ваш бот не имеет необходимых требований, пожалуйста, выполните их.`, message)
    collector.stop();
}})
 collector.on('end', () => {
   if(one === 0) message.reply(`Время на обработку ответа вышло.`)
   ms.delete()
 })
})
}
exports.help = {
  name: ["addbot", "botadd"],
  d: "Отправить бота на проверку.",
  u: "addbot <Префикс> <ID> [Функционал]"
}