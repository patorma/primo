import {primo} from './primo';
import process from 'process';

console.log("------   Bienvenido -------   ")
console.log("Escribe el número para calcular los numeros primos entre 2 y esté");
// se lee el número ingresado por teclado
let numero = process.openStdin();

// llamamos a esta funcion para obtener los numeros entre 2 y este número
primo(numero)






