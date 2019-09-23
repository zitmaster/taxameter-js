/*
 * Denne fil kalder en funktion i filen start.js, der ligger i library-mappen, 
 * og som I ikke skal ændre ved i denne opgave. Til gengæld kunne man forestille 
 * sig at der her blev indsat et
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


class storKronePrisStrategy {
    calculatePrice(afstand, tidGaaet) {
        var price = (9 * Math.max(afstand - 1, 0));
        var pricsFoesteKm = (5 * Math.min(1, afstand));
        var prisTid = (6.25 * tidGaaet + 39);
        return price + pricsFoesteKm + prisTid;
    }

}

start(new Taxameter(clock, new storKronePrisStrategy()));