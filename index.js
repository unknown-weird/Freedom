const Discord = require("discord.js");
const fs = require("fs");
let enmap = require('enmap')
let Users = new enmap({name: "Users", dataDir: './DataBase/Users'})
let Guilds = new enmap({name: "Guilds", dataDir: './DataBase/Guilds'})
let Marry = new enmap({name: 'Marry', dataDir: './DataBase/Marry'})
let Mutes = new enmap({name: "Mutes", dataDir: './DataBase/Mutes'})
let Bots = new enmap({name: "Bots", dataDir: './DataBase/Bots'})
let cfg = require(`./config.json`)
const client = new Discord.Client({messageSweepInterval: 60,messageCacheLifetime: 120,messageCacheMaxSize: 350, disableEveryone: true})
let prefix = client.prefix || '-'
client.enmap = {
enmap: require('enmap'), Users: Users, Guilds: Guilds, Marry: Marry, Mutes: Mutes, Bots: Bots};
function randomize(min, max) {
return Math.floor(Math.random() * (max-min)+min)
};
fs.readdir("./commands", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === 'js');
    if(jsfile.length <= 0) console.log("Нет команд!");
    console.log(`Загружено ${jsfile.length} команд`);
    jsfile.forEach((f, i) => {
      let props = require(`./commands/${f}`);
      props.help.name.forEach(pr => {
    client.commands.set(pr, props);
        })})});
client.commands = new Discord.Collection();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
function randomStatus() {
    let status = [`Freedom Inc. one love <3`, `Всего: ${client.guilds.get('548899664544399383').memberCount} человек!`]
    let rstatus = Math.floor(Math.random() * status.length);
   client.user.setActivity(status[rstatus], {type: "WATCHING"})}; 
setInterval(randomStatus, 60000);
client.on('message', async message => {
    if(message.author.bot && message.author.id != '573119175829225482') return;  
    if(message.channel.type === 'dm') return;
      if(message.content == prefix) return;
      if(!message.content.startsWith(prefix)) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let cmd = args.shift().toLowerCase();
  if(Users.get(message.author.id) && Users.get(message.author.id).info && Users.get(message.author.id).info.block) return message.channel.send(`Вы забанены в боте.`)
      if(cmd.length === 0) return;
      error = require('./functions/error.js').error;
      succ = require('./functions/succ.js').succ;
      timer = require('./functions/timer.js').timer;
      let commandfile = client.commands.get(cmd);
      if(commandfile) commandfile.run(client, message, args, error, succ, Users, Guilds, timer, randomize);
      if(message.content.indexOf(prefix) !== 0) return;
});
client.login(process.env.BOT_TOKEN).then(() => delete process.env.PROJECT_INVITE_TOKEN).then(() => delete process.env.BOT_TOKEN)