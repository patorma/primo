import {esPrimo } from './primo2'
export const primo= (gol) => {
   
    gol.addListener("data", function(d){
        let arr =[]
        for(let i = 2; i<= d ;i++){
            //console.log(i)  
            arr.push(i)    
        }

        //console.log(arr)
        const reversa = arr.reverse()
        console.log(reversa)
        
      reversa.forEach(numero => {
        console.log(esPrimo(numero));
      })
       
    })
  
  
    
} 

  


 