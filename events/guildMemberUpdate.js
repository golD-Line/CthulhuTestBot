const Discord = require("discord.js");
const settings = require("../settings.json");
const ddiff = require('return-deep-diff');

module.exports = (oMember, nMember) => {
   // oMember.client.channels.get(settings.logChannel).sendMessage(`${oMember.user.username} ${oMember.user.id} is now know as `+nMember);
console.log(oMember + oMember.user.id +' is now know as ' +nMember);

  const embed = new Discord.RichEmbed()
  .setTitle(`:abc: ${oMember.user.username} changed Name or Role`) //${nMember.user.id}`)
  .setDescription(oMember.user.username +` ${oMember.user.id}\nis now `+nMember)
  .setFooter('Made by tom', 'https://images-ext-2.discordapp.net/.eJwNyVEOwiAMANC7cADKoAVcYjxL1zKdUUcA_dB4d32_72Oe7WZmcxmj9hlA9GF167I35Vqt7HfgFw9uHTzRwYeQMeLkKWHykOPqUixKJE6lOF54wSwaCFf5j73W86lv73KcnEfz_QGYsyG7.jUbTuI0GA1IvKDciYfLpf1cGG9c?width=80&height=80')
  .setTimestamp()
  .setColor(0x11A0F0)
  //.setThumbnail(`${nMember.user.avatarURL}`)
  oMember.client.channels.get(settings.logChannel).sendEmbed(embed);
};