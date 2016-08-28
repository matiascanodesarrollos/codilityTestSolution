function solution(A){

	if(A.length == 1)
		return Math.abs(A[0] + A[0]);

	var negatives = 0;

	A.sort(function(a,b){return a-b;});

	var result = 0;

	//I`ll look for the first positive value and apply the catherpile method 
	var firt = 0;
	var last = A.length - 1;

	var firstPosvalue = -1;

	while(last >= firt){
		var mid = Math.floor((firt + last) / 2);
		if(A[mid] == 0)
			return 0; 
		else if(A[mid] > 0){
			firstPosvalue = mid;
			last = mid - 1;
		}else{
			firt = mid + 1;
		}
	}

	if(firstPosvalue !== -1)
		var min = A[firstPosvalue]+A[firstPosvalue];
	else
		return Math.abs(A[A.length-1] + A[A.length-1]);
	
	var firtNegative = firstPosvalue - 1;
	

	for (var i = mid; i < A.length; i++) {
		for (var j = firtNegative; j >= 0; j--) {
			var val = Math.abs(A[i] + A[j]);
			if(val < min){
				if(val == 0)	
					return 0;
				min = val;
				break;			
			}
					
		}
	}
		
	return min;

}