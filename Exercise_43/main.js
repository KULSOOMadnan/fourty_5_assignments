"use strict";
function sandwich(...sand) {
    console.log("sandwish order summary");
    console.log("bread");
    // Print each item on the sandwich
    sand.forEach(item => console.log(item));
    console.log("bread");
    console.log("\nsandwich is ready \n");
}
// Call the function with different numbers of arguments
sandwich("chicken", "sauce", "cucumber");
sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
;
