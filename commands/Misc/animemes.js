const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'animeme',
    description: 'Get random anime memes',
    execute: async (client, message, args) => {

        if(message.author.bot) return;
        if(message.channel.type !== "text") return;
        randomPuppy('animemes')
                  .then(url => {
                      const embed = new MessageEmbed()
                      .setTitle(`Anime Meme`)
                      .setImage(url)
                      .setColor('#363942')
                   return message.channel.send({ embed });
            })
}
}