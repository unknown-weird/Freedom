enmap = require('enmap')
randomize = require('../functions/randomize.js').randomize
module.exports = async (client) => {
Users = client.enmap.Users
Guilds = client.enmap.Guilds
Mutes = client.enmap.Mutes
console.log(`Я снова работаю и подключен к нашему фридому <3`)
setInterval(() => {
client.guilds.forEach(g => {
    Mutes.forEach((val, key) => {
let u = g.members.get(key)
if(!u && val.info.mute_time <= Date.now()) Mutes.delete(key)
      let role = g.roles.find(r => r.name === 'Muted')
      if(!role) return;
      if(!u) return
      else u.addRole(role)
      if(val.info.mute_time <= Date.now()) u.removeRole(role).catch(() => null), Mutes.delete(key)
    })})
   }, 2000)
setInterval(() => {
if(Guilds.get("guilds", 'info.euro.time') <= 1) {
Guilds.set("guilds", 60, 'info.euro.time')
Guilds.set("guilds", `${randomize(98, 102)}.${randomize(0, 10)}${randomize(0, 10)}`, 'info.euro.course');
Users.forEach(m => {
if(m.info.balances.bank < 1) return
if(m.info.balances.bank > 2000) Users.math(m.id, '-', Math.floor(Math.random() * 10)+10, 'info.balances.bank'), Guilds.math('guilds', '+', Math.floor(Math.random()*10)+10, 'info.balance.bank')
if(m.info.balances.bank > 10000) Users.math(m.id, '-', Math.floor(Math.random() * 20)+20, 'info.balances.bank'), Guilds.math('guilds', '+', Math.floor(Math.random()*20)+20, 'info.balance.bank')
if(m.info.balances.bank > 20000) Users.math(m.id, '-', Math.floor(Math.random() * 30)+20, 'info.balances.bank'), Guilds.math('guilds', '+', Math.floor(Math.random()*30)+20, 'info.balance.bank')
if(m.info.balances.deposit > 500) {
    if(m.info.upgrades === []) return;
    if(!m.info.upgrades.includes('deposit_coin')) Users.math(m.id, '+', Users.get(m.id, 'info.balances.deposit')/1000*1, 'info.balances.deposit')
    if(m.info.upgrades.includes('deposit_coin')) Users.math(m.id, '+', Users.get(m.id, 'info.balances.deposit')/500*1, 'info.balances.deposit')
}
})};
Guilds.math("guilds", '-', '1', 'info.euro.time')
}, 60000)
}