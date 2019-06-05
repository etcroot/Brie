const { RichEmbed } = require('discord.js');
const { mainguild, bugreportchannel } = require('../../config.json');

module.exports = {
    name: 'ug',
    description: 'Report a bot bug.',
    execute: async (client, message, args) => {
        let bug = args.join(" ")
        if (!bug) {
          return message.channel.send("You didn't specify a bug.");
        }
        // Change the main guild to your main guild ID.
        const guild = client.guilds.get(mainguild);
        // Change the channel ID to a existing channel of the guild id^ so the messages can send to the bug report channel.
        const channel = guild.channels.get(bugreportchannel);
        const embed = new RichEmbed()
          .setTitle("New Bug Report")
          .setDescription(bug)
          .setColor('#36393F')
          .setThumbnail(message.author.displayAvatarURL())
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setFooter(`User ID: ${message.author.id}`);
        await channel.send({ embed });
        return message.channel.send(`Your idea has been successfully submitted to the developer.`);
}
}