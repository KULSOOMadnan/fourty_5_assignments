//Favorite Fruit: Make a array of your favorite fruits, and then 
//write a series of independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.

//Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, 
//such as You really like bananas! 
 
 // favorite fruits array 
let fav_Fruit : string[] = ["mango","strawberry","banana"]
 
// this will check wheather fruit is present in array is yes  
 if(fav_Fruit.includes("banana")){
 console.log("You really like banana!"); // print this messages
 }
 if (fav_Fruit.includes("mango")){
    console.log("You really like mango!");
 }
 if(fav_Fruit.includes("strawberry")){
    console.log("YOU really like strawberry!");
}
if(fav_Fruit.includes("apple")){
    console.log("you really like apple!");

// else this message will print
    
}  else{
    console.log("you don't like apple");
    
}