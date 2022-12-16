class Ninja {
    constructor(name){
        this.name=name;
        this.health= 0;
        this.speed=3;
        this.strength=3;

    }
    sayName(){
        console.log(`Name :  ${this.name}`);
    }
    showStats(){
        console.log(`Name :  ${this.name}`);
        console.log(`Health :  ${this.health}`);
        console.log(`Speed :  ${this.speed}`);
        console.log(`Strength :  ${this.strength}`);

    }
    
    drinkSake(){
        console.log(`Add 10 to Health : ${this.health+=10}`);
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.speed= 10;
        this.health=200;
        this.strength= 10 ;
        this. wisdom=10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"





// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();