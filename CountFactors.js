function solution(N){
	var factors = 0;

	var i = 1;

	while(i*i < N){
		if(N % i == 0){
			factors += 2;
		}
		i++;
	}

	if(i*i == N)
		return ++factors;

	return factors;
}