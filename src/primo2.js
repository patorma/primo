export const esPrimo = numero => {
   
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return ''
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return ''
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
    if(numero){
        
      return numero
    } 
	
    
}