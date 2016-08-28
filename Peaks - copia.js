function solution(A){
	if(A.length < 3)
		return 0;


	// If N is prime, so the array cannot be divided
	var prime = true;

	var i = 2;

	var firstDiv = 1;

	while( i * i <= A.length){
		if(A.length % i == 0){
			prime = false;
			firstDiv = i;
			break;
		}
		i++;
	}
	

	
	// I´ll search for the possition of every peaks and store it in an array

	
	var peaks = [];

	for (var i = 1; i < A.length - 1; i++) {
		if(A[i] > A[i - 1] && A[i] > A[i + 1])
			peaks.push(i);
	}

	// If no peaks was found
	if(peaks.length == 0)
		return 0;

	if(prime)
		return 1;

	// IF N is not prime, so the maximun numbers of possible blocks is N / firstDiv

	var maxPossBlocks = A.length / firstDiv;

	// I´ll need to try with the maximun possibles blocks and if the array can be divided i´ll return this amount

	while(maxPossBlocks > 0){
		//I need to look for the slices interval kwoning the amount of slices 
		if(A.length % maxPossBlocks == 0)
			var sizeSlice = A.length/maxPossBlocks;
		else{
			maxPossBlocks--;
			continue;
		}


		var begin = 0;
		var end = begin + sizeSlice - 1;

		var validBlock = false;

		while(end <= A.length - 1){
			var stop = 0;
			for (var i = begin; i <= end; i++) {
				if(peaks.indexOf(i) !== -1 && i != 0 && i != A.length){
					stop++;
				}
			}
			if(stop == 0)
				break;
			if(end == A.length - 1){
				validBlock = true;
				break;
			}

			begin = end + 1;
			end = begin + sizeSlice - 1;
		}
		
		if(validBlock)
			return maxPossBlocks;

		maxPossBlocks--;
	}


	return maxPossBlocks;
	
}