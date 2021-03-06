const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
    client.on('ready', () => reqEvent("ready")(client));
    client.on('disconnect', () => reqEvent("disconnect")(client));
    client.on('reconnecing', () => reqEvent("reconnecing")(client));
    client.on('message', reqEvent("message"));
    client.on('guildMemberAdd', reqEvent("guildMemberAdd"));
    client.on('guildMemberRemove', reqEvent("guildMemberRemove"));
    client.on('guildMemberUpdate', reqEvent("guildMemberUpdate"));
    client.on('guildUpdate', reqEvent("guildUpdate"));
    client.on('guildBanAdd', reqEvent("guildBanAdd"));
    client.on('guildBanRemove', reqEvent("guildBanRemove"));
    client.on('channelPinsUpdate', reqEvent("channelPinsUpdate"));
    client.on('messageDeleteBulk', reqEvent("messageDeleteBulk"));
};