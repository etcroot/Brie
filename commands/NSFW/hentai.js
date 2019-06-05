const { RichEmbed } = require('discord.js');
const req = require('superagent');
const { ksofttoken } = require('../../config.json');

module.exports = {
    name: 'hentai',
    description: 'Fetch random hentai.',
    execute: async (client, message, args) => {
        const { body: { image_url: img, title: title, source: url, subreddit: redd } } = await req
        .get('https://api.ksoft.si/images/rand-reddit/hentai')
        .set('Authorization', `Bearer ${ksofttoken}`);

        let embednotnsfw = new RichEmbed()
        .setTitle('NSFW Error')
        .setDescription('You can only use this in a NSFW channel.')
        .setColor('#363942')
        // NSFW Channel check will send the above embed if the channel is not set to NSFW.
        if(!message.channel === message.channel.nsfw) {
            return message.channel.send(embednotnsfw);
            
        }
    const embed = new RichEmbed()
        .setTitle(title)
        .setURL(url)
        .setColor('#363942')
        .setImage(img)
        .setFooter(`KSOFT.SI | ` + redd);
    return message.channel.send({embed});
}
}