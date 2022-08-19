const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))
  
message.channel.send(new Discord.MessageEmbed()
.setColor("BLUE")
.setThumbnail(client.user.avatarURL()) 
.setDescription(`Seviye-Sistemi Bütün Fonksiyonları Sıfırlandı!`)
.setFooter(`${client.user.username} Seviye Sistemi!`))
db.delete(`seviyesınır${message.guild.id}`)
db.delete(`seviyexp${message.guild.id}`)
db.delete(`seviyekanal${message.guild.id}`)

};

exports.conf = {
  aliases: []
};

exports.help = {
  name: 'seviye-sıfırla'
};