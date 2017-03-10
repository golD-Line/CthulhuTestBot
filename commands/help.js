const settings = require('../settings.json');
  exports.run = (client, message, args) => {
    if (message.author.id===("255923384641257472"||"250647621163548672"||"271317449993879562"||"262139500464046080"||"115290428051292162")){

      if (!args[0]) {
        message.channel.sendMessage('```diff\n---------CTHULHUBOT---------\n\n-Mod or Admin Commands\n+All User Commands\n- !mute - stop a user from sending messages in all channels\n- !unmute - unmutes a previously muted user\n- !kick - Removes a user from Cthulhu\n- !purge [a number between 2-99]- deletes a number messages from the channel\n+ !autobuild - by Lovecraft\n+ !builds - menu for Reddit builds\n+ !hell - (outdated?) \n+ !cthulhu - we rock you\n+ !invite - A link to this discord\n+ !ohrly - oh really?\n+ !ping - the answer stinks\n+ !reddit - grow castle subreddit\n+ !server - is raon server up\n+ !sock - cthulhu mascot\n+ !tatsu - info on tatsumaki bot\n+ !thecall - ??\n+ !wiki - GC tips and stats\n```');
      } else {
        message.channel.sendMessage('```diff\n+ more help coming soon\n```')
      };
    }else{
      if (!args[0]) {
        message.channel.sendMessage('```diff\n---------CTHULHUBOT---------\n\n-Commands \n+ !autobuild - by Lovecraft\n+ !hell - (outdated?) \n+ !cthulhu - we rock you\n+ !invite - A link to this discord\n+ !ping - the answer stinks\n+ !reddit - grow castle subreddit\n+ !server - is raon server up\n+ !sock - cthulhu mascot\n+ !tatsu - info on tatsumaki bot\n+ !thecall - ??\n+ !ttr - time til reset\n+ !wiki - GC tips and stats\n```');
      } else {
        message.channel.sendMessage('```diff\n+ more help coming soon\n```')
      };
    };
};
//   if (!args[0]) {
//     const commandNames = Array.from(client.commands.keys());
//     const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
//     message.channel.sendCode('asciidoc', `= Command List =\n\n[Use ${settings.prefix}help <commandname> for details]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
//   } else {
//     let command = args[0];
//     if (client.commands.has(command)) {
//       command = client.commands.get(command);
//       message.channel.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nusage::${command.help.usage}`);
//     }
//   }
// };



