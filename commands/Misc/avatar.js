const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Get someones avatar.',
    execute: async (client, message, args) => {
        const mentioned = message.mentions.users.first();

        if (!message.mentions.users.size) {
            let embed = new MessageEmbed()
            .setColor('#363942')
            .setTitle(message.author.username + "'s Avatar")
            .setURL(message.author.avatarURL())
            .setImage(message.author.avatarURL())
            message.channel.send(embed);
        }

        if (mentioned === client.user) {
            return message.channel.send('No.');
        }

        if (mentioned) {
            let embed = new MessageEmbed()
            .setColor('#363942')
            .setTitle(mentioned.username + "'s Avatar")
            .setURL(mentioned.displayAvatarURL())
            .setImage(mentioned.displayAvatarURL())
            message.channel.send(embed);
        }
}
}