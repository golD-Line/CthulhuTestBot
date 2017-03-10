const settings = require("../points.json");
exports.run = function(client, message, args) {
    let userData = points[message.author.id];
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
};