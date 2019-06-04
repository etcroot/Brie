const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hentai',
    description: 'Fetch random hentai.',
    execute: async (client, message, args) => {

        let embednotnsfw = new MessageEmbed()
        .setTitle('NSFW Error')
        .setDescription('You can only use this in a NSFW channel.\nHere\'s how you enable it.')
        .setColor('#363942')
        .setImage('http://etcroot.pw/XS2aDA.gif')

        if(!message.channel === message.channel.nsfw) {
            return message.channel.send(embednotnsfw);
            
        }

		const url = await fetch('https://nekos.life/api/v2/img/hentai')
			.then(response => response.json())
			.then(body => body.url);
            let embed = new MessageEmbed()
            .setTitle('Hentai')
            .setURL(url)
            .setColor('#363942')
            .setImage(url)
            message.channel.send(embed);
}
}