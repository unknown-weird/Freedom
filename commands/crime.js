const Discord = require("discord.js");
const moment = require("moment");
let cfg = require('../config.json')
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
  if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
  if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
  let time = require('../functions/timeout.js').timeout    
  let timeout = 10800000
let cww = Users.get(message.author.id, `info.dailys.crime`);
  let crime = Math.random() * 4;
  if(Users.get(message.author.id).info.upgrades.includes('lucky')) crime = Math.random() * 6;
      let dp = Math.random() * 30+50
      let pd = Math.random() * 100+50
        let ura = [`Вы ограбили банк и получили **${dp.toFixed(2)}** ${cfg.fc}.`,
                    `Вы забрали у бабушки сумку и взяли **${dp.toFixed(2)}** ${cfg.fc}.`,
                    `Вы украли в магазине несколько бутылок алкоголя, которые в перепродаже стоили **${dp.toFixed(2)}** ${cfg.fc}.`,
                   `Вы ограбили ювелирный магазин, и в общей сумме получили **${dp.toFixed(2)}** ${cfg.fc}.`,
                   `Вы ограбили магазин и получили **${dp.toFixed(2)}** ${cfg.fc}.`]
        let suka = [`У вас не получилось ограбить банк и вас арестовали, а также забрали у вас **${pd.toFixed(2)}** ${cfg.fc}..`,
                   `У вас не получилось забрать сумку у бабушки и вам пришлось дать ей за моральный ущерб **${pd.toFixed(2)}** ${cfg.fc}..`,
                   `Вы не смогли украсть в магазине алкоголь и у вас забрали **${pd.toFixed(2)}** ${cfg.fc} за разбитые бутылки..`,
                   `Вы не смогли ограбить ювелирный магазин и сработала сигнализация.. У вас забрали **${pd.toFixed(2)}** ${cfg.fc}..`,
                   `У вас не получилось ограбить магазин, потому что вас спалил покупатель.. Вам пришлось дать **${pd.toFixed(2)}** ${cfg.fc}..`]
      if(!cww || cww <= Date.now()) {
      if(crime <= 1.5) {
        let embed = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle('Не удалось')
        .setColor('RED')
        .setDescription(suka[Math.floor(Math.random() * suka.length)])
        message.channel.send(embed)
        Users.math(message.author.id, '-', pd, 'info.balances.money')
        Users.math(message.author.id, '+', 1, 'info.cols.crime')
        Users.set(message.author.id, Date.now()+timeout, 'info.dailys.crime')
      } else if(crime >= 1.6) {
        let embed = new Discord.RichEmbed()
        .setTimestamp()
        .setColor('GREEN')
        .setTitle('Преступление удалось')
        .setDescription(ura[Math.floor(Math.random() * ura.length)])
        message.channel.send(embed)
        Users.math(message.author.id, '+', dp, 'info.balances.money')
        Users.math(message.author.id, '+', 1, 'info.cols.crime')
        Users.set(message.author.id, Date.now()+timeout, 'info.dailys.crime')
      }
            } else return error(`Вы уже использовали эту команду, подождите ещё **${time(cww, client, message)}**`, message)
};
exports.help = {
    name: ["crime"],
    d: "Преступление",
    u: "crime"
}