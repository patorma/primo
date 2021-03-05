import {esPrimo } from './primo2'
export const primo= (gol) => {
  
  // aca leemos el numero ingresado por teclado
    gol.addListener("data", function(d){
        // este array almacenan los numeros entre 2 y el numero ingresado 
        let arr =[]
        // este array almacena los numeros primos entre 2 y el numero ingresado 
        let numerosPrimos = []

        for(let i = 2; i<= d ;i++){
            
            arr.push(i)    
        }

        //Usamos el metodo .reverse() para ordenar descendentemente los elementos
        const reversa = arr.reverse()
        // Recorremos cada elemento para validar si es primo o no
         reversa.map(numero => {
           //se manda a llamar este metodo para verificar si es primo
           // el resultado se almacena en el array numerosPrimos
          numerosPrimos.push(esPrimo(numero))
        

        })
       // como el array contiene espacios hay que filtrarlos
       numerosPrimos.filter(el => {
         if(el != ''){
           console.log(el)
         }
       })
     
    })

} 

  


 