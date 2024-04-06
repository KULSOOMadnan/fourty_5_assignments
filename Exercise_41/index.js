"use strict";
// starting with Exercise 40
let magician = ["david blaine", "shin lim", "doug henning"];
console.log("\noriginal magicians name : ");
function show_magician(magician) {
    magician.forEach(magian => {
        console.log(magian);
    });
}
show_magician(magician);
//Exercise 41
function make_great(magician) {
    return magician.map((magics) => `THE GREAT ${magics}`);
}
let great_magicians = make_great(magician);
console.log("\nmodified list of an array :");
show_magician(great_magicians);
// continue
