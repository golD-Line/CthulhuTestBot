const settings = require("../settings.json");

module.exports = (channel, time) => {
  channel.guild.channels.get(settings.logChannel).sendMessage(`The pins in ${channel.name} changed :pushpin: ` );
};