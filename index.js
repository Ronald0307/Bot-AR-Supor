require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const Database = require ('./config/database');
const db = new Database;


const Person = require('./person');

db.connect();

const client = new Client({
    intents: [
       GatewayIntentBits.Guilds,
       GatewayIntentBits.DirectMessages,
       GatewayIntentBits.GuildMembers,
       GatewayIntentBits.GuildMessages,
       GatewayIntentBits.MessageContent,
       GatewayIntentBits.GuildMessageReactions,


    ],
    partials:[
        Partials.Message,
        Partials.GuildMember,
        Partials.GuildMessageReactions,
        Partials.User,
        Partials.Channel,


    ]
});
client.on('ready',() => {
    console.log('O bot está no ar!')
}

);

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content === 'ping') {
    message.channel.send(`o ping do bot é de estimados ${client.ws.ping} ms`);
    }


})


client.login(process.env.TOKEN);