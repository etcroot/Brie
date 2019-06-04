const { MessageEmbed } = require('discord.js');
const req = require('superagent');
const { ksofttoken } = require('../../config.json');

module.exports = {
    name: 'wikihow',
    description: 'Get random wikihow\'s.',
    execute: async (client, message, args) => {
        const { body: { url: img, title: title, article_url: url } } = await req
        .get('https://api.ksoft.si/images/random-wikihow')
        .set('Authorization', `Bearer ${ksofttoken}`);

    const embed = new MessageEmbed()
        .setTitle("How to " + title)
        .setURL(url)
        .setColor('#363942')
        .setImage(img)
        .setFooter(`KSOFT.SI | WIKIHOW`);
    return message.channel.send({embed});
}
}