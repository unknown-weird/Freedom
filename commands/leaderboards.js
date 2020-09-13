let Discord = require('discord.js')
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
Marry = client.enmap.Marry
    if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
let filtered = Users.array();
i = 1;
ii = 0;
    if(!args.join("")) return error(`Укажите тип:
-top xp - Топ по XP
-top level - Топ по уровню
-top money - Топ по коинам 
-top euro - Топ по евро
-top fm - Топ по семейному счёту
-top bank - Топ по банку
-top deposit - Топ по депозиту
-top messages - Топ по сообщениям
-top rep - Топ по репутации`, message)
    if(args.join("") !== 'xp' &&
    args.join("") !== 'level' && 
    args.join("") !== 'money' &&
    args.join("") !== 'euro' &&
    args.join("") !== 'bank' &&
    args.join("") !== 'deposit' &&
    args.join("") !== 'messages' &&
    args.join("") !== 'msg' &&
    args.join("") !== 'lvl' &&
    args.join("") !== 'dep' &&
    args.join("") !== 'rep' &&
    args.join("") !== 'reputation'&&
    args.join("") !== 'fm'&&
    args.join("") !== 'familymoney') return error('Данная таблица лидеров не найдена.', message)
    if(args.join("").toLowerCase() === 'money'){
const sorted = filtered.sort((a, b) => b.info.balances.money-a.info.balances.money);
const top21 = sorted.splice(0, 21);
let embed = new Discord.RichEmbed();
for(const data of top21) {
if(data.info.balances.money > 0){
ii++;
let kek = 0;
if(ii < 21) kek = i
if(ii === 21) kek = 21
if(ii > 21) kek = 21
    embed.addField(`${i++}. ${client.users.get(data.id) ? client.users.get(data.id).tag : 'Неизвестный пользователь'}`, `${data.info.balances.money.toFixed(2)} ${cfg.fc}`, true);
    embed.setTitle(`TOP ${kek}`)
    embed.setAuthor(`Freedom v${require(`../config.json`).version}`)
    embed.setFooter(`Топ ${kek} по ФК.`)
    embed.setColor('BLURPLE')
    embed.setTimestamp()
}
}
message.channel.send(embed);
    } else if(args.join("").toLowerCase() === 'euro'){
const sorted = filtered.sort((a, b) => b.info.balances.euro-a.info.balances.euro);
const top21 = sorted.splice(0, 21);
let embed = new Discord.RichEmbed();
for(const data of top21) {
if(data.info.balances.euro > 0){
ii++;
let kek = 0;
if(ii < 21) kek = i
if(ii === 21) kek = 21
if(ii > 21) kek = 21
    embed.addField(`${i++}. ${client.users.get(data.id) ? client.users.get(data.id).tag : 'Неизвестный пользователь'}`, `${data.info.balances.euro.toFixed(2)} :euro:`, true);
    embed.setTitle(`TOP ${kek}`)
    embed.setAuthor(`Freedom v${require(`../config.json`).version}`)
    embed.setFooter(`Топ ${kek} по "Евро".`)
    embed.setColor('BLURPLE')
    embed.setTimestamp()
}
}
message.channel.send(embed);
    } else if(args.join("").toLowerCase() === 'xp'){
const sorted = filtered.sort((a, b) => b.info.levels.xpall-a.info.levels.xpall);
const top21 = sorted.splice(0, 21);
let embed = new Discord.RichEmbed();
for(const data of top21) {
if(data.info.levels.xpall > 0){
ii++;
let kek = 0;
if(ii < 21) kek = i
if(ii === 21) kek = 21
if(ii > 21) kek = 21
    embed.addField(`${i++}. ${client.users.get(data.id) ? client.users.get(data.id).tag : 'Неизвестный пользователь'}`, `${data.info.levels.xpall} XP`, true);
    embed.setTitle(`TOP ${kek}`)
    embed.setAuthor(`Freedom v${require(`../config.json`).version}`)
    embed.setFooter(`Топ ${kek} по XP.`)
    embed.setColor('BLURPLE')
    embed.setTimestamp()
}
}
message.channel.send(embed);
    } else if(args.join("").toLowerCase() === 'level' || args.join("").toLowerCase() === 'lvl'){
const sorted = filtered.sort((a, b) => b.info.levels.level-a.info.levels.level);
const top21 = sorted.splice(0, 21);
let embed = new Discord.RichEmbed();
for(const data of top21) {
if(data.info.levels.level > 1){
ii++;
let kek = 0;
if(ii < 21) kek = i
if(ii === 21) kek = 21
if(ii > 21) kek = 21
    embed.addField(`${i++}. ${client.users.get(data.id) ? client.users.get(data.id).tag : 'Неизвестный пользователь'}`, `${data.info.levels.level} [LEVEL]`, true);
    embed.setTitle(`TOP ${kek}`)
    embed.setAuthor(`Freedom v${require(`../config.json`).version}`)
    embed.setFooter(`Топ ${kek} по уровням.`)
    embed.setColor('BLURPLE')
    embed.setTimestamp()
}
}
message.channel.send(embed);
    } else if(args.join("").toLowerCase() === 'bank'){
const sorted = filtered.sort((a, b) => b.info.balances.bank-a.info.balances.bank);
const top21 = sorted.splice(0, 21);
let embed = new Discord.RichEmbed();
for(const data of top21) {
if(data.info.balances.bank > 0){
ii++;
let kek = 0;
if(ii < 21) kek = i
if(ii === 21) kek = 21
if(ii > 21) kek = 21
    embed.addField(`${i++}. ${client.users.get(data.id) ? client.users.get(data.id).tag : 'Неизвестный пользователь'}`, `${data.info.balances.bank.toFixed(2)} ${cfg.fc}`, true);
    embed.setTitle(`TOP ${kek}`)
    embed.setAuthor(`Freedom v${require(`../config.json`).version}`)
    embed.setFooter(`Топ ${kek} по ФК в банке.`)
    embed.setColor('BLURPLE')
    embed.setTimestamp()
}
}
message.channel.send(embed);
    } else if(args.join("").toLowerCase() === 'deposit' || args.join("").toLowerCase() === 'dep'){
const sorted = filtered.sort((a, b) => b.info.balances.deposit-a.info.balances.deposit);
const top21 = sorted.splice(0, 21);
let embed = new Discord.RichEmbed();
for(const data of top21) {
if(data.info.balances.deposit > 0){
ii++;
let kek = 0;
if(ii < 21) kek = i
if(ii === 21) kek = 21
if(ii > 21) kek = 21
    embed.addField(`${i++}. ${client.users.get(data.id) ? client.users.get(data.id).tag : 'Неизвестный пользователь'}`, `${data.info.balances.deposit.toFixed(2)} ${cfg.fc}`, true);
    embed.setTitle(`TOP ${kek}`)
    embed.setAuthor(`Freedom v${require(`../config.json`).version}`)
    embed.setFooter(`Топ ${kek} по ФК на депозите.`)
    embed.setColor('BLURPLE')
    embed.setTimestamp()
}
}
message.channel.send(embed);
    } else if(args.join("").toLowerCase() === 'messages' || args.join("").toLowerCase() === 'msg'){
const sorted = filtered.sort((a, b) => b.info.cols.messages-a.info.cols.messages);
const top21 = sorted.splice(0, 21);
let embed = new Discord.RichEmbed();
for(const data of top21) {
if(data.info.cols.messages > 0){
ii++;
let kek = 0;
if(ii < 21) kek = i
if(ii === 21) kek = 21
if(ii > 21) kek = 21
    embed.addField(`${i++}. ${client.users.get(data.id) ? client.users.get(data.id).tag : 'Неизвестный пользователь'}`, `${data.info.cols.messages} :newspaper2:`, true);
    embed.setTitle(`TOP ${kek}`)
    embed.setAuthor(`Freedom v${require(`../config.json`).version}`)
    embed.setFooter(`Топ ${kek} по сообщениям.`)
    embed.setColor('BLURPLE')
    embed.setTimestamp()
}
}
message.channel.send(embed);
    } else if(args.join("").toLowerCase() === 'rep' || args.join("").toLowerCase() === 'reputation'){
        let users = Users.array().map(user => ({tag: client.users.get(user.id) && client.users.get(user.id).tag || 'Неизвестный пользователь', rep: user.info.reputation.rep_plus - user.info.reputation.rep_minus})).filter(user => user.rep).sort((a, b) => b.rep - a.rep).slice(0,21)
let embed = new Discord.RichEmbed();
    users.map(r => embed.addField(`${i++}. ${r.tag}`,`${r.rep} [REP]`,true), ii++)
let kek = 0;
if(ii < 21) kek = i
if(ii === 21) kek = 21
if(ii > 21) kek = 21
    embed.setTitle(`TOP ${kek-1}`)
    embed.setAuthor(`Freedom v${require(`../config.json`).version}`)
    embed.setFooter(`Топ ${kek-1} по репутации.`)
    embed.setColor('BLURPLE')
    embed.setTimestamp()
  message.channel.send(embed);
} else if(args.join("").toLowerCase() === 'fm' || args.join("").toLowerCase() === 'familymoney'){
const sorted = Marry.array().sort((a, b) => b.money-a.money);
const top21 = sorted.splice(0, 21);
let embed = new Discord.RichEmbed();
for(const data of top21) {
if(data.money > 0){
ii++;
let kek = 0;
if(ii < 21) kek = i
if(ii === 21) kek = 21
    if(ii > 21) kek = 21
    embed.addField(`${i++}. **${data.info.name}**`, `${Number(data.money).toFixed(2)} ${cfg.fc}`, true);
    embed.setTitle(`TOP ${kek}`)
    embed.setAuthor(`Freedom v${require(`../config.json`).version}`)
    embed.setFooter(`Топ ${kek} по семейному счёту.`)
    embed.setColor('BLURPLE')
    embed.setTimestamp()
}
}
message.channel.send(embed);
    }
}
exports.help = {
    name: ["leaderboard", "lb", "top", "tp"],
    d: "Показывает топ по разным категориям.",
    u: "-top messages"
}