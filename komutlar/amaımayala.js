const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))
  


   if(args[0] == "sıfırla") {
    db.delete(`seviyekanal${message.guild.id}`)
    return message.channel.send(`Seviye-Log sıfırlandı!`);
  } else {
    
    
   if (args[0] === "ayarla") {
      let akanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
      if(!akanal) return message.reply('Bir Kanal Yazmalisin!')
db.set(`seviyekanal${message.guild.id}`, akanal.id);
      message.channel.send(`Seviye Log Kanalı Ayarlandı! Ayarlanan Kanal: <#${akanal.id}>`)           
    } else {
       return message.reply('`seviye-log ayarla #kanal` veya `seviye-log sıfırla` Yazmalısın!')
    }
  }
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: 'seviye-log'
};
