Discord = require('discord.js');
let cooldown = new Set(); let Enmap = require('enmap'); let map = new Enmap(); let cfg = require('../config.json')
let ignored = ['670705034639573033', '632445494815096842', '632445460941897738'];
module.exports = async (client, message) => {
let msgs = Guilds.get("guilds", 'info.boxes.msgs')
Users = client.enmap.Users;
randomize = require('../functions/randomize.js').randomize, randomizeOut = require('../functions/randomizeOut.js').randomizeOut
let Mutes = new Enmap({name: "Mutes"})
Guilds = client.enmap.Guilds;
if(message.author.id === '315926021457051650' &&message.embeds[0]&&message.embeds[0].description&&message.embeds[0].description.startsWith('[Top Discord Servers](https://discord-server.com/)') ){
let Usor = message.embeds[0]&&message.embeds[0].description&&message.embeds[0].description.match(/\d/gm).join("")
message.channel.fetchMessages().then(msgs=>{
message.channel.send(`<@${Usor}>, Спасибо за UP нашего сервера, вот тебе награда в виде **300** коинов и **150** XP!`)
Users.math(Usor, '+', Number(300), 'info.balances.money') && Users.math(Usor, '+', Number(150), 'info.levels.xp') && Users.math(Usor, '+', Number(150), 'info.levels.xpall')
})
}
if(message.author.id === '302050872383242240' && message.embeds[0].color == 2406327){
let Usor = message.embeds[0].description.match(/\d/gm).join("")
message.channel.fetchMessages().then(msgs=>{
message.channel.send(`<@${Usor}>, Спасибо за UP нашего сервера, вот тебе награда в виде **300** коинов и **150** XP!`)
Users.math(Usor, '+', Number(300), 'info.balances.money') && Users.math(Usor, '+', Number(150), 'info.levels.xp') && Users.math(Usor, '+', Number(150), 'info.levels.xpall')
})
}
if(message.author.id === '464272403766444044' &&message.embeds[0]&&message.embeds[0].title&&message.embeds[0].title == 'Сервер Up'){
let Usor = message.guild.members.find(u => u.user.tag === message.embeds[0].footer.text)
message.channel.fetchMessages().then(msgs=>{
message.channel.send(`<@${Usor.id}>, Спасибо за UP нашего сервера, вот тебе награда в виде **300** коинов и **150** XP!`)
Users.math(Usor.id, '+', Number(300), 'info.balances.money') && Users.math(Usor.id, '+', Number(150), 'info.levels.xp') && Users.math(Usor.id, '+', Number(150), 'info.levels.xpall')
})
}
if(message.author.bot && message.author.id != '573119175829225482') return;
if(message.channel.type === 'dm') return;
if(message.content.toLowerCase().startsWith('я что похож на')){
let text; let randomReply = randomizeOut(0, 101.00).toFixed(2); let content = message.content.slice(15)
if(content.length === 0) content = 'еблана', randomReply = '100.00'; if(randomReply >= 90) randomReply = '100.00', text = 'один в один';
if(randomReply <= 25.00) text = 'совсем не'; if(randomReply >= 25.00 && randomReply <= 50.50) text = 'немного';
if(randomReply >= 50.50 && randomReply <= 75.00) text = 'очень'; if(randomReply >= 75.00 && randomReply <= 90) text = 'очень сильно';
  message.channel.send(`${message.author.username}: Вы ${text} похожи **на ${content}** (в процентах это **${randomReply}%**)`)
} else if(message.content.toLowerCase() !== 'очка' && message.content.startsWith('!') && message.content.toLowerCase().includes('очка')) message.channel.send(message.content.replace(/(о|О)(ч|Ч)(к|К)(а|А)/g, ` очка`).slice(1));
  else if(message.content.toLowerCase() !== 'анал' && message.content.startsWith('!') && message.content.toLowerCase().includes('анал')) message.channel.send(message.content.replace(/(а|А)(н|Н)(а|А)(л|Л)/g, ` анал `).slice(1));

  if(message.channel.id === '585540287489900574'){
if(!message.content.startsWith('!') && !message.content.startsWith('?') && !message.content.startsWith('$')) return;
message.delete()
let embed = new Discord.RichEmbed()
.setAuthor(`Freedom v${require(`../config.json`).version}`)
.setDescription(message.content.slice(1))
.setTimestamp()
if(message.content.startsWith('!')) embed.setTitle('Внимание!'), embed.setColor('BLURPLE'), embed.setFooter('Важная новость!', message.guild.iconURL)
if(message.content.startsWith('?')) embed.setTitle('Новая версия Freedom.'), embed.setColor('GREEN'), embed.setFooter('Всё описание обновления или исправлений выше.', message.guild.iconURL)
if(message.content.startsWith('$')) embed.setTitle('Новая важная новость!'), embed.setColor('PURPLE'), embed.setFooter('Спасибо, что Вы остаетесь с нами!', message.guild.iconURL)   
message.channel.send(embed)
} else if(['549218016215433216', '700792753759715328'].includes(message.channel.id)) {
  await message.react('👍'), await message.react('👎'), await message.react('😂')
  if(message.channel.id === '626386320268460072') {
  if(!Users.get(message.author.id)) return;
  if(message.content.length >= 100) Users.math(message.author.id, '+', Number(200), 'info.balances.money')
  if(message.content.length >= 200) Users.math(message.author.id, '+', Number(300), 'info.balances.money')
  };
};
  if(['703971285486534748', '703970477563052122'].includes(message.channel.id) && message.author.id !== '441954631539490857'){
    await message.react('✅'), await message.react('❎')
  }
if(!Users.get(message.author.id)) return;
//if(Users.get(message.author.id, 'info.cols.messages') >= 500) message.member.addRole(`577443672266899457`)
let level = Users.get(message.author.id, 'info.levels.level');
if(!ignored.includes(message.channel.id) && message.channel.id != '556453541179293696') {
let need = Guilds.get("guilds", 'info.boxes.need')
Guilds.math('guilds', '+', 1, 'info.boxes.msgs')
if(msgs >= need){
need = Guilds.set("guilds", randomize(100, 150), 'info.boxes.need');
let boxall = ['обычная', 'редкая', 'эпическая', 'легендарная'];
let box = ['common_box', 'rare_box', 'epic_box', 'legendary_box'];
let examples = [`${randomize(0, 100)}${['-', '+'][randomize(0, 2)]}${randomize(0, 100)}`, `${randomize(0, 17)}*${randomize(0, 19)}`]
example = examples[Math.floor(Math.random() * 2)]
let answer = eval(example)
let lol; 
let boxes;
let rofl = Math.random() * 21
if(rofl >= 0 && rofl < 13.1) lol = box[0], boxes = boxall[0];
else if(rofl >= 13.1 && rofl < 14.7) lol = box[1], boxes = boxall[1];
else if(rofl >= 14.7 && rofl < 18.8) lol = box[2], boxes = boxall[2];
else if(rofl >= 18.8 && rofl >= 18.8) lol = box[3], boxes = boxall[3];
Guilds.set('guilds', 0, 'info.boxes.msgs')
let i = 15;
let embed = new Discord.RichEmbed()
.setTitle(`Появилась ${boxes} коробка!`)
.setDescription(`Напишите ответ **-pick ${example}**, чтобы забрать её, у вас **${i}** секунд!`)
.setColor('GREEN')
.setTimestamp()
.setFooter(`Freedom ${cfg.year}.`, client.user.avatarURL)
message.channel.send(embed).then(mes=>{
let collector = message.channel.createMessageCollector(m => !(m.author.bot && m.author.id !== '573119175829225482'), {time: 15000});
let luted = new Discord.RichEmbed()
.setTitle('Время вышло.')
.setDescription(`Коробка редкостью \`${boxes}\` не была никем собрана.\nОтвет на пример: **${Math.floor(answer)}**`)
.setFooter(`Freedom ${cfg.year}.`, client.user.avatarURL)
.setColor('RED')
.setTimestamp()
let kek = setInterval(() => {
i--;i--;i--;
mes.edit(embed.setDescription(`Напишите **-pick ${example}**, чтобы забрать её, у вас **${i}** секунд!`))
if(i <= 0) setTimeout(() => mes.edit(luted), clearInterval(kek), collector.stop(), 1000)
}, 3000)
collector.on('collect', msg => {
if(msg.content.toLowerCase() === `-pick ${Math.floor(answer)}`){
clearInterval(kek)
let luted = new Discord.RichEmbed()
.setTitle(`Коробка \`${boxes}\` собрана!`)
.setDescription(`Коробка \`${boxes}\` была собрана участником <@${msg.author.id}> \`(${msg.author.tag})\`.`)
.setFooter(`Freedom ${cfg.year}.`, client.user.avatarURL)
.setColor('BLURPLE')
.setTimestamp()
mes.edit(luted).then(msg => msg.delete(10000))
msg.channel.send(`[Коробка]: Коробка \`${boxes}\` досталась участнику <@${msg.author.id}> (\`${msg.author.tag}\`)!`);
Users.math(msg.author.id, '+', 1, `info.boxes.${lol}`)
collector.stop();
}})})}
let moneyadd = (Math.random() * 0.080*message.content.length)
let xpadd = 2
if(message.content.length < 2) return;
if(message.content.length < 10 && message.content.length >= 2) xpadd = (Math.random() * 1.2) + 0.9 | 0
if(message.content.length < 50 && message.content.length >= 10) xpadd = (Math.random() * 5.6) + 2.9 | 0
if(message.content.length <= 200 && message.content.length >= 50) xpadd = (Math.random() * 12.4) + 5.7 | 0
if(cooldown.has(message.author.id)) {
  map.ensure(message.author.id, {xp: xpadd, money: moneyadd, msg: 1})
  map.math(message.author.id, '+', moneyadd, 'money')
  map.math(message.author.id, '+', xpadd, 'xp')
  map.math(message.author.id, '+', 1, 'msg')
} else cooldown.add(message.author.id), map.ensure(message.author.id, {xp: xpadd, money: moneyadd, msg: 1})
  
  setTimeout(() => {
  if(!map.get(message.author.id)) map.set(message.author.id, {xp: xpadd, money: moneyadd, msg: 1})
  Users.math(message.author.id, '+', map.get(message.author.id).money || 0, 'info.balances.money'), Users.math(message.author.id, '+', map.get(message.author.id).xp || 0, 'info.levels.xp');
  Users.math(message.author.id, '+', map.get(message.author.id).xp || 0, 'info.levels.xpall'), Users.math(message.author.id, '+', map.get(message.author.id)&&map.get(message.author.id).msg || 1, 'info.cols.messages');
  cooldown.delete(message.author.id), map.delete(message.author.id);
}, 120000)
} else if(message.channel.id != '548899664544399389'){
  let moneyadd = (Math.random() * 0.040*message.content.length)
let xpadd = 2
if(message.content.length < 2) return;
if(message.content.length < 10 && message.content.length >= 2) xpadd = (Math.random() * 0.6) + 0.4 | 0
if(message.content.length < 50 && message.content.length >= 10) xpadd = (Math.random() * 2.8) + 1.5 | 0
if(message.content.length <= 200 && message.content.length >= 50) xpadd = (Math.random() * 6.2) + 3.7 | 0
if(cooldown.has(message.author.id)) {
  map.ensure(message.author.id, {xp: xpadd, money: moneyadd, msg: 1})
  map.math(message.author.id, '+', moneyadd, 'money')
  map.math(message.author.id, '+', xpadd, 'xp')
  map.math(message.author.id, '+', 1, 'msg')
} else cooldown.add(message.author.id), map.ensure(message.author.id, {xp: xpadd, money: moneyadd, msg: 1})
  setTimeout(() => {
    
  if(!map.get(message.author.id)) map.set(message.author.id, {xp: xpadd, money: moneyadd, msg: 1})
  Users.math(message.author.id, '+', map.get(message.author.id).money || 0, 'info.balances.money'), Users.math(message.author.id, '+', map.get(message.author.id).xp || 0, 'info.levels.xp');
  Users.math(message.author.id, '+', map.get(message.author.id).xp || 0, 'info.levels.xpall'), Users.math(message.author.id, '+', map.get(message.author.id)&&map.get(message.author.id).msg || 1, 'info.cols.messages');
  cooldown.delete(message.author.id), map.delete(message.author.id);
}, 120000)
};
if(message.guild.id === '548899664544399383'){
if(level <= 5 && level > 0) message.member.addRole('622469042053054464')
if(message.member.roles.has('622469042053054464') && level >= 5) message.member.removeRole('622469042053054464')
if(level >= 5 && level < 10 && !message.member.roles.get('622469147598782478')) {message.member.addRole('622469147598782478');message.member.removeRole('622469042053054464');message.member.addRole('648256379215282176')}
if(level >= 10 && level < 15 && !message.member.roles.get('622469182843387954')) {message.member.addRole('622469182843387954');message.member.removeRole('622469147598782478');message.member.removeRole('622469042053054464');message.member.addRole('648256379215282176')}
if(level >= 15 && level < 20 && !message.member.roles.get('622500778367647748')) {message.member.addRole('622500778367647748');message.member.removeRole('622469182843387954');message.member.removeRole('622469042053054464');message.member.addRole('648256379215282176')}
if(level >= 20 && level < 25 && !message.member.roles.get('622500837314396162')) {message.member.addRole('622500837314396162');message.member.removeRole('622500778367647748');message.member.removeRole('622469042053054464');message.member.addRole('648256379215282176')}
if(level >= 25 && level < 30 && !message.member.roles.get('622500858726318140')) {message.member.addRole('622500858726318140');message.member.removeRole('622500837314396162');message.member.removeRole('622469042053054464');message.member.addRole('648256379215282176')}
if(level >= 30 && level < 35 && !message.member.roles.get('622500883761987595')) {message.member.addRole('622500883761987595');message.member.removeRole('622500858726318140');message.member.removeRole('622469042053054464');message.member.addRole('648256379215282176')}
if(level >= 35 && level < 40 && !message.member.roles.get('622500903001522231')) {message.member.addRole('622500903001522231');message.member.removeRole('622500883761987595');message.member.removeRole('622469042053054464');message.member.addRole('648256379215282176')}
if(level >= 40 && level < 45 && !message.member.roles.get('622500916981137424')) {message.member.addRole('622500916981137424');message.member.removeRole('622500903001522231');message.member.removeRole('622469042053054464');message.member.addRole('648256379215282176')}
if(level >= 45 && level < 50 && !message.member.roles.get('622500935784202240')) {message.member.addRole('622500935784202240');message.member.removeRole('622500916981137424');message.member.removeRole('622469042053054464');message.member.addRole('648256379215282176')}
if(level >= 50 && level < 55 && !message.member.roles.get('622830785434615878')) {message.member.addRole('622830785434615878');message.member.removeRole('622500935784202240');message.member.removeRole('622469042053054464');message.member.addRole('648256379215282176')}
if(level >= 55 && level < 60 && !message.member.roles.get('622830814153146369')) {message.member.addRole('622830814153146369');message.member.removeRole('622830785434615878');message.member.removeRole('622469042053054464');message.member.addRole('648256379215282176')}
if(level >= 60 && level < 65 && !message.member.roles.get('622830830523514910')) {message.member.addRole('622830830523514910');message.member.removeRole('622830814153146369');message.member.removeRole('622469042053054464');message.member.addRole('648256379215282176')}
if(level >= 65 && level < 70 && !message.member.roles.get('622830850731540491')) {message.member.addRole('622830850731540491');message.member.removeRole('622830830523514910');message.member.removeRole('622469042053054464');message.member.addRole('648256379215282176')}
if(level >= 70 && !message.member.roles.get('622830866342871040')) {message.member.addRole('622830866342871040');message.member.removeRole('622830850731540491');message.member.addRole('648256379215282176')}
}
let user = Users.get(message.author.id)
let dos = 22
function ach(number, name, uslovia, reward, inv){
if(!Users.get(message.author.id)) return message.reply(`Вы не зарегистрированы в базе данных. Зарегистрироваться можно по команде **-account**.`)
Users.ensure(message.author.id, [], 'info.achievements')
if(!user.info.achievements.includes(number)){
Users.push(message.author.id, number, 'info.achievements');
let embed = new Discord.RichEmbed()
.setAuthor(message.author.tag, message.author.avatarURL)
.setTitle('Достижение выполнено!')
.addField('Название:', `"${name}"`)
.addField('Как получить его:', `${uslovia}`, true)
.addField('Награда:', `${reward} ${cfg.fc}`, true)
.addField('Достижение по счёту:', `${number}/${dos}`, true)
.addField('Вы выполнили:', `${user.info.cols.ach+1}/${dos}`, true)
.setColor('GREEN')
.setFooter('Проверить достижения -ach')
.setTimestamp()
message.channel.send(embed).then(msg => msg.delete(20000))
Users.math(message.author.id, '+', reward, 'info.balances.money')
Users.math(message.author.id, '+', 1, 'info.cols.ach')
if(inv) Users.push(message.author.id, inv, 'info.inv')
} else if(user.info.achievements.includes(number)) return;
}
if(message.content == '123') ach(1, "Это было так легко?!", 'Написать в текущий канал "123"', 50)
if(user.info.levels.level >= 2) ach(2, 'Начало положено.', 'Получить второй уровень!', 200)
if(message.content.toLowerCase().startsWith('я ебал') || message.content.toLowerCase().startsWith('ебал') || message.content.toLowerCase().startsWith('соси хуй') || message.content.toLowerCase().startsWith('иди нахуй')) ach(3, "Я против Ваших правил!", "Оскорбить пользователя как-либо.", 50);
if(user.info.balances.money >= 1000) ach(4, 'Первые наличные', `Иметь 1.000${cfg.fc} наличными.`, 150);
if(user.info.balances.deposit >= 3000) ach(5, 'Первые доходы с депозита!', `Набрать 3.000${cfg.fc} на депозитном счёте.`, 150);
if(user.info.balances.bank >= 2000) ach(6, 'Деньги успешно сохранены от воров!', `Иметь 2.000${cfg.fc} в банковском счёте`, 50);
if(user.info.balances.money >= 2500) ach(7, 'Мне нужен чемодан для этого.', `Иметь наличными 2.500${cfg.fc}.`, 50);
if(user.info.balances.euro >= 50) ach(8, 'Зарабатываю на обмене валюты.', 'Иметь 50 евро на своём счету.', 300);
if(message.member.roles.find(i => i.name === 'Collector')) ach(9, 'Теперь я Коллектор!', 'Приобрести роль "Collector" в игровом магазине.', 50, 'Collector')
if(user.info.cols.box >= 100) ach(10, 'Главное вовремя остановиться..', 'Открыть 100 коробок.', 100, 'Box openist');
if(message.member.roles.find(i => i.name === 'Active')) ach(11, 'Я здесь активный.', 'Получить роль "Active" за 5 уровень.', 100, 'Active');
if(user.info.reputation.rep_plus+user.info.reputation.rep_minus >= 15) ach(12, 'Хорошая репутация!', 'Иметь всего репутацию 15 в своём профиле.', 350);
if(user.info.cols.rob >= 15) ach(13, 'Профессиональный грабитель!', 'Ограбить участников сервера 15 и более раз.', 100);
if(user.info.work >= 3) ach(14, 'Строитель', 'Впервые поработать строителем и построить небольшой магазинчик.', 150);
if(user.info.balances.euro >= 100) ach(15, 'Профессиональный обменщик валют!', 'Обменять более 100 евро.', 100);
if(message.member.roles.find(r => r.name === 'Coder') || message.member.roles.find(r => r.name === 'Medium Coder') || message.member.roles.find(r => r.name === 'Good Coder')) ach(16, 'Ну здравствуй, код.', 'Получить одну из трёх ролей "Coder".', 150, 'Coder');
if(user.info.cols.work >= 10) ach(17, 'Работяга', 'Подработать более 10 раз.', 200);
if(user.info.balances.money >= 10000) ach(18, 'Бизнесмен!', `Иметь наличными 10.000 ${cfg.fc}!`, 400, 'Businessman')
if(user.info.levels.level >= 10) ach(19, 'Levelup! :+1:', 'Набрать 10 уровень.', 150);
if(user.info.me&&user.info.me.name) ach(20, 'Имя указано!', 'Установите информацию о Вашем Имени в паспорте.', 100)
if(user.info.me&&user.info.me.biography) ach(21, 'Биография была добавлена.', 'Добавьте Вашу биографию в паспорт.', 200)
if(user.info.cols.ach >= dos-1) ach(22, `Я выполнил(а) все **${dos}** достижения!`, 'Выполнить все достижения!', 1000, 'All achievements!')
let help = new Discord.RichEmbed()
   .setTitle(`Моя помощь. Актуальная версия: ${cfg.version}`)
   .addField(`Посмотреть полный список команд:`, `-help`)
   .addField(`Создатель бота`, `MrVaDiM4iK#0232`)
   .addField('Участвовали в помощи:', `MCArTyR#1324, ${client.users.get('578936810936467459').tag}, X-49#5800`)
   .setColor('BLURPLE')
   .setFooter('Спасибо участникам за идеи и помощь в командах!', client.user.avatarURL)
   .setTimestamp()
      if(message.content === '<@!'+client.user.id+'>') return message.channel.send(help);
      if(message.content === '<@'+client.user.id+'>') return message.channel.send(help);
      let uxp = user.info.levels.xp
      let userLevel = user.info.levels.level
      let nxtLvlxp = userLevel * 150;
      let levelup = require('../functions/levelup.js').levelup;
      if(uxp > nxtLvlxp) {
       if(userLevel >= 1 && userLevel < 5) levelup(30, 1, 0, client, message);
       else if(userLevel >= 5 && userLevel < 10) levelup(50, 2, 1, client, message);
       else if(userLevel >= 10 && userLevel < 15) levelup(100, 3, 2, client, message);
       else if(userLevel >= 15 && userLevel < 20) levelup(150, 5, 3, client, message);
       else if(userLevel >= 20 && userLevel < 30) levelup(170, 5, 4, client, message);
       else if(userLevel >= 30 && userLevel < 40) levelup(200, 5, 5, client, message);
       else if(userLevel >= 40 && userLevel < 50) levelup(220, 6, 5, client, message);
       else if(userLevel >= 50 && userLevel < 60) levelup(240, 7, 5, client, message);
       else if(userLevel >= 60 && userLevel < 70) levelup(260, 8, 5, client, message);
       else if(userLevel >= 70 && userLevel < 80) levelup(300, 9, 5, client, message);
       else if(userLevel >= 80 && userLevel < 90) levelup(400, 10, 10, client, message);
       Users.math(message.author.id, '+', 1, 'info.levels.level')
      };
    }