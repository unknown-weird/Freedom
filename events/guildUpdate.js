module.exports = async (client, oldGuild, newGuild, guild) => {
Discord = require('discord.js')
const name = new Discord.RichEmbed()
.setTitle('Название сервера обновлено')
.setDescription(`Сервер: **${newGuild.name}**
Старое название: **${oldGuild.name}**
Новое название: **${newGuild.name}**`)
.setFooter('Обновлён был')
.setColor('BLURPLE')
.setTimestamp()
.setThumbnail(newGuild.iconURL)
const icon = new Discord.RichEmbed()
.setTitle('Аватар сервера обновлен')
.setDescription(`Сервер: **${newGuild.name}**
Старая аватарка:
Новая аватарка внизу \/`)
.setFooter('Обновлён был')
.setColor('BLURPLE')
.setTimestamp()
.setThumbnail(oldGuild.iconURL)
.setImage(newGuild.iconURL)
const region = new Discord.RichEmbed()
.setTitle('Регион сервера обновлен')
.setDescription(`Сервер: **${newGuild.name}**
Старый регион: **${oldGuild.region}**
Новый регион: **${newGuild.region}**`)
.setFooter('Обновлён был')
.setColor('BLURPLE')
.setTimestamp()
.setThumbnail(newGuild.iconURL)
if(newGuild.name != oldGuild.name) client.channels.get('572059182698594306').send(name)
if(newGuild.icon != oldGuild.icon) client.channels.get('572059182698594306').send(icon)
if(newGuild.region != oldGuild.region) client.channels.get('572059182698594306').send(region)
}