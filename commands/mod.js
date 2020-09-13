const Discord = require("discord.js");
let Enmap = require('enmap')
module.exports.run = async (client, message, args, error, succ, Users, Guilds, timer, randomize) => {
Mutes = client.enmap.Mutes;
    if(!message.member.hasPermission("MANAGE_GUILD")) return error('Ты не в администрации проекта.', message)
    if(message.guild.id != '548899664544399383') return error('На данном сервере модерация не работает.', message)
    if(!args[0]) return error('Укажите пользователя.', message)
    let tomute = message.mentions.members.first() || client.users.get(args[0]) || message.guild.members.find(r => r.user.tag.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0])) || message.guild.members.find(r => r.displayName.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0]))
    if(tomute.id === message.author.id) return error('Самого себя наказывать нельзя.', message);
    if(!tomute) return error(`Участник не найден.`, message)
    message.channel.send(`Найден пользователь **${tomute.tag ? tomute.tag : tomute.user.tag}**.`)
    if(tomute.highestRole.position == message.member.highestRole.position) return error('Наказать пользователя на равне с вами нельзя.', message);
    if(tomute.highestRole.position >= message.member.highestRole.position) return error('Наказать пользователя выше вас нельзя.', message);
    let muterole = message.guild.roles.find(r => ['mute', 'Mut', 'Muted', 'Mute','muted','mut'].includes(r.name));
    let pravilo = args[1]
    if(!pravilo) return error(`Укажите правило нарушения из ${cfg.ch.info} (1.2, 1.5, 1.7 и т.д.)`, message);
  if(isNaN(pravilo)) return error('Укажите только номер прааила.', message)
    if(pravilo > 1.7) return error('Данного правила для **текстовых каналов** нет.', message)
    if(!Users.get(message.author.id, 'info.admin')) Users.set(message.author.id, 0, 'info.admin.score')
    if(pravilo === '1.1'){
        if(!message.member.hasPermission("BAN_MEMBERS")) return error('У вас не хватает прав на использование данного нарушения.', message)
        message.guild.members.get(tomute.id).ban(`Реклама серверов | каналов | ботов и др. (1.1) - ${message.author.tag}`)
        succ(`Пользователь **${tomute.tag ? tomute.tag : tomute.user.tag}** был забанен за **"Реклама серверов | каналов | ботов и др. (1.1)"**.`, message)
        Users.inc(message.author.id, 'info.admin.score')
        tomute.send(`Вы были забанены на **Freedom Inc.** администратором **${message.author.tag}** по причине "Реклама серверов | каналов | ботов и др. (1.1)".`)
    } else if(pravilo === '1.2'){
        if(Users.get(tomute.id)&&Users.get(tomute.id).info.mutes) return error('У пользователя уже установлен мут.', message)
        await tomute.addRole(muterole.id)
        let time = randomize(40, 90)
        Mutes.set(tomute.id, {id: tomute.id, info: {rule: "1.2", tag: tomute.tag?tomute.tag:tomute.user.tag, mute_time: Date.now()+1000*60*time}, moderator: {id: message.author.id, tag: message.author.tag}})
        succ(`Пользователь **${tomute.tag ? tomute.tag : tomute.user.tag}** был замучен на **${timer(time, ['минуту', 'минуты', 'минут'])}** за **"Оскорбления | провокации | конфликты | конфиденциальная информация пользователя (1.2)"**.`, message)
        Users.inc(message.author.id, 'info.admin.score')
        tomute.send(`Вы были замучены на **${timer(time, ['минуту', 'минуты', 'минут'])}** администратором **${message.author.tag}** по причине **"Оскорбления | провокации | конфликты | конфиденциальная информация пользователя (1.2)"**.`)
    } else if(pravilo === '1.3'){
        if(Users.get(tomute.id)&&Users.get(tomute.id).info.mutes) return error('У пользователя уже установлен мут.', message)
        await tomute.addRole(muterole.id)
        let time = randomize(25, 55)
        Mutes.set(tomute.id, {id: tomute.id, info: {rule: "1.3", tag: tomute.tag?tomute.tag:tomute.user.tag, mute_time: Date.now()+1000*60*time}, moderator: {id: message.author.id, tag: message.author.tag}})
        Users.inc(message.author.id, 'info.admin.score')
        succ(`Пользователь **${tomute.tag ? tomute.tag : tomute.user.tag}** был замучен на **${timer(time, ['минуту', 'минуты', 'минут'])}** за **"Флуд | спам | транслит | оффтоп | флуд эмодзи (1.3)"**.`, message)
        tomute.send(`Вы были замучены на **${timer(time, ['минуту', 'минуты', 'минут'])}** администратором **${message.author.tag}** по причине **"Флуд | спам | транслит | оффтоп | флуд эмодзи (1.3)"**.`)
    } else if(pravilo === '1.4'){
        if(Users.get(tomute.id)&&Users.get(tomute.id).info.mutes) return error('У пользователя уже установлен мут.', message)
        await tomute.addRole(muterole.id)
        let time = randomize(30, 60)
        Mutes.set(tomute.id, {id: tomute.id, info: {rule: "1.4", tag: tomute.tag?tomute.tag:tomute.user.tag, mute_time: Date.now()+1000*60*time}, moderator: {id: message.author.id, tag: message.author.tag}})
        succ(`Пользователь **${tomute.tag ? tomute.tag : tomute.user.tag}** был замучен на **${timer(time, ['минуту', 'минуты', 'минут'])}** за **"Пиратское ПО | порнографические пикчи не в NSFW каналах (1.4)"**.`, message)
        Users.inc(message.author.id, 'info.admin.score')
        tomute.send(`Вы были замучены на **${timer(time, ['минуту', 'минуты', 'минут'])}** администратором **${message.author.tag}** по причине **"Пиратское ПО | порнографические пикчи не в NSFW каналах (1.4)"**.`)
    } else if(pravilo === '1.5'){
        if(Users.get(tomute.id)&&Users.get(tomute.id).info.mutes) return error('У пользователя уже установлен мут.', message)
        await tomute.addRole(muterole.id)
        let time = randomize(40, 60)
        Mutes.set(tomute.id, {id: tomute.id, info: {rule: "1.5", tag: tomute.tag?tomute.tag:tomute.user.tag, mute_time: Date.now()+1000*60*time}, moderator: {id: message.author.id, tag: message.author.tag}})
        succ(`Пользователь **${tomute.tag ? tomute.tag : tomute.user.tag}** был замучен на **${timer(time, ['минуту', 'минуты', 'минут'])}** за **"Массовые упоминания участников/ролей | ввод в заблуждение | дезинформация (1.5)"**.`, message)
        Users.inc(message.author.id, 'info.admin.score')
        tomute.send(`Вы были замучены на **${timer(time, ['минуту', 'минуты', 'минут'])}** администратором **${message.author.tag}** по причине **"Массовые упоминания участников/ролей | ввод в заблуждение | дезинформация (1.5)"**.`)
    } else if(pravilo === '1.6'){
        if(Users.get(tomute.id)&&Users.get(tomute.id).info.mutes) return error('У пользователя уже установлен мут.', message)
        await tomute.addRole(muterole.id)
        let time = randomize(60, 120)
        Mutes.set(tomute.id, {id: tomute.id, info: {rule: "1.6", tag: tomute.tag?tomute.tag:tomute.user.tag, mute_time: Date.now()+1000*60*time}, moderator: {id: message.author.id, tag: message.author.tag}})
        succ(`Пользователь **${tomute.tag ? tomute.tag : tomute.user.tag}** был замучен на **${timer(time, ['минуту', 'минуты', 'минут'])}** за **"Неадекватное поведение | токсичность (1.6)"**.`, message)
        Users.inc(message.author.id, 'info.admin.score')
        tomute.send(`Вы были замучены на **${timer(time, ['минуту', 'минуты', 'минут'])}** администратором **${message.author.tag}** по причине **"Неадекватное поведение | токсичность (1.6)"**.`)
    } else if(pravilo === '1.7'){
        if(Users.get(tomute.id)&&Users.get(tomute.id).info.mutes) return error('У пользователя уже установлен мут.', message)
        await tomute.addRole(muterole.id)
        let time = randomize(60, 180)
        Mutes.set(tomute.id, {id: tomute.id, info: {rule: "1.7", tag: tomute.tag?tomute.tag:tomute.user.tag, mute_time: Date.now()+1000*60*time}, moderator: {id: message.author.id, tag: message.author.tag}})
        succ(`Пользователь **${tomute.tag ? tomute.tag : tomute.user.tag}** был замучен на **${timer(time, ['минуту', 'минуты', 'минут'])}** за **"Пользовательские 'ивенты' | пользовательские бунты (1.7)"**.`, message)
        Users.inc(message.author.id, 'info.admin.score')
        tomute.send(`Вы были замучены на **${timer(time, ['минуту', 'минуты', 'минут'])}** администратором **${message.author.tag}** по причине **"Пользовательские 'ивенты' | пользовательские бунты (1.7)"**.`)
    }
}
module.exports.help = {
    name: ["mod"],
    d: "Модерация сервера по правилам.",
    u: "mod <@Пользователь> <Номер правила>"
}