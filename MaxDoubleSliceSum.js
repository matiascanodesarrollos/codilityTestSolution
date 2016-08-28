function solution(A){
	if (A.length == 3)
		return 0;

	var maxStartingHere = [];
    var maxEndingHere = [];
    var maxSum = 0, len = A.length;

    for (var i = 0; i < A.length; i++) {
    	maxStartingHere.push(0);
    	maxEndingHere.push(0);
    }

    for(var i = len - 2; i > 0; --i ) {            
        maxSum = Math.max(0, A[i] + maxSum);
        maxStartingHere[i] = maxSum;
    }
    
    maxSum = 0;
    for(var i = 1; i < len - 1; ++i ) {            
        maxSum = Math.max(0, A[i] + maxSum);
        maxEndingHere[i] = maxSum;
    }
    
    var maxDoubleSlice = 0;

    for(var i = 0; i < len - 2; ++i) {
        maxDoubleSlice = Math.max(maxDoubleSlice, maxEndingHere[i] + maxStartingHere[i+2]);
    }

    return maxDoubleSlice;

}