let Discord = require('discord.js');
let cfg = require('../config.json');
exports.run = async (client, message, args, error, succ, Users, Guilds, timer, randomize) => {
  let randomizeOut = require('../functions/randomizeOut.js').randomizeOut
  if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
  if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
  let boxes = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setTitle(`Список Ваших коробок`)
  .setColor('BLURPLE')
  .setDescription(`Открыть коробку можно командой **-box <Тип>**`)
  .setTimestamp()
  if(Users.get(message.author.id, 'info.boxes.common_box') > 0) boxes.addField(`Обычных коробок [C]:`, `**${Users.get(message.author.id, 'info.boxes.common_box')}**`, true)
  if(Users.get(message.author.id, 'info.boxes.rare_box') > 0) boxes.addField(`Редких коробок [R]:`, `**${Users.get(message.author.id, 'info.boxes.rare_box')}**`, true)
  if(Users.get(message.author.id, 'info.boxes.epic_box') > 0) boxes.addField(`Эпических коробок [E]:`, `**${Users.get(message.author.id, 'info.boxes.epic_box')}**`)
  if(Users.get(message.author.id, 'info.boxes.legendary_box') > 0) boxes.addField(`Легендарных коробок [L]:`, `**${Users.get(message.author.id, 'info.boxes.legendary_box')}**`, true)
  if(Users.get(message.author.id, 'info.boxes.mythical_box') > 0) boxes.addField(`Мифических коробок [M]:`, `**${Users.get(message.author.id, 'info.boxes.mythical_box')}**`, true)
  if(!boxes.fields.length) boxes.setDescription(`Вы не имеете ни одной из **5** видов коробок.`)
  if(!args.join("")) return message.channel.send(boxes)
  if(args.join("") === 'C' || args.join("") == 'c'){
      let i = 3
      if(Users.get(message.author.id, 'info.boxes.common_box') < 1) return error(`У Вас нет \`обычной\` коробки для открытия.`, message)
      let dp = randomizeOut(35, 75)
      let xp = randomize(10, 35)
      if(Users.get(message.author.id).info.upgrades.includes('boxes') === true) dp = randomizeOut(40, 85), xp = randomize(20, 40)
      Users.math(message.author.id, '-', 1, 'info.boxes.common_box');
      let cbox = Users.get(message.author.id, 'info.boxes.common_box')
      const embed = new Discord.RichEmbed()
      .setColor('ORANGE')
      .setTitle('Открытие..')
      .setDescription(`Открываем коробку редкостью \`обычная\`..\nОсталось **${i}** секунд`)
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setTimestamp();
     message.channel.send(embed).then(msg =>{
let o = setInterval(() => {i--
msg.edit(embed.setDescription(`Открываем коробку редкостью \`обычная\`..\nОсталось **${i}** секунд`))}, 1000)
setTimeout(()=>{
msg.edit(embed.setDescription(`У Вас осталось **${cbox}** \`обычных\` коробок.`, embed.addField(`Коины`, `**${dp.toFixed(2)}** ${cfg.fc}`, true, embed.addField(`XP`, `**${xp}** XP`, true, embed.setTitle('Открытие коробки редкостью \`обычная\` закончено.'), embed.setColor('GREEN')))));
clearInterval(o)}, 3000)
     })
Users.math(message.author.id, '+', Number(dp), 'info.balances.money')
Users.math(message.author.id, '+', Number(xp), 'info.levels.xp')
Users.math(message.author.id, '+', Number(xp), 'info.levels.xpall')
Users.math(message.author.id, '+', 1, 'info.cols.box')
  } else if(args.join("") === 'R' || args.join("") == 'r'){
    let i = 3
    if(Users.get(message.author.id, 'info.boxes.rare_box') < 1) return error(`У Вас нет \`редкой\` коробки для открытия.`, message)
    let dp = randomizeOut(100, 180)
    let euro = randomize(0, 3)
    let xp = randomize(30, 70)
    if(Users.get(message.author.id).info.upgrades.includes('boxes') === true) dp = randomizeOut(130, 210), xp = randomize(60, 120)
    Users.math(message.author.id, '-', 1, 'info.boxes.rare_box');
    let rbox = Users.get(message.author.id, 'info.boxes.rare_box')
    const embed = new Discord.RichEmbed()
    .setColor('ORANGE')
    .setTitle('Открытие..')
    .setDescription(`Открываем коробку редкостью \`редкая\`..\nОсталось **${i}** секунд`)
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setTimestamp();
   message.channel.send(embed).then(msg => {
let o = setInterval(() => {i--
msg.edit(embed.setDescription(`Открываем коробку редкостью \`редкая\`..\nОсталось **${i}** секунд`))}, 1000)
setTimeout(()=>{
   msg.edit(embed.setDescription(`У Вас осталось **${rbox}** \`редких\` коробок.`, embed.addField(`Коины`, `**${dp.toFixed(2)}** ${cfg.fc}`, true, embed.addField(`XP`, `**${xp}** XP`, true, embed.addField(`Евро`, `**${euro}** :euro:`, true, embed.setTitle('Открытие коробки редкостью \`редкая\` закончено.'), embed.setColor('GREEN'))))));
   clearInterval(o)}, 3000)
        })
   Users.math(message.author.id, '+', Number(dp), 'info.balances.money')
   Users.math(message.author.id, '+', Number(xp), 'info.levels.xp')
   Users.math(message.author.id, '+', Number(xp), 'info.levels.xpall')
Users.math(message.author.id, '+', Number(euro), 'info.balances.euro')
Users.math(message.author.id, '+', 1, 'info.cols.box')
} else if(args.join("") === 'E' || args.join("") == 'e'){
    let i = 3
    if(Users.get(message.author.id, 'info.boxes.epic_box') < 1) return error(`У Вас нет \`эпической\` коробки для открытия.`, message)
    let dp = randomizeOut(200, 500)
    let euro = randomize(1, 4)
    let xp = randomize(70, 100)
    if(Users.get(message.author.id).info.upgrades.includes('boxes') === true) dp = randomizeOut(240, 540), xp = randomize(120, 150)
    Users.math(message.author.id, '-', 1, 'info.boxes.epic_box');
    let ebox = Users.get(message.author.id, 'info.boxes.epic_box')
    const embed = new Discord.RichEmbed()
    .setColor('ORANGE')
    .setTitle('Открытие..')
    .setDescription(`Открываем коробку редкостью \`эпическая\`..\nОсталось **${i}** секунд`)
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setTimestamp();
   message.channel.send(embed).then(msg =>{
let o = setInterval(() => {i--
msg.edit(embed.setDescription(`Открываем коробку редкостью \`эпическая\`..\nОсталось **${i}** секунд`))}, 1000)
setTimeout(()=>{
   msg.edit(embed.setDescription(`У Вас осталось **${ebox}** \`эпических\` коробок.`, embed.addField(`Коины`, `**${dp.toFixed(2)}** ${cfg.fc}`, true, embed.addField(`XP`, `**${xp}** XP`, true, embed.addField(`Евро`, `**${euro}** :euro:`, true, embed.setTitle('Открытие коробки редкостью \`эпическая\` закончено.'), embed.setColor('GREEN'))))));
   clearInterval(o)}, 3000)
        })
   Users.math(message.author.id, '+', Number(dp), 'info.balances.money')
   Users.math(message.author.id, '+', Number(xp), 'info.levels.xp')
   Users.math(message.author.id, '+', Number(xp), 'info.levels.xpall')
   Users.math(message.author.id, '+', Number(euro), 'info.balances.euro')
Users.math(message.author.id, '+', 1, 'info.cols.box')
} else if(args.join("") == 'L' || args.join("") == 'l'){
    let i = 5
    let dp = randomizeOut(600, 1400)
    let euro = randomize(4, 8)
    let xp = randomize(100, 150)
    let level = randomize(1, 2)
    if(Users.get(message.author.id).info.upgrades.includes('boxes') === true) dp = randomizeOut(650, 1550), xp = randomize(150, 200)
    if(Users.get(message.author.id, 'info.boxes.legendary_box') < 1) return error(`У Вас нет \`легендарной\` коробки для открытия.`, message)
    Users.math(message.author.id, '-', 1, 'info.boxes.legendary_box');
    let lbox = Users.get(message.author.id, 'info.boxes.legendary_box')
    const embed = new Discord.RichEmbed()
    .setColor('ORANGE')
    .setTitle('Открытие..')
    .setDescription(`Открываем коробку редкостью \`легендарная\`..\nОсталось **${i}** секунд`)
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setTimestamp();
   message.channel.send(embed).then(msg => {
let o = setInterval(() => {i--;
msg.edit(embed.setDescription(`Открываем коробку редкостью \`легендарная\`..\nОсталось **${i}** секунд`))}, 1000)
setTimeout(()=>{
   msg.edit(embed.setDescription(`У Вас осталось **${lbox}** \`легендарных\` коробок.`, embed.addField(`Коины`, `**${dp.toFixed(2)}** ${cfg.fc}`, true, embed.addField(`XP`, `**${xp}** XP`, true, embed.addField(`Евро`, `**${euro}** :euro:`, true, embed.addField(`Уровень`, `**${level}** [LEVEL]`, true, embed.setTitle('Открытие коробки редкостью \`легендарная\` закончено.'), embed.setColor('GREEN')))))));
   clearInterval(o)}, 5000)
        })
   Users.math(message.author.id, '+', Number(dp), 'info.balances.money')
   Users.math(message.author.id, '+', Number(level), 'info.levels.level')
   Users.math(message.author.id, '+', Number(xp), 'info.levels.xp')
   Users.math(message.author.id, '+', Number(xp), 'info.levels.xpall')
   Users.math(message.author.id, '+', Number(euro), 'info.balances.euro')
Users.math(message.author.id, '+', 1, 'info.cols.box')
} else if(args.join("") == 'M' || args.join("") == 'm'){
   let dp = randomizeOut(1400, 2900)
   let euro = randomize(8, 15)
   let xp = randomize(150, 900)
   if(Users.get(message.author.id).info.upgrades.includes('boxes')) dp = randomizeOut(1500, 2900), xp = randomize(180, 950)
   let i = 5
   if(Users.get(message.author.id, 'info.boxes.mythical_box') < 1) return;
   Users.math(message.author.id, '-', 1, 'info.boxes.mythical_box');
   let mbox = Users.get(message.author.id, 'info.boxes.mythical_box')
   const embed = new Discord.RichEmbed()
   .setColor('ORANGE')
   .setTitle('Открытие..')
   .setDescription(`Открываем коробку редкостью \`МИФИЧЕСКАЯ\`..\nОсталось **${i}** секунд`)
   .setAuthor(message.author.tag, message.author.avatarURL)
   .setTimestamp();
  message.channel.send(embed).then(msg => {
let o = setInterval(() => {i--;
msg.edit(embed.setDescription(`Открываем коробку редкостью \`МИФИЧЕСКАЯ\`..\nОсталось **${i}** секунд`))}, 1000)
setTimeout(()=>{
   msg.edit(embed.setDescription(`У Вас осталось **${mbox}** \`МИФИЧЕСКИХ\` коробок.`, embed.addField(`Коины`, `**${dp.toFixed(2)}** ${cfg.fc}`, true, embed.addField(`XP`, `**${xp}** XP`, true, embed.addField(`Евро`, `**${euro}** :euro:`, true, embed.addField(`Уровень`, `**2** [LEVEL]`, true, embed.setTitle('Открытие коробки редкостью \`МИФИЧЕСКАЯ\` закончено.'), embed.setColor('GREEN')))))));
   clearInterval(o)}, 5000)
   });
Users.math(message.author.id, '+', Number(dp), 'info.balances.money')
Users.math(message.author.id, '+', Number(euro), 'info.balances.euro')
Users.math(message.author.id, '+', Number(xp), 'info.levels.xp')
Users.math(message.author.id, '+', Number(xp), 'info.levels.xpall')
Users.math(message.author.id, '+', 2, 'info.levels.level')
Users.math(message.author.id, '+', 1, 'info.cols.box')
}
}
exports.help = {
    name: ["box", "pod", "gift"],
    d: "Открыть подарочную коробку.",
    u: "gift"
}