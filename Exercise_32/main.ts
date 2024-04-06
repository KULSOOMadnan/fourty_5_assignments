let n0: number[] = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ]
n0.forEach(element => {
    

  let ordinalNum :string ;
    if(element === 1 ){
    ordinalNum = "st"
   // console.log(`${i}st`);

    } else if(element === 2){
    ordinalNum = "nd"
    // console.log(`${i}nd`);

    } else if(element === 3){
    ordinalNum = "rd"
    //console.log(`${i}rd`);

    } else {
    ordinalNum = "th"
    //console.log(`${i}th`);
    }   
    
    console.log(`${element}${ordinalNum}`);
});
