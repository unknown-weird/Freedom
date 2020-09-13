let Discord = require('discord.js');
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
  if(message.channel.id == '548899664544399389') return message.channel.send('Данная команда работает только в <#556453541179293696>.')
  if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
  if(!Users.get(message.author.id, 'info.card.number')) return message.channel.send(`У Вас нет банковской карты, вы не можете пользоваться услугами банка Freedom.`)
  if(!args.join("")) return error('Укажите сумму или all.', message)
  let oo = Users.get(message.author.id, 'info.balances.bank')
  let msg = await message.channel.send(`Введите ваш пин-код, который Вы указывали при регистрации карты.`)
let channel = msg.channel;
let collector = channel.createMessageCollector(m => message.author.id == m.author.id, {time: 120000});
collector.on('collect', message => {
if(isNaN(message.content)) return message.reply('Используйте цифры.')
if(message.content.length > 4) return message.reply('Длина пин-кода 4 символа.')
if(message.content == Users.get(message.author.id, 'info.card.pincode')) {
message.delete()
msg.delete()
collector.stop();
   if(args[0].toLowerCase() === 'all'){
   if(oo === 0) return error('У вас нет коинов на банковском счёте.', message)
   if(oo < 0.01) return error(`У вас на банковском счёте отрицательное количество коинов.`, message)
    Users.math(message.author.id, '-', Number(oo), 'info.balances.bank')
    Users.math(message.author.id, '+', Number(oo), 'info.balances.money')
    let embed = new Discord.RichEmbed()
    .setAuthor(`Freedom v${require(`../config.json`).version}`)
    .setTitle('Готово.')
    .setDescription(`Вы сняли с банковского счёта **${oo.toFixed(2)}** ${cfg.fc}`)
    .addField(`Сумма в банке`, `**${Users.get(message.author.id, 'info.balances.bank').toFixed(2)}** ${cfg.fc}`, true)
    .addField(`Наличные`, `**${Users.get(message.author.id, 'info.balances.money').toFixed(2)}** ${cfg.fc}`, true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed)
    } else {
        const mon = args[0]
     if(isNaN(mon)) return error('Это не является суммой.', message)
    if(mon < 0.01) return error('Сумма должна быть больше 0.', message)
   if(mon > oo+0.01) return error('У вас нет столько коинов на банковском счёте.', message)
   if(mon < oo) Users.math(message.author.id, '-', Number(mon), 'info.balances.bank')
   if(mon >= oo) Users.set(message.author.id, 0, 'info.balances.bank')
    Users.math(message.author.id, '+', Number(mon), 'info.balances.money')
    let embed = new Discord.RichEmbed()
    .setAuthor(`Freedom v${require(`../config.json`).version}`)
    .setTitle('Готово.')
    .setDescription(`Вы сняли с банковского счёта **${Number(mon).toFixed(2)}** ${cfg.fc}`)
    .addField(`Сумма в банке`, `**${Users.get(message.author.id, 'info.balances.bank').toFixed(2)}** ${cfg.fc}`, true)
    .addField(`Наличные`, `**${Users.get(message.author.id, 'info.balances.money').toFixed(2)}** ${cfg.fc}`, true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed) 
    }
} else if(message.content != Users.get(message.author.id, 'info.card.pincode')) {
   message.channel.send(`Ваш пин-код неверный, повторите ещё раз.`)
    collector.stop();
    message.delete()
}})
  }
  exports.help = {
      name: ["with", "withdraw"],
      d: "Снять деньги с банковского счёта.",
      u: "withdraw <all/Количество>"
  }