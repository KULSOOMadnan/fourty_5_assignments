"use strict";
function carInfo(modelName, manufacturer, ...option) {
    let car = {
        modelName: modelName,
        manufacturer: manufacturer,
    };
    // Add additional options to the car object
    option.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Call the function with required information and additional options
let car = carInfo("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
// Print the returned object
console.log(car);
