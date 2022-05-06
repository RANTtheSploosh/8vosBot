module.exports = {
    name :'ready',
    once : true,
    execute(client) {
        console.log(`Dobré ráno! Jsem přihlášen jako ${client.user.tag}`);
    }
}