/*
	
	I define
	- sortA
	- d[i] = maxAbsUntil[i] for i=0,1,..,N
	- balUn = balUntil[j] for j=0,1,2,....,d[N]
*/

function binarySearch(A,key){
	var back = 0;
	var top = A.length - 1;
	var middle = Math.floor((back+top)/2);
	var index = -1; 

	while(back < top){
		if(A[middle] > key)
			back = middle + 1;
		else if(A[middle] < key)
			top = middle - 1;
		else
			return middle;

		middle = Math.floor((back+top)/2);
		
	}

	return index;
}

function maxAbsUntil(A){
	var result = [0];

	for (var i = 1; i <= A.length; i++) {
		result[i] = Math.abs(A[i-1]) + result[i-1];
	}

	return result;
}

function balancePvit(pivot,sortA){
	if(sortA.length == 0)
		return 0;

		var bal = 0;
		var subA = 0;

	/*
		To balance i need:
		
		2 subA that

		subA = A[a1] + A[a2] + ... + A[ai] = pivot

		invariant:			
			subA: subA = 0,1,2 
			bal: bal < pivot, bal = pivot -> bal = 0 ^ subA++

	*/

	for (var i = 0; i < sortA.length; i++) {
		if(bal + sortA[i] < pivot)
			bal = bal + sortA[i];
		else if(bal + sortA[i] == pivot){
			bal = 0;
			if(subA < 2)
				subA++;
			else
				subA = 0;
		}else{
			
		}

		
	}
	return bal;
}

function balUntil(sortA,d) {
	var result = [0];

	for (var i = 1; i <= d.length; i++) {
		result[i] = balancePvit(d[i],sortA);
	}

	return result;
}



function solution(A){
	var sortA = A.concat().map(function(a){return Math.abs(a);}).sort(function(a,b){return a-b;});
	var d = maxAbsUntil(sortA);
	var balUn = balUntil(sortA,d);
	return balUn[d[d.length - 1]];
}