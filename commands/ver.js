const Discord = require("discord.js")
const fs = require("fs");
const ms = require("ms-advanced");
const client = new Discord.Client({disableEveryone: true});
module.exports.run = async (client, message, args, error, succ, Users, Guilds, randomize, timer) => {
Bots = client.enmap.Bots;
  if(!message.member.roles.has(message.guild.roles.find(r => r.name === 'Tester').id)) return error(`У Вас нет роли "Тестер".`, message)
 let bot = message.guild.members.filter(m => m.user.bot).random()
 let user = message.guild.members.filter(m => !m.user.bot).random().id
   let embed = new Discord.RichEmbed()
.setTitle(`Верификация бота`)
.addField(`Принятие бота`, `
-ver adp <ID автора бота> <@Бот> [Идеи для улучшений]
-ver adp ${user} ${bot} Добавить больше команд для экономики`)
.addField(`Отклонение бота`, `
-ver dec <ID автора бота> <@Бот> <Причины>
-ver dec ${user} ${bot} Слишком медленно работает, слишком много команд`)
.addField(`Отложение бота`, `
-ver wait <ID автора бота> <@Бот> <Причины>
-ver wait ${user} ${bot} Исправить кучу багов в боте.`)
.addField(`Редактирование бота`, `
-ver edit <ID бота> <status/text/bot_author> <Информация для перезаписи>
-ver edit ${bot.id} status declined
-ver edit ${bot.id} text Плохой бот, отправляет приглашения.
-ver edit ${bot.id} bot_author ${user}`)
.setColor('BLUE')
.setFooter(`Статистика ботов: -bot-stats`)
.setTimestamp()
   if(!args[0]) return message.channel.send(embed)
  Users.ensure(message.author.id, 0, 'info.bots.check')
  Users.ensure(message.author.id, 0, 'info.admin.score')
   if(args[0].toLowerCase() !== 'adp' && args[0].toLowerCase() !== 'dec' && args[0].toLowerCase() !== 'wait' && args[0].toLowerCase() !== 'edit') return error('Укажите тип верификации: adp, dec, wait.', message)
   if(args[0].toLowerCase() === 'adp' || args[0].toLowerCase() === 'dec' || args[0].toLowerCase() === 'wait'){
    if(message.guild.id !== '588011221677113354') return error(`Это не **${client.guilds.get('588011221677113354').name}**\nЗайти на него можно по этому приглашению: https://discord.gg/vKnKhnv`, message)
  if(Guilds.get('guilds', 'info.bots.queue') < 1) return error('Очередь пуста.', message)
  let botauthor = args[1]
  let text = args.slice(3).join(' ');
  let author = message.author
  if(!botauthor) return error(`Укажите автора данного бота.`, message)
  let bot = message.mentions.members.first() || message.guild.members.get(args[2]);
  if(!bot) return error('Укажите ID бота.', message)
  if(bot.id === client.user.id) return error('Этот бот уже был подтверждён.', message)
  if(!bot.user.bot) return error('Этот пользователь не является ботом.', message)
  if(args[0].toLowerCase() === 'adp'){
    if(Bots.get(bot.id)) return error(`Этот бот уже был на проверке.`, message)
    let embed = new Discord.RichEmbed()
    .setTitle(`Бот ${bot.user.tag} был подтверждён!`)
    .setColor('GREEN')
    .setDescription(`Бота проверил **${author}** (${author.tag}).`)
    .setFooter('Бот проверен администрацией сервера Freedom Inc.')
    .setTimestamp()
    if(text) embed.addField(`Идеи для улучшений`, `**${text}**`), client.users.get(botauthor).send(`Ваш бот ${bot} (**${bot.user.tag}**) был подтверждён и скоро будет добавлен на Freedom Inc.!\nИдеи для улучшений: **${text}**`)
    if(!text) client.users.get(botauthor).send(`Ваш бот ${bot} (**${bot.user.tag}**) был подтверждён и скоро будет добавлен на Freedom Inc.!`)
    client.channels.get('632459655028670465').send(embed); client.channels.get('617317809763909684').send(embed); await bot.addRole('589115934481055784'), await bot.removeRole('632449829636800512')
    Bots.set(bot.id, {bot: bot.id, info: {status: 'accepted', check: author.id, check_tag: author.tag, text: text || 'None', date: Date.now(), bot_author: args[1]}}) 
    let inv = new Discord.RichEmbed()
    .setDescription(`[Пригласить этого бота](https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&permissions=0&scope=bot)`)
    .setColor('GREEN')
    .setTitle(`Приглашение на этого бота`)
    .setFooter(`Бот был добавлен в информацию о ботах.`)
    message.channel.send(inv)
    Guilds.math('guilds', '-', 1, 'info.bots.queue')
    Users.inc(author.id, 'info.bots.check')
    Users.inc(author.id, 'info.admin.score')
    message.channel.send(`Готово. Очередь: **${Guilds.get('guilds', 'info.bots.queue')}**\nВы проверили **${Users.get(message.author.id, 'info.bots.check')}** ботов.`)
    Guilds.math('guilds', '+', 1, 'info.bots.accepted')
  } else if(args[0].toLowerCase() === 'dec'){
    if(Bots.get(bot.id)) return error(`Этот бот уже был на проверке.`, message)
    let embed = new Discord.RichEmbed()
    .setTitle(`Бот ${bot.user.tag} был отклонён.`)
    .setColor('RED')
    .setDescription(`Бота проверил **${author}** (${author.tag}).`)
    .setFooter('Бот проверен администрацией сервера Freedom Inc.')
    .setTimestamp();
    if(text) embed.addField(`Причины`, `**${text}**`), client.users.get(botauthor).send(`Ваш бот ${bot} (**${bot.user.tag}**) был отклонён и не будет добавлен на Freedom Inc. Причины: ${text}`)
    if(!text) client.users.get(botauthor).send(`Ваш бот ${bot} (**${bot.user.tag}**) был отклонён и не будет добавлен на Freedom Inc.`)
    client.channels.get('632459655028670465').send(embed); client.channels.get('617317809763909684').send(embed); await bot.kick('Бот отклонён.' + `- ${author.tag}`)
    Bots.set(bot.id, {bot: bot.id, info: {status: 'declined', check: author.id, check_tag: author.tag, text: text || 'None', date: Date.now(), bot_author: args[1]}}) 
    Guilds.math('guilds', '-', 1, 'info.bots.queue')
    Users.inc(author.id, 'info.bots.check')
    Users.inc(author.id, 'info.admin.score')
    message.channel.send(`Готово. Очередь: **${Guilds.get('guilds', 'info.bots.queue')}**\nВы проверили **${Users.get(message.author.id, 'info.bots.check')}** ботов.`)
    Guilds.math('guilds', '+', 1, 'info.bots.declined')
    } else if(args[0].toLowerCase() === 'wait') {
      if(Bots.get(bot.id)) return error(`Этот бот уже был на проверке.`, message)
      if(!text) return error(`Укажите причины отложения бота.`, message)
      let embed = new Discord.RichEmbed()
      .setTitle(`Бот ${bot.user.tag} был отложен.`)
      .setColor('#f5c235')
      .setDescription(`Бота отложил **${author}** (${author.tag}).`)
      .setTimestamp()
      .addField(`Причины`, `**${text}**`)
      client.users.get(botauthor).send(`Ваш бот ${bot} (**${bot.user.tag}**) был отложен. Причины: ${text}`)
      await bot.removeRole('632449829636800512'), await bot.addRole('617675358644338698')
      client.channels.get('632459655028670465').send(embed); client.channels.get('617317809763909684').send(embed);
      Bots.set(bot.id, {bot: bot.id, info: {status: 'wait', check: author.id, check_tag: author.tag, text: text, date: Date.now(), bot_author: args[1]}}) 
      Guilds.math('guilds', '-', 1, 'info.bots.queue')
      Guilds.math('guilds', '+', 1, 'info.bots.wait')
      Users.inc(author.id, 'info.bots.check')
      Users.inc(author.id, 'info.admin.score')
      message.channel.send(`Готово. Очередь: **${Guilds.get('guilds', 'info.bots.queue')}**\nВы проверили **${Users.get(message.author.id, 'info.bots.check')}** ботов.`)
    }};
   if(args[0].toLowerCase() === 'edit'){
     if(!args[1]) return error('Вы не упомянули бота.', message)
      let bot = await client.fetchUser(args[1])
      if(!bot) return error('Бот не обнаружен.', message)
      if(!args[2]) return error('Укажите тип для редактирования: status, text, bot_author.', message)
      if(args[2].toLowerCase() != 'status' && args[2].toLowerCase() != 'text' && args[2].toLowerCase() != 'bot_author') return error('Укажите правильный тип редактирования.', message)
      if(args[2].toLowerCase() == 'status'){
        if(!args[3]) return error('Укажите статус: **declined, accepted, wait**.', message)
        if(args[3] != 'declined' && args[3] != 'accepted' && args[3] != 'wait') return error('Укажите правильны тип статуса.', message)
        succ(`Информация о боте **${bot.tag}** была изменена.\nТип: "STATUS"\nЗначение: **${args[3]}**.`, message)
        Bots.set(bot.id, args[3], 'info.status')
      } else if(args[2].toLowerCase() == 'text'){
        if(!args[3]) return error('Укажите текст.', message)
        succ(`Информация о боте **${bot.tag}** была изменена.\nТип: "TEXT"\nЗначение: **${args.slice(3).join(" ")}**.`, message)
        Bots.set(bot.id, args.slice(3).join(" "), 'info.text')
      } else if(args[2].toLowerCase() == 'bot_author'){
        if(!args[3]) return error('Укажите ID.', message)
        if(isNaN(args[3])) return error('Укажите действительный ID.', message)
        succ(`Информация о боте **${bot.tag}** была изменена.\nТип: "BOT_AUTHOR"\nЗначение: **${args[3]}**.`, message)
        Bots.set(bot.id, args[3], 'info.bot_author')
      }
    }};
module.exports.help = {
    name: ["ver"],
    d: "Позволяет решить дальнейшую судьбу бота.",
    u: "ver <Тип> <ID автора> <@Бот> [Идея/Причина]"
}