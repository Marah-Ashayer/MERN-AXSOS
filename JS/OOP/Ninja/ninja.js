class Ninja {
    constructor(name){
        this.name=name;
        this.health=0;
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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();