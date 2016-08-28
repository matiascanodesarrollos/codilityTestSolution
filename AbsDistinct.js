function solution(A){

	var conters = [];
	var result = 0;

	for (var i = 0; i < A.length; i++) {
		if(conters[Math.abs(A[i])] !== 1){
			conters[Math.abs(A[i])] = 1;
			result++;
		}
	}

	return result;

}