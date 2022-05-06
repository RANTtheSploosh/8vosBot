module.exports = {
    name : 'interactionCreate',
    execute(interaction) {
        console.log(`${interaction.user.tag} spustil/a interakci ${interaction} v kanálu #${interaction.channel}`)
    } 
}