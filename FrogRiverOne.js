function solution(X, A){
	
	var size = A.length;

	if(size < X)
		return -1;

	var time = 0;
	var results = new Array(X+1);
	results.fill(0);
	var temp = 0;	

	for (var time = 0; time < size; time++) {
		if(results[A[time]] == 0){
			results[A[time]]++;
			temp++;
		}
		
		if(temp == X)
			return time;
		
	}

	return -1;

}