/*
 * Denne fil kalder en funktion i filen start.js, der ligger i library-mappen, 
 * og som I ikke skal ændre ved i denne opgave. Til gengæld kunne man forestille 
 * sig at der her blev indsat et
 */

class kroneTaxaPriceStrategy {
    beregnPris(TidIMin, AfstandKm) {
        if(AfstandKm <= 1) {
            return (5 *(AfstandKm)) + (6.25 * TidIMin) + 39;
        }else{    
            return ((9 * (AfstandKm-1))+5) + (6.25 * TidIMin) + 39;
        }
    }
}
const taxameter = new Taxameter(clock, new TaxaPriceStrategy())
const decoratedTaxameter1 = new SimpleTaxameterDecorator(taxameter);
const decoratedTaxameter2 = new statisticDecorator(decoratedTaxameter1);
start(decoratedTaxameter2);