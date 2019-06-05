const { RichEmbed } = require('discord.js');
const { mainguild, suggestchannel } = require('../../config.json');

module.exports = {
    name: 'suggest',
    description: 'Suggest something to get added to the bot.',
    execute: async (client, message, args) => {
        let suggest = args.join(" ")
        if (!suggest) {
          return message.channel.send("You didn't specify a suggestion.");
        }
        // Change the main guild to your main guild ID.
        const guild = client.guilds.get(mainguild);
        // Change the channel ID to a existing channel of the guild id^ so the messages can send to the suggestion channel.
        const channel = guild.channels.get(suggestchannel);
        const embed = new RichEmbed()
          .setTitle("New Suggestion")
          .setDescription(suggest)
          .setColor('#36393F')
          .setThumbnail(message.author.displayAvatarURL)
          .setAuthor(message.author.tag, message.author.displayAvatarURL)
          .setFooter(`User ID: ${message.author.id}`);
        await channel.send({ embed });
        return message.channel.send(`Your idea has been successfully submitted to the developer.`);
}
}