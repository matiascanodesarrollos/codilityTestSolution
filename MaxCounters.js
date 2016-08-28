
function solution(N, A){

	var resultado = new Array(N);
	resultado.fill(0);
	var max = 0;

	for (var i = 0; i < A.length; i++) {
		if(A[i] < N + 1){
			if(++resultado[A[i] - 1] > max)
				max++;
		}
		else
			resultado.fill(max);
	}

	return resultado;

}
