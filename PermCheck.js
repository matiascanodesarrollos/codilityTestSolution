function solution(A){
	
	var results = new Array(A.length);
	results.fill(0);
	
	var count = 0;
	
	for (var i = 0; i < A.length; i++) {
		if(results[A[i] - 1] == 0){
			results[A[i] - 1]++;
			count++;
		}
	}

	return count == A.length?1:0;
}