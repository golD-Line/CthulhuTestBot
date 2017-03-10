    const Discord = require("discord.js");
const client = new Discord.Client();
const ddiff = require('return-deep-diff');
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./utility/eventLoader')(client);

var reload = (message, cmd) =>{
    delete require.cache[require.resolve("./commands/" + cmd)];
    try{
        let cmdFile = require("./commands/" + cmd);
    } catch (err){
        message.channel.sendMessage(`Problem loading ${cmd}: ${err}`).then (
        response => response.delete(1000).catch(error => console.log(error.stack))
        ).catch(error => console.log(error.stack));
    }
    message.channel.sendMessage(`${cmd} reload was a success :arrow_double_up:`).then (
        response => response.delete(1000).catch(error => console.log(error.stack))
        ).catch(error => console.log(error.stack));
};
exports.reload = reload;

//client.on('',);



client.login(settings.token);