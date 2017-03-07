const settings = require("../settings.json");
const ddiff = require('return-deep-diff');

module.exports = (oGuild, nGuild) => {
  console.log(ddiff(oGuild, nGuild));
  oGuild.channels.get(settings.logChannel).sendMessage('Server settings were changed :computer:' );
};