// starting  it with exercise 13  
let person : string[] = ["Kulsoom","Hunaina","Shiza"]

let dontcome = person[0]

//Add a print statement , the name of the guest who can’t make it.

console.log(dontcome,"could not come because of an emergency ")

//replacing the name of the guest who can’t make it with the name of the new person i are inviting.

person.splice(0,1,"iman")

//Print a second set of invitation messages, one for each person who is still in your list.
person.forEach(guest=> console.log(`salam ${guest},would you like to do dinner  with me`));



