const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
let kanal = await db.fetch(`seviyekanal${message.guild.id}`)
let xp = await db.fetch(`seviyexp${message.guild.id}`)
let sınır = await db.fetch(`seviyesınır${message.guild.id}`)

let kanal1 = [];
  if(kanal) kanal1 = `:white_check_mark: **Açık!**`
  if(!kanal) kanal1 = `:x: **Kapalı!**`

  let xp1 = [];
  if(xp) xp1 = `:white_check_mark: \`${xp}\``
  if(!xp) xp1 = `:x: **Ayarlanmamış! Default: \`250\`**`

let sınır1 = [];
  if(sınır) sınır1 = `:white_check_mark: \`${sınır}\``
  if(!sınır) sınır1 = `:x: **Ayarlanmamış! Default: \`5\`**`


message.channel.send(new Discord.MessageEmbed()
.setColor("ff0000")
.setTitle(`${message.guild.name} Sunucusuna Ait Seviye-Sistemi Ayarları!`)   
.addField(`**Seviye-Log**`, `${kanal1}`)
.addField(`**Mesaj Başı Verilecek Xp**`, `${xp1}`)       
.addField(`**Kaç Puan Seviye Atlama**`, `${sınır1}`))

};

exports.conf = {
  aliases: []
};

exports.help = {
  name: 'seviye-ayarlar'
};