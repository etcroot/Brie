const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'pat',
    description: 'Pat mentioned member.',
    execute: async (client, message, args) => {
        const mentioned = message.mentions.users.first();

        var sentences = [
            `${message.author} pats ${mentioned} on the head.`,
            `${message.author} pats ${mentioned} gently.`,
            `${message.author} softly pats ${mentioned} head.`
          ];

          var random = sentences[Math.floor(Math.random()*sentences.length)];

        if (!message.mentions.users.size) {
            return message.channel.send('Tag a member to pat them.');
        }

        if (message.author === mentioned) {
            return message.channel.send(`${message.author} pats themselves on the shoulder.`);
        }
        if (mentioned === client.user) {
            return message.channel.send('HEY! Get off of me!');
        }

		const url = await fetch('https://nekos.life/api/v2/img/pat')
			.then(response => response.json())
			.then(body => body.url);
            let embed = new MessageEmbed()
            .setColor('#363942')
            .setDescription(`${random}`)
            .setImage(url)
            message.channel.send(embed);
}
}