"use strict";
function city_country(city, country) {
    return `${city} , ${country}`;
}
let cont = city_country(`"Lahore`, `Pakistan"`);
let con = city_country(`"Bejing`, `China"`);
let cot = city_country(`"Delhi`, `India"`);
console.log(cont);
console.log(con);
console.log(cot);
