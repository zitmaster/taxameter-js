/**
 * Skal have følgende felter
 * - turStartetTidspunkt: et dato objekt for hvornår turen er startet. 
 *   Hvis turen ikke er startet, er den undefined
 * - afstand: hvor langt taxaen har kørt i KM. Denne værdi sendes til scriptet
 *   udefra (i dette tilfælde fra funktionen start(Taxameter), som ligger i 
 *   library-mappen, og som er det script, der styrer applikationen).
 * 
 * Skal have følgende metoder/funktioner, som alle kaldes fra start.js
 * - startTur(): sætter turStartetTidspunkt til nuværende tidspunkt
 * - slutTur(): skal nulstille taxameteret 
 *   ved at  sætte turStartetTidspunkt til undefined og afstand til 0
 * - koer(delta_afst): skal tælle afstand op med det ekstra antal km, som
 *   bilen har kørt siden sidste beregning. 
 * - beregnPris(): skal returnere prisen beregnet udfra taxaselskabets prissætning
 */

class RealClock {
    now() {
        return new Date();
    }
}

class FakeClock {
    constructor() {
        this.time = new Date();
    }
    now() {
        return new Date(this.time.getTime());
    }
    stilFrem(minutter) {
        this.time.setMinutes(this.time.getMinutes())
    }
}
var clock = new RealClock;

class Taxameter {
    //Constructoren definere hvilke dele vi, på tværs af js-filerne, kan kalde.
    constructor(clock, priceStrategy) {
        this.clock = clock;
        this.afstand = 0;
        this.turStartetTidspunkt = undefined;
        this.priceStrategy = priceStrategy;
    }

    getStartetTidspunkt() {
        return this.turStartetTidspunkt;
    }

    //StartTur starter klokken når turen startes.
    startTur() {
        this.turStartetTidspunkt = this.clock.now();
    }
    //Når turen sluttes, nulsilles alt.
    slutTur() {
        alert("Det bliver: " + taxameter.beregnPris() + " DKK");
        this.afstand = 0;
        this.turStartetTidspunkt = undefined;
    }
    //Laver km-beregneren, som er opsat inde i start.js.
    koer(delta_afst) {
        this.afstand += delta_afst * 5;
    }
    /*Her laves den overordnede beregning af priserne for de forskellige biler.
    Når turen er startet, begynder min pricestrategy. Her kalder jeg 2 variable, 
    som er defineret ved tidImin og afstandKm. De kaldes så i bilernes js-fil, 
    hvor varablerne sættes ind i en ligning*/
    beregnPris() {
        if (this.turStartetTidspunkt == undefined) {
            return 0;
        }
        var tidImin = (this.clock.now() - this.turStartetTidspunkt)/ 1000 /60;
        var afstandKm = this.afstand;
        return this.priceStrategy.beregnPris(tidImin, afstandKm);
    }
}

class SimpleTaxameterDecorator {
    constructor (taxameter) {
        this.taxameter = taxameter;
        this.chauffør = "Mogens"
    }

    getStartetTidspunkt() {
        return this.taxameter.getStartetTidspunkt();
    }

    get afstand() {
        return this.taxameter.afstand;
    }

    startTur() {
        const resultat = this.taxameter.startTur();
        console.log(`${this.chauffør} har taget en tur og er optaget`);
        return resultat;
    }

    slutTur() {
        const resultat = this.taxameter.slutTur();
        console.log(`${this.chauffør} har netop afsluttet en tur og er ledig`);
        return resultat;
    }

    koer(delta_afst) {
        return this.taxameter.koer(delta_afst);
    }

    beregnPris() {
        return this.taxameter.beregnPris();
    }
}

class statisticDecorator {
    constructor (taxameter) {
        this.taxameter = taxameter;
        this.antalKort = 0;
        this.antalLang = 0;
    }

    getStartetTidspunkt() {
        return this.taxameter.getStartetTidspunkt();
    }

    get afstand() {
        return this.taxameter.afstand;
    }

    startTur() {
        return this.taxameter.startTur();  
    }

    get procentKorteTure(){
        return (this.antalKort/(this.antalKort + this.antalLang))*100;
    }
    get procentLangeTure(){
        return (this.antalLang/(this.antalKort + this.antalLang))*100;
    }

    slutTur() {
        if (this.afstand < 1){
            this.antalKort += 1;
        }else{
            this.antalLang += 1;
        }
        console.log(this.procentKorteTure + "% ture på under 1 km");
        console.log(this.procentLangeTure + "% ture på over 1 km");
        return this.taxameter.slutTur();
    }

    koer(delta_afst) {
        return this.taxameter.koer(delta_afst);
    }

    beregnPris() {
        return this.taxameter.beregnPris();
    }
}