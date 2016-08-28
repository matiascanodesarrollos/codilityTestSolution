function blocksNo(A, maxBlock){
	var blocksNumber = 1;

	var preBlockSum = A[0];
	var max = -1;

	for (var i = 1; i < A.length; i++) {
		if(preBlockSum + A[i] > maxBlock){
			preBlockSum = A[i];
			blocksNumber++;
		}else{
			preBlockSum +=  A[i];
			if(preBlockSum > max)
				max = preBlockSum;
		}

	}

	return [blocksNumber,max];
}

function solution(K, M, A){
	var blocksNeeded = 0;

	var resultLowerBound = Math.max.apply(null,A);
	var resultUpperBound = A[0];

	for (var i = 1; i < A.length; i++) {
		resultUpperBound += A[i];
	}

	if(K == 1)
		return resultUpperBound;
	if(K >= A.length)
		return resultLowerBound;

	while(resultLowerBound <= resultUpperBound){
		var resultMaxMid = Math.floor((resultLowerBound + resultUpperBound) / 2);
		var helper =  blocksNo(A, resultMaxMid);
		var blocksNeeded = helper[0];
		if (blocksNeeded <= K){
			resultUpperBound = resultMaxMid - 1;
			result = helper[1];
		}else
			resultLowerBound = resultMaxMid + 1;
	}

	return result;
}