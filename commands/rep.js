const Discord = require("discord.js");
module.exports.run = async (client, message, args, error, succ, Users, Guilds, timer) => {
  if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
let timeout = 10800000;
let timeout2 = require('../functions/timeout.js').timeout
let cww = Users.get(message.author.id, 'info.dailys.rep');
        if(!cww || cww <= Date.now()) {
       if(args[0]) member = message.mentions.members.first() || client.users.get(args.join("")) || message.guild.members.find(r => r.user.tag.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0])) || message.guild.members.find(r => r.displayName.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0]))
      else if(!args[0]) return error('Пользователь не обнаружен.', message) 
      if(!member) return error('Пользователь не обнаружен.', message)  
      if(!Users.get(member.id)) return error(`**${member.tag ? member.tag : member.user.tag}** не зарегистрирован в базе данных.`, message)
       if(member.id == message.author.id) return error('Вы не можете дать репутацию себе.', message);
        message.channel.send(`Найден пользователь: **${member.tag ? member.tag : member.user.tag}**.`).then(m => m.delete(5000))
        let rep = args.slice(1).join(" ")
      if(!rep) rep = '+'
       if(rep != '+' && rep != '-') return error('Пожалуйста, укажите тип репутации \`+\` или \`-\`.', message)
          if(rep == '+'){
       if(!Users.get(message.author.id).info.upgrades.includes('reputation')) Users.math(member.id, '+', 1, 'info.reputation.rep_plus') 
       if(Users.get(message.author.id).info.upgrades.includes('reputation')) Users.math(member.id, '+', 2, 'info.reputation.rep_plus') 
       const embed = new Discord.RichEmbed()
        .setAuthor(`Freedom v${require(`../config.json`).version}`)
            .setTitle(`Репутация была повышена!`)
            .setColor('GREEN')
            .setDescription(`**${member}**, Вам повысил(а) репутацию **${message.author.tag}**\nВ общей сумме ${member} имеет **${timer(Users.get(member.id, 'info.reputation.rep_plus')-Users.get(member.id, 'info.reputation.rep_minus'), ['репутацию', 'репутации', 'репутаций'])}**.`)
            .setTimestamp();
            message.channel.send(embed);
      Users.set(message.author.id, Date.now()+timeout, 'info.dailys.rep')
       } else if(rep == '-'){
       if(!Users.get(message.author.id).info.upgrades.includes('reputation')) Users.math(member.id, '+', 1, 'info.reputation.rep_minus') 
       if(Users.get(message.author.id).info.upgrades.includes('reputation')) Users.math(member.id, '+', 2, 'info.reputation.rep_minus') 
        const embed = new Discord.RichEmbed()
         .setAuthor(`Freedom v${require(`../config.json`).version}`)
             .setTitle(`Репутация была понижена`)
             .setColor('RED')
             .setDescription(`**${member}**, Вам понизил(а) репутацию **${message.author.tag}**\nВ общей сумме ${member} имеет **${timer(Users.get(member.id, 'info.reputation.rep_plus')-Users.get(member.id, 'info.reputation.rep_minus'), ['репутацию', 'репутации', 'репутаций'])}**.`)
             .setTimestamp();
             message.channel.send(embed);
       Users.set(message.author.id, Date.now()+timeout, 'info.dailys.rep')
       }
        } else {
          return error(`Вы уже использовали эту команду, подождите ещё **${timeout2(Users.get(message.author.id, 'info.dailys.rep'), client, message)}**`, message)
        }
  }
  module.exports.help = {
    name: ["rep", "like"],
    d: "Добавить репутацию пользователю.",
    u: "addrep <@Пользователь>"
  }