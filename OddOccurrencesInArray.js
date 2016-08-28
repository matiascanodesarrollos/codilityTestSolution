

function solution(A){
	A.sort();
	//I asume 0 index to be the one
	var index = 0;

	for (var i = 0; i < A.length; i+=2) {
		if(A[i] != A[i + 1]){
			index = i;
			break;
		}
	}

	return A[index];
}