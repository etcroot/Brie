const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`${prefix}help | ${client.guilds.size} guilds`, { type: 'LISTENING' });
  }