import {esPrimo} from './primo2';
// se hace el supuesto que el usuario ya ingreso por teclado el numero 7
// ver archivo index.js para mas informacion
describe("Pruebas en Funcion de primo", ()=>{
    test('Debe retornar los numeros primos entre 2 y 7 ', () => {
        let numerosPrimos = []
        let ar3 = [7,6,5,4,3,2,1]

        ar3.map(el => {
            numerosPrimos.push(esPrimo(el))
        })
       const prueba =  numerosPrimos.filter(el => {
            if(el != ''){
              console.log(el)
            }
          })
       const x = console.log(prueba)
        let arr = [7,5,3,2]
        console.log(arr)

        const array =  arr.map(el => {
            console.log(el)
        })

         const x2 = console.log(array)
        expect(x).toEqual(x2)
    
    })
})

