function solution(A){
	
	//First i´ll count the ocurrency of all the numbers
	var numbers = [[0],[-1]];

	for (var i = 1; i <= A.length * 2; i++) {
		numbers[0].push(0);
		numbers[1].push(-1);		
	}

	for (var i = 0; i < A.length; i++) {
		numbers[0][A[i]]++;
	}

	for (var i = 0; i < A.length; i++) {
        if (numbers[1][A[i]] == -1) {
            numbers[1][A[i]] = 0;
            for (var j = 1; j <= Math.sqrt(A[i]) ; j++) {
                if (A[i] % j == 0 && A[i] / j != j) {
                    numbers[1][A[i]] += numbers[0][j];
                    numbers[1][A[i]] += numbers[0][A[i]/j];
                } else if (A[i] % j == 0 && A[i] / j == j) {
                    numbers[1][A[i]] += numbers[0][j];
                }
            }
        }
    }

    for (var i = 0; i < A.length; i++) {
        A[i] = A.length - numbers[1][A[i]];
    }
    return A;
	
}