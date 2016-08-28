function solution(A){

	/* 
	Input: 
		- Array A representing the relative heights of a mountain

	Ouput:
		- Maximun number of flags that can be nailed in peaks

	*/
	
	// If the length of A is < 3 can't be peaks to nail flags
	if(A.length < 3)
		return 0;

	/* 
	- In this array i'll save the position of the next peaks that i can find

	- If position and value are the same so its a peak else is the value of the next peak

	- To achieve this i'll iterate backwards the array

	- The maximun posible flags are all the peaks

	*/

	var peaks = [];
	peaks[A.length - 1] = 0;
	
	

	var lastPeak = 0;
	var maxPosibleFlags = 0;

	for (var i = A.length - 2; i > 0 ; i--) {
		if(A[i] > A[i + 1] && A[i] > A[i - 1]){
			peaks[i] = i;
			lastPeak = i;
			maxPosibleFlags++;
		}else
			peaks[i] = lastPeak;
	}

	// Self explained

	if(maxPosibleFlags == 0)
		return 0;
	if(maxPosibleFlags == 1)
		return 1;


	/*
		I'll try to nail the maximun numbers of flags

		else i'll try maximun numbers - 1 until 1 flags

		else return 0 flags
	
	*/

	var firstFlag = peaks[1];

	lastPeak = peaks[A.length - 2];

	for (var i = maxPosibleFlags; i > 0; i--) {
		var lastFlag = firstFlag;
		var pos = firstFlag + i;
		var flags = 2;
		while(pos < A.length - 1 && flags <= i){
			if(peaks[pos] == pos){
				lastFlag = pos;
				pos += i;				
			}else{
				if(peaks[pos] == 0 || pos >= A.length - 2)
					break;
				lastFlag = peaks[pos];
				pos = lastFlag + i;
			}

			if(flags == i)
				return i;

			flags++;
		}
	}

	return 0;
}