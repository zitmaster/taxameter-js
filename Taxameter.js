/**
 * Skal have følgende felter
 * - turStartetTidspunkt: et dato objekt for hvornår turen er startet. Hvis turen ikke er startet, er den undefined
 *     hint: brug new Date() for at få nuværende tidspunkt
 * - afstand: hvor lang taxaen har kørt i KM
 * 
 * Skal have følgende metoder/funktioner
 * - startTur(): sætter turStartetTidspunkt til nuværende tidspunkt
 * - slutTur(): sætter turStartetTidspunkt til undefined og afstand til 0
 * - koer(afstand): tæller afstand op med det givet antal km
 * - beregnPris(): returnere prisen beregnet udfra taxaselskabets prissætning
 */
class Taxameter {
    turStartetTidspunkt = undefined;
    afstand = 0;

    startTur() {
    }

    slutTur() {
    }

    koer(afstand) {
    }

    beregnPris() {
        return 0;
    }
}