let Discord = require('discord.js')
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
let Mutes = client.enmap.Mutes
    if(!args[0]) return message.channel.send('Укажите аргумент **mute** или **ban**.')
    if(args[0].toLowerCase() !== 'mute'&&args[0].toLowerCase() !== 'ban') return message.channel.send('Вы указали неверный аргумент.')
    if(args[0].toLowerCase() === 'mute'){
        if(!args[1]) return error('Укажите пользователя.', message)
        let member = message.mentions.members.first() || client.users.get(args[1]) || message.guild.members.find(r => r.user.tag.toLowerCase().includes(args[1]?args[1].toLowerCase():args[1])) || message.guild.members.find(r => r.displayName.toLowerCase().includes(args[1]?args[1].toLowerCase():args[1]))
        if(!member) return error('Вы не указали пользователя для размута.', message)
        message.channel.send(`Найден пользователь: **${member.tag ? member.tag : member.user.tag}**.`)
        if(!Mutes.get(member.id)) return error('Данный пользователь не замучен.', message)
        if(!args.slice(2).join(" ")) return error(`Укажите причину отмены наказания.`, message)
        succ(`Пользователь **${member.tag ? member.tag : member.user.tag}** (${member}) был размучен **${message.author.tag}**.
        Причина: **${args.slice(2).join(" ")}**`, message)
       Users.math(Mutes.get(member.id, 'moderator.id'),'+', 1, 'info.admin.score')
        Mutes.set(member.id, Date.now()+1000, 'info.mute_time')
        member.user.send(`Вы были размучены на **Freedom Inc.** администратором **${message.author.tag}** по причине **${args.slice(2).join(" ")}**`).catch(err => {})
    }
}
exports.help = {
    name: ["unmod"],
    d: "Разбанить или размутить пользователя.",
    u: "unmod <mute/ban> <@Пользователь/ID>"
}

/*
if(!Users.get(message.author.id)) Users.set(message.author.id, {id: message.author.id, info: {
      achievements: [],
      work: 1,
      levels: {level: 1, xp: 0, xpall: 0},
      boxes: {common_box: 0, rare_box: 0, epic_box: 0, legendary_box: 0},
      balances: {money: 0.00, bank: 0.00, deposit: 0.00, euro: 0.00},
      reputation: {rep_plus: 0, rep_minus: 0},
      cols: {work: 0, crime: 0, ach: 0, rob: 0, box: 0, messages: 0},
      inv: [],
      me: {snils: `${randomize(100, 999)} ${randomize(100, 999)} ${randomize(100, 999)} ${randomize(10, 99)}`}
    }}); */