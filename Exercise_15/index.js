"use strict";
// starting it with exercise 14
let persone = ["Kulsoom", "Hunaina", "Shiza", "areeba"];
let notcome = persone[0];
console.log(dontcome, "could not come because of an emergency ");
person.splice(0, 1, "iman");
// informing people that i found a bigger dinner table.
console.log("oh! hello everyone i found a new dinig table for your dinner");
//Add one new guest to the beginning of your array.
person.unshift("malaika");
// • Use append() to add one new guest to the end of your list.  
person.push("zainab");
// Add one new guest to the middle of your array.
let mindle = person.length / 2;
person.splice(mindle, 0, "aymen");
//Print a new set of invitation messages, one for each person in your list.
console.log(" It is an updated list ");
person.forEach(element => {
    console.log(`asalam o alikum ${element} , you  are invited for feast !`);
});
