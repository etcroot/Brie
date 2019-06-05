const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Get someones avatar.',
    execute: async (client, message, args) => {
        const mentioned = message.mentions.users.first();
        // If no mentions are provided.
        if (!message.mentions.users.size) {
            let embed = new RichEmbed()
            .setColor('#363942')
            .setTitle(message.author.username + "'s Avatar")
            .setURL(message.author.avatarURL)
            .setImage(message.author.avatarURL)
            message.channel.send(embed);
        }
        // Sorry but no bot avatar stealing.
        if (mentioned === client.user) {
            return message.channel.send('No.');
        }
        // If mention is provided it will fetch the users avatar.
        if (mentioned) {
            let embed = new RichEmbed()
            .setColor('#363942')
            .setTitle(mentioned.username + "'s Avatar")
            .setURL(mentioned.displayAvatarURL)
            .setImage(mentioned.displayAvatarURL)
            message.channel.send(embed);
        }
}
}