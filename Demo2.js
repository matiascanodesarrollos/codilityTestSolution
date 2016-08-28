function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)

    //First i need to kwon the X number
    var number = 0;

    for (var i = 0; i < A.length; i++) {
    	number += (A[i]*Math.pow(-2,i));
    }

   	// Then i can inver the number

   	number = -number;

   	//Then represent the number in -2 base
   	var result = 0;
   	


    return number;
}