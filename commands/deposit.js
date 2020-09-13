let Discord = require('discord.js');
let cfg = require('../config.json');
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
  if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
  if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
  let dep = 25000.01;
  if(Users.get(message.author.id).info.upgrades.includes('deposit')) dep = 50000.01;
  if(!args[0]) return error('Укажите сумму или all.', message)
    let oo = Users.get(message.author.id, 'info.balances.money')
    if(args[0].toLowerCase() === 'all'){
    if(Users.get(message.author.id, 'info.balances.money')+Users.get(message.author.id, 'info.balances.deposit') > dep) return error(`Установлен лимит по балансу на депозитном счёте в ${Number(dep-0.01)} ${cfg.fc}.`, message)
    if(Users.get(message.author.id, 'info.balances.deposit') > dep) return error(`Установлен лимит по балансу на депозитном счёте в ${Number(dep-0.01)} ${cfg.fc}.`, message)
   if(oo === 0) return error('У вас нет денег.', message)
   if(oo < 0.01) return error(`У вас на балансе отрицательное количество ${cfg.fc}`, message)
    Users.math(message.author.id, '+', Number(oo), 'info.balances.deposit')
    Users.math(message.author.id, '-', Number(oo), 'info.balances.money')
    let embed = new Discord.RichEmbed()
    .setAuthor(`Freedom v${require(`../config.json`).version}`)
    .setTitle('Готово.')
    .setDescription(`Вы положили на депозитный счёт **${oo.toFixed(2)}** ${cfg.fc}`)
    .addField(`Сумма на депозите`, `**${Users.get(message.author.id, 'info.balances.deposit').toFixed(2)}** ${cfg.fc}`, true)
    .addField(`Наличные`, `**${Users.get(message.author.id, 'info.balances.money').toFixed(2)}** ${cfg.fc}`, true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed)
    } else {
        const mon = Number(args[0])
     if(isNaN(mon)) return error('Это не является суммой.', message)
      //if(mon >= dep) return error(`Установлен лимит`, message)
     if(mon+Users.get(message.author.id, 'info.balances.deposit') > dep) return error(`Установлен лимит по балансу на депозитном счёте в ${Number(dep-0.01)} ${cfg.fc}.`, message)
    if(Users.get(message.author.id, 'info.balances.deposit') > dep) return error(`Установлен лимит по балансу на депозитном счёте в ${Number(dep-0.01)} ${cfg.fc}.`, message)
     if(mon < 0.01) return error('Сумма должна быть больше 0.', message)
     if(mon > oo) return error('У вас нет столько коинов.', message)
    if(mon < oo) Users.math(message.author.id, '-', Number(mon), 'info.balances.money')
    if(mon >= oo) Users.set(message.author.id, 0, 'info.balances.money')
    Users.math(message.author.id, '+', Number(mon), 'info.balances.deposit')
    let embed = new Discord.RichEmbed()
    .setAuthor(`Freedom v${require(`../config.json`).version}`)
    .setTitle('Готово.')
    .setDescription(`Вы положили на депозит **${mon.toFixed(2)}** ${cfg.fc}`)
    .addField(`Сумма на депозите`, `**${Users.get(message.author.id, 'info.balances.deposit').toFixed(2)}** ${cfg.fc}`, true)
    .addField(`Наличные`, `**${Users.get(message.author.id, 'info.balances.money').toFixed(2)}** ${cfg.fc}`, true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed) 
    }
}
exports.help = {
    name: ["deposit", 'dep'],
    d: "Положить деньги на депозит.",
    u: "bank <all/Количество>"
}