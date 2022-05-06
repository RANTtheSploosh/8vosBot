const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageActionRow, MessageSelectMenu} = require('discord.js');
    module.exports = {
        data: new SlashCommandBuilder()
            .setName('pomoc')
            .setDescription('Zobrazí vysvětlivky dostupných příkazů'),

            async execute(interaction) {

                const start = {
                    fields : {
                        name:'S čím chceš poradit?',
                        value:':ok_hand:'
                    },
                    footer : {
                        text : 'N2co',
                        icon_url:'https://i.imgur.com/6YKsUjK.png'
                    }
                 }
                  

                const menu = new MessageActionRow()
                            .addComponents(
                                new MessageSelectMenu()
                                    .setCustomId('výběr')
                                    .setPlaceholder('nic nevybráno')
                                    .addOptions([
                                        {
                                            label: 'Morsify',
                                            value: 'Morsify'
                                        }
                                        ])
                            )
                        
                
                await interaction.reply({embeds: [start], components: [menu] });
                        }
    }