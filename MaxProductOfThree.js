
function solution(A){

	//If i sort the array i get the maximun abs val at the corner

    A.sort(function(a,b){return a-b;});

    /*
		If there is negatives value they will be first
		and the bigest positives at last

		There are 3 posibilities:

		if all numbers are positive:
			last * (last - 1) * (last - 2)
		if all number are negative: (- * - = +)
			first * (firt + 1) * last
		if negatives and positives:
			(last * (last - 1) * (last - 2)) or (first * (firt + 1) * last)
		
    */
    
    return Math.max(A[A.length - 1] * A[A.length - 2] * A[A.length - 3],A[0] * A[1] * A[A.length - 1]);
}
