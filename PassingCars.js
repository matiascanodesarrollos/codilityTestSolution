function solution(A){

	var ceros = 0;
	var passing = 0;

	for(var i = 0; i < A.length;i++){
		if (A[i] == 0) 
			ceros++;
		if (A[i] == 1) 
			passing += ceros;
		if (passing > 1000000000)
			return -1;
	}
	
	return passing;

}