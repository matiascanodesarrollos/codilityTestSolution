function decimalToNega(N,base,result) {
	/*
		N: decimal number
		ai: division
		base: base
		ri: remainder
		n: nega digits
		
		{result E (rn,rn-1,...,ri,...,r2,r1) ^ i E N : ai = aplus1 * b + ri}
		
		a1 = a2 * b + r1
		a2 = a3 * b + r2
		.......
		ai = aiplus1 * b + ri
		.......
		an = an-1 * B + rn

		if(base > 0)
			aiplus1 = Math.floor(N/base);			
		else
			aiplus1 = Math.ceil(N/base);
		
	*/

	if(N == 0)
		return;
	else{
		var aiplus1;
		if(base > 0)
			aiplus1 = Math.floor(N/base);			
		else
			aiplus1 = Math.ceil(N/base);
			
		var ri = Math.abs(N%base);

		result.unshift(ri);
		decimalToNega(aiplus1,base,result);
	}

}



function solution(N){
	var result = [];
	decimalToNega(N,-2,result)
	return result;
}

function eficientSolution(N){	
	var Schroeppel2 = 0xAAAAAAAA;
    // Convert to NegaBinary String
    return ( ( N + Schroeppel2 ) ^ Schroeppel2 ).toString(2).split("").map(function(obj){return parseInt(obj);});
}
