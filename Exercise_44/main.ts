interface car {
    modelName  : string,
    manufacture : string,
    [key :string]: any 
}





function carInfo(modelName:string , manufacturer: string ,...option: [string , any][] ):object
     {
        let car: any = {
            modelName: modelName,
            manufacturer: manufacturer,
        };
    
        // Add additional options to the car object
         option.forEach(([key,value]) => {
           car[key] = value
        })
    
        return car;
    }
    
    // Call the function with required information and additional options
    let car = carInfo("Toyota", "Camry",  ["color" ,"blue"],["year" ,2022] );
    
    // Print the returned object
    console.log(car);
    