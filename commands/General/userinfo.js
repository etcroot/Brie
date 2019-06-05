const { RichEmbed } = require('discord.js');
require('moment-duration-format');

module.exports = {
    name: 'userinfo',
    description: 'Get user information.',
    execute: async (client, message, args) => {
        const mentioned = message.mentions.users.first();
        // If no mention or argument is specified.
        if(!args[0]) {
            const member = message.author;
            let embed = new RichEmbed()
            .setTitle('__User Information__')
            .setColor('#36393F')
            .setThumbnail(message.author.avatarURL)
            .setDescription('Userinfo about: `' + message.author.username + '`')
            .addField('❯ Username', message.author.username, true)
            .addField('❯ Display Name', message.author.username, true)
            .addField('❯ User Tag', message.author.tag, true)
            .addField('❯ User ID', message.author.id, true)
            .addField('❯ Account Created', message.author.createdAt, false)
            return message.channel.send(embed);
        }
        // Fetching mentioned user.
        let embed = new RichEmbed()
        .setTitle('__User Information__')
        .setColor('#36393F')
        .setThumbnail(mentioned.avatarURL)
        .setDescription('Userinfo about: `' + mentioned.username + '` \nRequested by: `' + message.author.username + '`')
        .addField('❯ Username', mentioned.username, true)
        .addField('❯ Display Name', mentioned.username, true)
        .addField('❯ User Tag', mentioned.tag, true)
        .addField('❯ User ID', mentioned.id, true)
        .addField('❯ Account Created', mentioned.createdAt, false)
        return message.channel.send(embed);

}
}