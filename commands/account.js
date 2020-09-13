Discord = require('discord.js')
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
randomize = require('../functions/randomize.js').randomize
if(!Users.get(message.author.id)) return Users.set(message.author.id, {id: message.author.id, info: {
      achievements: [],
      work: 1,
      upgrades: [],
      levels: {level: 1, xp: 0, xpall: 0},
      boxes: {common_box: 0, rare_box: 0, epic_box: 0, legendary_box: 0, mythical_box: 0, roulettes: 0},
      balances: {money: 0.00, bank: 0.00, deposit: 0.00, euro: 0.00},
      reputation: {rep_plus: 0, rep_minus: 0},
      cols: {work: 0, crime: 0, ach: 0, rob: 0, box: 0, messages: 0},
      inv: []
    }}), succ(`Вы успешно зарегистрированы в базе данных!`, message)
if(Users.get(message.author.id)) return error('Ваш аккаунт уже есть в базе данных.', message)
}
exports.help = {
    name: ['account'],
    d: 'Перенести Ваш аккаунт со старой базы данных на новую.',
    u: 'account'
}