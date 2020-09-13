let Discord = require("discord.js")
cfg = require('../config.json')
enmap = require('enmap')
let others = new enmap()
exports.run = async (client, message,args, error, succ, Users, Guilds) => {
    if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
    if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
Marry = client.enmap.Marry
let mUser = message.mentions.members.first() || client.users.get(args.join("")) || message.guild.members.find(r => r.user.tag.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0])) || message.guild.members.find(r => r.displayName.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0])) || message.member;
if(!Users.get(mUser.id)) return error(`**${mUser.user.tag}** не зарегистрирован в базе данных.`, message)
let author = message.author
if(Users.get(message.author.id, 'info.marries.marry_id') != undefined) return error('Вы хотите изменить своей(му) жене/мужу? Не нужно.', message)
if(!args.join("")) return error('Укажи свою вторую половинку :heart:', message)
if(!mUser) return error('Я не нашёл данного пользователя..', message)
if(mUser.user.bot) return error(`Вы не можете кинуть запрос на брак боту.`, message)
if(Users.get(mUser.id, 'info.marries.marry_id') != undefined) return error('Он/Она уже имеет мужа/жену.', message)
if(mUser.id === message.author.id) return error('А зачем на себе жениться?', message)
if(Users.get(mUser.id, 'info.marries.marry_id') == mUser.id) return error('Вы уже женились на нём/ней, одумайтесь.. :thinking:', message)
if(others.get(mUser.id)&&others.get(mUser.id).marry == 1) return error('Данный пользователь уже получил запрос на брак.', message)
if(mUser.id == author.id) return error('Данный пользователь уже получил запрос на брак.', message)
if(others.get(author.id)&&others.get(author.id).marry == 1) return error(`Вы уже подали запрос на брак.`, message)
others.set(mUser.id, 1, 'marry')
others.set(author.id, 1, 'marry')
let embedd = new Discord.RichEmbed()
.setTitle(`Запрос на брак`)
.setDescription(`${mUser}, Вы согласны вступить в брак с ${author}? (Да/Нет)`)
.setColor('BLUE')
.setTimestamp()
.setAuthor(`Freedom v${cfg.version}`)
message.channel.send(`${mUser}`).then(msg => msg.delete(1000));
let msg = await message.channel.send(embedd)
let channel = msg.channel;
let collector = channel.createMessageCollector(m => mUser.id == m.author.id, {time: 60000});
setTimeout(() => others.clear(), 60000)
collector.on('collect', message => {
if(message.content.toLowerCase().startsWith('да')) {
let embed = new Discord.RichEmbed()
.setTitle('Новая свадьба!')
.setDescription(`${mUser}, Вы успешно вступили в брак с ${author}, и теперь Вас ждёт хорошая жизнь!`)
.setColor('GREEN')
.setTimestamp()
.setAuthor(`Freedom v${cfg.version}`)
message.channel.send(embed)
others.clear();
let number;
let ok = parseInt(Math.random() * 10000)
if(ok !== Marry.has(ok)) number = ok
if(ok === Marry.has(ok)) number = ok+999999
Marry.set(number, {id: number, members: [`${author.id}`, `${mUser.id}`], money: 0, children: [], info: {name: `Family #${number}`, description: `Обычная ничем не выделяющаяся семья номер ${number}`}})
Users.set(author.id, mUser.id, 'info.marries.marry_id')
Users.set(mUser.id, mUser.id, 'info.marries.marry_id')
Users.set(author.id,  mUser.id, 'info.marries._marry')
Users.set(mUser.id, author.id, 'info.marries._marry')
collector.stop();
} else if(message.content.toLowerCase().startsWith('нет')) {
    let net = new Discord.RichEmbed()
    .setTitle(`Отказ...`)
    .setColor('RED')
    .setFooter(`Возможно в следующий раз повезёт..`)
    .setTimestamp()
    .setAuthor(`Freedom v${cfg.version}`)
   if(Users.get(mUser.id).info.gender == 'male') net.setDescription(`${author}, Ваше сердце было разбито, ведь ${mUser} не согласился вступить с Вами в брак...`)
   if(Users.get(mUser.id).info.gender == 'female') net.setDescription(`${author}, Ваше сердце было разбито, ведь ${mUser} не согласилась вступить с Вами в брак...`)
   if(!Users.get(mUser.id).info.gender) net.setDescription(`${author}, Ваше сердце было разбито, ведь ${mUser} не согласился/согласилась вступить с Вами в брак...`)
   if(Users.get(mUser.id).info.gender == 'Трап') net.setDescription(`${author}, Ваше сердце было разбито, ведь ${mUser} не согласилось вступить с Вами в брак...`)
    message.channel.send(net)
    collector.stop();
    others.clear();
}})
}
exports.help = {
    name: ["marry"],
    d: "Выйти замуж.",
    u: "marry <@Пользователь>"
}