const Discord = require("discord.js");
const settings = require("../settings.json");

module.exports = member => {
  let guild = member.guild;
  //guild.channels.get(settings.logChannel).sendMessage(`Please say goodbye to ${member.user.username} we will miss you!\n  ${member.user} but we won't forget you :wink:`);


  const embed = new Discord.RichEmbed() 
  .setDescription(member+`\n:outbox_tray: **${member.user.username}#${member.user.discriminator}** left ${guild.name}, kbai sucker!\n(${member.user.id})\n${guild.name} is now **${guild.memberCount} strong!**`)
  .setFooter('Made by tom', 'https://images-ext-2.discordapp.net/.eJwNyVEOwiAMANC7cADKoAVcYjxL1zKdUUcA_dB4d32_72Oe7WZmcxmj9hlA9GF167I35Vqt7HfgFw9uHTzRwYeQMeLkKWHykOPqUixKJE6lOF54wSwaCFf5j73W86lv73KcnEfz_QGYsyG7.jUbTuI0GA1IvKDciYfLpf1cGG9c?width=80&height=80')
  .setTimestamp()
  .setColor(0xFF0060)
  //.setThumbnail(`${member.user.avatarURL}`)
  guild.channels.get(settings.logChannel).sendEmbed(embed);
};