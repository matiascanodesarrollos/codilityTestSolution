function solution(A){
	
	if(A.length < 3)
		return 0;

	//If a desc sort the array A[P] + A[Q] > A[R] and A[R] + A[P] > A[Q] becames true
	// Then i only need to check for A[Q] + A[R] > A[P] to find a trangle

	A.sort(function(a,b){return b-a;});

	for (var i = 0; i < A.length - 2; i++) {
		if(A[i + 1] + A[i + 2] > A[i])
			return 1;
	}

	return 0;

}

