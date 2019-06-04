const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ass',
    description: 'Fetch random ass.',
    execute: async (client, message, args) => {

        let embednotnsfw = new MessageEmbed()
        .setTitle('NSFW Error')
        .setDescription('You can only use this in a NSFW channel.\nHere\'s how you enable it.')
        .setColor('#363942')
        .setImage('http://etcroot.pw/XS2aDA.gif')

        if(!message.channel === message.channel.nsfw) {
            return message.channel.send(embednotnsfw);
            
        }
        const url = await fetch('https://nekobot.xyz/api/image?type=ass')
			.then(response => response.json())
			.then(body => body.message);
            let embed = new MessageEmbed()
            .setTitle('Ass')
            .setURL(url)
            .setColor('#363942')
            .setImage(url)
            message.channel.send(embed);
	}
  }