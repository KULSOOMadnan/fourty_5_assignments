//: Write an if-else chain that determines a person’s stage of life. 
//Set a value for the variable age, and then:

let person_sta  = 7

if(person_sta < 2 ){
// If the person is less than 2 years old, print a message that the person is a baby.
   console.log("You are Baby");

// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
}else if(person_sta >= 2 && person_sta < 4 ){
    console.log("You ara Toddler");

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
}else if(person_sta >= 4 && person_sta < 13 ){
    console.log("You are a Kid");
    
//  If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
    
}else if(person_sta >= 13 && person_sta < 20){
    console.log("You are Teenager");
 
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
}else if(person_sta >= 20 && person_sta < 65){
    console.log("You are Adult");

// • If the person is age 65 or older, print a message that the person is an elder.
}else {
    console.log("You are Elder ");
    
}