let Discord = require('discord.js');
let cfg = require('../config.json');
exports.run = async (client, message, args, error, succ, Users, Guilds) => {
if(!message.member.voiceChannel) return message.channel.send(`Первым делом зайдите в голосовой канал.`)
let embed = new Discord.RichEmbed()
.setAuthor(`Freedom v${require(`../config.json`).version}`)
.setTitle(`Демонстрация экрана`)
.setDescription(`Чтобы перейти к окну включения демонстрации экрана - перейдите по [этой](https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id}) ссылке.`)
.setTimestamp()
.setColor(`BLURPLE`)
message.channel.send(embed)
}
exports.help = {
    name: ["demonstration", "demo"],
    d: "Включить демонстарцию экрана в текущем голосовом канале.",
    u: "demo"
}