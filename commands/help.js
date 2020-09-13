let Discord = require('discord.js')
module.exports.run = async (client, message,args) => {
  if(args.join("")) {
    let command = args.join("");
    if(client.commands.has(command)) {
    //  if(!client.commands.has(command)) return message.channel.send('Команда не найдена')
       command = client.commands.get(command);
      let embed = new Discord.RichEmbed()
    .setTitle(`Команда ${command.help.name[0]}`)
    .setDescription(`Алиасы: **-${command.help.name.slice(1).join(" / -")}**
    Описание команды: **${command.help.d}**

    Использование: **${command.help.u}**`)
    .setThumbnail(client.user.avatarURL)
    .setColor('BLURPLE')
    .setTimestamp()
      message.channel.send(embed)
    } else if(command.toLowerCase() !== 'b' &&command.toLowerCase() !== 'bots' &&command.toLowerCase() !== 'e'&&command.toLowerCase() !== 'economy' &&command.toLowerCase() !== 'g'&&command.toLowerCase() !== 'general'&&command.toLowerCase() !== 'm'&&command.toLowerCase() !== 'music'&&command.toLowerCase() !== 'eco'){
      error('Команда не найден(а).', message)
    }
  }
  if(!args.join("")) {
    let titles = [`Начало`, `Экономика`, `Общее`, `Для модераторов`, `Музыка`, `Для ботов`]
    let pages = [`Страницы:
2 - Экономика
3 - Общее
4 - [S/M/A] Для модераторов
5 - Музыка
6 - [S/M/A] Для ботов

**[S]** - Для STAFF
**[M]** - Для MODERATOR
**[A]** - Для ADMINISTRATOR`,
// Экономика
`
          **РЕПУТАЦИЯ/УРОВНИ**
**-rep** <@Пользователь> <+/-> - Добавить/отнять репутацию пользователю.
**-rank | profile** [@Пользователь] - Посмотреть свой или чужой профиль.
          **ЭКОНОМИКА/ДОСТИЖЕНИЯ**
**-shop** - Посмотреть магазин.
**-buy | b** <Номер предмета> [Количество] - Купить предмет из магазина.
**-bal | balance** [@Пользователь] - Посмотреть свой или чужой баланс.

**-bank** <all/Количество> - Пополнить свой **банковский счёт**.
**-with | withdraw** <all/Количество> - Снять коины с **банковского счёта**.
**-dep | deposit** <all/Количество> - Пополнить свой **депозитный счёт**.
**-take** <all/Количество> - Снять коины с **депозитного счёта**.

**-pay** <@Пользователь> <all/Сумма> [Комментарий] - Перевести коины другому участнику.
**-leaderboard | top** <Тип> - Посмотреть топ 20 человек определённого типа.
**-inv** [@Пользователь] - Просмотреть инвентарь пользователя.
**-ach | -achievement** [@Пользователь] - Посмотреть свои или чужие достижения.
**-info** <Тип> <Текст> - Установить личную информацию в профиль.
          **БРАКИ**
**-passport | pass** [settings] [Аргумент] - Просмотреть паспорт и настроить его.
**-marry** <@Пользователь> - Пожениться.
          **СПОСОБЫ ЗАРАБОТКА**
**-box** [Тип] - Открыть подарочную коробку.
**-crime** - Сделать преступление.
**-work** - Поработать и получить коины.
**-rob** <@Пользователь> - Ограбить пользователя.
**-cr** - Конвертировать коины в евро и наоборот.
**-coinflip** <Ставка 1-200> <Орёл/Решка> - Подбросить монетку и сделать ставку.
**-roulette** - Прокрутить рулетку (аналог казино).`,
// Общее
`**-help** [Команда] - Эта страница.
**-say** - Сказать что-либо от лица бота.
**-idea** <Идея> - Написать идею для улучшения бота/сервера. Имеются оценки.
**-demo | demostration** - Включить демонстрацию экрана в голосовом канале.
**-account** - Зарегистрировать свой аккаунт в базе данных бота.`,
// Для модераторов
`**-mod** <@Пользователь/ID> <Номер правила> - Модерация сервера.
**-unmod** <mute/ban> <@Пользователь/ID> - Отменить действия.
**-mutes-list** - Посмотреть список всех замученных на сервере.
**-admins** - Показывает администрацию сервера, их репутацию и модеративные очки.`,
// Музыка
`**-play** <url или название> - Включить музыку на сервере.
**-stop** - Остановить музыку.
**-skip** - Пропустить трек.
**-pause** - Поставить на паузу.
**-resume** - Продолжить воспроизведение.
**-np** - Текущий трек.
**-queue** - Вся очередь.
**-volume** <от 1 до 30> - Установить громкость.`,
// Для ботов
`**-addbot** <Префикс> <ID бота> [Описание бота] - Отправить бота на проверку тестерам или администраторам сервера.
**-bot-stats** - Посмотреть статистику добавленных и отклонённых ботов.
**-ver <adp/dec/wait/edit> <Айди автора бота> <@Бот> [Идеи]/<Причины>** - Управляет ботами на центре подтверждения ботов. Очень обширная команда для модераторов.
**-botinfo** <ID> - Узнать информацию о боте, если его верифицировали тестеры.`]
    let page = 1
  let embed = new Discord.RichEmbed()
  .setTitle(titles[page-1])
  .setDescription(pages[page-1])
  .setFooter('-help <Модуль/Команда>')
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
  .setColor('BLURPLE')
  message.channel.send(embed).then(msg => {
  msg.react('⏪').then(async t => { 
  let qw, ww, ew, rw;
  await msg.react('◀️').then(q => qw = q)
  await msg.react('⏹').then(w => ww = w)
  await msg.react('▶️').then(e => ew = e)
  await msg.react('⏩').then(r => rw = r)
  let veryBackFilt = (react, user) => react.emoji.name === '⏪' && user.id === message.author.id;
  let backFilt = (react, user) => react.emoji.name === '◀️' && user.id === message.author.id;
  let stopFilt = (react, user) => react.emoji.name === '⏹' && user.id === message.author.id;
  let goFilt = (react, user) => react.emoji.name === '▶️' && user.id === message.author.id;
  let veryGoFilt = (react, user) => react.emoji.name === '⏩' && user.id === message.author.id;
  setTimeout(() => {qw.remove(), ww.remove(), ew.remove(), rw.remove(), t.remove()}, 120000)
  let vback = msg.createReactionCollector(veryBackFilt, {time: 120000})
  let back = msg.createReactionCollector(backFilt, {time: 120000})
  let stop = msg.createReactionCollector(stopFilt, {time: 120000})
  let go = msg.createReactionCollector(goFilt, {time: 120000})
  let vgo = msg.createReactionCollector(veryGoFilt, {time: 120000})
  vback.on("collect", r => {
  if(page === 1) return;
  r.remove(message.author.id)
  page = 1;
  embed.setTitle(titles[page-1])
  embed.setDescription(pages[page-1])
  embed.setFooter(`-help <Команда> | Страница ${page}/${pages.length}`)
  msg.edit(embed)
  })
  back.on("collect", r => {
  if(page === 1) return;
  r.remove(message.author.id)
  page--;
  embed.setTitle(titles[page-1]);embed.setDescription(pages[page-1])
  embed.setFooter(`-help <Команда> | Страница ${page}/${pages.length}`)
  msg.edit(embed)
  })
  go.on("collect", r => {
  if(page === pages.length) return;
  r.remove(message.author.id)
  page++;
  embed.setTitle(titles[page-1]);embed.setDescription(pages[page-1])
  embed.setFooter(`-help <Команда> | Страница ${page}/${pages.length}`)
  msg.edit(embed)
  })
  stop.on("collect", r => {
    r.remove(message.author.id)
    msg.delete(), stop.stop()
  });
  vgo.on("collect", r => {
  if(page === pages.length) return;
  r.remove(message.author.id)
  page = pages.length;
  embed.setTitle(titles[page-1]);embed.setDescription(pages[page-1])
  embed.setFooter(`-help <Команда> | Страница ${page}/${pages.length}`)
  msg.edit(embed)
  });
  });
 });
} 
}
module.exports.help = {
  name: ["help", "h"],
  d: "Помощь.",
  u: "help"
}