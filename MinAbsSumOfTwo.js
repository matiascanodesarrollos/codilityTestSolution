function solution(A){

	var value= 2000000000;

	var front = 0;
	var back = A.length - 1;

	A.sort(function(a,b){return a-b;});

	while(front <= back){
		value = Math.min(value, Math.abs(A[front] + A[back]));
		if (Math.abs(A[front]) > Math.abs(A[back]))
			front++;
		else
			back--;
	}

	return value;


}


