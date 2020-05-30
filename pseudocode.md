pseudo.md

1. starten van de game d.m.v. het kiezen van het woord

   na het drukken op de (re)start knop wordt een woord gekozen (en verschijnt een streepje voor elke letter van het gekozen woord)

2. checken of een letter voorkomt in het woord

   na het ingeven van een letter wordt gechecked of deze voorkomt in het gekozen woord

   als de ingegeven letter voormkomt in het gekozen woord verschijnt de letter op de juiste steepjes

3. updaten van het aantal pogingen van de gebruiker

   als de ingegeven letter niet voorkomt in het gekozen woord wordt het aantal resterende pogingen verminderd met 1

4. updaten van de lijst met letters die al geraden zijn door de gebruiker

   als de ingegeven letter niet voorkomt in het gekozen woord wordt deze toegevoegd aan de lijst reeds geraden letters

5. verliezen van de game wanneer er geen pogingen meer over zijn

   zodra het aantal pogingen === 0 eindigt het spel met verlies

6. winnen van de game

   zodra het aantal nog te raden letters van het gekozen woord === 0 eindigt het spel met winst

7. zolang 5 en 6 niet van toepassing zijn kan de gebruiker opnieuw een letter ingeven

CSS

er verschijnt een streepje voor iedere letter van het te raden woord waarop later de geraden letters verschijnen

er verschijnt voor iedere fout geraden letter een ledemaat van de hangman met een animatie

woorden uit een aparte file halen (zoals de films bij de filmzoeker)
