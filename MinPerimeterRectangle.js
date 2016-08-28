function solution(N){

	var min = Number.MAX_VALUE;

	var i = 1;

	while(i * i < N){
		if (N % i == 0) {
			var perimeter = 2*(i+(N/i));
			min = Math.min(min,perimeter);
		}
		i++;
	}

	if(i * i == N)		
		return Math.min(min,2*(i+(N/i)));

	return min;
}