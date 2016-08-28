function cutRod(P,n){
	if(n == 0)
		return 0;
	var q = Number.NEGATIVE_INFINITY;
	for (var i = 1; i <= n; i++) 
		q = Math.max(q,P[i] + cutRod(P,n-i));
	return q;	
}
var P = [0,1,5,8,9,10,17,17,20,24,30];

function memoizedCutRodAux(P,n,results){
	if (results[n] >= 0)
		return results[n];
	var q;
	if(n == 0)
		q = 0;
	else{
		q = Number.NEGATIVE_INFINITY;
		for (var i = 1; i <= n; i++) {
			q = Math.max(q,P[i] + memoizedCutRodAux(P,n-i,results));
		}
	}
	results[n] = q;
	return q;

}

function memoizedCutRod(P,n){
	var results = new Array(n+1);
	results.fill(Number.NEGATIVE_INFINITY);

	return memoizedCutRodAux(P,n,results);
}

function bottomUpCutRod(P,n){
	var results = new Array(n+1);
	results[0] = 0;
	for (var i = 1; i <= n ; i++) {
		var q = Number.NEGATIVE_INFINITY;
		for (var j = 1; j <= i; j++) {
			q = Math.max(q,P[j] + results[i - j]);
		}
		results[i] = q;
	}
	return results[n];
}