const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const request = require("request-promise");

module.exports = {
    name: 'lick',
    description: 'Lick mentioned member.',
    execute: async (client, message, args) => {

        const mentioned = message.mentions.users.first();

        if (!message.mentions.users.size) {
            return message.channel.send('Tag a member to lick them.');
        }

        if (message.author === mentioned) {
            return message.channel.send(`${message.author} tries to lick their own nose.`);
        }
        if (mentioned === client.user) {
            return message.channel.send('HEY! Get off of me!');
        }

        const response = await request({
            headers: { "User-Agent": "Mozilla/5.0" },
            uri: "https://rra.ram.moe/i/r",
            qs: { type: "lick", nsfw: false },
            json: true
        }).catch(error => this.error(error.response.body.error, channel));

        if (!response) return false;

        const embed = new MessageEmbed()
            .setColor('#363942')
            .setDescription(`${message.author} licks ${mentioned}`)
            .setImage(`https://cdn.ram.moe${response.path.replace("i/", "")}`);

        await message.channel.send({ embed });
}
}