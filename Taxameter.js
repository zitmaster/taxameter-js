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
class Taxameter {

    //Clock er lige som new Date()
    constructor(clock, prisStrategy) {
        this.prisStrategy = prisStrategy;
        this.calculatePrice =prisStrategy.calculatePrice;
        this.clock = clock;
        this.afstand = 0;
        this.turStartetTidspunkt = undefined;
    }

    startTur() {
        this.turStartetTidspunkt = this.clock.now();
    }

    slutTur() {
        this.afstand = 0;
        this.turStartetTidspunkt = undefined;
    }

    koer(delta_afst) {
        this.afstand += delta_afst*5;
    }

    beregnPris() {
        //Her beregner jeg prisen per minut
        if (this.turStartetTidspunkt == undefined){
            return 0;
        }else{
            var tidGaaet = (((this.clock.now() - this.turStartetTidspunkt)/1000)/60);
        return this.calculatePrice(this.afstand, tidGaaet);
        }
    }
}