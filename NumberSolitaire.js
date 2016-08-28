function solution(A){

	var store = [];

    store[0] = A[0];
    
    for (var i = 1; i < A.length; i++) {
        store[i] = store[i-1];
        for (var minus = 2; minus <= 6; minus++) {
            if (i >= minus) {
                store[i] = Math.max(store[i], store[i - minus]);
            }else{
               	break;
            }
        }
        store[i] += A[i];
    }


   	return store[A.length - 1];
	
}