const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-";
var adminprefix = '-'
const developers = ["433324096156336150"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`Changing to  ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'stw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`Changing to   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'set')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`Changing to   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/One");
      message.channel.send(`Changing to`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
 
 
 
 
 
client.login(process.env.BOT_TOKEN);// áÇ ÊÛíÑ ÝíåÇ ÔíÁ
