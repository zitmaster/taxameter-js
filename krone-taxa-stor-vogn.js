/*
 * Denne fil kalder en funktion i filen start.js, der ligger i library-mappen, 
 * og som I ikke skal ændre ved i denne opgave. Til gengæld kunne man forestille 
 * sig at der her blev indsat et
 */

class storKronePrisStrategy {
    beregnPris(afstand, tidGaaet) {
        return (12 * (afstand)) + (6.67 * tidGaaet + 69);
    }

}
const taxameter = new Taxameter(clock, new StorVognPriceStrategy())
const decoratedTaxameter = new SimpleTaxameterDecorator(taxameter);
start(decoratedTaxameter);
