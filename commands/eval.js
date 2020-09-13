const Discord = require("discord.js")
const client = new Discord.Client({disableEveryone: true});
let loxi = ['441954631539490857']
module.exports.run = async (client, message, args, error, succ, Users, Guilds, timer, randomize) => {
timeout = require('../functions/timeout.js').timeout
Marry = client.enmap.Marry;
Mutes = client.enmap.Mutes;
Bots = client.enmap.Bots;
  if(!loxi.includes(message.author.id)) return;
 try {
    let evaled = eval(args.join(' ')); 
   if (evaled instanceof Promise || (Boolean(evaled) && typeof evaled.then === 'function' && typeof evaled.catch === 'function')) evaled = await evaled
let eevaled = typeof evaled; 
 evaled = require('util').inspect(evaled, { depth: 0, maxArrayLength: null });
const tyype = eevaled[0].toUpperCase() + eevaled.slice(1)
message.channel.send(`
Successfully ✅
Type: ${tyype}
Done for: ${new Date().getTime() - message.createdTimestamp + 'ms'}
\n${evaled}`, {code: 'js', split: '\n'}).then(() => message.react("✅"))
} catch(err) {
message.channel.send(`
Error ❎
\n${err}`, {code: "js", split: "\n"}).then(() => message.react("❎"))}
}
module.exports.help = {
    name: ["eval", "ebal", "poebal", "e"],
    d: "Выполняет код.",
    u: "eval"
}