export const esPrimo = (numero) => {
	
   let espacio = ''
   
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) {
		return espacio 
	}
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x === 0) return espacio 
	}
	
	 if(numero){
      return numero
	   }
	
    
}