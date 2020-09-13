let Discord = require('discord.js');
let cfg = require('../config.json');
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
    if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
if(!args.join("")){
    if(!Users.get(message.author.id, 'info.card.number')) return error(`Вы ещё не зарегистрировали свою банковскую карту, её можно зарегистрировать командой **-card registration**`, message)
let one = [`
╔════════════════════════════════════╗
║            FREEDOM CARD            ║
║         ${Users.get(message.author.id, 'info.card.number')}        ║
║                                    ║
║                                    ║
║                                    ║
║        ${message.author.username} | 12/25${' '.repeat(20-message.author.username.length)}║
╚════════════════════════════════════╝`]
let two = [`
╔════════════════════════════════════╗
║            FREEDOM CARD            ║
║         ${Users.get(message.author.id, 'info.card.number')}        ║
║                                    ║
║              CVV: ${Users.get(message.author.id, 'info.card.cvv')}              ║
║                                    ║
║        ${message.author.username} | 12/25${' '.repeat(20-message.author.username.length)}║
╚════════════════════════════════════╝`]
let page = 1
message.channel.send(`\`\`\`${one}\`\`\``).then(msg => {
msg.react('◀️').then(async e => { 
let rofl;
await msg.react('▶️').then(t => rofl = t)
let backFilt = (react, user) => react.emoji.name === '◀️' && user.id === message.author.id;
let goFilt = (react, user) => react.emoji.name === '▶️' && user.id === message.author.id;
let back = msg.createReactionCollector(backFilt, {time: 120000})
let go = msg.createReactionCollector(goFilt, {time: 120000})
back.on("collect", r => {
r.remove(message.author.id)
if(page === 1) return;
page--;
msg.edit(`\`\`\`${one}\`\`\``)
})
go.on("collect", r => {
r.remove(message.author.id)
if(page === 2) return;
page++;
msg.edit(`\`\`\`${two}\`\`\``)
})
setTimeout(() => {
e.remove(), rofl.remove();}, 120000)
})});
} else if(args.join("").toLowerCase() === 'registration'){
if(Users.get(message.author.id, 'info.card.number')) return error(`Вы уже зарегистрировали карту.`, message)
let msg = await message.channel.send(`Регистрация карты требует 700$ наличными. Вы согласны? (Да/Нет)`)
let channel = msg.channel;
let collector = channel.createMessageCollector(m => message.author.id == m.author.id, {time: 120000});
collector.on('collect', async message => {
if(message.content.toLowerCase().startsWith('да')) {
if(Users.get(message.author.id, 'info.balances.money') < 700) return error('У Вас не хватает денег для регистрации карты.', message), collector.stop();
message.channel.send(`Регистрация карты продолжится у Вас в **личных сообщениях**. Проверьте их.`)
let pincode = await message.author.send(`Напишите пин-код, который будет использоваться для операций с банк. картой.`)
let channel = pincode.channel;
let cll = channel.createMessageCollector(m => message.author.id == m.author.id, {time: 120000});
cll.on('collect', msgg => {
    if(isNaN(msgg.content)) return message.author.send('Введите пин-код **цифрами**. Повторите попытку снова.')
    if(msgg.content.length > 4 || msgg.content.length < 4) return message.author.send('Размер пин-кода **4** символа. Повторите попытку снова.')
    pincode.delete()
    msgg.author.send(`Ваш пин-код: **${msgg.content}**. Запомните его!`)
    Users.set(message.author.id, msgg.content, 'info.card.pincode') 
    cll.stop();
Users.set(message.author.id, `${require('../functions/randomize.js').randomize(1000, 9999)} ${require('../functions/randomize.js').randomize(1000, 9999)} ${require('../functions/randomize.js').randomize(1000, 9999)} ${require('../functions/randomize.js').randomize(1000, 9999)}`, 'info.card.number')
message.author.send(`Вы успешно зарегистрировали свою банковскую карту. Номер карты: **${Users.get(message.author.id, 'info.card.number')}**`)
Users.math(message.author.id, '-', 700, 'info.balances.money')
Users.set(message.author.id, `${Math.floor(Math.random()* (999-100)+100)}`, 'info.card.cvv')
collector.stop();
});
} else if(message.content.toLowerCase().startsWith('нет')) {
    succ('Регистрация успешно отменена.', message)
    collector.stop();
}})
}
}
exports.help = {
    name: ["card", "bcard"],
    d: "Посмотреть свою банковскую карту и настроить её.",
    u: "card [Settings] [Аргумент]"
}