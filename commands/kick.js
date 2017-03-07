const settings = require('../settings.json'); 
  exports.run = (client, message, args) => {
    if (message.author.id===("255923384641257472"||"250647621163548672"||"271317449993879562"||"262139500464046080"||"115290428051292162")){
      let reason = args.slice(1).join(' ');
      let user = message.mentions.users.first();
      let modlog = client.channels.get(settings.logChannel);
      message.guild.member(user).kick(user);
      message.channel.sendMessage(`${user} was kicked because of ${reason}`);    
    }else{
      message.channel.sendMessage("you dont have perms to kick"); 
    }
};
