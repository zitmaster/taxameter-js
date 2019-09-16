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

    constructor() {
        this.afstand = 0;
        this.turStartetTidspunkt = undefined;
    }

    startTur() {
        this.turStartetTidspunkt = new Date();
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
        return (8.5 * (this.afstand)) + (6.25 * (((new Date () - this.turStartetTidspunkt)/1000)/60)+39);
        }
    }
}