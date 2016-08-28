function solution(A){

	if(A.length == 0 || A.length == 1)
		return 0;

	var markers = [];

	for (var i = 0; i < A.length; i++) {
		markers.push(i - A[i]);
		markers.push(i + A[i] + 0.5);
	}

	markers.sort(function(a,b){return a-b;});

	var total = 0;
	var overlap = 0;

	for (var i = 1; i < markers.length; i++) {
		if(markers[i] % 1 == 0){
			total++;
			overlap += total;
		}else
			total--;
		if(overlap > 10000000)	
			return -1;
		
	}


	return overlap;
}