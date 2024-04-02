"use strict";
// we asssign a data in calling varaible .
let calling = "mahnoor adnan";
//then we apply a method on our data and the method is upper case , lower case and tittle case ....
console.log("UPPER CASE:", calling.toUpperCase()); // uppercasse
console.log("LOWER CASE:", calling.toLowerCase()); // loweer case
console.log("TITTLE CASE:", calling.replace(/\b\w/g, char => char.toUpperCase()));
