const { MessageEmbed } = require('discord.js');
require('moment-duration-format');

module.exports = {
    name: 'userinfo',
    description: 'Get user information.',
    execute: async (client, message, args) => {
        const mentioned = message.mentions.users.first();

        if (!message.mentions.users.size) {
            return message.channel.send('Tag a member to get information.');
        }

        let embed = new MessageEmbed()
        .setTitle('__User Information__')
        .setColor('#36393F')
        .setThumbnail(mentioned.displayAvatarURL())
        .setDescription('**Userinfo about:** ' + mentioned.username + ' \n**Requested by:** ' + message.author.username)
        .addField('❯ Username', mentioned.username, true)
        .addField('❯ Display Name', mentioned.username, true)
        .addField('❯ User Tag', mentioned.tag, true)
        .addField('❯ User ID', mentioned.id, true)
        .addField('❯ Account Created', mentioned.createdAt, false)
        message.channel.send(embed);

}
}