const { ShardingManager } = require('discord.js');
const { token, prefix, owner } = require('./config.json');
const manager = new ShardingManager('./brie.js', { totalShards: 'auto', token: token });
// It will detect if it needs sharding or not, so everything is automated.
// It should start sharding at 1,000 guilds.
manager.spawn();
manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));