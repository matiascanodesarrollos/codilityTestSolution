nfunction solution(A){

	if(A.length < 3)
		return 0;

	var count = 0;

	A.sort(function(a, b){return b-a});
	

	for (var i = 0; i < A.length - 2; i++) {
		for (var j = i + 1; j < A.length - 1; j++) {
			for (var q = j + 1; q < A.length; q++) {
				if(A[i] < A[j] + A[q])
					count++;
				else 
					break;
			}
		}
	}

	return count;
}