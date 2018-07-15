const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

let d5loa = [];

console.log("BOT Minx");

client.on("guildMemberAdd", member => {

       if(member.guild.id === 'ID of Server') {
           d5loa.push(member.user.id)
      }

    if(d5loa.includes(member.user.id)) return;


    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`** ‏‏حياك الله تعال سمعنا صوتك :sparkles: لربما صدفه تُخلْق ايام جميله:two_hearts:**
                              ** [ https://discord.gg/SrXuWdj ] **`]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})




  
client.on('guildMemberAdd', member => {

     if (member.guild.id === "464233358889713664") {

       
       client.channels.get("464233617141399562").send(`**Welcome To Precious Life . ** `)

     }
});




client.login("NDY3MzU1ODE4Mzk3MDA3ODcy.Dipbjw.uLJqQBpK7pmS3H3ADadByhnJNZY");