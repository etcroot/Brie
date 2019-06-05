const fetch = require('node-fetch');
const { RichEmbed } = require('discord.js');
const request = require("request-promise");

module.exports = {
    name: 'cry',
    description: 'Cry :(',
    execute: async (client, message, args) => {
        const response = await request({
            headers: { "User-Agent": "Mozilla/5.0" },
            uri: "https://rra.ram.moe/i/r",
            qs: { type: "cry", nsfw: false },
            json: true
        }).catch(error => this.error(error.response.body.error, channel));

        if (!response) return false;

        const embed = new RichEmbed()
            .setColor('#363942')
            .setDescription(`**${message.author.tag}** cried`)
            .setImage(`https://cdn.ram.moe${response.path.replace("i/", "")}`);

        await message.channel.send({ embed });
}
}