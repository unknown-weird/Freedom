
let Discord = require('discord.js')
let enmap = require('enmap')
let moment = require('moment')
let cfg = require('../config.json')
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
  if(message.channel.id == '548899664544399389') return error('Данная команда работает только в <#556453541179293696>.', message)
    if(!Users.get(message.author.id)) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
Marry = client.enmap.Marry
let user = Users.get(message.author.id)
let birthday;
    if(!args[0]){
      if(Users.has(message.author.id, 'info.me.birthday') === false) birthday = '?'
      else birthday = moment(user.info.me&&user.info.me.birthday).format('DD.MM.YYYY')
    if(!Users.get(message.author.id, 'info.marries')){
        let embed = new Discord.RichEmbed()
        .setAuthor(`Freedom v${require(`../config.json`).version}`)
        .setTitle('Просмотр вашего паспорта')
        .setDescription(`Имя: **${user.info.me&&user.info.me.name ? user.info.me.name : '?'}**
Пол: **${user.info.me&&user.info.me.gender ? user.info.me.gender.replace(/female/g, 'Женский').replace(/male/g, 'Мужской') : '?'}**
Возраст: **${user.info.me&&user.info.me.birthday ? `${timer(moment().diff(moment(user.info.me.birthday), 'years'), ['год', 'года', 'лет'])}` : '?'}**
Дата рождения: **${birthday}**`)
.addField(`Биография`, `${user.info.me&&user.info.me.biography || "Отсутствует"}`, true)
.addField(`Описание`, `${user.info.me&&user.info.me.description || "Отсутствует"}`, true)
        .setColor('BLURPLE')
        .setFooter('Отредактировать информацию: -info')
        .setTimestamp()
        message.channel.send(embed)
    } else if(Users.get(message.author.id).info.marries._marry) {
      userr = await client.fetchUser(user.info.marries._marry)
         let embed = new Discord.RichEmbed()
        .setAuthor(`Freedom v${require(`../config.json`).version}`)
        .setTitle('Просмотр вашего паспорта и семьи')
        .setDescription(`\`\`\`\nСЕМЬЯ\`\`\`
Вы в браке с **${userr.username}#${userr.discriminator}**
Название семьи: **${Marry.find(m => m.members.includes(message.author.id)).info.name}**
Описание семьи: **${Marry.find(m => m.members.includes(message.author.id)).info.description}**
Ваш Семейный счёт составляет **${Marry.find(m => m.members.includes(message.author.id)).money.toFixed(2)}** ${cfg.fc}
\`\`\`\nЛИЧНАЯ ИНФОРМАЦИЯ\`\`\`
Имя: **${user.info.me.name ? user.info.me.name : '?'}**
Пол: **${user.info.me.gender ? user.info.me.gender.replace(/female/g, 'Женский').replace(/male/g, 'Мужской') : '?'}**
Возраст: **${user.info.me.birthday ? `${timer(moment().diff(moment(user.info.me.birthday), 'years'), ['год', 'года', 'лет'])}` : '?'}**
Дата рождения: **${birthday}**`)
.addField(`Биография`, `${user.info.me.biography || "Отсутствует"}`, true)
.addField(`Описание`, `${user.info.me.description || "Отсутствует"}`, true)
        .setColor('BLURPLE')
        .setFooter('Отредактировать информацию: -info')
        .setTimestamp()
        message.channel.send(embed).then(msg => {
            msg.react('➖').then(async e => { 
            let ll;
            await msg.react('➕').then(l => ll = l)
            let backFilt = (react, user) => react.emoji.name === '➖' && user.id === message.author.id;
            let goFilt = (react, user) => react.emoji.name === '➕' && user.id === message.author.id;
            let back = msg.createReactionCollector(backFilt, {time: 30000})
            let go = msg.createReactionCollector(goFilt, {time: 30000})
            back.on('collect', async e => {
                e.remove(message.author.id);
                e.remove();
                back.stop();
                let msg = await message.channel.send(`Введите сумму (цифрами), которую необходимо вывести. Отменить - **cancel**`)
    let channel = msg.channel;
    let collector = channel.createMessageCollector(m => m.author.id == message.author.id, {time: 120000});
    collector.on('collect', message => {
        let marry = Marry.find(m => m.members.includes(message.author.id)).money
        let mc = message.content.replace(/' '/g, '')
        if(mc === 'cancel') return succ('Вы отменили данную операцию.', message), collector.stop()
        if(isNaN(mc)) return error(`Введите сумму **цифрами**.`, message), collector.stop()
        if(mc < 0.01) return error('Нельзя вывести меньше 0.01 коина.', message), collector.stop()
        if(marry+0.01 < mc) return error(`В Вашем семейном счёте нет данной суммы.`, message), collector.stop()
        succ(`Вы вывели **${Number(mc).toFixed(2)}** ${cfg.fc} из Вашего семейного счёта.`, message)
        Marry.math(`${Marry.find(m => m.members.includes(message.author.id)).id}`, '-', Number(mc), 'money')
        Users.math(message.author.id, '+', Number(mc), 'info.balances.money')
        msg.delete()
        collector.stop();
        message.channel.send('Операция завершена.')
        client.users.get(user.info.marries._marry).send(`У Вас сняли деньги с семейного счёта! **(Сумма: ${Number(mc).toFixed(2)} ${cfg.fc})**`, message)
    });
            });
            go.on('collect', async e => {
                e.remove(message.author.id);
                e.remove();
                go.stop();
                let msg = await message.channel.send(`Введите сумму (цифрами), которую необходимо ввести. Отменить - **cancel**`)
    let channel = msg.channel;
    let collector = channel.createMessageCollector(m => m.author.id == message.author.id, {time: 120000});
    collector.on('collect', message => {
        let kk = user.info.balances.money
        let mc = message.content.replace(/' '/g, '')
        if(mc === 'cancel') return succ('Вы отменили данную операцию.', message), collector.stop()
        if(isNaN(mc)) return error(`Введите сумму **цифрами**.`, message), collector.stop()
        if(kk+0.5 < mc) return error(`На Вашем балансе нет данной суммы.`, message), collector.stop()
        if(mc < 0.01) return error('Нельзя положить меньше 0.01 коина.', message)
       succ(`Вы положили **${Number(mc).toFixed(2)}** ${cfg.fc} в Ваш семейный счёт.`, message)
        Marry.math(`${Marry.find(m => m.members.includes(message.author.id)).id}`, '+', Number(mc), 'money')
        Users.math(message.author.id, '-', Number(mc), 'info.balances.money')
        msg.delete()
        collector.stop();
        message.channel.send('Операция завершена.')
        client.users.get(user.info.marries._marry).send(`В Ваш семейный счёт была добавлена сумма в **${Number(mc).toFixed(2)} ${cfg.fc}**!`)
    });
});
setTimeout(() => {ll.remove(), e.remove()}, 30000)
            });
        });
         }
        } else if(args[0].toLowerCase() === 'settings' || args[0].toLowerCase() === 's') {
    if(!user.info.marries) return error('У вас нет второй половинки..', message)
    if(!args.slice(1).join("")){
    let settings = new Discord.RichEmbed()
    .setAuthor(`Freedom v${require(`../config.json`).version}`)
    .setTitle('Личные настройки и настройки семьи.')
    .addField(`Развестись`, `**-pass settings leave** (Необходимо согласие семьи)`, true)
    .addField(`Сменить название семьи`, `**-pass settings name <Название>**`, true)
    .addField(`Сменить описание семьи`, `**-pass settings desc <Описание>**`, true)
    .addField(`Редактировать личную информацию`, `**-info <Тип> <Аргумент>**`, true)
    .addField(`Положить/взять деньги с семейного счёта`, `**Нажать под сообщением команды -pass реакции ('+' - Положить, '-' - Забрать)**`, true)
    .setColor('BLUE')
    .setTimestamp()
message.channel.send(settings)
    } else if(args[1].toLowerCase() === 'leave'){
      let two = user.info.marries._marry
      let one = message.author.id
        let msg = await message.channel.send(`<@${one}>, Вы уверены, что хотите бросить <@${two}>? (Да/Нет)`)
        let channel = msg.channel;
        let collector = channel.createMessageCollector(m => m.author.id == message.author.id, {time: 60000});
        collector.on('collect', async message => {
        if(message.content.toLowerCase().startsWith('да')) {
            collector.stop()
            let msg = await message.channel.send(`<@${two}>, Вы согласны на развод с <@${one}>? (Да/Нет)`)
            let channel = msg.channel;
            let cll2 = channel.createMessageCollector(m => m.author.id == user.info.marries._marry, {time: 60000});
            cll2.on('collect', message => {
                if(message.content.toLowerCase().startsWith('да')){
                    message.reply(`Вы подтвердили Ваш развод.`).then(msg => msg.delete(5000))
                    let embed = new Discord.RichEmbed()
                    .setTitle('Развод был успешен.')
                    .setDescription(`<@${one}>, Вы развелись с <@${two}>.`)
                    .setColor('RED')
                    .setFooter('Теперь Вы можете снова пожениться.')
                    .setTimestamp()
                    message.channel.send(embed)
                    Users.delete(two, 'info.marries')
                    Users.delete(one, 'info.marries') 
                    Marry.delete(`${Marry.find(m => m.members.includes(message.author.id)).id}`)
                          cll2.stop()
                } else if(message.content.toLowerCase().startsWith('нет')){
                    message.reply(`Вы отменили развод.`);
                    cll2.stop()
                }
            })
        } else if(message.content.toLowerCase().startsWith('нет')) {
            succ(`Вы отменили развод.`, message)
            collector.stop();
    }})
} else if(args[1].toLowerCase() == 'name'){
    if(!args[2]) return error(`Укажите новое название семьи.`, message)
    if(args.slice(2).join(" ").length < 1) return error(`Название семьи слишком короткое.`, message)
    if(args.slice(2).join(" ").length > 20) return error(`Название семьи слишком длинное.`, message)
    Marry.set(`${Marry.find(m => m.members.includes(message.author.id)).id}`, args.slice(2).join(" "), 'info.name')
    succ(`Вы успешно сменили название семьи на **${args.slice(2).join(" ")}**`, message)
} else if(args[1].toLowerCase() === 'desc' || args[1].toLowerCase() === 'description'){
    if(!args[2]) return error(`Укажите новое описание семьи.`, message)
    if(args.slice(2).join(" ").length < 5) return error(`Описание семьи слишком короткое.`, message)
    if(args.slice(2).join(" ").length > 100) return error(`Описание семьи слишком длинное.`, message)
    Marry.set(`${Marry.find(m => m.members.includes(message.author.id)).id}`, args.slice(2).join(" "), 'info.description')
    succ(`Вы успешно сменили название семьи на **${args.slice(2).join(" ")}**`, message)
}
        }
    }
exports.help = {
    name: ["pass", "passport"],
    d: "Посмотреть паспорт и настройки.",
    u: "passport [Settings] [Аргумент]"
}