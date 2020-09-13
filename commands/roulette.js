let Discord = require('discord.js');
let cfg = require('../config.json');
let randomizeOut = require('../functions/randomizeOut.js').randomizeOut
exports.run = async (client, message, args, error, succ, Users, Guilds, timer, randomize) => {
  let timeout = 300000;
  let timeout2 = require('../functions/timeout.js').timeout
  if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
  let cww = Users.get(message.author.id, `info.dailys.roulette`);
  if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
  if(Users.get(message.author.id, 'info.boxes.roulettes') < 1) return error(`У Вас недостаточно рулеток для их открытия.`, message)
    if(!cww || cww <= Date.now()){
  let prize = [randomizeOut(120, 160), randomizeOut(150, 200), randomizeOut(0, 2), randomizeOut(20, 30), randomizeOut(160, 220), randomizeOut(35, 50), randomizeOut(50, 80)]
  let prize2 = [randomizeOut(80, 130), randomizeOut(100, 160), randomizeOut(0, 1), randomizeOut(15, 30), randomizeOut(150, 220), randomizeOut(20, 50), randomizeOut(30, 80)]
  let prize3 = [randomizeOut(110, 170), randomizeOut(140, 200), randomizeOut(0, 2), randomizeOut(15, 30), randomizeOut(140, 220), randomizeOut(30, 50), randomizeOut(45, 80)]
  let achievement; let number = [1, 2, 3]; let nrandom = number[Math.floor(Math.random() * number.length)]
  let r1 = prize[Math.floor(Math.random() * prize.length)]; let r2 = prize2[Math.floor(Math.random() * prize2.length)]; let r3 = prize3[Math.floor(Math.random() * prize3.length)]; 
  Users.dec(message.author.id, 'info.boxes.roulettes')
  let rcol = Users.get(message.author.id, 'info.boxes.roulettes')
  let embed = new Discord.RichEmbed()
  .setTitle(`Рулетка`)
  .addField(`Приз №1`, `**${r1.toFixed(2)}**`, true)
  .addField(`Приз №2`, `**${r2.toFixed(2)}**`, true)
  .addField(`Приз №3`, `**${r3.toFixed(2)}**`, true)
  .setAuthor(`Freedom v${cfg.version}`)
  .setColor('BLURPLE')
  .setFooter(`Рулетка крутится ровно 15 секунд.`, client.user.avatarURL)
  .setTimestamp(Date.now()+12000)
 message.channel.send(embed).then(msg => {
    let arrow = [`\`\`\`\n  ❎\`\`\``, `\`\`\`\n                🔽\`\`\``,`\`\`\`\n                              ❎\`\`\``]
    let arrowstr = setInterval(() => {msg.edit(embed.setColor('RANDOM'))}, 2900)
    let arrowstr2 = setInterval(() => {msg.edit(arrow[Math.floor(Math.random() * arrow.length)])}, 3000)
     if(nrandom === 1) achievement = r1; if(nrandom === 2) achievement = r2; if(nrandom === 3) achievement = r3;
     let ok = new Discord.RichEmbed()
     .setTitle(`Рулетка`)
     .setDescription(`Вам достался приз под номером **${nrandom}**!\nВаша награда **${achievement.toFixed(2)}** ${cfg.fc}.\nУ Вас осталось: **${rcol}** рулеток.\nНиже были представлены возможные призы.`)
     .addField(`Приз №1`, `**${r1.toFixed(2)}**`, true)
     .addField(`Приз №2`, `**${r2.toFixed(2)}**`, true)
     .addField(`Приз №3`, `**${r3.toFixed(2)}**`, true)
     .setAuthor(`Freedom v${cfg.version}`)
     .setColor('BLUE')
     .setFooter(`Следующее открытие можно будет сделать`, client.user.avatarURL)
     .setTimestamp(Date.now()+timeout)
     setTimeout(() => {msg.edit(ok); clearInterval(arrowstr), clearInterval(arrowstr2), Users.set(message.author.id, Date.now()+timeout, 'info.dailys.roulette'), Users.math(message.author.id, '+', Number(achievement), 'info.balances.money')}, 15550)
 })
} else return error(`Вы уже крутили рулетку, подождите ещё **${timeout2(Users.get(message.author.id, 'info.dailys.roulette'), client, message)}**`, message)
}
exports.help = {
    name: ['roulette', 'roul', 'rl'],
    d: 'Рулетка с рандомными призами.',
    u: 'roulette'
}