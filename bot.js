require('dotenv').config();

const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: process.env.VERSION === 'dev' ? 'bebe?' : 'bebe',
    owner: '265515383773986817'
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['user', 'User'],
        ['admin', 'Administrator']
    ])
    .registerDefaultGroups()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.login(process.env.DISCORD_TOKEN);