"use strict";
// statring from exercise 31
let current_users = ["Kulsoom", "mahnoor", "Huzaifa", "Rimsha", "nasir"];
let new_users = ["palwasha", "faryal", "Rimsha", "FIZA", "rabiya", "Kulsoom", "mahnoor"];
new_users.forEach(User => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === User.toLowerCase())) {
        console.log(`${User} ,you  will need to enter a new username.`);
    }
    else {
        console.log(`${User} is available.`);
    }
});
