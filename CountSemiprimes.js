mfunction semiPrimes(A){
	if(A < 3)
		return [0,0,0];
	if(A < 4)
		return [0,0,0,0];

	var primes = [false,false];
	var sumResultos = [0,0,0,0,1,0,1]

	var i = 2;

	for (i = 2; i <= A; i++) {
		primes.push(true);
	}

	i = 2;

	while( i * i <= A){
		if(primes[i]){
			var k = i * i;
			while(k <= A){
				primes[k] = false;
				k += i;
			}
		}
		i++;
	}

	var primesCount = 2;

	var numPrim = [];

	for (var i = 0; i <= A; i++) {
		if(primes[i]){
			numPrim.push(i);
			sumResultos[i] = 0;
			if(i > 2 && numPrim[0] * i <= A){
				primesCount++;
				for (var j = primesCount; j > 0; j--) {
					if(numPrim[j - 1] * i <= A)
						sumResultos[numPrim[j - 1] * i] = 1;
				}
			}
		}else{
			if(i !== 4 && i !== 6 && sumResultos[i] !== 1)
				sumResultos[i] = 0;
		}
	}

	for (var i = 5; i < sumResultos.length; i++) {
		if(sumResultos[i] == 1){
			sumResultos[i] = sumResultos[i - 1] + sumResultos[i]; 
		}else{
			sumResultos[i] = sumResultos[i - 1];
		}
	}

	return sumResultos;

}



function solution(N, P, Q){

	var prefSum = semiPrimes(N);
	var rest = [];

	for (var i = 0; i < P.length; i++) {
		if(prefSum[P[i]] !== prefSum[P[i] - 1])
			rest.push(prefSum[Q[i]] - prefSum[P[i] - 1]);
		else
			rest.push(prefSum[Q[i]] - prefSum[P[i]]);
	}

	return rest;

}