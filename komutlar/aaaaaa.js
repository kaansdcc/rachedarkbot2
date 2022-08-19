const Discord = require('discord.js');
const db = require("quick.db")
const p = "/"
exports.run = async (client, message, args) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))

      if(args[0] == 'temizle' || args[0] == "clear") {
        db.delete(`srol.${message.guild.id}`)
        db.delete(`srol2.${message.guild.id}`)
        db.delete(`srol3.${message.guild.id}`)
        return message.channel.send(`**[\`TR\`]**\nSeviye-Rol Başarıyla Sıfırlandı!\n`)
      } else {
      var role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
      if(!role) return message.reply("hangi rol verilecek yazmadın!")
      if(!args[1]) return message.reply("hangi seviyede rol verileceğini yazmadın!")
      if(isNaN(args[1])) return message.channel.send(`seviye bir sayı olmalı!`)
      db.push(`srol.${message.guild.id}`, role.id)
      db.set(`srol2.${message.guild.id}.${role.id}`, args[1])
      db.push(`srol3.${message.guild.id}.${role.id}`, args[1])
      message.channel.send(args[1]+ ' level <@&' +role + '> olarak ayarlandı!')
      }
  
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: 'seviye-rol'
};