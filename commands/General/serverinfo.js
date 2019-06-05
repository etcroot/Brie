const { RichEmbed } = require('discord.js');
require('moment-duration-format');

module.exports = {
    name: 'serverinfo',
    description: 'Get server information.',
    execute: async (client, message, args) => {
        let embed = new RichEmbed()
        .setTitle('__Server Information__')
        .setColor('#36393F')
        .setThumbnail(message.guild.iconURL)
        .setDescription('General Information About: ' + message.guild.name)
        .addField('❯ Server ID', message.guild.id, true)
        .addField('❯ Server Name', message.guild.name, true)
        .addField('❯ Server Acronym', message.guild.nameAcronym, true)
        .addField('❯ Server Owner', message.guild.owner, true)
        .addField('❯ Channel Count', message.guild.channels.size, true)
        .addField('❯ Member Count', message.guild.memberCount, true)
        message.channel.send(embed);
}
}