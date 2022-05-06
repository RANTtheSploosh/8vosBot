const { SlashCommandBuilder } = require('@discordjs/builders')

    module.exports = {
        data: new SlashCommandBuilder()
            .setName('serverinfo')
            .setDescription('vypíše informace o serveru'),
               async execute(interaction) {
                await interaction.reply(`Server se jmenuje ${interaction.guild.name}\n Verifikační úroveň serveru ${interaction.guild.verificationLevel}\npočet uživatelů na serveru ${interaction.guild.approximateMemberCount}`)
            },
    }; 