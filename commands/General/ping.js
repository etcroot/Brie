module.exports = {
    name: 'ping',
    description: 'Get the bots ping.',
    execute: async (client, message, args) => {
        message.channel.send('Pinging...')
        .then(m => {
          m.edit(`Pong! took \`${m.createdTimestamp - message.createdTimestamp}\`ms`)
        })
}
}