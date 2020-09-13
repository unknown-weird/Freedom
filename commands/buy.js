let Discord = require('discord.js');
let cfg = require('../config.json');
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
   if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
    let money = Users.get(message.author.id, 'info.balances.money')
    let euro = Users.get(message.author.id, 'info.balances.euro')
    let kurseuro = Guilds.get('guilds', 'info.euro.course')
    if(!args[0]) return error('Напиши номер предмета, чтобы приобрести его.', message)
    if(args[0] != 1 && args[0] != 2 && args[0] != 3 && args[0] != 4 && args[0] != 5 && args[0] != 6 && args[0] != 7 && args[0] != 8 && args[0] != 9 && args[0] != 10 && args[0] != 11 && args[0] != 12 && args[0] != 13 && args[0] != 14 && args[0] != 15 && args[0] != 16 && args[0] != 17) return error('Предмет не найден.', message)
    let col = `${args[1]}`
    if(!args[1]) col = '1'
    if(isNaN(col)) return error('Не видно, что это число.', message)
    if(args[0] == '1'){
        if(message.member.roles.has('606899430456557611')) return error('У вас и так есть роль "Collector".', message)
        if(euro < 28) return error('У вас не хватает коинов.', message)
        succ('Вы купили роль "Collector"!', message)
        await message.member.addRole('606899430456557611')
       Users.math(message.author.id, '-', Number(28), 'info.balances.euro')
    } else if(args[0] == '2'){
        if(message.member.roles.has('577528764142190614')) return error('У вас и так есть чёрный цвет.', message)
        if(money < 1500) return error('У вас не хватает коинов.', message)
        succ('Вы купили чёрный цвет.', message)
        await message.member.addRole('577528764142190614')
       Users.math(message.author.id, '-', Number(1500), 'info.balances.money')
    } else if(args[0] == '3'){
        if(message.member.roles.has('577909709244334090')) return error('У вас и так есть королевский-синий цвет.', message)
        if(money < 1800) return error('У вас не хватает коинов.', message)
        succ('Вы купили королевский-синий цвет.', message)
        await message.member.addRole('577909709244334090')
       Users.math(message.author.id, '-', Number(1800), 'info.balances.money')
    } else if(args[0] == '4'){
        if(money < 60) return error('У вас не хватает коинов.', message)
        if(money-60*col < 0) return error('У вас не хватает коинов.', message)
        if(col < 1) return error('Нельзя купить меньше 1 коробки.', message)
        if(col > 20) return error('Нельзя купить больше 20 коробок.', message)
        succ(`Вы купили **${col}** обычных коробок.`, message)
       Users.math(message.author.id, '+', Number(col), 'info.boxes.common_box')
       Users.math(message.author.id, '-', Number(60*col), 'info.balances.money')
    } else if(args[0] == '5'){
        if(money < 300) return error('У вас не хватает коинов.', message)
        if(money-300*col < 0) return error('У вас не хватает коинов.', message)
        if(col < 1) return error('Нельзя купить меньше 1 коробки.', message)
        if(col > 20) return error('Нельзя купить больше 20 коробок.', message)
        succ(`Вы купили **${col}** редких коробок.`, message)
       Users.math(message.author.id, '+', Number(col), 'info.boxes.rare_box')
       Users.math(message.author.id, '-', Number(300*col), 'info.balances.money')
    } else if(args[0] == 6){
        if(money < 750) return error('У вас не хватает коинов.', message)
        if(money-750*col < 0) return error('У вас не хватает коинов.', message)
        if(col < 1) return error('Нельзя купить меньше 1 коробки.', message)
        if(col > 15) return error('Нельзя купить больше 15 коробок.', message)
        succ(`Вы купили **${col}** эпических коробок.`, message)
       Users.math(message.author.id, '+', Number(col), 'info.boxes.epic_box')
       Users.math(message.author.id, '-', Number(750*col), 'info.balances.money')
    }  else if(args[0] == '7'){
        if(money < 1800) return error('У вас не хватает коинов.', message)
        if(money-1800*col < 0) return error('У вас не хватает коинов.', message)
        if(col < 1) return error('Нельзя купить меньше 1 коробки.', message)
        if(col > 10) return error('Нельзя купить больше 10 коробок.', message)
        succ(`Вы купили **${col}** легендарных коробок.`, message)
       Users.math(message.author.id, '+', Number(col), 'info.boxes.legendary_box')
       Users.math(message.author.id, '-', Number(1800*col), 'info.balances.money')
    } else if(args[0] == '8'){
        if(money < 4500) return error('У вас не хватает коинов.', message)
        if(money-4500*col < 0) return error('У вас не хватает коинов.', message)
        if(col < 1) return error('Нельзя купить меньше 1 коробки.', message)
        if(col > 5) return error('Нельзя купить больше 5 коробок.', message)
        succ(`Вы купили **${col}** мифических коробок.`, message)
       Users.math(message.author.id, '+', Number(col), 'info.boxes.mythical_box')
       Users.math(message.author.id, '-', Number(4500*col), 'info.balances.money')
    } else if(args[0] == '9'){
        if(money < 105) return error('У вас не хватает коинов.', message)
        if(money-105*col < 0) return error('У вас не хватает коинов.', message)
        if(col < 1) return error('Нельзя купить меньше 1 рулетки.', message)
        if(col > 5) return error('Нельзя купить больше 5 рулеток.', message)
        succ(`Вы купили **${col}** рулеток.`, message)
       Users.math(message.author.id, '+', Number(col), 'info.boxes.roulettes')
       Users.math(message.author.id, '-', Number(105*col), 'info.balances.money')
    } else if(args[0] == '10'){
        if(money < 600) return error('У вас не хватает коинов.', message)
        succ(`Вы купили **1 мини-бустер XP**, Вам добавлено 180 XP`, message)
       Users.math(message.author.id, '+', Number(200), 'info.levels.xp')
       Users.math(message.author.id, '+', Number(200), 'info.levels.xpall')
       Users.math(message.author.id, '-', Number(600), 'info.balances.money')
    } else if(args[0] == '11'){
        if(money < 1400) return error('У вас не хватает коинов.', message)
        succ(`Вы купили **1 средний бустер XP**, Вам добавлено 400 XP`, message)
       Users.math(message.author.id, '+', Number(400), 'info.levels.xp')
       Users.math(message.author.id, '+', Number(400), 'info.levels.xpall')
       Users.math(message.author.id, '-', Number(1400), 'info.balances.money')
    } else if(args[0] == '12'){
        if(money < 3000) return error('У вас не хватает коинов.', message)
        succ(`Вы купили **1 большой бустер XP**, Вам добавлено 850 XP`, message)
       Users.math(message.author.id, '+', Number(850), 'info.levels.xp')
       Users.math(message.author.id, '+', Number(850), 'info.levels.xpall')
       Users.math(message.author.id, '-', Number(3000), 'info.balances.money')
    } else if(args[0] == '13'){
        if(Users.get(message.author.id).info.upgrades.includes('lucky')) return error('Вы уже покупали улучшение "Удача".', message)
        if(euro < 50) return error('У вас не хватает евро.', message)
        succ(`Вы успешно купили улучшение "Удача", теперь у Вас шансы на победу в командах **rob, crime** выше!`, message)
        Users.math(message.author.id, '-', Number(50), 'info.balances.euro')
        Users.push(message.author.id, 'lucky', 'info.upgrades')
    } else if(args[0] == '14'){
        if(Users.get(message.author.id).info.upgrades.includes('reputation')) return error('Вы уже покупали улучшение "Репутация++".', message)
        if(euro < 150) return error('У вас не хватает евро.', message)
        succ(`Вы успешно купили улучшение "Репутация++", теперь у Вас **x2 выдавание/убирание** репутации!`, message)
        Users.math(message.author.id, '-', Number(150), 'info.balances.euro')
        Users.push(message.author.id, 'reputation', 'info.upgrades')
    } else if(args[0] == '15'){
        if(Users.get(message.author.id).info.upgrades.includes('deposit')) return error('Вы уже покупали улучшение "Депозитный разрыв".', message)
        if(euro < 200) return error('У вас не хватает евро.', message)
        succ(`Вы успешно купили улучшение "Депозитный разрыв", теперь у Вас лимит депозитного счёта **увеличен в 2 раза**!`, message)
        Users.math(message.author.id, '-', Number(200), 'info.balances.euro')
        Users.push(message.author.id, 'deposit', 'info.upgrades')
    } else if(args[0] == '16'){
        if(Users.get(message.author.id).info.upgrades.includes('deposit_coin')) return error('Вы уже покупали улучшение "Депозитная копеечка".', message)
        if(euro < 230) return error('У вас не хватает евро.', message)
        succ(`Вы успешно купили улучшение "Депозитная копеечка", теперь у Вас процент депозита **0.05%**!`, message)
        Users.math(message.author.id, '-', Number(230), 'info.balances.euro')
        Users.push(message.author.id, 'deposit_coin', 'info.upgrades')
    } else if(args[0] == '17'){
        if(Users.get(message.author.id).info.upgrades.includes('boxes')) return error('Вы уже покупали улучшение "Подкрутка".', message)
        if(euro < 250) return error('У вас не хватает евро.', message)
        succ(`Вы успешно купили улучшение "Подкрутка", теперь у Вас повышенные **награды в любых** типах коробок!`, message)
        Users.math(message.author.id, '-', Number(250), 'info.balances.euro')
        Users.push(message.author.id, 'boxes', 'info.upgrades')
    } 
}
exports.help = {
    name: ["buy", "b"],
    d: "Купить предмет из магазина.",
    u: "buy <Номер предмета> [Количество]"
}