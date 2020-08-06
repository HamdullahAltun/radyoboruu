const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;
let botid = ('728699504341155880') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - SanTeRRa`)
        .setDescription(`${prefix}radyo ➠ Radyoyu Açmanızı Sağlar.
${prefix}kapat ➠ Radyoyu .` )  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setFooter(`${message.author.username} SanTeRRa`,message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0,
};

exports.help = {
  name: 'müzik',
  description: '',
  usage: ''
};
