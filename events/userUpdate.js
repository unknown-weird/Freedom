module.exports = (client, oldUser, newUser) => {
let avatar = new Discord.RichEmbed()
.setTitle('Аватар пользователя обновлён')
.setDescription(`Старый аватар -->
ID: ${newUser.id}
Пользователь: ${newUser.tag}

Новый аватар внизу`)
.setThumbnail(oldUser.displayAvatarURL)
.setImage(newUser.displayAvatarURL)
.setFooter('Обновлён был')
.setTimestamp()
.setColor('BLURPLE');
let tag = new Discord.RichEmbed()
.setTitle('Тег/Никнейм пользователя изменён')
.setDescription(`Пользователь: **${newUser.tag}/${oldUser.tag}**
ID: **${newUser.id}**\n\nСтарый тег: **${oldUser.tag}**\nНовый тег: **${newUser.tag}**`)
.setThumbnail(newUser.displayAvatarURL)
.setTimestamp()
.setFooter('Обновлён был')
.setColor('BLURPLE')
if(oldUser.tag != newUser.tag) client.channels.get('572059182698594306').send(tag)
if(oldUser.displayAvatarURL != newUser.displayAvatarURL) client.channels.get('572059182698594306').send(avatar)
}
