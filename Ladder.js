function solution(A, B){

	var L = A.length;
    var fib = [];
    var result = [];
    
    fib[1] = 1;
    fib[2] = 2;
    for (var i = 3; i <= L; i++) {
        // Since 30 is the maximun B value, 30 is divisible by 2 and all the % are mutiples of 2 the result wolud be the same
        fib[i] = (fib[i-1] + fib[i-2]) % (1 << 30);
    }
    
    for (var i = 0; i < L; i++) {
        result[i] = fib[A[i]] % (1 << B[i]);
    }
    
    return result;
}

