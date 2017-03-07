const settings = require("../settings.json");

module.exports = (guild, user) => {

    guild.channels.get(settings.logChannel).sendMessage(`${user.username} Was Unbanned!`);
};