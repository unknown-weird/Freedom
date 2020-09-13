let Discord = require('discord.js');
let timeout2 = require('../functions/timeout.js').timeout
cfg = require('../config.json')
exports.run = async (client, message, args, error, succ, Users, Guilds, timer) => {
  if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
  if(args[0]) member = message.mentions.members.first() || client.users.get(args.join("")) || message.guild.members.find(r => r.user.tag.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0])) || message.guild.members.find(r => r.displayName.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0]))
      let crime = Math.random() * 4;
      if(Users.get(message.author.id).info.upgrades.includes('lucky')) crime = Math.random() * 6;
      let timeout = 10800000;
      let cww = Users.get(message.author.id, `info.dailys.rob`);
      if(!cww || cww <= Date.now()){
      if(!args.join("")) return error('Укажите пользователя.', message)
          if(!member) return error('Пользователь не найден.', message)
          if(!Users.get(member.id)) return error(`**${member.user.tag}** не зарегистрирован в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
          if(member.id == client.user.id) return error('Меня ограбить нельзя.', message)
          let umon = Users.get(member.id, 'info.balances.money')
          if(member.id === message.author.id) return error('Зачем ты себя ограбляешь?', message)
          let dp = Math.random() * umon/2.1;
          let pd = umon/3;
          if(umon < 30 || dp > umon) return error('У данного участника не хватает коинов.', message)
        if(crime < 1.5){
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setTimestamp()
        .setTitle('Не удалось')
        .setColor('RED')
        .setDescription(`Вам не удалось украсть коины и вы вернули ${member} **${pd.toFixed(2)}** ${cfg.fc}`)
        message.channel.send(embed)
        Users.math(message.author.id, '-', Number(pd), 'info.balances.money')
        Users.math(member.id, '+', Number(pd), 'info.balances.money')
        Users.math(message.author.id, '+', 1, 'info.cols.rob')
        Users.set(message.author.id, Date.now()+timeout, 'info.dailys.rob')
      } else if(crime >= 1.5) {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setTimestamp()
        .setColor('GREEN')
        .setTitle('Вы смогли украсть у пользователя коины')
        .setDescription(`Вы украли у ${member} **${dp.toFixed(2)}** ${cfg.fc}`)
        message.channel.send(embed)
        Users.math(message.author.id, '+', Number(dp), 'info.balances.money')
        Users.math(member.id, '-', Number(dp), 'info.balances.money')
        Users.math(message.author.id, '+', 1, 'info.cols.rob')
        Users.set(message.author.id, Date.now()+timeout, 'info.dailys.rob')
      }
    } else return error(`Вы уже использовали эту команду, подождите ещё **${timeout2(Users.get(message.author.id, 'info.dailys.rob'), client, message)}**`, message)
    }
exports.help = {
    name: ["rob"],
    d: "Ограбить пользователя",
    u: "rob <@Пользователь>"
}