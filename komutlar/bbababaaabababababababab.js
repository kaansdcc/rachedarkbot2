const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, msg, args) => {
if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(new Discord.MessageEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))
  if(args[0] == "sıfırla" || args[0] == "reset") {
    db.delete(`seviyexp${msg.guild.id}`)
    return msg.channel.send(`Seviye-XP sıfırlandı! Default: \`5\``);
  } else {
let sayı = args[0]
if(!sayı) return msg.channel.send("Lütfen Bir Sayı Giriniz!")
if(isNaN(sayı)) return msg.reply("lütfen sadece sayı yaz!")
if(sayı > 20) return msg.channel.send("Max: `20`")
db.set(`seviyexp${msg.guild.id}`, Math.floor(args[0]))
return msg.channel.send("Başarıyla Seviye Puanını \`" + args[0] + "\` Olarak Ayarladınız!")
  }
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: 'seviye-xp'
};