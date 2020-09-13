let Discord = require("discord.js")
cfg = require('../config.json')
exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle(`Магазин`)
    .setDescription(`
1️⃣ - Магазин №1 [Цвета и сувениры]
2️⃣ - Магазин №2 [Коробки/Рулетки] 
3️⃣ - Магазин №3 [XP]
4️⃣ - Магазин №4 [Улучшения]
Нажмите на нужную Вам реакцию для просмотра товаров текущего магазина.`)
    .setFooter('Чтобы купить вещь напишите -buy <Номер> [Количество]')
    .setTimestamp()
    .setColor('BLUE')
    message.channel.send(embed).then(async msg =>{
       await msg.react('1️⃣'), await msg.react('2️⃣'), await msg.react('3️⃣'), await msg.react('4️⃣') 
       let aFilt = (react, user) => react.emoji.name === '1️⃣' && user.id === message.author.id;
       let bFilt = (react, user) => react.emoji.name === '2️⃣' && user.id === message.author.id;
       let cFilt = (react, user) => react.emoji.name === '3️⃣' && user.id === message.author.id;
       let dFilt = (react, user) => react.emoji.name === '4️⃣' && user.id === message.author.id;
       let aback = msg.createReactionCollector(aFilt, {time: 120000})
       let bback = msg.createReactionCollector(bFilt, {time: 120000})
       let cback = msg.createReactionCollector(cFilt, {time: 120000})
       let dback = msg.createReactionCollector(dFilt, {time: 120000})

       aback.on('collect', async e => {
       msg.delete()
       let embed = new Discord.RichEmbed()
       .setTitle('Магазин №1 [Цвета и сувениры]')
       .addField(`1. Сувенир Collector / 28 :euro:`, 'Эксклюзивный сувенир, который больше никак не получить.')
       .addField(`2. Цвет Black / 1.500 ${cfg.fc}`, 'Выдаёт вам чёрный цвет ника.')
       .addField(`3. Цвет KingBlue / 1.800 ${cfg.fc}`, 'Выдаёт вам королевский синий цвет ника.')
       .setFooter('Чтобы купить вещь напишите -buy <Номер> [Количество]')
       .setTimestamp()
       .setColor('BLUE')
       message.channel.send(embed)
       })
       bback.on('collect', async e => {
       msg.delete()
       let embed = new Discord.RichEmbed()
       .setTitle('Магазин №2 [Коробки/Рулетки]')
       .addField(`4. Обычная коробка / 60 ${cfg.fc}`, 'Вы покупаете коробку редкостью \`обычная\`, которую можно открыть командой **-box C**.')
       .addField(`5. Редкая коробка / 300 ${cfg.fc}`, 'Вы покупаете коробку редкостью \`редкая\`, которую можно открыть командой **-box R**.')
       .addField(`6. Эпическая коробка / 670 ${cfg.fc}`, 'Вы покупаете коробку редкостью \`эпическая\`, которую можно открыть командой **-box E**.')
       .addField(`7. Легендарная коробка / 1850 ${cfg.fc}`, 'Вы покупаете коробку редкостью \`легендарная\`, которую можно открыть командой **-box L**.')
       .addField(`8. Мифическая коробка / 4450 ${cfg.fc}`, `Вы покупаете коробку редкостью \`мифическая\`, которую можно открыть командой **-box M**.`)
       .addField(`9. Обыкновенная рулетка / 105 ${cfg.fc}`, `Вы приобретаете рулетку, которую можно открыть командой **-roulette** раз в 5 минут.`)
       .setFooter('Чтобы купить вещь напишите -buy <Номер> [Количество]')
       .setTimestamp()
       .setColor('BLUE')
       message.channel.send(embed)
       })
       cback.on('collect', async e => {
       msg.delete()
       let embed = new Discord.RichEmbed()
       .setTitle('Магазин №3 [XP]')
       .addField(`10. Мини-Бустер XP / 600 ${cfg.fc}`, 'Добавляет вам 180 xp к текущему уровню.')
       .addField(`11. Средний Бустер XP / 1400 ${cfg.fc}`, 'Добавляет вам 400 xp к текущему уровню.')
       .addField(`12. Большой Бустер XP / 3000 ${cfg.fc}`, 'Добавляет вам 850 xp к текущему уровню.')
       .setFooter('Чтобы купить вещь напишите -buy <Номер> [Количество]')
       .setTimestamp()
       .setColor('BLUE')
       message.channel.send(embed)
       })
       dback.on('collect', async e => {
       msg.delete()
       let embed = new Discord.RichEmbed()
       .setTitle('Магазин №4 [Улучшения]')
       .addField('13. Удача / 50 :euro:', 'Вы приобретаете для себя улучшение "Удача", которая увеличивает шансы **"победы" в командах rob, crime**.')
     //  .addField('13. Женская любовь / 150 :euro:', 'Данное улучшение даёт право иметь детей. [Недоступно]')
     //  .addField('13. Любовное расширение / 200 :euro:', 'Данное улучшение позволяет использовать различные **РП-Команды** для своей второй половинки.')
       .addField('14. Репутация++ / 150 :euro:', 'Данное улучшение позволяет Вам давать/убирать в **2 раза больше** репутации!')
       .addField('15. Депозитный разрыв / 200 :euro:', 'Данное улучшение расширяет Ваш **лимит на депозитном счёте в 2 раза!**')
       .addField('16. Депозитная копеечка / 230 :euro:', 'Данное улучшение увеличивает процент депозита с 0.01% до **0.05%!**')
       .addField('17. Подкрутка / 250 :euro:', 'Данное улучшение увеличивает **награду XP и коинов** во всех типах коробок.')
       .setFooter('Чтобы купить вещь напишите -buy <Номер> [Количество]')
       .setTimestamp()
       .setColor('BLUE')
       message.channel.send(embed)
       })
    })
}
exports.help = {
    name: ["shop"],
    d: "Магазин.",
    u: "shop"
}