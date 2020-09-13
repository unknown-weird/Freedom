let Discord = require('discord.js');
let cfg = require('../config.json');
let moment = require('moment')
moment.locale('ru')
exports.run = async (client, message, args, error, succ, Users, Guilds, timer, randomize) => {
if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
Bots = client.enmap.Bots
if(!args.join("")) return error('Укажите айди бота.', message)
let ubot = message.mentions.members.first() || await client.fetchUser(args[0])
if(!ubot) return error('Данное айди не найдено.', message)
if(ubot.user ? !ubot.user.bot : !ubot.bot) return error('Этот пользователь не является ботом.', message)
let bot = Bots.get(ubot.id)
if(!Bots.get(ubot.id)) return error('Данный бот ещё не был на проверке.', message)
let abot = await client.fetchUser(bot.info.bot_author)
let date = Date.now()-bot.info.date
if(date < 604800000) date = moment(bot.info.date).fromNow()
if(date >= 604800000) date = `${timer(parseInt((Date.now()-bot.info.date)/86400000), ['день', 'дня', 'дней'])} назад`
let embed = new Discord.RichEmbed()
.setTitle(`Проверка бота`)
.setThumbnail(ubot.avatarURL ? ubot.avatarURL : ubot.user.avatarURL)
.setAuthor(client.guilds.get('588011221677113354').name, client.guilds.get('588011221677113354').iconURL)
.setDescription(`Описание: **${bot.info.text}**`)
.addField(`Бот`, `
Тег: **${ubot.tag ? ubot.tag : ubot.user.tag}**
ID: **${ubot.id}**`, true)
.addField(`Проверяющий`, `
Тег: **${bot.info.check_tag}**
ID: **${bot.info.check}**`, true)
.addField(`Информация о боте`,`
Статус бота: **${bot.info.status.replace('accepted', 'Подтверждён').replace('declined', 'Отклонён').replace('wait', 'Отложен')}**
Автор бота: **${abot.tag? abot.tag : 'Неизвестный тег.'}** [${bot.info.bot_author}]
Дата верификации [МСК]: **${moment(bot.info.date).add(3, 'hours').format('DD/MM/YYYY - HH:mm')}** (${date})`)
if(bot.info.status === 'accepted') embed.setColor('GREEN')
if(bot.info.status === 'declined') embed.setColor('RED')
if(bot.info.status === 'wait') embed.setColor('#f5c235')
message.channel.send(embed)
}
exports.help = {
    name: ['bot-info', 'botinfo']
}