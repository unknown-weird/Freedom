let Discord = require('discord.js');
let cfg = require('../config.json');
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
  if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
  if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
  if(!Users.get(message.author.id, 'info.card.number')) return error(`У Вас нет банковской карты, вы не можете пользоваться услугами банка Freedom.`, message)
    if(!args[0]) return error('Укажите сумму или all.', message)
    let oo = Users.get(message.author.id, 'info.balances.money')
    if(args[0].toLowerCase() === 'all'){
   if(oo === 0) return error('У вас нет денег.', message)
   if(oo < 0.01) return error(`У вас на балансе отрицательное количество ${cfg.fc}`, message)
    Users.math(message.author.id, '+', Number(oo), 'info.balances.bank')
    Users.math(message.author.id, '-', Number(oo), 'info.balances.money')
    let embed = new Discord.RichEmbed()
    .setAuthor(`Freedom v${require(`../config.json`).version}`)
    .setTitle('Готово.')
    .setDescription(`Вы положили в банк **${oo.toFixed(2)}** ${cfg.fc}`)
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
   if(mon > oo) return error('У вас нет столько денег.', message)
    Users.math(message.author.id, '+', Number(mon), 'info.balances.bank')
    if(mon < oo) Users.math(message.author.id, '-', Number(mon), 'info.balances.money')
    if(mon >= oo) Users.set(message.author.id, 0, 'info.balances.money')
    let embed = new Discord.RichEmbed()
    .setAuthor(`Freedom v${require(`../config.json`).version}`)
    .setTitle('Готово.')
    .setDescription(`Вы положили в банк **${Number(mon).toFixed(2)}** ${cfg.fc}`)
    .addField(`Сумма в банке`, `**${Users.get(message.author.id, 'info.balances.bank').toFixed(2)}** ${cfg.fc}`, true)
    .addField(`Наличные`, `**${Users.get(message.author.id, 'info.balances.money').toFixed(2)}** ${cfg.fc}`, true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed) 
    }
}
exports.help = {
    name: ["bank"],
    d: "Положить деньги в банк.",
    u: "bank <all/Количество>"
}