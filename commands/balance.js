let Discord = require('discord.js')
let cfg = require(`../config.json`)
exports.run = async (client, message, args, error, succ, Users, Guilds, timer) => {
   let member;
   if(args[0]) member = message.mentions.members.first() || client.users.get(args.join("")) || message.guild.members.find(r => r.user.tag.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0])) || message.guild.members.find(r => r.displayName.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0]))
  else member = message.member;
   if(!Users.get(member.id)) return error(`**${member.user.tag}** не зарегистрирован в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
    let user = Users.get(member.id)
    let guild = Guilds.get('guilds')
    let percents;
    percents = Number((user.info.balances.deposit.toFixed(2)/25000.00)*100)
    if(Number((user.info.balances.deposit.toFixed(2)/25000.00)*100) > 100) percents = 100
    let embed = new Discord.RichEmbed()
    .setAuthor(`Freedom v${require(`../config.json`).version}`)
    .setTitle('Просмотр баланса')
    .setFooter('Чтобы пополнить баланс банковского счёта: -bank.')
    .setTimestamp()
    .setColor('ORANGE')
   .setDescription(`Пользователь **${member.user.tag}**
Коинов наличными: **${user.info.balances.money.toFixed(2)}** ${cfg.fc}
Евро: **${user.info.balances.euro.toFixed(2)}** :euro:
Коинов на банковском счёте: **${user.info.balances.bank.toFixed(2)}** ${cfg.fc}
Коинов на депозитном счёте: **${user.info.balances.deposit.toFixed(2)}/25000.00** (${percents.toFixed(2)}%) ${cfg.fc}
Общее количество денег (вместе с евро): **${(user.info.balances.money+user.info.balances.bank+user.info.balances.deposit+user.info.balances.euro*guild.info.euro.course).toFixed(2)}/1.000.000** ${cfg.fc}

Центральный банк Freedom: **${guild.info.balance.bank.toFixed(2)}** ${cfg.fc}

Текущий курс евро: **${guild.info.euro.course}** ${cfg.fc} за **1** :euro:
До обновления курса осталось **${timer(guild.info.euro.time, ['минута', 'минуты', 'минут'])}**`);
 if(user.info.upgrades.includes('deposit')) {
    percents = Number((user.info.balances.deposit.toFixed(2)/50000.00)*100)
    if(Number((user.info.balances.deposit.toFixed(2)/50000.00)*100) > 100) percents = 100
    embed.setDescription(`Пользователь **${member.user.tag}**
Коинов наличными: **${user.info.balances.money.toFixed(2)}** ${cfg.fc}
Евро: **${user.info.balances.euro.toFixed(2)}** :euro:
Коинов на банковском счёте: **${user.info.balances.bank.toFixed(2)}** ${cfg.fc}
Коинов на депозитном счёте: **${user.info.balances.deposit.toFixed(2)}/50000.00** (${percents.toFixed(2)}%) ${cfg.fc}
Общее количество денег (вместе с евро): **${(user.info.balances.money+user.info.balances.bank+user.info.balances.deposit+user.info.balances.euro*guild.info.euro.course).toFixed(2)}/2.000.000** ${cfg.fc}

Центральный банк Freedom: **${guild.info.balance.bank.toFixed(2)}** ${cfg.fc}

Текущий курс евро: **${guild.info.euro.course}** ${cfg.fc} за **1** :euro:
До обновления курса осталось **${timer(guild.info.euro.time, ['минута', 'минуты', 'минут'])}**`)
 }
message.channel.send(embed)
}
exports.help = {
    name: ["balance", "bal", "$"],
    d: "Посмотреть свой или чужой баланс.",
    u: "bal [@Пользователь]"
}