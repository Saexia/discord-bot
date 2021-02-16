const discord = require('discord.js');

const { prefix, token } = require('./config.json')

const client = new discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', (message) => {
    if (message.content === `${prefix}salut`) {
     message.channel.send('Salut');
    }
    else if (message.content === `${prefix}serveur`) {
     message.channel.send(`Nom du serveur : ${message.guild.name}\n nombre d'utilisateur : ${message.guild.memberCount}`);
    }
});

client.login(process.env.TOKEN);