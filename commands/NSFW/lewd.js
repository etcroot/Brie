const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'lewd',
    description: 'Fetch random lewds.',
    execute: async (client, message, args) => {

        let embednotnsfw = new RichEmbed()
        .setTitle('NSFW Error')
        .setDescription('You can only use this in a NSFW channel.')
        .setColor('#363942')
        // NSFW Channel check will send the above embed if the channel is not set to NSFW.
        if(!message.channel === message.channel.nsfw) {
            return message.channel.send(embednotnsfw);
            
        }

		const url = await fetch('https://nekos.life/api/v2/img/lewd')
			.then(response => response.json())
			.then(body => body.url);
            let embed = new RichEmbed()
            .setTitle('Lewd')
            .setURL(url)
            .setColor('#363942')
            .setImage(url)
            message.channel.send(embed);
}
}