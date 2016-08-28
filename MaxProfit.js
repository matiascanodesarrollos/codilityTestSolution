function solution(A){

	if(A.length < 2)
		return 0;

	var minVal = 400001;
	var maxProfit = 0;

	for (var i = 0; i < A.length; i++) {
		if(A[i] < minVal)
			minVal = A[i];
		maxProfit = Math.max(maxProfit,A[i] - minVal);
	}

	return maxProfit;
	
}