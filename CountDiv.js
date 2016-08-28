function solution(A, B, K){

	var distance = B - A;
	var div = Math.floor(distance / K);


	if(distance % K == 0)
		if(A % K == 0)
			return  div + 1;
		else
			return  div;
	else
		if(A % K == 0)
			return div + 1;
		else
			if (B - (div * K) > K) 
				return div + 1;
			else 
				return div;	
		

	
}