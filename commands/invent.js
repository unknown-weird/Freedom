let Discord = require('discord.js')
exports.run = async (client,message, args, error, succ, Users, Guilds) => {
    if(args[0]) member = message.mentions.members.first() || client.users.get(args.join("")) || message.guild.members.find(r => r.user.tag.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0])) || message.guild.members.find(r => r.displayName.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0]))
    else member = message.member;
    if(!Users.get(member.id)) return error(`**${member.user.tag}** не зарегистрирован в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
    if(!Users.get(member.id, 'info.inv')[0]){
        let embed = new Discord.RichEmbed()
    .setAuthor(`Freedom v${require('../config.json').version}`)
    .setTitle(`Инвентарь ${member.user.tag}`)
    .setDescription(`**Отсутствует**`)
    .setColor('RED')
    .setTimestamp()
    message.channel.send(embed)
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Freedom v${require('../config.json').version}`)
    .setTitle(`Инвентарь ${member.user.tag}`)
    .setColor('GREEN')
    .setFooter('Инвентарь зависит от времени и актива на сервере.')
    .setTimestamp()
    let i = 1
    Users.get(member.id, 'info.inv').map(r => embed.addField(`Предмет #${i++}`, `**${r}**`, true))
    message.channel.send(embed)
    }
}
exports.help = {
    name: ["inv", "invent", "inventory"],
    d: "Просмотреть инвентарь",
    u: "inv [@Пользователь]"
}