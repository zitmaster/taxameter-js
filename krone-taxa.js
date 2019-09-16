/*
 * Denne fil kalder en funktion i filen start.js, der ligger i library-mappen, 
 * og som I ikke skal ændre ved i denne opgave. Til gengæld kunne man forestille 
 * sig at der her blev indsat et
 */

 class RealClock{
    now(){
        return new Date();
    }
}

class FakeClock{
    constructor(){
        this.time = new Date();
    }
    now(){
        return new Date(this.time.getTime());
    }
    stilFrem(minutter){
        this.time.setMinutes(this.time.getMinutes())
    }
}
var clock = new RealClock;


class kronePrisStrategy{
    calculatePrice(afstand, tidGaaet){
        return (8.5 * (afstand)) + (6.25 * tidGaaet + 39);
    }
    
} 

start(new Taxameter(clock, new kronePrisStrategy()));