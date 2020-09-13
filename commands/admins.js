const Discord = require("discord.js");
let Enmap = require('enmap')
module.exports.run = async (client, message, args, error, succ, Users, Guilds, timer, randomize) => {
let user = (user, info) => Users.get(user, `${info}`)
let embed = new Discord.RichEmbed()
.setTitle(`Администрация Freedom`)
.addField(`STAFF'S`, `
${client.users.get('441954631539490857').tag} [Очков: **${user('441954631539490857', 'info.admin.score') || 0}**] [Проверенных ботов: **${user('441954631539490857', 'info.bots.check') || 0}**]`)
//${client.users.get('361951318929309707').tag} [Очков: ${user('361951318929309707', 'info.admin.score') || 0}]`)
.addField(`ADMINISTRATOR'S`, `
${client.users.get('578936810936467459').tag} [Очков: **${user('578936810936467459', 'info.admin.score') || 0}**] [Варнов: **${user('578936810936467459', 'info.admin.warn') || 0}**] [Проверенных ботов: **${user('578936810936467459', 'info.bots.check') || 0}**]
${client.users.get('643018466261205021').tag} [Очков: **${user('643018466261205021', 'info.admin.score') || 0}**] [Варнов: **${user('643018466261205021', 'info.admin.warn') || 0}**] [Проверенных ботов: **${user('643018466261205021', 'info.bots.check') || 0}**]`)
/*.addField(`MODERATOR'S`, `
${client.users.get('571006178444836875').tag} [Очков: **${user('571006178444836875', 'info.admin.score') || 0}**] [Варнов: **${user('571006178444836875', 'info.admin.warn') || 0}**]
${client.users.get('477793458514427904').tag} [Очков: **${user('477793458514427904', 'info.admin.score') || 0}**] [Варнов: **${user('477793458514427904', 'info.admin.warn') || 0}**]
${client.users.get('586279829431910410').tag} [Очков: **${user('586279829431910410', 'info.admin.score') || 0}**] [Варнов: **${user('586279829431910410', 'info.admin.warn') || 0}**]`)
*/
.addField(`MODERATOR'S`, `
${client.users.get('477793458514427904').tag} [Очков: **${user('477793458514427904', 'info.admin.score') || 0}**] [Варнов: **${user('477793458514427904', 'info.admin.warn') || 0}**]
${client.users.get('586279829431910410').tag} [Очков: **${user('586279829431910410', 'info.admin.score') || 0}**] [Варнов: **${user('586279829431910410', 'info.admin.warn') || 0}**] [Проверенных ботов: **${user('586279829431910410', 'info.bots.check') || 0}**]`)
.addField(`TESTER'S`, `
${client.users.get('543067684494114817').tag} [Проверенных ботов: **${user('543067684494114817', 'info.bots.check') || 0}**]`)
.setColor('BLUE')
.setFooter(`Максимально возможное количество возможных варнов: 3`)
.setTimestamp()
message.channel.send(embed)
}
exports.help = {
    name: ['admins'],
    d: 'Показывает всю администрацию серверов.',
    u: 'admins'
}