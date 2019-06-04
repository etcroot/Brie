const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    name: 'eval',
    description: 'Evaluation Command.',
    execute: async (client, message, args) => {
        if (message.author.id !== `${config.owner}`) {
           return message.channel.send('YoOu\'re NoT mY DeVelOpEr!1?!');
        }
        const clean = text => {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
          }
        if (message.content.startsWith(config.prefix + "eval")) {
          // Check if command author is owner or not, remember to set the id in the config file.
          if(message.author.id !== config.owner) {
              return message.channel.send('YoU ArE NoT My OwNeR!1?!');
          }
          // No exposing tokens, nothx.
          if(message.content.includes('token')) {
              return message.channel.send('Nice try.');
          }
          try {
            const code = args.join(" ");
            let evaled = eval(code);
       
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
       
            message.channel.send(clean(evaled), {code:"xl"});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          }
        }
    }
}