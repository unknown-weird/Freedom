const Discord = require('discord.js')
cfg = require('../config.json')
module.exports.run = async (client, message,args, error, succ, Users, Guilds) => {
  if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Введите команду **-account** для регистрации`, message)
  let user = message.mentions.members.first() || client.users.get(args.join("")) || message.guild.members.find(r => r.user.tag.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0])) || message.guild.members.find(r => r.displayName.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0]))
    if(!Users.get(message.author.id, 'info.card')) return error(`У Вас нет банковской карты, вы не можете пользоваться услугами банка Freedom.`, message)
    if(!user) return error('Пользователь не обнаружен.', message)
    if(!Users.get(user.id)) return error('Данного пользователя нет в моей базе данных.', message)
    message.channel.send(`Найден пользователь **${user.user.tag ? user.user.tag : user.tag}**.`)
    if(user.user.bot) return error('Боту нельзя передать ф. коины.', message)
    if(user.id === message.author.id) return error('Вы не можете передать деньги себе.', message)
    let ao = Users.get(message.author.id, 'info.balances.money')
    if(!args[1]) return error('Укажите сумму.', message)
    if(args[1] < 0.01) return error(`Сумма должна быть больше 0.01 ${cfg.fc}`, message)
    let msg = await message.channel.send(`Введите ваш **пин-код**, который Вы указывали при регистрации карты.`)
    let channel = msg.channel;
    let collector = channel.createMessageCollector(m => message.author.id == m.author.id, {time: 120000});
    collector.on('collect', message => {
    if(isNaN(message.content)) return message.reply('Используйте цифры.')
    if(message.content.length > 4) return message.reply('Длина пин-кода 4 символа.')
    if(message.content == Users.get(message.author.id, 'info.card.pincode')) {
    message.delete()
    msg.delete()
    collector.stop();
  let commis = args[1]/12;
   if(args[1].toLowerCase() === 'all'){
     commis = ao/12
     if(ao < 0.01) return error(`У Вас не хватает денег для перевода.`, message)
     Users.math(message.author.id, '-', Number(ao), 'info.balances.money')
     Users.math(user.id, '+', Number(ao-commis), 'info.balances.money')
     Guilds.math('guilds', '+', Number(commis), 'info.balance.bank')
     let ok3 = new Discord.RichEmbed()
     .setTitle(`Новый перевод средств`)
     .setDescription(`Вы перевели __**${Number(ao-commis).toFixed(2)}**__ ${cfg.fc} пользователю **${user.user.tag}**. 
 Комиссия: **${commis.toFixed(2)}** ${cfg.fc}`)
 .addField(`Ваш баланс коинов`, `**${Users.get(message.author.id, 'info.balances.money').toFixed(2)}**`, true)
 .addField(`Баланс пользователя ${user.user.username}`, `**${Users.get(user.id, 'info.balances.money').toFixed(2)}**`, true)
 .setColor('BLURPLE')
 .setFooter(`Баланс банка Freedom ${Guilds.get('guilds', 'info.balance.bank').toFixed(2)}`)
 let embed = new Discord.RichEmbed()
 .setAuthor(`Freedom v${require(`../config.json`).version}`)
.setTitle('Перевод')
 .addField('Вам пришли деньги от:', `**${message.author.username}**`)
 .addField('На сервере:', `**${message.guild.name}**`)
 .addField('Коинов:', `**${Number(ao-commis).toFixed(2)} (Комиссия ${commis.toFixed(2)})**`)
   .setTimestamp()
  .setColor('ORANGE')
 user.send(embed)
 message.channel.send(ok3)
      } else if(args[1].toLowerCase() != 'all'){
    if(isNaN(args[1])) return error('Это не является суммой.', message)
    const mon = args[1]
    let comment = args.slice(2).join(" ")
    if(mon > Users.get(message.author.id, 'info.balances.money')+0.5) return error('У вас на балансе нет данной суммы.', message)
    Users.math(message.author.id, '-', Number(mon), 'info.balances.money')
    Users.math(user.id, '+', Number(mon-commis), 'info.balances.money')
    Guilds.math('guilds', '+', Number(commis), 'info.balance.bank')
    if(!comment) {
    let ok1 = new Discord.RichEmbed()
    .setTitle(`Новый перевод средств`)
    .setDescription(`Вы перевели __**${Number(mon-commis).toFixed(2)}**__ ${cfg.fc} пользователю **${user.user.tag}**. 
Комиссия: **${commis.toFixed(2)}** ${cfg.fc}`)
.addField(`Ваш баланс коинов`, `**${Users.get(message.author.id, 'info.balances.money').toFixed(2)}**`, true)
.addField(`Баланс пользователя ${user.user.username}`, `**${Users.get(user.id, 'info.balances.money').toFixed(2)}**`, true)
.setColor('BLURPLE')
.setFooter(`Баланс банка Freedom ${Guilds.get('guilds', 'info.balance.bank').toFixed(2)}`)
message.channel.send(ok1)
      let embed = new Discord.RichEmbed()
      .setAuthor(`Freedom v${require(`../config.json`).version}`)
     .setTitle('Перевод')
      .addField('Вам пришли деньги от:', `**${message.author.username}**`)
      .addField('На сервере:', `**${message.guild.name}**`)
      .addField('Коинов:', `**${mon-commis.toFixed(2)} (Комиссия ${commis.toFixed(2)})**`)
        .setTimestamp()
       .setColor('ORANGE')
      user.send(embed)
    } else {
      let ok2 = new Discord.RichEmbed()
      .setTitle(`Новый перевод средств`)
      .setDescription(`Вы перевели __**${Number(mon-commis).toFixed(2)}**__ ${cfg.fc} пользователю **${user.user.tag}**. 
  Комиссия: **${commis.toFixed(2)}** ${cfg.fc}`)
  .addField(`Комментарий`, `**${comment}**`)
  .addField(`Ваш баланс коинов`, `**${Users.get(message.author.id, 'info.balances.money').toFixed(2)}**`, true)
  .addField(`Баланс пользователя ${user.user.username}`, `**${Users.get(user.id, 'info.balances.money').toFixed(2)}**`, true)
  .setColor('BLURPLE')
  .setFooter(`Баланс банка Freedom ${Guilds.get('guilds', 'info.balance.bank').toFixed(2)}`)
  message.channel.send(ok2)
      let embed = new Discord.RichEmbed()
.setTitle('Перевод')
      .setAuthor(`Freedom v${require(`../config.json`).version}`)
      .addField('Вам пришли деньги от:', `**${message.author.username}**`)
      .addField('На сервере:', `**${message.guild.name}**`)
      .addField('Коинов:', `**${mon-commis.toFixed(2)} (Комиссия ${commis.toFixed(2)})**`)
      .addField('Комментарий к переводу:', `**${comment}**`)
       .setColor('ORANGE')
        .setTimestamp()
      user.send(embed)
    }}
  } else if(message.content != Users.get(message.author.id, 'info.card.pincode')) {
    error(`Ваш пин-код неверный, повторите операцию **-pay** ещё раз.`, message)
     collector.stop();
     msg.delete();
}
  })
}
  exports.help = {
    name: ["pay"],
    d: "Перевести деньги другому пользователю.",
    u: "pay <@Пользователь> <Сумма> [Комментарий]"
  }