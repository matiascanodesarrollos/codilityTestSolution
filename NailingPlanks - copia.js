function solution(A, B, C){
	var planks = [0];

	for (var i = 1; i <= Math.max(Math.max.apply(null,A),Math.max.apply(null,B)); i++) {
		planks.push([]);
	}

	for (var i = 0; i < A.length; i++) {
		for (var j = A[i]; j <= B[i]; j++) {
			planks[j].push(i + 1);
		}
	}

	var nailedUntil = [0];

	for (var i = 1; i <= C.length; i++) {
		nailedUntil[i] = nailedUntil[i - 1];
		if(C[i - 1] < planks.length && planks[C[i - 1]].length !== 0){
			for (var j = 0; j < planks[C[i - 1]].length; j++) {
				if(A[planks[C[i - 1]][j] - 1] != -1){
					nailedUntil[i]++;
					A[planks[C[i - 1]][j] - 1] = -1;
				}
			}
		}
	}

	var min = A.length;
	var max = C.length;
	var result = -1;

	while(min <= max){
		var mid =  Math.floor((min + max) / 2);
		if(nailedUntil[mid] == A.length){
			var prev = mid - 1;
			while(nailedUntil[prev] == nailedUntil[mid]){
				mid = prev;
				prev--;
			}
			result = mid;
			break;
		}else if(nailedUntil[mid] < A.length)
			min = mid + 1;
		else
			max = mid - 1;
	}


	return result;
}