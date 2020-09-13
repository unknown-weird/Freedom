cfg = require('../config.json')
module.exports.succ = function (description, message){
    let embed = new Discord.RichEmbed()
    .setAuthor(`Freedom v${cfg.version}`)
    .setTitle(`Успешно ${cfg.emojis.succ}`)
    .setColor('GREEN')
    if(description) embed.setDescription(`${description}`)
    message.channel.send(embed)
    }