const request = require("request-promise");
const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'shibe',
    description: 'Get random cute shibes',
    execute: async (client, message, args) => {
        const response = await request({
            headers: { "User-Agent": "Mozilla/5.0" },
            uri: "http://shibe.online/api/shibes",
            json: true,
            qs: {
                count: 1
                // httpsurls: true
            }
        }).catch(error => this.error(error.response.body.error, channel));

        if (!response) return false;

        const embed = new RichEmbed()
            .setTitle('Shibe OwO')
            .setColor('#363942')
            .setImage(response[0]);

        await message.channel.send({ embed });
}
}