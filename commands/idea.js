Discord = require('discord.js')
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
  let user = Users.get(message.author.id)
  if(!user) return error(`Вы не зарегистрированы в базе данных. Для регистрации аккаунта нужно написать **-account**`, message)
  let timeout = 600000;
  let timeout2 = require('../functions/timeout.js').timeout
  let cww = Users.get(message.author.id, 'info.dailys.idea')
  if(!cww || cww <= Date.now()){
      if(!args.join("")) return error('Напишите Вашу идею.', message)
      if(args.join(" ").length < 10) return error(`Сделайте Ваше описание идеи длиннее.`, message)
      if(args.join(" ").length > 400) return error(`Укоротите свою идею до 400 символов. Ваша длина идеи: ${args.join(" ").length}.`, message)
      message.delete();
    Users.set(message.author.id, Date.now()+timeout, 'info.dailys.idea')
      Guilds.inc(`guilds`, 'info.cols.ideas')
      message.member.send(`Спасибо за подачу идеи, Вы делаете огромный вклад в бота своими задумками! Номер Вашей идеи **${Guilds.get(`guilds`, 'info.cols.ideas')}**`)
      let embed = new Discord.RichEmbed()
      .setTitle('Новая идея!')
      .setDescription(`Описание: ${args.join(" ")}`)
      .addField(`Пользователь`, `ID: **${message.author.id}**\nТег: **${message.author.tag}**`)
      .addField(`Идея`, `Номер идеи: **${Guilds.get(`guilds`, 'info.cols.ideas')}**`)
      .setTimestamp()
      .setColor('GREEN')
      client.channels.get('675360807848247297').send(embed).then(async msg => {
        await msg.react('670242818920284180'), await msg.react('670242853208850433')
      })
  } else return error(`Вы уже использовали эту команду, подождите **${timeout2(Users.get(message.author.id, 'info.dailys.idea'), client, message)}**.`, message)
}
exports.help = {
    name: ['idea'],
    d: 'Дать идею для улучшений бота или сервера.',
    u: 'idea <Описание идеи>'
}