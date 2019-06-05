const { RichEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'ecchi',
    description: 'Get random ecchi',
    execute: async (client, message, args) => {

        let embednotnsfw = new RichEmbed()
        .setTitle('NSFW Error')
        .setDescription('You can only use this in a NSFW channel.')
        .setColor('#363942')
        // NSFW Channel check will send the above embed if the channel is not set to NSFW.
        if(!message.channel === message.channel.nsfw) {
            return message.channel.send(embednotnsfw);
            
        }

        randomPuppy('ecchi')
            .then(url => {
                const embed = new RichEmbed()
                .setTitle(`Ecchi`)
                .setImage(url)
                .setColor('#363942')
    return message.channel.send({ embed });
            })
}
}