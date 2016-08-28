function solution(S, P, Q){
	
	//I dont need to count T's because they are the letter with minimun impact
	var aUntil = new Array(S.length + 1);
	var cUntil = new Array(S.length + 1);
	var gUntil = new Array(S.length + 1);
	aUntil.fill(0);
	cUntil.fill(0);
	gUntil.fill(0);

	for (var i = 0; i < S.length; i++){
		switch(S[i]){
			case 'A':
				aUntil[i + 1] = aUntil[i] + 1;
				cUntil[i + 1] = cUntil[i];
				gUntil[i + 1] = gUntil[i];
				break;
			case 'C':
				aUntil[i + 1] = aUntil[i];
				cUntil[i + 1] = cUntil[i] + 1;
				gUntil[i + 1] = gUntil[i];
				break;
			case 'G':
				aUntil[i + 1] = aUntil[i];
				cUntil[i + 1] = cUntil[i];
				gUntil[i + 1] = gUntil[i] + 1;
				break;
			default:
				aUntil[i + 1] = aUntil[i];
				cUntil[i + 1] = cUntil[i];
				gUntil[i + 1] = gUntil[i];
				break;
		}
	}

	var result = [];

	for (var i = 0; i < P.length; i++) {
		var pval = P[i], qval = Q[i];	
		
		
	    if(S[pval] == 'A' || aUntil[qval + 1] - aUntil[pval + 1] > 0)
			result.push(1);
		else if(S[pval] == 'C'|| cUntil[qval + 1] - cUntil[pval + 1] > 0)
			result.push(2);
		else if(S[pval] == 'G' || gUntil[qval + 1] - gUntil[pval + 1] > 0)
			result.push(3);
		else
			result.push(4);
	}

	return result;

}