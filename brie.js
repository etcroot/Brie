const { Client, Collection, Discord, RichEmbed } = require('discord.js');
const client = new Client();
const { readdir } = require('fs');
const { prefix, token, guildchannel, ytkey, owner } = require('./config.json');
const fs = require("fs");
client.commands = new Collection();
client.categories = new Collection();

readdir("./events", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });

// Music
client.music = require("discord.js-musicbot-addon");

client.music.start(client, {
  youtubeKey: ytkey,
  anyoneCanSkip: true,
  help: {
    enabled: false,
  },
  ownerOverMember: true,
  inlineEmbeds: true,
  musicPresence: false,
  clearPresence: false,
  messageHelp: true,
  defVolume: "80",
  botPrefix: prefix,
  ownerID: owner,
  cooldown: {
    enabled: false,
    timer: 1000,
    exclude: ["volume","queue","pause","resume","np"]
  }
});
 
// Guild Join Event
client.on('guildCreate', guild => {
    let channel = client.channels.get(guildchannel);
    client.user.setActivity(`${prefix}help | ${client.guilds.size} guilds`, { type: 'LISTENING' });
  const embed = new RichEmbed()
  .setColor('#36393F')
  .setAuthor(`Joined ${guild.name}`)
  .addField("Owner", guild.owner.user.tag)
  .addField("ID", guild.id, true)
  .addField("Users", guild.memberCount, true)
  channel.send(embed);
  });

// Guild Leave event
client.on('guildDelete', guild => {
    let channel = client.channels.get(guildchannel);
    client.user.setActivity(`${prefix}help | ${client.guilds.size} guilds`, { type: 'LISTENING' });
  const embed = new RichEmbed()
  .setColor('#36393F')
  .setAuthor(`Left ${guild.name}`)
  .addField("Owner", guild.owner.user.tag)
  .addField("ID", guild.id, true)
  .addField("Users", guild.memberCount, true)
  channel.send(embed);
  });

readdir('./commands', (err, folders) => { 
    if (err) return console.error(err);
    folders.forEach(folder => {
        let cmdNames = [];
        readdir(`./commands/${folder}`, (err, files) => {
            if (err) console.error(err);
            files.forEach(file => {
                if (!file.endsWith(".js")) return;
                    const command = require(`./commands/${folder}/${file}`)
                    command.category = folder;
                    client.commands.set(command.name, command);
                    cmdNames.push(command.name);
            });
        });
        client.categories.set(folder, {
            title: folder,
            commands: cmdNames
        });
    });
});

client.on('message', async message => {
    if(message.content.toLowerCase() === `<@${client.user.id}>`){
        let embed = new RichEmbed()
        .setThumbnail('https://cdn.discordapp.com/emojis/585531777607663811.png')
        .addField("Prefix", `\`${prefix}\``, true)
        .addField("Help", `\`${prefix}help\``, true)
        .setColor('#36393F');
        message.channel.send(embed);
      };
      
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.author.id === client.user.id) return;
    try {
        client.commands.get(command).execute(client, message, args);
        const commandlist = client.commands;
    } catch (error) {
        console.error(error);
        message.reply('sorry there was an error!');
    }
}),

client.login(token);