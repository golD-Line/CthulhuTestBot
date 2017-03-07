 const settings = require('../settings.json'); 
  exports.run = (client, message, args) => {
    if (message.author.id===("255923384641257472"||"250647621163548672"||"271317449993879562"||"262139500464046080"||"115290428051292162")){
      let reason = args.slice(1).join(' ');
      let user = message.mentions.users.first();
      let modlog = client.channels.get(settings.logChannel);
      let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted');
      message.guild.member(user).addRole(muteRole);//.then(() => {      
      message.channel.sendMessage(`${user} was muted because of ${reason}`); 
    }else{
           message.channel.sendMessage("you dont have perms to mute"); 
    }
  };