"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.
function makeShirt(size, message) {
    console.log(`you have order a ${size} shirt the message is ${message} `);
}
makeShirt("MEDIUM", "i love typescript ");
makeShirt("LARGE", "I Love Typescript");
makeShirt("SMALL", "NO Money No Honey");
