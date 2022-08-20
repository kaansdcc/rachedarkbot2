const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, msg, args) => {
  if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))
  
  

  if(args[0] == "sıfırla" || args[0] == "reset") {
    db.set(`seviyesınır${msg.guild.id}`, 250)
    return msg.channel.send(`**[\`TR\`]**\nSeviye-Sınır Başarıyla Sıfırlandı! Varsayılan: \`500\``)
 } else {

  let sayı = args[0]
  if(!sayı) return msg.reply("seviye sınırı girmedin!")
  if(isNaN(sayı)) return msg.channel.send(`Seviye bir sayı olmalı!`)
  if(sayı < 100) return msg.channel.send(`En Az 100'e Kadar Bir Sayı Girebilirsiniz!`)
  if(sayı > 500) return msg.channel.send(`En Fazla 500'e Kadar Bir Sayı Girebilirsiniz!`)
  db.set(`seviyesınır${msg.guild.id}`, args[0])
  return msg.channel.send("Başarıyla Seviye Sınırını \`" + args[0] + "\` Olarak Ayarladınız!")

 }

};

exports.conf = {
  aliases: []
};

exports.help = {
  name: 'seviye-sınır'
};
