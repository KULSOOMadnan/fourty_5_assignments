"use strict";
// question: If you could invite anyone to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner.
let persons = ["Kulsoom", "Hunaina", "Shiza"];
for (let i = 0; i <= persons.length; i++)
    persons.forEach((value) => {
        console.log(` ${value}!, You are invited for dinner`);
    });
