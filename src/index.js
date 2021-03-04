import {primo} from './primo';
import process from 'process';

console.log("------   Bienvenido -------   ")
console.log("Escribe el número para calcular sus numeros primos entre 2");
let numero = process.openStdin();

primo(numero);


