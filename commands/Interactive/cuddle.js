const fetch = require('node-fetch');
const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'cuddle',
    description: 'Cuddle mentioned member.',
    execute: async (client, message, args) => {
        const mentioned = message.mentions.users.first();
        // Add sentences to the responses in the embed title.
        var sentences = [
            `${message.author} cuddles up close to ${mentioned}.`,
            `${message.author} embraces ${mentioned} & cuddles them.`,
            `${message.author} holds ${mentioned} close to them.`,
            `${message.author} needs some cuddles from ${mentioned}.`,
            `${message.author} forces ${mentioned} to cuddle them.`
          ];

          var random = sentences[Math.floor(Math.random()*sentences.length)];

        if (!message.mentions.users.size) {
            return message.channel.send('Tag a member to cuddle them.');
        }

        if (message.author === mentioned) {
            return message.channel.send(`${message.author} cuddles with themselves, loneliness is alright.`);
        }
        if (mentioned === client.user) {
            return message.channel.send('Uhm... i don\'t think so...');
        }

		const url = await fetch('https://nekos.life/api/v2/img/cuddle')
			.then(response => response.json())
			.then(body => body.url);
            let embed = new RichEmbed()
            .setColor('#363942')
            .setDescription(`${random}`)
            .setImage(url)
            message.channel.send(embed);
}
}