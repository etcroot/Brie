const fetch = require('node-fetch');
const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'feed',
    description: 'Feed mentioned member.',
    execute: async (client, message, args) => {
        const mentioned = message.mentions.users.first();
        // Add sentences to the responses in the embed title.
        var sentences = [
            `${message.author} shoves food deep down ${mentioned}'s throat.`,
            `${message.author} feeds ${mentioned} some delicious food.`,
            `${message.author} forces food down ${mentioned}'s mouth.`
          ];

          var random = sentences[Math.floor(Math.random()*sentences.length)];

        if (!message.mentions.users.size) {
            return message.channel.send('Tag a member to feed them.');
        }

        if (message.author === mentioned) {
            return message.channel.send(`${message.author} eats some food.`);
        }
        if (mentioned === client.user) {
            return message.channel.send('Omg, is that for me? YUMMY! *nom nom nom*');
        }

		const url = await fetch('https://nekos.life/api/v2/img/feed')
			.then(response => response.json())
			.then(body => body.url);
            let embed = new RichEmbed()
            .setColor('#363942')
            .setDescription(`${random}`)
            .setImage(url)
            message.channel.send(embed);
}
}