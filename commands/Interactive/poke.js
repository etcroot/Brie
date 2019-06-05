const fetch = require('node-fetch');
const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'poke',
    description: 'Poke mentioned member.',
    execute: async (client, message, args) => {
        const mentioned = message.mentions.users.first();
        // Add sentences to the responses in the embed title.
        var sentences = [
            `${message.author} pokes ${mentioned} annoyingly.`,
            `${message.author} starts to poke ${mentioned} gently.`,
            `${message.author} acts like an idiot poking ${mentioned}.`
          ];

          var random = sentences[Math.floor(Math.random()*sentences.length)];

        if (!message.mentions.users.size) {
            return message.channel.send('Tag a member to poke them.');
        }

        if (message.author === mentioned) {
            return message.channel.send(`${message.author} pokes themselves in the eyes.`);
        }
        if (mentioned === client.user) {
            return message.channel.send('Do. Not. Poke. Me.');
        }

		const url = await fetch('https://nekos.life/api/v2/img/poke')
			.then(response => response.json())
			.then(body => body.url);
            let embed = new RichEmbed()
            .setColor('#363942')
            .setDescription(`${random}`)
            .setImage(url)
            message.channel.send(embed);
}
}