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


class cityPrisStrategy{
    calculatePrice(afstand, tidGaaet){
        var price = (12 * (afstand)) + (6.67 * tidGaaet + 69);
        if(price < 75){
            return 75;
        }else{
            return price;
        }
    }
    
} 

start(new Taxameter(clock, new cityPrisStrategy()));