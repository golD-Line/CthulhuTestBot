  const insults = require('../insults.json');
  exports.run = (client, message, args) => {
    var x = ~~(Math.random() * 298);
    var i = ("a"+x)
     console.log(i);
   var responseObject = (insults[i]); 
    console.log(responseObject);
    message.channel.sendMessage(responseObject);
  };