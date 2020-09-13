let Discord = require('discord.js');
let cfg = require('../config.json');
module.exports = async (client, member) => {
 let Users = client.enmap.Users
 let Guilds = client.enmap.Guilds
 let Mutes = client.enmap.Mutes
  const embed = new Discord.RichEmbed()
  .setTitle('Новый пользователь')
  .addField(`Информация:`, `
Сервер: **${member.guild.name}**
Тег: **${member.user.tag}**
ID: **${member.user.id}**
Аккаунт был создан: **${member.user.createdAt.toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false})}**`, true)
.addField(`Другая информация:`, `
Имеются начальные роли? **${member.roles.has ? 'Да' : 'Нет'}**
Есть в базе сервера? **${Users.get(member.id) ? 'Да' : 'Нет'}**
Заблокирован? **${Users.get(member.id) && Users.get(member.id).info && Users.get(member.id).info.block ? 'Да' : 'Нет'}**
Замучен? **${Mutes.get(member.id) ? 'Да' : 'Нет'} **`)
  .setFooter(`Количество человек на данный момент: ${member.guild.memberCount}`)
  .setTimestamp()
  .setColor('GREEN')
  .setThumbnail(member.user.iconURL)
  client.channels.get('572059182698594306').send(embed)
if(member.guild.id == '548899664544399383') {
  setTimeout(() => {
  client.channels.get('622151060697513995').edit({name: `Участников: ${member.guild.memberCount}`})
  client.channels.get('625394545420664842').edit({name: `Ботов: ${member.guild.members.filter(m => m.user.bot).size}`})
  client.channels.get('625394253987840075').edit({name: `Каналов: ${member.guild.channels.size}`})
  client.channels.get('625398670266990602').edit({name: `Ролей: ${member.guild.roles.size}`})
  if(!member.user.bot && member.guild.members.has(member.id)) {
    member.addRoles(['548958986943201301', '577443455882493962', '622512444555788298', '622469042053054464', '612584007745667073', '557277963217797120']).catch(() => null)
  }
  if(member.user.bot) member.addRole('567353022552735744')
  }, 5000)
  if(Mutes.get(member.id) && member.guild.members.has(member.id)) member.addRole('566943473165533184').catch()
  const lolkek = new Discord.RichEmbed()
  .setTitle(`Добро пожаловать, ${member.user.tag}`)
 .setDescription(`${member}, Сперва прочитай правила (<#548915134223876098>) и выбери себе цвет никнейма и твой изучаемый язык программирования (<#550002982977142784>), а потом иди общаться в чатик! (<#548899664544399389>) ;D`)
  .setFooter(`Нас теперь ${member.guild.memberCount} человек!`)
  .setColor('GREEN')
  .setTimestamp()
  .setThumbnail(member.user.avatarURL)
  .setImage('https://cdn.discordapp.com/attachments/548899664544399389/605023110445662209/istockphoto-940891868-612x612.jpg')
  let eembed = new Discord.RichEmbed()
  .setTitle('Приветствую тебя на нашем сервере Freedom Inc!')
  .setDescription(`Что мы такое? Наш сервер - сообщество программистов и обычных людей, которые всегда что-то новое изучают и помогают другим. Здесь мы делаем всё для удобства и интереса пользователей. Дружное коммьюнити, добрая администрация, готовая всем помочь! Ниже частые вопросы и рекомендации от администрации сервера.`)
  .addField(`Первым делом рекомендую прочитать правила и роли сервера (их немного)`, `Вот здесь <#${cfg.ch.info}>`, true)
  .addField(`Как попасть в администрацию сервера?`, `Получить роли администрации можно только тогда, когда они нам потребуются.`, true)
  .addField(`Как можно раскрасить мой никнейм?`, `Цвет Вашего никнейма и изучаемый язык программирование можно выбрать в этом канале <#${cfg.ch.rao}>`)
  .addField(`Как добавить моего бота сюда?`, `Сначала необходимо посмотреть необходимые **требования** для подачи заявки бота. Посмотреть можно на канале <#${cfg.ch.yourbot}>. Если требования присутствуют, то отправляйте заявку командой **-addbot <Префикс> <Приглашение>**, и ожидайте, пока Вашего бота проверит администрация и примит решения.`, true)
  .addField(`Я хочу подать жалобу на участника/администратора`, `Оставить Вашу жалобу можно здесь ${cfg.komunre_site}, позже написав об этом администраторам для проверки.`)
  .addField(`Я хочу кинуть мем/свой код, как это сделать?`, `Отправить мем можно в канале <#${cfg.ch.memes}>/Отправить свой код Вы можете в канале <#${cfg.ch.codes}>\nP.S. На это всё бот ставит реакции, из-за которых можно оценивать.`, true)
  .addField(`Где мне можно тестировать и использовать команды ботов?`, `Конечно можно и в чате, но всё же **рекомендуется** использовать канал <#${cfg.ch.shitpost}>, чтобы не было проблем с правилом 1.3.`)
  .addField(`Как можно пользоваться экономикой?`, `Вы должны написать в любом канале нашего сервера команду **-account**, тогда Ваш профиль зарегистрируется в базе данных и Вы сможете пользоваться экономикой сервера.`, true)
  .setColor('GREEN')
  .setFooter(`Freedom Inc. ${cfg.year}`, client.user.avatarURL)
  .setTimestamp()
  await member.send(eembed).catch(err => console.log(`${member.user.tag} заблокировал бота, я не смог отправить сообщение.\nИвент: guildMemberAdd`)), member.send(`Также можете зайти на наш сервер **подтверждения ботов**, вот его бесконечное приглашение ${cfg.invites.ficc}`).catch(err => console.log(`${member.user.tag} заблокировал бота, я не смог отправить сообщение номер 2.\nИвент: guildMemberAdd`))
  client.channels.get('586498218192535553').send(lolkek)
 if(Users.get(member.id) && Users.get(member.id).info && Users.get(member.id).info.mute) member.addRole('566943473165533184')
} else if(member.guild.id == '588011221677113354') {
  const kek = new Discord.RichEmbed()
  .setTitle(`Добро пожаловать, ${member.user.tag}`)
 .setDescription(`${member}, Проходи и не стесняйся, мы тут все тестируем новых ботов от Вас и много чего другого ;D`)
  .setFooter(`Нас теперь ${member.guild.memberCount} человек!`)
  .setColor('GREEN')
  .setTimestamp()
  .setThumbnail(member.user.avatarURL)
  .setImage('https://cdn.discordapp.com/attachments/548899664544399389/605023110445662209/istockphoto-940891868-612x612.jpg')
  client.channels.get('589115173537841154').send(kek)
  if(!member.user.bot) member.addRole('617422040886018139')
  if(member.user.bot) member.addRole('632449829636800512')
}
}