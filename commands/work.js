const Discord = require("discord.js");
let { fc } = require('../config.json')
module.exports.run = async (client, message, args, error, succ, Users, Guilds) => {
  if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
  let user = Users.get(message.author.id)
  let add = (mon, type) => Users.math(message.author.id, '+', Number(mon), `info.${type}`)
  let work1 = 20; let work2 = 20+20; let work3 = 40+20; let work4 = 60+20; let work5 = 80+40
  let work6 = 120+20; let work7 = 140+20; let work8 = 160+20; let work9 = 180+10; let work10 = 190+10;
  let timeout = 10800000;
  let timeout2 = require('../functions/timeout.js').timeout
  let cww = Users.get(message.author.id, `info.dailys.work`);
  if(!cww || cww <= Date.now()){
let embed = new Discord.RichEmbed()
.setTitle(`Работа`)
.setColor('GREEN')
.setAuthor(message.author.tag, message.author.avatarURL)
.setTimestamp()
if(user.info.work == 1){
    if(user.info.cols.work < work10) {
      let money = (Math.random() * 60)+20
      embed.setDescription(`Вы подмели большую станцию и остановку рядом, заработав при этом **${money.toFixed(2)}** ${fc}`)
      embed.addField(`До профессии **Дальнобойщик**`, `Вам осталось работать **${work1-user.info.cols.work-1}** раз`, true)
      embed.addField(`До профессии **Строитель**`, `Вам осталось работать **${work2-user.info.cols.work-1}** раз`, true)
      add(1, `cols.work`), add(money, `balances.money`), Users.set(message.author.id, Date.now()+timeout, 'info.dailys.work')
        if(user.info.cols.work == work1-1) embed.addField(`Вы были повышены`, `Вы были повышены до профессии **Дальнобойщик**!`), add(1, 'work');
          message.channel.send(embed);
    }
  } else if(user.info.work == 2){
    if(user.info.cols.work < work2) {
      let money = (Math.random() * 100)+30
      embed.setDescription(`Вы отвезли большой и дорогой груз, заработав **${money.toFixed(2)}** ${fc}`)
      embed.addField(`До профессии **Строитель**`, `Вам осталось работать **${work2-user.info.cols.work-1}** раз`, true)
      embed.addField(`До профессии **Хелпер**`, `Вам осталось работать **${work3-user.info.cols.work-1}** раз`, true)
      add(1, `cols.work`), add(money, `balances.money`), Users.set(message.author.id, Date.now()+timeout, 'info.dailys.work')
        if(user.info.cols.work == work2-1) embed.addField(`Вы были повышены`, `Вы были повышены до профессии **Строитель**!`), add(1, 'work');
          message.channel.send(embed);
    }
  } else if(user.info.work == 3){
    if(user.info.cols.work < work3) {
      let money = (Math.random() * 140)+40
      embed.setDescription(`Вы со своей командой построили небольшой магазинчик и получили зарплату в **${money.toFixed(2)}** ${fc}`)
      embed.addField(`До профессии **Хелпер**`, `Вам осталось работать **${work3-user.info.cols.work-1}** раз`, true)
      embed.addField(`До профессии **Тестер**`, `Вам осталось работать **${work4-user.info.cols.work-1}** раз`, true)
      add(1, `cols.work`), add(money, `balances.money`), Users.set(message.author.id, Date.now()+timeout, 'info.dailys.work')
        if(user.info.cols.work == work3-1) embed.addField(`Вы были повышены`, `Вы были повышены до профессии **Хелпер**!`), add(1, 'work');
          message.channel.send(embed);
    }
  } else if(user.info.work == 4){
    if(user.info.cols.work < work4) {
      let money = (Math.random() * 170)+50
      embed.setDescription(`Вы помогли своему другу Тестеру протестировать программу на наличие багов, и он за помощь дал Вам **${money.toFixed(2)}** ${fc}`)
      embed.addField(`До профессии **Тестер**`, `Вам осталось работать **${work4-user.info.cols.work-1}** раз`, true)
      embed.addField(`До профессии **Дизайнер**`, `Вам осталось работать **${work5-user.info.cols.work-1}** раз`, true)
      add(1, `cols.work`), add(money, `balances.money`), Users.set(message.author.id, Date.now()+timeout, 'info.dailys.work')
        if(user.info.cols.work == work4-1) embed.addField(`Вы были повышены`, `Вы были повышены до профессии **Тестер**!`), add(1, 'work');
          message.channel.send(embed);
    }
  } else if(user.info.work == 5){
    if(user.info.cols.work < work5) {
      let money = (Math.random() * 200)+60
      embed.setDescription(`Вы протестировали сначала игру, а потом программу на поиск багов и недоработок. В качестве оплаты Вы получили **${money.toFixed(2)}** ${fc}`)
      embed.addField(`До профессии **Дизайнер**`, `Вам осталось работать **${work5-user.info.cols.work-1}** раз`, true)
      embed.addField(`До профессии **Web-Дизайнер**`, `Вам осталось работать **${work6-user.info.cols.work-1}** раз`, true)
      add(1, `cols.work`), add(money, `balances.money`), Users.set(message.author.id, Date.now()+timeout, 'info.dailys.work')
        if(user.info.cols.work == work5-1) embed.addField(`Вы были повышены`, `Вы были повышены до профессии **Дизайнер**!`), add(1, 'work');
          message.channel.send(embed);
    }
  } else if(user.info.work == 6){
    if(user.info.cols.work < work6) {
      let money = (Math.random() * 230)+65
      embed.setDescription(`Вы заработали **${money.toFixed(2)}** ${fc}, сделав заказчику красивую аватарку и фон.`)
      embed.addField(`До профессии **Web-Дизайнер**`, `Вам осталось работать **${work6-user.info.cols.work-1}** раз`, true)
      embed.addField(`До профессии **Web-Программист**`, `Вам осталось работать **${work7-user.info.cols.work-1}** раз`, true)
      add(1, `cols.work`), add(money, `balances.money`), Users.set(message.author.id, Date.now()+timeout, 'info.dailys.work')
        if(user.info.cols.work == work6-1) embed.addField(`Вы были повышены`, `Вы были повышены до профессии **Web-Дизайнер**!`), add(1, 'work');
          message.channel.send(embed);
    }
  } else if(user.info.work == 7){
    if(user.info.cols.work < work7) {
      let money = (Math.random() * 260)+70
      embed.setDescription(`Вы красиво оформили информацию на пользовательском веб-интерфейсе и получили **${money.toFixed(2)}** ${fc}`)
      embed.addField(`До профессии **Web-Программист**`, `Вам осталось работать **${work7-user.info.cols.work-1}** раз`, true)
      embed.addField(`До профессии **IT-Менеджер**`, `Вам осталось работать **${work8-user.info.cols.work-1}** раз`, true)
      add(1, `cols.work`), add(money, `balances.money`), Users.set(message.author.id, Date.now()+timeout, 'info.dailys.work')
        if(user.info.cols.work == work7-1) embed.addField(`Вы были повышены`, `Вы были повышены до профессии **Web-Программист**!`), add(1, 'work');
          message.channel.send(embed);
    }
  } else if(user.info.work == 8){
    if(user.info.cols.work < work8) {
      let money = (Math.random() * 300)+85
      embed.setDescription(`Вы создали новый сайт по размещению объявлений заказчику и получили зарплату **${money.toFixed(2)}** ${fc}`)
      embed.addField(`До профессии **IT-Менеджер**`, `Вам осталось работать **${work8-user.info.cols.work-1}** раз`, true)
      embed.addField(`До профессии **Game-Dev**`, `Вам осталось работать **${work9-user.info.cols.work-1}** раз`, true)
      add(1, `cols.work`), add(money, `balances.money`), Users.set(message.author.id, Date.now()+timeout, 'info.dailys.work')
        if(user.info.cols.work == work8-1) embed.addField(`Вы были повышены`, `Вы были повышены до профессии **IT-Менеджер**!`), add(1, 'work');
          message.channel.send(embed);
    }
  } else if(user.info.work == 9){
    if(user.info.cols.work < work9) {
      let money = (Math.random() * 350)+90
      embed.setDescription(`Вы следите за работой всех систем своей работы и получили за ${Math.floor(Math.random() * 10)} дней работы **${money.toFixed(2)}** ${fc}`)
      embed.addField(`До профессии **Game-Dev**`, `Вам осталось работать **${work10-user.info.cols.work-1}** раз`, true)
      add(1, `cols.work`), add(money, `balances.money`), Users.set(message.author.id, Date.now()+timeout, 'info.dailys.work')
        if(user.info.cols.work == work9-1) embed.addField(`Вы были повышены`, `Вы были повышены до профессии **IT-Специалист**!`), add(1, 'work');
          message.channel.send(embed);
    }
  } else if(user.info.work == 10){
    if(user.info.cols.work < work10) {
      let money = (Math.random() * 400)+100
      embed.setDescription(`Вы добавили новые механики в игру для заказчика и получили **${money.toFixed(2)}** ${fc}`)
      add(1, `cols.work`), add(money, `balances.money`), Users.set(message.author.id, Date.now()+timeout, 'info.dailys.work')
          message.channel.send(embed);
    }
  }
     } else return error(`Вы уже использовали эту команду, подождите ещё **${timeout2(Users.get(message.author.id, 'info.dailys.work'), client, message)}**`, message)
}
exports.help = {
  name: ["work", "w"],
  d: "Поработать.",
  u: "work"
}