function solution(A, B){

	var L = A.length;
    var fib = [];
    var result = [];
    
    fib[1] = 1;
    fib[2] = 2;
    for (var i = 3; i <= L; i++) {
        // make sure the fibonacci number will not exceed the max integer in java
        fib[i] = (fib[i-1] + fib[i-2]) % (1 << 30);
    }
    
    for (var i = 0; i < L; i++) {
        result[i] = fib[A[i]] % (1 << B[i]);
    }
    
    return result;
}

