function solution(K, A){

	var accumulator = 0;
	var counter = 0;

	for (var i = 0; i < A.length; i++) {
		if(accumulator + A[i] >= K){
			accumulator = 0;
			counter++;
		}else
			accumulator+=A[i];
	}

	return counter;

}