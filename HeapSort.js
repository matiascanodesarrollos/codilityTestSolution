function parent(i){
	return Math.floor(i/2);
}
function left(i){
	return 2*i;
}
function right(i){
	return 2*i + 1;
}
function maxHeapify(A,i){
	var l = left(i);
	var r = right(i);

	var largest = i;

	if(l <= A.heapSize && A[l] > A[i])
		largest = l;

	if(r <= A.heapSize && A[r] > A[largest])
		largest = r;

	if (largest != i){
		var aux = A[i];
		A[i] = A[largest];
		A[largest] = aux;
		maxHeapify(A,largest);
	}
}
function buildMaxHeap(A){
	A.heapSize = A.length;
	for (var i = Math.floor(A.length/2); i >= 0; i--) {
		maxHeapify(A,i);
	}	
}
function heapSort(A){
	buildMaxHeap(A);
	for (var i = A.length - 1; i < 0; i--) {
		var aux = A[0];
		A[0] = A[i];
		A[i] = aux;
		A.heapSize--;
		maxHeapify(A,0);
	}
}