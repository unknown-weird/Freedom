let Discord = require('discord.js');
let cfg = require('../config.json');
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
  if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
  if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
    if(!args[0]) return error('Укажите сумму или all.', message)
    let oo = Users.get(message.author.id, 'info.balances.deposit')
    if(args[0].toLowerCase() === 'all'){
   if(oo === 0) return error('На депозите нет коинов.', message)
   if(oo < 0.01) return error(`У вас на депозите отрицательное количество коинов`, message)
    Users.math(message.author.id, '+', Number(oo), 'info.balances.money')
    Users.math(message.author.id, '-', Number(oo), 'info.balances.deposit')
    let embed = new Discord.RichEmbed()
    .setAuthor(`Freedom v${require(`../config.json`).version}`)
    .setTitle('Готово.')
    .setDescription(`Вы сняли с депозитного счёта **${oo.toFixed(2)}** ${cfg.fc}`)
    .addField(`Сумма на депозите`, `**${Users.get(message.author.id, 'info.balances.deposit').toFixed(2)}** ${cfg.fc}`, true)
    .addField(`Наличные`, `**${Users.get(message.author.id, 'info.balances.money').toFixed(2)}** ${cfg.fc}`, true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed)
    } else {
        const mon = args[0]
     if(isNaN(mon)) return error('Это не является суммой.', message)
    if(mon < 0.01) return error('Сумма должна быть больше 0.', message)
   if(oo < mon) return error('У вас нет столько коинов.', message)
   if(mon < oo) Users.math(message.author.id, '-', Number(mon), 'info.balances.deposit')
   if(mon >= oo) Users.set(message.author.id, 0, 'info.balances.deposit')
   Users.math(message.author.id, '+', Number(mon), 'info.balances.money')
    let embed = new Discord.RichEmbed()
    .setAuthor(`Freedom v${require(`../config.json`).version}`)
    .setTitle('Готово.')
    .setDescription(`Вы сняли с депозитного счёта **${Number(mon).toFixed(2)}** ${cfg.fc}`)
    .addField(`Сумма на депозите`, `**${Users.get(message.author.id, 'info.balances.deposit').toFixed(2)}** ${cfg.fc}`, true)
    .addField(`Наличные`, `**${Users.get(message.author.id, 'info.balances.money').toFixed(2)}** ${cfg.fc}`, true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed) 
    }
}
exports.help = {
    name: ["undep", 'take'],
    d: "Снять коины с депозитного счёта.",
    u: "take <all/Количество коинов>"
}