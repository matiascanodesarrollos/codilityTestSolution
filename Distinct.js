
function solution(A){

	//If i sort the array the values will be together

    A.sort(function(a,b){return a-b;});

    var count = 0;
    var last = 10000001;

    for (var i = 0; i < A.length; i++) {
    	if(A[i] != last){
    		count++;
    		last = A[i];
    	}
    }

    return count;
}
