export const esPrimo = (numero) => {
	// se agrega espacio a los que no son primos
   let espacio = ''
   
	// Casos especiales que daria un positivo falso
	if (numero == 0 || numero == 1 || numero == 4) {
		return espacio 
	}
	//  vemos entre 2 y la mitad del numero para comprobar si es primo
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x === 0) return espacio 
	}
	
	 if(numero){
		 // devolvemos los numeros resultantes(incluido los espacios)
      return numero
	   }
	
    
}