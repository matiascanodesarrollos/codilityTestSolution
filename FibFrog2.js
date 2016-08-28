function solution(A){
	
	var fib = [0,1,2];
	var i = 3;

	while(true){
		var val = fib[i - 1] + fib[i - 2];
		if(val <= A.length + 1)
			fib[i] = val;
		else
			break;
		i++;
	}

	var status = {
		posicion: -1,
		movimientos: 0
	};

	var lugares = [];
	lugares.push(status);

	var proximoIntento = 0;

	var lugaresAccedidos = new Array(A.length);

	lugaresAccedidos.fill(false);



	while(true){
		if(proximoIntento == lugares.length)
			return -1;

		var intento = lugares[proximoIntento];
		proximoIntento++;
		var posicionActual = intento.posicion;
		var movimientosActuales = intento.movimientos;

		for (var i = fib.length - 1; i >= 0 ; i--) {
			if(posicionActual + fib[i] == A.length)
				return movimientosActuales + 1;
			else if(posicionActual + fib[i] > A.length || A[posicionActual + fib[i]] == 0 || lugaresAccedidos[posicionActual + fib[i]])
				continue;

			lugares.push({posicion: posicionActual + fib[i],	movimientos: movimientosActuales + 1});
			lugaresAccedidos[posicionActual + fib[i]] = true;
		}
	}

}