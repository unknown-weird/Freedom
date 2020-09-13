let Discord = require('discord.js')
exports.run = async (client, message, args, error, succ, Users, Guilds, timer) => {
  if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
  if(args[0]) member = message.mentions.members.first() || client.users.get(args.join("")) || message.guild.members.find(r => r.user.tag.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0])) || message.guild.members.find(r => r.displayName.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0]))
  else member = message.member;
  if(!Users.get(member.id)) return error(`**${member.user.tag}** не зарегистрирован в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
  let user = Users.get(member.id)
  let reps = user.info.reputation.rep_plus-user.info.reputation.rep_minus
let ww = user.info.work
let mess = user.info.cols.messages
let text, msgc, work;
let messagee = 3000-mess;
if(ww == 1) work = 'Дворник';
if(ww == 2) work = 'Дальнобойщик';
if(ww == 3) work = 'Строитель';
if(ww == 4) work = 'Юрист';
if(ww == 5) work = 'Тестер';
if(ww == 6) work = 'Дизайнер';
if(ww == 7) work = 'Web-Дизайнер';
if(ww == 8) work = 'Web-Программист';
if(ww == 9) work = 'IT-Менеджер';
if(ww == 10) work = 'IT-Специалист';

if(3000-mess > 0) messagee = `| Осталось до сувенира "Mass messages": **${timer(messagee, ['сообщение', 'сообщения', 'сообщений'])}**`;

if(mess == 0) msgc = ''
if(mess <= 100) msgc = '**- Неактив**'
if(mess >= 100) msgc = '**- Неактив**'
if(mess >= 700) msgc = '**- Немного актив**'
if(mess >= 1800) msgc = '**- Средне активный**'
if(mess >= 3500) msgc = '**- Активный**'
if(mess >= 5000) msgc = '**- Сверх активный!**'
if(mess >= 10000) msgc = '**- Самый активный человек!**'

if(reps < 2) text = ''
if(reps <= 5 && reps >= 2) text = 'Можно доверять.'
if(reps <= 10 && reps > 5) text = 'Хороший человек.'
if(reps <= 20 && reps > 10) text = 'Очень хороший человек.'
if(reps <= 30 && reps > 20) text = 'Репутация на высоте!'
if(reps <= 99999 && reps > 30) text = 'Ангельская репутация!'
if(reps <= -5 && reps < 0) text = 'Не рекомендуется доверять.'
if(reps <= -10 && reps < -5) text = 'Нельзя доверять.'
if(reps <= -20 && reps < -10) text = 'Ни в коем случае не слушать!'
if(reps <= -30 && reps < -20) text = 'Отвратительная репутация'
if(reps <= -99999 && reps < -30) text = 'Дьявольски-плохая репутация!'
let curlvl = user.info.levels.level
let curXp = user.info.levels.xp
let nxtLvlxp = curlvl * 200;
      let cembed = new Discord.RichEmbed()
      .setTitle(`Профиль ${member.user.tag}`)
      .setAuthor(`${member.user.tag}`, member.user.avatarURL)
      .addField(`Общая статистика:`, `
>>> Уровень: **${curlvl}** | XP: **${curXp}/${nxtLvlxp} (Осталось: ${nxtLvlxp-curXp})** | Всего XP: **${Users.get(member.id, 'info.levels.xpall')}**
Количество сообщений: **${mess}** ${msgc}
Репутация: **${reps}** (${user.info.reputation.rep_plus}/${user.info.reputation.rep_minus}) ${text}
В браке? ${Users.has(member.id, 'info.marries') ? `Да, брак с **${client.users.get(user.info.marries._marry).tag}**` : 'Нет.'}
Текущая профессия: **${work}**`)
.addField(`Количественная статистика`, `
>>> Работал **${user.info.cols.work}** раз
Преступлений: **${user.info.cols.crime}**
Воровал **${user.info.cols.rob}** раз
Открыл **${user.info.cols.box}** коробок`, true)
.addField(`Список улучшений`, `
>>> "Удача" - ${user.info.upgrades.includes('lucky')?'**Активировано**':'Отсутствует'}
"Репутация++" - ${user.info.upgrades.includes('reputation')?'**Активировано**':'Отсутствует'}
"Депозитный разрыв" - ${user.info.upgrades.includes('deposit')?'**Активировано**':'Отсутствует'}
"Депозитная копеечка" - ${user.info.upgrades.includes('deposit_coin')?'**Активировано**':'Отсутствует'}
"Подкрутка" - ${user.info.upgrades.includes('boxes')?'**Активировано**':'Отсутствует'}`, true)
      .setColor('BLURPLE')
    .setFooter('Чтобы посмотреть достижения - напишите -ach.', client.user.avatarURL)
      .setTimestamp()
/*if(Users.get(member.id, 'info.themes.current') == 'winter') {cembed.setTitle(`:santa: Профиль ${member.user.tag}`), cembed.addField(`Общая статистика:`, `
  >>> Уровень: **${curlvl}** | XP: **${curXp}/${nxtLvlxp} (Осталось: ${nxtLvlxp-curXp})** | Всего XP: **${Users.get(member.id, 'info.levels.xpall')}**
  :newspaper2: Количество сообщений: **${mess}** ${msgc} | Осталось до сувенира "Mass messages": **${messagee}** ${timer(messagee, ['сообщение', 'сообщения', 'сообщений'])}
  :arrow_up: Репутация: **${reps}** (${Users.get(member.id, 'info.reputation.rep_plus')}/${Users.get(member.id, 'info.reputation.rep_minus')}) ${text}
  :orange_book: СНИЛС: **${Users.get(member.id, 'info.me.snils')}**
  :couple_with_heart_woman_man: Муж/Жена: ${Users.has(member.id, 'info.marries') ? `<@${Users.get(member.id, 'info.marries._marry')}>` : 'Не женат.'}
  Текущая профессия: **${work}**`), cembed.addField(`Количественная статистика`, `
  >>> :construction_worker: Работал **${Users.get(member.id, 'info.cols.work')}** раз
  :homes: Преступлений: **${Users.get(member.id, 'info.cols.crime')}**
  :snowflake: Воровал **${Users.get(member.id, 'info.cols.rob')}** раз
  :inbox_tray: Открыл **${Users.get(member.id, 'info.cols.box')}** коробок`), cembed.setColor('#cccccc')}
  message.channel.send(cembed); */
  message.channel.send(cembed)
}
exports.help = {
    name: ["rank", "r", "pf", "profile"],
    d: 'Посмотреть ваш или чужой профиль',
    u: "rank [@Пользователь]"
}