exports.run = function(client, message, args) {
	if (message.author.id===("255923384641257472"||"250647621163548672"||"271317449993879562"||"262139500464046080"||"115290428051292162")){
		let messagecount = parseInt(args.join(' '));
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
	}else{
           message.channel.sendMessage("you dont have perms to purge"); 
    }
};
