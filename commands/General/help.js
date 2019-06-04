const { MessageEmbed } = require('discord.js');
const config = require('../../config.json');

module.exports = {
    name: 'help',
    description: 'Displays a list of commands',
    execute(client, message, args) {
        let embed = new MessageEmbed()
        .setColor('#36393F')
        .setDescription(`My prefix is: \`${config.prefix}\`\nYou can also mention me ${client.user} to get prefix info.`)
        .setThumbnail(client.user.displayAvatarURL())
        .setAuthor('Brie Help Menu', client.user.displayAvatarURL())
        .setFooter(`${client.user.username} | By: ${config.ownertag}`);
        client.categories.forEach(cat => {
            let cmds = []
            cat.commands.forEach(kitten => {
                let res = client.commands.get(kitten);
                cmds.push(
                    `**${config.prefix}${res.name}** →  ${res.description}`
                );
            });
            embed.addField(cat.title, cmds.join('\n'));
        });
        embed.setImage('https://i.imgur.com/tgHjkxc.png')
            embed.addField('❯ Useful Links', `[Website](${config.website}) | [Support Server](${config.supporturl}) | [Invite ${client.user.username}](https://discordapp.com/oauth2/authorize/?permissions=1341643969&scope=bot&client_id=${client.user.id}) | [Github](${config.github})`, false);
            message.channel.send(embed);

    }
}