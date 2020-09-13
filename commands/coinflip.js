let Discord = require('discord.js');
let cfg = require('../config.json');
let randomizeOut = require('../functions/randomizeOut.js').randomizeOut
exports.run = async (client, message, args, error, succ, Users, Guilds, timer, randomize) => {
    let timeout = 180000;
    let timeout2 = require('../functions/timeout.js').timeout
    if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
    let cww = Users.get(message.author.id, `info.dailys.coinflip`);
    if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
    if(!cww || cww <= Date.now()){
        if(!args[0]) return error('Укажите Вашу ставку.', message)
        if(isNaN(args[0])) return error(`Это не является цифрой.`, message)
        if(args[0] > 200) return error(`За один раз не более **200** коинов.`, message)
        if(args[0] < 1) return error(`Нельзя указать ставку меньше **1** коина.`, message)
        if(Users.get(message.author.id, 'info.balances.money') < args[0]) return error(`У Вас не хватает коинов для ставки.`, message)
        if(!args[1]) return error(`Укажите, на кого Вы ставите ставку. Орёл/решка.`, message)
        let bet;
        let result = ['орёл', 'решка', 'орёл', 'решка'];
        let brandom = result[Math.floor(Math.random() * result.length)]
        if(args[1].toLowerCase() != 'орёл' && args[1].toLowerCase() != 'орел' && args[1].toLowerCase() != 'о' && args[1].toLowerCase() != 'рёшка' && args[1].toLowerCase() != 'решка' && args[1].toLowerCase() != 'р') return error('Укажите на кого Вы ставите ставку. Орёл/Решка.', message)
        let results = new Discord.RichEmbed()
        .setTitle(`Результат`)
        .setColor('BLUE')
        .setFooter(`Решает рандом.`, client.user.avatarURL)
        .setTimestamp()
        .setAuthor(`Freedom v${cfg.version}`)
        if(args[1].toLowerCase() == 'орёл' || args[1].toLowerCase() == 'орел' || args[1].toLowerCase() == 'о'){
            bet = 'орёл';
            message.channel.send(results).then(msg => {msg.edit(results.setDescription(`Ожидаем результат. Ваша ставка на **${bet}**.`)), msg.delete(10000)})
        } else if(args[1].toLowerCase() == 'рёшка' || args[1].toLowerCase() == 'решка' || args[1].toLowerCase() == 'р'){
            message.channel.send(results).then(msg => {msg.edit(results.setDescription(`Ожидаем результат. Ваша ставка на **${bet}**.`)), msg.delete(10000)})
            bet = 'решка';
        }
         Users.set(message.author.id, Date.now()+timeout, 'info.dailys.coinflip')
         Users.math(message.author.id, '-', Number(args[0]), 'info.balances.money')
         if(bet === brandom) setTimeout(() => {message.channel.send(results).then(msg => {msg.edit(results.setDescription(`**${message.author.tag}**, Вы делали ставку на **${bet}**, а монетка упала с результатом **${brandom}**.\nВы победили и получаете приз **${Number(args[0]*2).toFixed(2)}** коинов (**x2**).`, results.setColor(bet === brandom?'GREEN':'RED')))}), Users.math(message.author.id, '+', Number(args[0]*2), 'info.balances.money')}, 10000)
         if(bet !== brandom) setTimeout(() => {message.channel.send(results).then(msg => {msg.edit(results.setDescription(`**${message.author.tag}**, Вы делали ставку на **${bet}**, а монетка упала с результатом **${brandom}**.\nВы проиграли и Ваша ставка **${Number(args[0]).toFixed(2)} коинов** сгорела.`, results.setColor(bet === brandom?'GREEN':'RED')))})}, 10000)
        } else return error(`Вы уже кидали монетку, подождите ещё **${timeout2(Users.get(message.author.id, 'info.dailys.coinflip'), client, message)}**`, message)
}
exports.help = {
    name: ['coinflip', 'cf'],
    d: 'Подбросить монетку со ставкой.',
    u: 'coinflip 100 орёл/решка'
}