function solution(A){
	if(A.length == 2) return 0;

    /*
    	A has negative numbers so i cant really know if i sould
    	 or not put more elements to the sum but
    	Since i only need to return the first index i need two groups 
    	to compare the sum
		This idea i take it from an online blog i dont remember the link

   	*/
    var sliceTwo = 0;
    var sliceThree = 0;
    var minSliceTwo = 99999;
    var mixSliceThree = 99999;
    var minSliceTwoIndex = 0;
	var minSliceThreeIndex = 0;

    for (var i = 2; i < A.length; i++) {
    	sliceTwo = A[i - 1] + A[i];
    	sliceThree =  sliceTwo + A[i-2];

    	if(sliceTwo < minSliceTwo){
    		minSliceTwo = sliceTwo;
    		minSliceTwoIndex = i - 1;
    	}

    	if(sliceThree < mixSliceThree){
    		mixSliceThree = sliceThree;
    		minSliceThreeIndex = i - 2;
    	}
    }

    minSliceTwo /= 2;
    mixSliceThree /= 3;


    return minSliceTwo < mixSliceThree?minSliceTwoIndex:(minSliceTwo == mixSliceThree)?Math.min(minSliceTwoIndex,minSliceThreeIndex):minSliceThreeIndex;

}