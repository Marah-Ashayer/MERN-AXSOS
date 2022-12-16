// -----------------------------------------Problem 1 ----------------------------------------------//

console.log(hello);                                   
var hello = 'world';                                 

// var hello 
// console.log(hello)                   // Output : undefined
// hello = 'world'

//-------------------------------------- Problem 2 --------------------------------------------------//

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle
// needle = 'haystack'
// test()
// function test(){
//     var needle 
//     needle = 'magnet'
//     console.log(needle);            // Output : magnet
// }
 // ----------------------------------------Problem 3 ------------------------------------------------//

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan 
// brendan = 'super cool'
// function print(){
//      brendan = 'only okay';
//      console.log(brendan);            // Output : There is no calling for print() function
// }
// console.log(brendan);                 // Output : super cool


// ----------------------------------- --- Problem 4 --------------------------------------------------//

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food = 'chicken'
// food = 'chicken'  
// console.log(food);                    // Output : chicken
// eat()
// function eat(){
//     var food
//     food = 'half-chicken';
//     console.log(food);                 // Output : half-chicken
//     food = 'gone';
// }

// -----------------------------------------Problem 5 --------------------------------------------//

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// Error : 'mean' is not a function 


 // -------------------------------------- Problem 6 ---------------------------------------------//

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre ;
// console.log(genre);                      // Output : undefined
// genre = "disco";
// rewind();
// function rewind() {
//     var genre
//     genre = "rock";
//     console.log(genre);                  //  Output : rock
//     genre = "r&b";
//     console.log(genre);                  //  Output : r&b
// }
// console.log(genre);                      // Output : disco

// -------------------------------------------- Problem 7 ----------------------------------------------//

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo = "san jose";
// console.log(dojo);                      // Output : san jose
// learn();
// function learn() {
//      var dojo
//      dojo = "seattle";
//      console.log(dojo);                 // Output : seattle 
//      dojo = "burbank";
//      console.log(dojo);                // Output :  burbank
// }
// console.log(dojo);                     // Output : san jose

// ---------------------------------- Problem 8 ,Bonus ES6: const --------------------------------//

console.log(makeDojo("Chicago", 65)); // Output : {hiring : true , name : "Chicago", students : 65 }                                               
console.log(makeDojo("Berkeley", 0)); // Error :  trying to override 'dojo/ whoch  is a constant
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// -------------------------------------------------------------------------------------------------------//



