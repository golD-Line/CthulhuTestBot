const Discord = require("discord.js");
const settings = require("../settings.json");

module.exports = member => {
  let guild = member.guild;
  //guild.channels.get(settings.logChannel).sendMessage(`Please welcome ${member.user} to the server!`);

  const embed = new Discord.RichEmbed()
  .setDescription(member+`\n:inbox_tray: **${member.user.username}#${member.user.discriminator}** joined ${guild.name}, hai there! :eyes:\n(${member.user.id}) \n${guild.name} is now **${guild.memberCount} strong!**`)
  .setFooter('Made by tom', 'https://images-ext-2.discordapp.net/.eJwNyVEOwiAMANC7cADKoAVcYjxL1zKdUUcA_dB4d32_72Oe7WZmcxmj9hlA9GF167I35Vqt7HfgFw9uHTzRwYeQMeLkKWHykOPqUixKJE6lOF54wSwaCFf5j73W86lv73KcnEfz_QGYsyG7.jUbTuI0GA1IvKDciYfLpf1cGG9c?width=80&height=80')
  .setTimestamp()
  .setColor(0x11F011)
 //.setImage(`${member.user.avitarURL}`)
  guild.channels.get(settings.logChannel).sendEmbed(embed);
};