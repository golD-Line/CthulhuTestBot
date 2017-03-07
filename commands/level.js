exports.run = function(client, message, args) {
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
};