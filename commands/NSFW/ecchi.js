const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'ecchi',
    description: 'Get random ecchi',
    execute: async (client, message, args) => {

        let embednotnsfw = new MessageEmbed()
        .setTitle('NSFW Error')
        .setDescription('You can only use this in a NSFW channel.\nHere\'s how you enable it.')
        .setColor('#363942')
        .setImage('http://etcroot.pw/XS2aDA.gif')

        if(!message.channel === message.channel.nsfw) {
            return message.channel.send(embednotnsfw);
            
        }

        randomPuppy('ecchi')
            .then(url => {
                const embed = new MessageEmbed()
                .setTitle(`Ecchi`)
                .setImage(url)
                .setColor('#363942')
    return message.channel.send({ embed });
            })
}
}