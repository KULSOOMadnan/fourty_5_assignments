     // starting from Exercise 15

// let person : string[] = ["Kulsoom","Hunaina","Shiza","areeba"]

// let dontcome = person[0]

// console.log(dontcome,"could not come because of an emergency ")

// person.splice(0,1,"iman")

// console.log("oh! hllo everyone i found a new dinig table for your dinner");

// person.unshift("malaika")

// person.push("zainab")

// let mindle : number = person.length / 2
// person.splice(mindle ,0,"aymen" )



        // EXERCISE 16

//I just found out that your new dinner table won’t arrive 
console.log("sorry our dining table wont arrive on time \n we have space of only two people ");

//Remove guests from your list one at a time until only two names remain
while(person.length > 2){
    let removeperson = person.pop(); //  Each time pop a name from  list,
     
    //print a message to that person 
    console.log(`sorry ${removeperson} i can not invite you on dinner `); 
    
}
//Print a message to each of the two people still in my list,
console.log("invitation to the last two guest");
person.forEach(lastt=> console.log(`luckly you  are still invited in our dinner ${lastt}`));

//Remove the last two names from my list, so you have an empty list.


person.pop();
person.pop();
// i have   empty list now

console.log("now its an empty list",person);