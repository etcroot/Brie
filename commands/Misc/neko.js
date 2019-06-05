const fetch = require('node-fetch');
const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'neko',
    description: 'Fetch a random neko.',
    execute: async (client, message, args) => {

		const url = await fetch('https://nekos.life/api/v2/img/neko')
			.then(response => response.json())
			.then(body => body.url);
            let embed = new RichEmbed()
            .setTitle('Neko')
            .setURL(url)
            .setColor('#363942')
            .setImage(url)
            message.channel.send(embed);
}
}