function buscarIndex(arreglo){

	//Asumo que el indice de equilibrio es el primero
	var eqIndex = 0;

	//Declaro dos variables temporales para guardar los resultados de ambos lados de la igualdad

	var izq = 0;
	var der = 0;

	for (var i = 1; i < arreglo.length; i++) {
 		der += arreglo[i];
 	}
 	if(der == 0)
 		return 0;

 	eqIndex++;

	//Debido a la falta de tiempo no se tendrá muy en cuenta la performance del algoritmo

	while(true){

		izq = 0;
		der = 0;
		for (var i = 0; i < eqIndex; i++) {
			izq += arreglo[i];
		}
		for (var i = eqIndex + 1; i < arreglo.length; i++) {
			der += arreglo[i];
		}
		if (izq == der)
			return eqIndex;
		eqIndex++;
		if(eqIndex == arreglo.length){
			if(izq == 0)
				return eqIndex;
			return -1;
		}
	}

	

}

