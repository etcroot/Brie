const { MessageEmbed } = require('discord.js');
const req = require('superagent');
const { ksofttoken } = require('../../config.json');

module.exports = {
    name: 'meme',
    description: 'Get random memes.',
    execute: async (client, message, args) => {
        const { body: { image_url: img, title, subreddit: sub, upvotes: up, downvotes: down, author: auth, source: source } } = await req
        .get('https://api.ksoft.si/images/random-meme')
        .set('Authorization', `Bearer ${ksofttoken}`);

    const embed = new MessageEmbed()
        .setTitle(title)
        .setURL(source)
        .setAuthor(`${auth}`, 'https://i.imgur.com/XTSExqJ.png')
        .setDescription(`Upvotes: ${up} || Downvotes: ${down}`)
        .setColor('#363942')
        .setImage(img)
        .setFooter(`KSOFT.SI | Subreddit: ${sub}`);
    return message.channel.send({embed});
}
}