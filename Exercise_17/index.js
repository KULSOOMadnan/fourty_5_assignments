"use strict";
// five places in the world you’d like to visit.
let places = ["time squares", "aifiel tower", "denmark", "shalimar garden", "paris", "makkah"];
// original array 
console.log(places);
// print an array with changes of alphabatically oder 
console.log("alphabetical order in array", [...places].sort());
//  Show that your array is still in its original order by printing it.
console.log("our array is still in original  ", places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("array in reverse order", [...places].reverse());
// Show that your array is still in its original order by printing it again.
console.log(" its in still in real order", places);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("our array has been reversed ", places.reverse());
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("its back to its original order", places.reverse());
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("sorted in alphabeticak order", places.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(" its again sorted and stored in reverse alphabatic or", places.reverse());
