const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kiss',
    description: 'Kiss mentioned member.',
    execute: async (client, message, args) => {
        const mentioned = message.mentions.users.first();
        // Add sentences to the responses in the embed title.
        var sentences = [
            `${message.author} gives ${mentioned} a big wet kiss.`,
            `${message.author} grabs ${mentioned} & kisses them.`,
            `${message.author} gives ${mentioned} a kissu~`,
            `${message.author} kisses ${mentioned} all over their face.`,
            `${message.author} opens their mouth and shoves down their tounge deep down ${mentioned}'s throat.`
          ];

          var random = sentences[Math.floor(Math.random()*sentences.length)];

        if (!message.mentions.users.size) {
            return message.channel.send('Tag a member to kiss them.');
        }

        if (message.author === mentioned) {
            return message.channel.send(`${message.author} kisses themselves in the mirror`);
        }
        if (mentioned === client.user) {
            return message.channel.send('Euw, that\'s nasty!');
        }

		const url = await fetch('https://nekos.life/api/v2/img/kiss')
			.then(response => response.json())
			.then(body => body.url);
            let embed = new MessageEmbed()
            .setColor('#363942')
            .setDescription(`${random}`)
            .setImage(url)
            message.channel.send(embed);
}
}