const Discord = require("discord.js");
module.exports.run = async (client, message, args, error, succ, Users, Guilds) => {
Mutes = client.enmap.Mutes
let timeout2 = require('../functions/timeout.js').timeout
let embed = new Discord.RichEmbed()
.setTitle(`Список замученных`)
.setColor('BLURPLE')
.setTimestamp()
.setAuthor(message.guild.name, message.guild.iconURL)
if(Mutes.size < 1) embed.setDescription(`Замученных пользователей нет.`)
Mutes.map(m=>embed.addField(`${Mutes.get(m.id, 'info.tag')} (${Mutes.get(m.id, 'id')}) - **${Mutes.get(m.id, 'info.rule')}**`, `Осталось времени: **${timeout2(`${Mutes.get(m.id, 'info.mute_time')}`, client, message)}**\nМодератор: **${Mutes.get(m.id, 'moderator.tag')}** (**${Mutes.get(m.id, 'moderator.id')}**)`))
message.channel.send(embed)
}
exports.help = {
    name: ['mutes-list', 'mutes'],
    d: 'Показать список замученных.',
    u: 'mutes-list'
}