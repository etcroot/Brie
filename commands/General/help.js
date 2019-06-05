const { RichEmbed } = require('discord.js');
const config = require('../../config.json');

module.exports = {
    name: 'help',
    description: 'get help menu.',
    execute: async (client, message, args) => {
        const command = args.join(" ");
        // Sending help message when only writing help.
        if(!args[0]) {
            let embed = new RichEmbed()
            .setTitle('General Commands')
            .setColor('#36393F')
            .setThumbnail(client.user.displayAvatarURL)
            .setFooter(`${client.user.username} | By: ${config.ownertag}`)
            .setImage('https://i.imgur.com/uwGvstX.png')
            .setDescription([`
            \`${config.prefix}help\` → get help menu.
            \`${config.prefix}info\` → get bot information.
            \`${config.prefix}ping\` → get bot current ping.
            \`${config.prefix}serverinfo\` → get server information..
            \`${config.prefix}userinfo\` → get user information..
            \`${config.prefix}suggest\` → Suggest something to get added to the bot.
            \`${config.prefix}ug\` → Report a bug found on the bot.
        `])
            .addField('More Commands', [`
                \`${config.prefix}help interactive\` → get interactive help menu.
                \`${config.prefix}help misc\` → get misc help menu.
                \`${config.prefix}help music\` → get music help menu.
                \`${config.prefix}help nsfw\` → get NSFW help menu.
                \`${config.prefix}help owner\` → get bot developer help menu.
            `])
            .addField('Prefix Information', `Prefix: \`${config.prefix}\`\nYou can also mention ${client.user} to get prefix info.`, false)
            .addField('❯ Useful Links', `[Website](${config.website}) | [Support Server](${config.supporturl}) | [Invite ${client.user.username}](https://discordapp.com/oauth2/authorize/?permissions=2146958847&scope=bot&client_id=${client.user.id}) | [Github](${config.github})`, false)
            return message.channel.send(embed);
        }
        // Sending interactive help menu.
        if(command === 'interactive') {
            let embed = new RichEmbed()
            .setTitle('Help Menu → Interactive')
            .setColor('#36393F')
            .setFooter(`${client.user.username} | By: ${config.ownertag}`)
            .setDescription([`
                \`${config.prefix}cuddle\` → cuddle mentioned member.
                \`${config.prefix}feed\` → feed mentioned member.
                \`${config.prefix}hug\` → hug mentioned member.
                \`${config.prefix}kiss\` → kiss mentioned member.
                \`${config.prefix}lick\` → lick mentioned member.
                \`${config.prefix}pat\` → pat mentioned member.
                \`${config.prefix}poke\` → poke mentioned member.
            `])
            return message.channel.send(embed);
        }
        // Sending misc help menu.
        if(command === 'misc') {
            let embed = new RichEmbed()
            .setTitle('Help Menu → Misc')
            .setColor('#36393F')
            .setFooter(`${client.user.username} | By: ${config.ownertag}`)
            .setDescription([`
            \`${config.prefix}animeme\` → get random anime memes.
            \`${config.prefix}meme\` → get random memes.
            \`${config.prefix}cry\` → cry :(
            \`${config.prefix}neko\` → get random nekos.
            \`${config.prefix}avatar\` → get mentioned or your own avatar.
            \`${config.prefix}shibe\` → get random shibe's.
            \`${config.prefix}wikihow\` → get random wikihow's
            `])
            return message.channel.send(embed);
        }
        // Sending music help menu.
        if(command === 'music') {
            let embed = new RichEmbed()
            .setTitle('Help Menu → Music')
            .setColor('#36393F')
            .setFooter(`${client.user.username} | By: ${config.ownertag}`)
            .setDescription([`
            \`${config.prefix}play\` → play music through url or search term.
            \`${config.prefix}pause\` → pause the current audio.
            \`${config.prefix}resume\` → resume the paused audio.
            \`${config.prefix}stop\` → stop the current audio & clear queue.
            \`${config.prefix}skip\` → skip the current audio.
            \`${config.prefix}leave\` → leave the voice channel & clear queue.
            \`${config.prefix}loop\` → loop through the queue.
            \`${config.prefix}queue\` → check the current queue list.
            \`${config.prefix}np\` → check what's currently playing.
            \`${config.prefix}volume\` → set the audio volume.
            \`${config.prefix}remove\` → remove a listing in the queue.
            \`${config.prefix}clear\` → clear the queue.
            `])
            return message.channel.send(embed);
        }
        // Sending NSFW help menu.
        if(command === 'nsfw') {
            let embednotnsfw = new RichEmbed()
            .setTitle('NSFW Error')
            .setDescription('You can only use this in a NSFW channel.')
            .setColor('#363942')

             if(!message.channel === message.channel.nsfw) {
                 return message.channel.send(embednotnsfw);
             }

            let embed = new RichEmbed()
            .setTitle('Help Menu → NSFW')
            .setColor('#36393F')
            .setFooter(`${client.user.username} | By: ${config.ownertag}`)
            .setDescription([`
            \`${config.prefix}ass\` → get random ass.
            \`${config.prefix}anal\` → get random anal.
            \`${config.prefix}pgif\` → get random porn gifs.
            \`${config.prefix}ecchi\` → get random ecchi.
            \`${config.prefix}hentai\` → get random hentai.
            \`${config.prefix}thighs\` → get random thighs.
            \`${config.prefix}hthighs\` → get random anime thighs.
            \`${config.prefix}yuri\` → get random yuri.
            `])
            return message.channel.send(embed);
        }
        // Sending owner only help menu.
        if(command === 'owner') {
            // This if statement is to check if the user is owner or not, make sure to put your ID in the config.json.
            if (message.author.id !== `${config.owner}`) {
               return message.channel.send('YoOu\'re NoT mY DeVelOpEr!1?!');
            }

            let embed = new RichEmbed()
            .setTitle('Help Menu → Owner')
            .setColor('#36393F')
            .setFooter(`${client.user.username} | By: ${config.ownertag}`)
            .setDescription([`
            \`${config.prefix}eval\` → evaluate stuff.
            `])
            return message.channel.send(embed);
        }
}
}