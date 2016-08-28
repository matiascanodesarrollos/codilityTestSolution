function solution(A, B){
	if(A.length < 2)
		return A.length;

	var count = 1;
	var end = B[0];

	var index = 1;

	while(index < A.length){
		while(index < A.length && A[index] <= end)
			index++;

		if(index == A.length)
			break;

		count++;
		end = B[index];
	}
	
	return count;
}