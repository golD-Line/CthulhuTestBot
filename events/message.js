const fs = require("fs");
const settings = require("../settings.json");
let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));

module.exports = message => {
    if (message.author.bot) return;   //if its sent by a bot dont do anything
    


  // if the points don't exist, init to 0;
  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
  };

console.log(points)
  // And then, we save the edited file.
  fs.writeFile('./points.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
  
    if (!message.content.startsWith(settings.prefix)) return;


    const client = message.client;
    const args = message.content.split(" ");
    const command = args.shift().slice(settings.prefix.length);

    try {
        let cmdFile = require(`../commands/${command}`);
        cmdFile.run(client, message, args)
    } catch (err){
        console.log(`Command ${command} failed`);
        message.channel.sendMessage(`That is not a command.`);

    } 
};