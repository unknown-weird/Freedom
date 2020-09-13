let Discord = require('discord.js')
exports.run = async (client, message, args, error, succ, Users, Guilds, timer, randomize) => {
    if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
    if(args[0]) member = message.mentions.members.first() || client.users.get(args.join("")) || message.guild.members.find(r => r.user.tag.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0])) || message.guild.members.find(r => r.displayName.toLowerCase().includes(args[0]?args[0].toLowerCase():args[0]))
  else member = message.member;
    message.channel.send(`Найден пользователь **${member.user ? member.user.tag : member.tag}**`).then(msg => msg.delete(10000))
    if(!Users.get(member.id)) return error(`Данный пользователь не зарегистрирован в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
    let achcol = Users.get(member.id, 'info.cols.ach')
    let user = Users.get(member.id)
    let dos = 22
let one = [`
1. "Это было так легко?!" - **${user.info.achievements.includes(1) ? 'Выполнено' : 'Отсутствует'}**
2. "Начало положено." - **${user.info.achievements.includes(2) ? 'Выполнено' : 'Отсутствует'}**
3. "Я против Ваших правил!" - **${user.info.achievements.includes(3) ? 'Выполнено' : 'Отсутствует'}**
4. "Первые наличные" - **${user.info.achievements.includes(4) ? 'Выполнено' : 'Отсутствует'}**
5. "Первые доходы с депозита!" - **${user.info.achievements.includes(5) ? 'Выполнено' : 'Отсутствует'}**
6. "Деньги успешно сохранены от воров!" - **${user.info.achievements.includes(6) ? 'Выполнено' : 'Отсутствует'}**
7. "Мне нужен чемодан для этого" - **${user.info.achievements.includes(7) ? 'Выполнено' : 'Отсутствует'}**
8. "Зарабатываю на обмене валюты." - **${user.info.achievements.includes(8) ? 'Выполнено' : 'Отсутствует'}**
9. "Теперь я Коллектор!" - **${user.info.achievements.includes(9) ? 'Выполнено' : 'Отсутствует'}**
10. "Главное вовремя остановиться.." - **${user.info.achievements.includes(10) ? 'Выполнено' : 'Отсутствует'}**
11. "Я здесь активный." - **${user.info.achievements.includes(11) ? 'Выполнено' : 'Отсутствует'}**
12. "Хорошая репутация!" - **${user.info.achievements.includes(12) ? 'Выполнено' : 'Отсутствует'}**
13. "Профессиональный грабитель!" - **${user.info.achievements.includes(13) ? 'Выполнено' : 'Отсутствует'}**
14. "Строитель" - **${user.info.achievements.includes(14) ? 'Выполнено' : 'Отсутствует'}**
15. "Профессиональный обменщик валют!" - **${user.info.achievements.includes(15) ? 'Выполнено' : 'Отсутствует'}**
16. "Ну здравствуй, код." - **${user.info.achievements.includes(16) ? 'Выполнено' : 'Отсутствует'}**
17. "Работяга" - **${user.info.achievements.includes(17) ? 'Выполнено' : 'Отсутствует'}**
18. "Бизнесмен!" - **${user.info.achievements.includes(18) ? 'Выполнено' : 'Отсутствует'}**
19. "Levelup! :+1:" - **${user.info.achievements.includes(19) ? 'Выполнено' : 'Отсутствует'}**
20. "Имя указано!" - **${user.info.achievements.includes(20) ? 'Выполнено' : 'Отсутствует'}**
21. "Биография была добавлена." - **${user.info.achievements.includes(21) ? 'Выполнено' : 'Отсутствует'}**
22. "Я выполнил(а) все **22** достижения!" - **${user.info.achievements.includes(22) ? 'Выполнено' : 'Отсутствует'}**
23. "???" - **${user.info.achievements.includes(23) ? 'Выполнено' : 'Отсутствует'}**
24. "???" - **${user.info.achievements.includes(24) ? 'Выполнено' : 'Отсутствует'}**`]
let two = [`1. "Это было так легко?!" - **Написать в любой канал "123"**
2. "Начало положено." - **Набрать второй уровень.**
3. "Я против Ваших правил!" - **Оскорбить пользователя "Я ебал @Юзер", но также Вы можете получить мут за 1.2**
4. "Первые наличные" - **Накопить 1.000 коинов наличкой**
5. "Первые доходы с депозита!" - **Набрать 3.000 коинов на депозите**
6. "Деньги успешно сохранены от воров!" - **Набрать 2.000 коинов на банковском счёте**
7. "Мне нужен чемодан для этого" - **Набрать 2.500 коинов наличкой**
8. "Зарабатываю на обмене валюты." - **Накопить 50 евро обменом**
9. "Теперь я Коллектор!" - **Купить из магазина №1 роль "Collector"**
10. "Главное вовремя остановиться.." - **Открыть больше 100 любых боксов**
11. "Я здесь активный." - **Получить роль Active за 5 уровень**
12. "Хорошая репутация!" - **Иметь в сумме репутацию больше 15**
13. "Профессиональный грабитель!" - **Ограбить любого пользователя более 15 раз**
14. "Строитель" - **Поработать строителем**
15. "Профессиональный обменщик валют!" - **Накопить 100 евро обменом**
16. "Ну здравствуй, код." - **Получить роль "Coder"**
17. "Работяга" - **Поработать более 10 раз**
18. "Бизнесмен!" - **Иметь наличкой более 10.000 коинов**
19. "Levelup! :+1:" - **Набрать 10 уровень**
20. "Имя указано!" - **Указать своё имя в личной информации (-info name)**
21. "Биография была добавлена." - **Написать свою биографию для паспорта (-info biography)**
22. "Я выполнил(а) все **22** достижения!" - **Выполнить все предыдущие достижения**
23. "???" - **${user.info.achievements.includes(23) ? 'Выполнено' : 'Отсутствует'}**
24. "???" - **${user.info.achievements.includes(24) ? 'Выполнено' : 'Отсутствует'}**`]
let page = 1
let embed = new Discord.RichEmbed()
.setAuthor(`Freedom v${require(`../config.json`).version}`)
.addField(`Пользователь выполнил`, `${achcol}/${dos} достижений`, true)
.addField(`Пользователю осталось выполнить`, `${timer(dos-achcol, ['достижения', 'достижений', 'достижений'])}`, true)
.setTitle(`Просмотр достижений ${member.user.tag}`)
.setDescription(one)
.setColor('BLURPLE')
.setFooter('Чтобы посмотреть другую информацию, напишите -profile')
.setTimestamp()
message.channel.send(embed).then(async msg => {
msg.react('◀️').then(async e => { 
let rofl;
await msg.react('▶️').then(t => rofl = t)
let backFilt = (react, user) => react.emoji.name === '◀️' && user.id === message.author.id;
let goFilt = (react, user) => react.emoji.name === '▶️' && user.id === message.author.id;
let back = msg.createReactionCollector(backFilt, {time: 60000})
let go = msg.createReactionCollector(goFilt, {time: 60000})
back.on("collect", r => {
r.remove(message.author.id)
if(page === 1) return;
page--;
embed.setDescription(`${one}`)
embed.setTitle(`Просмотр достижений ${member.user.tag}`)
msg.edit(embed)
})
go.on("collect", r => {
r.remove(message.author.id)
if(page === 2) return;
page++;
embed.setTitle(`Получение достижений`)
embed.setDescription(`${two}`)
msg.edit(embed)
})
setTimeout(() => {
e.remove(), rofl.remove();}, 120000)
})});
}
exports.help = {
    name: ["achievement", "ach", "achievements"],
    d: "Посмотреть все ваши или чужие достижения.",
    u: "ach [Пользователь]"
}