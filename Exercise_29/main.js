"use strict";
// Make a array of five or more usernames, including the name 'admin'.
let user = ["mahnoor", "kulsoom", "farman", "noman", "admin"];
// Loop through the array, and print a greeting to each user:
for (let names of user) {
    //If the username is 'admin', print a special greeting, 
    if (names.includes("admin")) {
        console.log("Hello admin, would you like to see a status report?");
        //Otherwise, print a generic greeting, 
    }
    else {
        console.log(`Hello ${names}, thank you for logging in again.`);
    }
}
