const { Client, Collection, Discord, MessageEmbed } = require('discord.js');
const client = new Client();
const { readdir } = require('fs');
const { prefix, token } = require('./config.json');

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

  // Mention Event


// Guild Join Event
client.on('guildCreate', guild => {
    let channel = client.channels.get("515275552244891659");
    client.user.setActivity(`${prefix}help | ${client.guilds.size} guilds`, { type: 'LISTENING' });
  const embed = new MessageEmbed()
  .setColor('#36393F')
  .setAuthor(`Joined ${guild.name}`)
  .addField("Owner", guild.owner.user.tag)
  .addField("ID", guild.id, true)
  .addField("Users", guild.memberCount, true)
  channel.send(embed);
  });

// Guild Leave event
client.on('guildDelete', guild => {
    let channel = client.channels.get("515275542711369728");
    client.user.setActivity(`${prefix}help | ${client.guilds.size} guilds`, { type: 'LISTENING' });
  const embed = new MessageEmbed()
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
        let embed = new MessageEmbed()
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
