// starting with Exercise 40

let magician : string[] = ["david blaine","shin lim","doug henning"]
console.log("\noriginal magicians name : ")
function show_magician(magician :string[]){
  magician.forEach(magian => {
    console.log(magian);
  });
  
}
show_magician(magician)

//Exercise 41

function make_great(magician : string[]) {
 return magician.map((magics) => `THE GREAT ${magics}`);
        
}

let great_magicians : string[] = make_great(magician)

console.log("\nmodified list of an array :");

show_magician(great_magicians)

// continue



 

