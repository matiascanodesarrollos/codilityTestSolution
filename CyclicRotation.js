function solution(A, K) {
    // write your code in JavaScript (Node.js 4.0.0)
   	if(K == A.length || K > A.length)
    	return A;

    var result = [];

    for (var i = K; i > 0; i--) {
    	result.push(A[A.length - i]);
    }
    for (var i = 0; i < A.length - K; i++) {
    	result.push(A[i]);
    }

    return result;

    
}