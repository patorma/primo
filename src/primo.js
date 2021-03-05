import {esPrimo } from './primo2'
export const primo= (gol) => {
   
    gol.addListener("data", function(d){
        let arr =[]
        let numerosPrimos = []
        for(let i = 2; i<= d ;i++){
            //console.log(i)  
            arr.push(i)    
        }

        //console.log(arr)
        const reversa = arr.reverse()
        // console.log(reversa)
   reversa.map(numero => {
          numerosPrimos.push(esPrimo(numero))
          // console.log(esPrimo(numero))

        })
       numerosPrimos.filter(el => {
         if(el != ''){
           console.log(el)
         }
       })
    })
  
  
    
} 

  


 