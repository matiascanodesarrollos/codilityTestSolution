function solution(N){
	var numbers = [];

	for (var i = 2; i <= N ; i++) {
		numbers.push(i);
	}

	
	var result = 0;

	while(true){
		result++;
		var div = 0;
		for (var i = 0; i < numbers.length; i++) {
			if(result % numbers[i] == 0)
				div++;
			else	
				break;			
		}
		if(div == numbers.length)
			return result;
	}

}