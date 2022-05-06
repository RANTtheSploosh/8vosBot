const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')
var rchoice1,rchoice2,rrrchoice2,rrchoice2,mchoice2,Morse,MorseCapital,MorseHacky = new Array;
var mediator

    module.exports = {
        data: new SlashCommandBuilder()
            .setName('morsify')
            .setDescription('proměnní text na morseovku a naopak.')

            .addSubcommand(subcommand =>
                subcommand
                .setName('morsify')
                .setDescription('přeložit morseovku a naopak')
                .addStringOption(option => option.setName('morsify').setDescription('Převede normální text na Morseovu abecedu.'))
                .addStringOption(option => option.setName('unmorsify').setDescription('Převede Morseovu abecedu na normální text.'))
                )
            .addSubcommand(subcommand =>
                subcommand
                    .setName('list')
                    .setDescription('zobrazí kompletní Morseovu abecedu')
                    )
            .addSubcommand(option =>
                option
                      .setName('help')
                      .setDescription('Ukáže jak příkaz používat')),


            async execute(interaction) {
                var switchem = interaction.options.getSubcommand();

                switch(switchem){ 
                    case 'list' : await interaction.reply('<tady bude obrazek>');
                                  break;
                    case 'morsify':
                

                var choice = interaction.options.getString('morsify');
                var choice2 = interaction.options.getString('unmorsify');
                console.log(`choice je ${choice} a choice2 je ${choice2}`);   
 
                rchoice1 = [];
                rchoice2 = [];
                mchoice2 = [];
                rrchoice2 = [];
                rrrchoice2 = [];


                // formátování do code blocku
                function safeFormat(pole) {
                    pole.push('```');
                    pole.unshift('```');
                }
                // funkce pro zpracovávání teček a čárek
                function splitDem(pole, pole2, prom) {
                    prom = pole.join('');
                    pole2.push(prom);
                    return pole2;
                }
                function tecka(prom, pole, pole2) {
                    promdalsi = pole.indexOf(prom)
                    promdalsi2 = pole.indexOf(prom)
                    let promdalsisi = pole.at(promdalsi);
                    let counter = 0
                    while(promdalsisi === prom) {
                        counter++
                        promdalsi++
                        promdalsisi = pole.at(promdalsi)
                    }
                    pole.splice(promdalsi2, 1)
                    return counter;
            
            }
            // funkce pro přeměnu písmen na morseovku
                function getMorse(prom) {
                    Morse = [' ',' ','.','.-.-.-','-','-....-','a','.-','b','-...','c','-.-.','d','-..','e','.','f','..-.','g','.--','h','....','i','..','j','.---','k','-.-','l','.-..','m','--','n','-.','o','---','p','.--.','q','--.-','r','.-.','s','...','t','-','u','..-','v','...-','w','.--','x','-..-','y','-.--','z','--..','1','.----','2','..---','3','...--','4','....-','5','.....','6','-....','7','--...','8','---..','9','----.','0','-----',',','--..--','?','..--..',';','-.-.-',':','---...','/','-..-.',"'",'.----.','(','-.--.',')','-.--.-','_','..--.-','@','.--.-.','!','-.-.--','&','.-...','=','-...-','+','.-.-.','"','.-..-.','$','...-..-']
                    MorseCapital = ['A','.-','B','-...','C','-.-.','D','-..','E','.','F','..-.','G','.--','H','....','I','..','J','.---','K','-.-','L','.-..','M','--','N','-.','O','---','P','.--.','Q','--.-','R','.-.','S','...','T','-','U','..-','V','...-','W','.--','X','-..-','Y','-.--','Z','--..']
                    MorseHacky = ['á','.-','Á','.-','č','-.-.','Č','-.-.','ď','-..','Ď','-..','ě','.','Ě','.','é','.','É','.','í','..','Í','..','ň','-.','Ň','-.','ó','---','Ó','---','ř','.-.','Ř','.-.','š','...','Š','...','ť','-','Ť','-','ů','..-','Ů','..-','ú','..-','Ú','..-','ý','-.--','Ý','-.--','ž','--..','Ž','--..']
                    var counter = 0
                    var promlol = Morse.indexOf(prom);
                    promlol++;

                    if(promlol === 0){
                        promlol = MorseCapital.indexOf(prom)
                        promlol++;
                        counter++;
                    }
                    if (promlol === 0){
                        promlol = MorseHacky.indexOf(prom);
                        promlol++;
                        counter++;
                    }
                    switch(counter){
                        case 0 : prom = Morse.at(promlol); 
                                 break;
                        case 1 : prom = MorseCapital.at(promlol);
                                 break;
                        case 2 : prom = MorseHacky.at(promlol);
                                 break;
                    
                    }
                    return prom;

                } 

                function getNoMorse(prom) {
                    Morse = [' ','.','.-.-.-','-','-....-','a','.-','b','-...','c','-.-.','d','-..','e','.','f','..-.','g','.--','h','....','i','..','j','.---','k','-.-','l','.-..','m','--','n','-.','o','---','p','.--.','q','--.-','r','.-.','s','...','t','-','u','..-','v','...-','w','.--','x','-..-','y','-.--','z','--..','1','.----','2','..---','3','...--','4','....-','5','.....','6','-....','7','--...','8','---..','9','----.','0','-----',',','--..--','?','..--..',';','-.-.-',':','---...','/','-..-.',"'",'.----.','(','-.--.',')','-.--.-','_','..--.-','@','.--.-.','!','-.-.--','&','.-...','=','-...-','+','.-.-.','"','.-..-.','$','...-..-','.','§',' ',]
                    MorseCapital = [',','A','.-/','B','-.../','C','-.-./','D','-../','E','./','F','..-./','G','.--/','H','..../','I','../','J','.---/','K','-.-/','L','.-../','M','--/','N','-./','O','---/','P','.--./','Q','--.-/','R','.-./','S','.../','T','-/','U','..-/','V','...-/','W','.--/','X','-..-/','Y','-.--/','Z','--../',',']
                    MorseHacky = ['á','.-_','Á','.-/_','č','-.-._','Č','-.-./_','ď','-.._','Ď','-../_','ě','._','Ě','./_','é','._','É','./_','í','.._','Í','../_','ň','-._','Ň','-./_','ó','---_','Ó','---/_','ř','.-._','Ř','.-./_','š','..._','Š','.../_','ť','-_','Ť','-/_','ů','..-_','Ů','..-/_','ú','..-_','Ú','..-/_','ý','-.--_','Ý','-.--/_','ž','--.._','Ž','--../_']                    
                    var promcounter
                    var counter = 0

                    promcounter = Morse.indexOf(prom);
                    promcounter--;
                if(promcounter === -2) {
                    promcounter = MorseCapital.indexOf(prom);
                    promcounter--;
                    counter++;
                } 
                if(promcounter === -2) {
                    promcounter = MorseHacky.indexOf(prom);
                    promcounter--;
                    counter++;
                }
            
                switch(counter) {
                    case 0 : prom = Morse.at(promcounter);
                             break;
                    case 1 : prom = MorseCapital.at(promcounter);
                             break;
                    case 2 : prom = MorseHacky.at(promcounter)
                             break;

                }
                    return prom

                }
            
                // Děje se když uživatel spustí unmorsify
                if(choice === null) {
                    for(const A of choice2) {
                        rrchoice2.push(A);
                    }
                    console.log(rrchoice2 + ' tohle je rrchoice')
                    for(const achoice2 of choice2) {

                        if (achoice2 === '|') {
                            let counterro = tecka(achoice2, rrchoice2, rrrchoice2)
                            console.log(rrchoice2 + ' tohle je rrchoice')
                            console.log(rchoice2)
                            console.log(counterro)
                            switch(counterro) {
                                case 1 : splitDem(rchoice2,mchoice2,mediator);
                                         break;
                                case 2 : splitDem(rchoice2,mchoice2,mediator);
                                         break;
                                case 3 : splitDem(rchoice2,mchoice2,mediator);
                                         mchoice2.push('§')
                                         break;
                                default : y = rchoice2.join('')
                                          mchoice2.push(y)
                                          break;
                            }
                            rchoice2 = [];
                            continue;

                        } 
                        rchoice2.push(achoice2);
                        console.log(rchoice2);
                        console.log(mchoice2);
                    }
                
                // čistí rchoice2, aby zde nezbyl žádný znak
                if(rchoice2 !== []){
                    var tempvar = rchoice2.join('');
                    mchoice2.push(tempvar);
                }

                console.log(mchoice2)
            
                // Děje se když uživatel spustí morsify
                } else if(choice !== null) {
                    for(const achoice1 of choice) {
                        rchoice1.push(achoice1);
                        console.log(rchoice1);
                    }
                }

                if(choice !== null) {

                    // Cyklus pro převod z písmen na morseovku                
                    const lim = rchoice1.length;

                    for(let limSub = lim; limSub > 0;limSub--) {
                        var zchoice = rchoice1.shift();
                        zchoice = getMorse(zchoice);
                        console.log(zchoice);
                        rchoice1.push(zchoice);
                        console.log(rchoice1);
                    }
                    safeFormat(rchoice1)

                } else if (choice === null){
                    var lim2 = mchoice2.length
                    var limSub2 = lim2

                    while(limSub2 > 0){
                        limSub2--;
                        let zchoice2 = mchoice2.shift();
                        if(zchoice2 === '') {
                            continue;
                        }
                        zchoice2 = getNoMorse(zchoice2);
                        mchoice2.push(zchoice2);
                        console.log(mchoice2)
                    }      
                    safeFormat(mchoice2)                      
                }           


                choice = rchoice1.join('|');
                choice2 = mchoice2.join('');
                console.log(`choice je ${choice} a choice2 je ${choice2}`);

                if(choice2 === '') {
                await interaction.reply(choice);
                } else if (choice === ''){ 
                    await interaction.reply(choice2);
                } else {
                    await interaction.reply('Vyber si morsify nebo unmorsify');
                }
            }            
        }
    }
    
