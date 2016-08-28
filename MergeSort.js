function merge(A,p,q,r){
	var n1 = q - p + 1;
	var n2 = r - q;
	var L1 = new Array(n1+1);
	var L2 = new Array(n2+1);
	for (var i = 0; i < n1; i++) {
		L1[i] = A[p + i];
	}
	for (var j = 0; j < n2; j++) {
		L2[j] = A[q + j + 1];
	}
	L1[n1] = Number.POSITIVE_INFINITY;
	L2[n2] = Number.POSITIVE_INFINITY;
	i = 0;
	j = 0;
	for (var k = p; k <= r; k++) {
		if(L1[i] <= L2[j]){
			A[k] = L1[i];
			i++;
		}else{
			A[k] = L2[j];
			j++
		}
	}
}
function mergeSort(A,p,r){
	if(p<r){
		var q = Math.floor((p + r)/2);
		mergeSort(A,p,q);
		mergeSort(A,q + 1,r);
		merge(A,p,q,r);
	}
}