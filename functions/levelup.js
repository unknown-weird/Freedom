module.exports.levelup = function (money, box, euros, client, message){
cfg = require('../config.json')
moneys = (Math.random() * money)+100
euro = euros
Users.set(message.author.id, 0, 'info.levels.xp')
let level = Users.get(message.author.id, 'info.levels.level')+1
Users = client.enmap.Users
if(level <= 4) {
let lvlup = new Discord.RichEmbed()
.setTitle(`${message.author.tag}, у вас новый уровень!`)
.setDescription(`Ваш уровень теперь **${level}**
Теперь Вы ближе к новой роли за уровень!

Ваш подарок **${box}** обычных коробки
Также **${moneys.toFixed(2)}** ${cfg.fc} в качестве бонуса!\n\nПоздравляем!`)
.setColor('GREEN')
message.channel.send(lvlup)
} else if(level >= 5){
let lvlup = new Discord.RichEmbed()
.setTitle(`${message.author.tag}, у вас новый уровень!`)
.setDescription(`Ваш уровень теперь **${level}**
Теперь Вы ближе к новой роли за уровень!

Ваш подарок **${box}** обычных коробки
Также **${moneys.toFixed(2)}** ${cfg.fc} в качестве бонуса!\nИ ещё **${euro.toFixed(2)}** :euro: за такой уровень!\n\nПоздравляем!`)
.setColor('GREEN')
message.channel.send(lvlup)
} 
Users.math(message.author.id, '+', moneys, 'info.balances.money');
Users.math(message.author.id, '+', box, 'info.boxes.common_box');
Users.math(message.author.id, '+', euro, 'info.balances.euro');
}