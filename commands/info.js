let Discord = require('discord.js')
let moment = require('moment')
exports.run = async (client, message, args, error, succ, Users, Guilds, timer) => {
if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
let embed = new Discord.RichEmbed()
.setTitle('Список параметров')
.addField(`birthday`, 'Установить дату рождения форматом **DD.MM.YYYY**.', true)
.addField(`biography`, 'Установить личную биографию.', true)
.addField(`description`, 'Установить личное описание себя.', true)
.addField(`gender`, 'Изменить Ваш пол между **мужским** и **женским**', true)
.addField(`name`, 'Изменить или установить Ваше имя в паспорт.', true)
.setFooter(`Всё это может быть изменено в любой момент.`)
.setTimestamp()
.setColor('GREEN')
.setAuthor(`Freedom v${require('../config.json').version}`)
if(!args[0]) return message.channel.send(embed)
if(args[0].toLowerCase() != 'birthday'
&& args[0].toLowerCase() != 'biography'
&& args[0].toLowerCase() != 'description'
&& args[0].toLowerCase() != 'gender'
&& args[0].toLowerCase() != 'name') return error('Данный параметр не найден.', message)
 if(args[0].toLowerCase() == 'birthday'){
    if(!args[1]) return error(`Укажите Вашу дату рождения в таком формате **DD.MM.YYYY**`, message);
    if(!moment(args[1], 'DD.MM.YYYY').isValid()) return error('Пожалуйста, укажите дату в правильном формате: **DD.MM.YYYY**', message)
   if(moment().diff(moment(args[1], 'DD.MM.YYYY'), 'years') < 5 || moment().diff(moment(args[1], 'DD.MM.YYYY'), 'years') > 50) return error(`Пожалуйста, укажите правильный возраст от **5** до **50** лет.`, message)
succ(`Ваша личная информация была обновлена.\nОтредактировано: **День рождения**.\nЗначение: **${args[1]}**.\nВам на данный момент **${timer(moment().diff(moment(args[1], 'DD.MM.YYYY'), 'years'), ['год', 'года', 'лет'])}**`, message)
Users.set(message.author.id, moment(args[1], 'DD.MM.YYYY').valueOf(), 'info.me.birthday')
} else if(args[0].toLowerCase() == 'gender'){
    if(!args[1]) return message.channel.send('Укажите пол. Male - Мужской, Female - Женский')
    if(args[1].toLowerCase() != 'male' && args[1].toLowerCase() != 'female' && args[1].toLowerCase() != 'ламинатный') return error('Укажите пол. Male - Мужской, Female - Женский', message)
    if(args[1].toLowerCase() == 'male'){
        Users.set(message.author.id, 'male', 'info.me.gender')
        succ(`Ваша личная информация была обновлена.\nОтредактировано: **Пол**.\nЗначение: **Мужской**`, message)
    } else if(args[1].toLowerCase() == 'female'){
        Users.set(message.author.id, 'female', 'info.me.gender')
        succ(`Ваша личная информация была обновлена.\nОтредактировано: **Пол**.\nЗначение: **Женский**`, message)
    } else if(args[1].toLowerCase() == 'ламинатный') {
    Users.set(message.author.id, 'Трап', 'info.me.gender')
   succ(`Ваша личная информация была обновлена.\nОтредактировано: **Пол**.\nЗначение: **ЛАМИНАТ ХАХАХАх**`, message)
}
} else if(args[0].toLowerCase() == 'biography'){
    if(!args[1]) return error(`Напишите Вашу биографию.`, message)
    if(args.slice(1).join(" ").length > 200) return error(`Укоротите Вашу биографию. Лимит **200** символов. Вы написали: **${args.slice(1).join(" ").length}**`, message)
   Users.set(message.author.id, args.slice(1).join(" "), 'info.me.biography')
    succ(`Ваша личная информация была обновлена.\nОтредактировано: **Биография**.\nЗначение: **${args.slice(1).join(" ")}**`, message)
} else if(args[0].toLowerCase() == 'description'){
    if(!args[1]) return error(`Напишите Ваше описание профиля.`, message)
    if(args.slice(1).join(" ").length > 200) return error(`Пожалуйста, сделайте Ваше описание короче. Лимит **200** символов. Вы написали: **${args.slice(1).join(" ").length}**`, message)
    Users.set(message.author.id, args.slice(1).join(" "), 'info.me.description')
    succ(`Ваша личная информация была обновлена.\nОтредактировано: **Описание профиля**.\nЗначение: **${args.slice(1).join(" ")}**`, message)
} else if(args[0].toLowerCase() == 'name'){
    if(!args[1]) return error(`Напишите Ваше имя.`, message)
    if(args.slice(1).join(' ').length < 3) return error('Ваше имя слишком короткое.', message)
    if(args.slice(1).join(" ").length > 26) return error(`Максимальная длина имени 26 символов.`, message)
    Users.set(message.author.id, args.slice(1).join(" "), 'info.me.name')
    message.guild.members.get(message.author.id).setNickname(`${message.author.username} | ${args.slice(1).join(" ")}`)
    succ(`Ваша личная информация была обновлена.\nОтредактировано: **Имя**.\nИмя: **${args.slice(1).join(" ")}**`, message)
}
}
exports.help = {
  name: ["info"],
  d: "Установить личную информацию в паспорт.",
  u: "info <Тип> <Текст>"
}