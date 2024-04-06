"use strict";
// starting from exercise 41 
let magicians = ["david blaine", "shin lim", "doug henning"];
function show_magicians(magician) {
    magician.forEach(magian => {
        console.log(magian);
    });
}
// Call makeGreat with a copy of the original array
let greatMagicians = makeGreat([...magicians]);
function makeGreat(magicians) {
    // Create a copy of the original array
    let greatMagicians = [...magicians];
    // Add "the Great" to each magician's name in the copy
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = "The Great " + greatMagicians[i];
    }
    // Return the modified array
    return greatMagicians;
}
// Show the original array of magician's names
console.log("\nOriginal magicians:\n");
show_magicians(magicians);
// Show the modified array of magician's names with 'the Great' added
console.log("\nGreat magicians:\n");
show_magicians(greatMagicians);
