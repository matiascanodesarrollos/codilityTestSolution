function solution(A){
	var max_end = 0;
	var max_slice = A[0];

	for (var i = 0; i < A.length; i++) {
		var value = max_end + A[i];
		max_end = Math.max(0,value);
		if(max_slice > 0)
			max_slice = Math.max(max_slice,max_end);
		else
			max_slice = Math.max(max_slice,value);
	}

	return max_slice;
}