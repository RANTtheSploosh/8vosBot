# 8vosBot
Bot na 8vos Discord server. Také můj volnočasový projekt.




JAK HO POUŽÍVAT?

Ještě nejde stáhnout, npm package nefunguje. Všechno pod tímto textem bude platit, až npm package bude funkční.


Pokud si chceš bota sám vyzkoušet, budeš potřebovat program Node.js, který najdeš na jejich stránkách => https://nodejs.org/en/
Jo a taky, github releasy nefungují. Pokud si bota chceš zprovoznit musíš podle návodu dole.


STAHOVÁNÍ BOTA

Po stáhnutí stačí, aby jsi do command promptu napsal následující příkazy.


npm install 8vosbot -g

npm list -g


Poté stačí zkopírovat cestu, kterou poslední příkaz (npm list -g) vypíše. Tam najdeme našeho bota. Také jde napsat:

npm install 8vosbot

Jen si u tohoto dávej pozor, kam program stahuješ. Bez "-g" se totiž balík stahuje do složky, kterou máš vybranou jako directory v command promptu, když příkaz spouštíš.

Po stáhnutí by se ti někde měla objevit(Podle toho, jakou instalační metodu jsI zvolil.) složka node_modules.
Ve složce node_modules se bude nacházet složka 8vosbot, ve které jsou všechny soubory potřebné k provozu bota.


DOPlŇOVÁNÍ config.json

Najdi config.json a otevři ho v poznámkovém bloku.
Potom jdi na https://discord.com/developers/applications a přihlaš se.
Založ novou aplikaci, na jméně nezáleží.
Potom jdi do OAUTH2 > GENERAL a zkopíruj "CLIENT ID".
tu doplň v configu do řádku clientId.
Potom jsi znovu na Discord Developer Portal a do BOT > ADD BOT (pokud jsi ještě neudělal/a) > RESET TOKEN > COPY TOKEN.
Takto zkopírovaný token dej do řádku token v configu.
guildId nemusíš rešit pokud neplánuješ bota modifikovat.

ZVANÍ BOTA NA SERVER

V neposlední řadě musíš jít znovu na Discord Developer Portal a najít tlačítka BOT > URL GENERATOR.
Zaškrtni "bot" ve "SCOPES" a "Administrator" v "BOT PERMISSIONS".
Zkopíruj link v "GENERATED URL"
Potom musíš dát zkopírovaný link do Adresového řádku na svém internetovém prohlížeči a pozveš bota na server, na kterém ho chceš mít.

ZAPÍNANÍ BOTA

Potom už stačí jít do command promptu, najít složku ve které máš bota uloženého (C:/bla/blah/bla/8vosbot.) a napsat příkaz: node .
Jakmile ti bot napíše "Dobré ráno! Jsem přihlášen jako <jméno tvého bota>", jsi hotov a můžeš 8vosbota používat.

