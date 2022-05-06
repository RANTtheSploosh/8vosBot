const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const { token } = require('./config.json');
const { Client, Intents, Collection} = require('discord.js');
const fs = require('node:fs');
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));


for (const file of eventFiles){
    const event = require(`./events/${file}`);

    if(event.once) {
        client.once(event.name,(...args) => event.execute(...args));
    } else {
        client.on(event.name,(...args) => event.execute(...args));
    }
}

// udělá kolekci kam potom uložíme všechny příkazy ze složky commands
client.commands = new Collection();
// přečte ./commands/ a vezme hodnoty co končí na .js
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Iteruje file dokud neprojede všechny hodnoty. konstanta command je potom dává do arraye commands (v souboru deploy-commands.js)
for(const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isSelectMenu()) return;
    var SM = interaction.values.pop()

});

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;


    const command = client.commands.get(interaction.commandName);

    if(!command) return;

    try {
        await command.execute(interaction)
    } catch(error) {
        console.error(error)
            await interaction.reply({content: 'byl zaznamenán error při spouštění příkazu',ephemeral: true});
    }
});
client.login(token);