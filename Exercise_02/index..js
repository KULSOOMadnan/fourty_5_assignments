"use strict";
// we asssign a data in calling varaible .
let callin = "mahnoor adnan";
//then we apply a method on our data and the method is upper case , lower case and tittle case ....
console.log("UPPER CASE:", callin.toUpperCase()); // uppercasse
console.log("LOWER CASE:", callin.toLowerCase()); // loweer case
console.log("TITTLE CASE:", callin.replace(/\b\w/g, char => char.toUpperCase())); // tittle case
