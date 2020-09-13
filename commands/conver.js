let Discord = require('discord.js');
let cfg = require('../config.json');
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
    if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
  if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
  let guild = Guilds.get('guilds')
  let embed = new Discord.RichEmbed()
  .setTitle(`Конвертация валюты`)
  .setDescription(`Укажите конвертацию по реакции.
:euro: - с **ФК в евро**
${cfg.fc} - с **евро в ФК**`)
.addField(`Текущий курс евро и время:`, `**${guild.info.euro.course}** ${cfg.fc} за **1** :euro:, осталось **${require('../functions/timer.js').timer(guild.info.euro.time, ['минута', 'минуты', 'минут'])}**.`)
.setColor('GREEN')
.setFooter(`Лимит: 200 евро и 20.000 ФК`, client.user.avatarURL)
.setTimestamp()
if(!args.join("")) return message.channel.send(embed).then(async msg => {
let eblan;
msg.react("💶").then(async e => {
await msg.react("671734965645475840").then(m => eblan = m)
let fcf = (react, user) => react.emoji.id === '671734965645475840' && user.id === message.author.id;
let goFilt = (react, user) => react.emoji.name === '💶' && user.id === message.author.id;
setTimeout(() => {
eblan.remove(), e.remove();
}, 60000)
let fc = msg.createReactionCollector(fcf, {time: 60000})
let euros = msg.createReactionCollector(goFilt, {time: 60000})
fc.on("collect", async r => {
r.remove() && r.remove(message.author.id)
fc.stop();
euros.stop();
let msg = await message.channel.send(`Укажите количество **евро** для конвертации в **коины**. (от 1 до 200)`)
let channel = msg.channel;
let collector = channel.createMessageCollector(m => m.author.id == message.author.id, {time: 120000});
collector.on('collect', message => {
    let mc = message.content.replace(/' '/g, '')
    let euro = Users.get(message.author.id, 'info.balances.euro')
    if(isNaN(mc)) return error('Это не является числом.', message), collector.stop();
    if(euro < 1) return error('У Вас нет евро для конвертации.', message), collector.stop();
    if(euro - 1*mc < 0) return error(`У Вас не хватает евро для конвертации. Сейчас у вас **${euro}** :euro:`, message), collector.stop();
    if(mc < 1) return error('Нельзя конвертировать меньше 1 :euro:.', message), collector.stop();
    if(mc > 200) return error('За один раз не более 200 :euro:.', message), collector.stop();
    succ(`Вы успешно конвертировали **${Number(mc).toFixed(2)}** :euro: в **${Number(mc*guild.info.euro.course).toFixed(2)}** ${cfg.fc}.`, message), collector.stop();
    Users.math(message.author.id, '+', Number(mc*guild.info.euro.course), 'info.balances.money')
    Users.math(message.author.id, '-', Number(mc), 'info.balances.euro')
});
});
euros.on("collect", async r => {
r.remove() && r.remove(message.author.id)
euros.stop();
fc.stop();
let msg = await message.channel.send(`Укажите количество **евро**, которые хотите обменять, чтобы снять **коины умноженные на курс**. (от 1 до 200)`)
let channel = msg.channel;
let collector = channel.createMessageCollector(m => m.author.id == message.author.id, {time: 120000});
collector.on('collect', message => {
    let mc = message.content.replace(/' '/g, '')
    let money = Users.get(message.author.id, 'info.balances.money')
    if(isNaN(mc)) return error('Это не является числом.', message), collector.stop();
    if(money < 100) return error('У Вас нет коинов для конвертации.', message), collector.stop();
    if(money - guild.info.euro.course*mc < 0) return error(`У Вас не хватает коинов для конвертации. Сейчас у вас **${money.toFixed(2)}** ${cfg.fc}`, message), collector.stop();
    if(mc < 1) return error(`Нельзя конвертировать меньше 100 ${cfg.fc}.`, message), collector.stop();
    if(mc > 200) return error(`За один раз не более 20.000 ${cfg.fc}.`, message), collector.stop();
    succ(`Вы успешно конвертировали **${Number(mc*guild.info.euro.course).toFixed(2)}** ${cfg.fc} в **${Number(mc).toFixed(2)}** :euro:.`, message), collector.stop();
    Users.math(message.author.id, '+', Number(mc), 'info.balances.euro')
    Users.math(message.author.id, '-', Number(mc*guild.info.euro.course), 'info.balances.money')
});
});
});
});
}
exports.help = {
    name: ["convert", "conver", "cr"],
    d: "Конвертирует валюту.",
    u: "conver"
}