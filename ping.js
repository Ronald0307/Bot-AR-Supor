client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content === 'ping') {
    message.channel.send(`o ping do bot é de estimados ${client.ws.ping} ms`);
    }


})
