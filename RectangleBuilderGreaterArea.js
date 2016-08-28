function binarySearch(A,value){
	var back = 0;
	var front = A.length - 1;
	var middle = Math.floor((front + back)/2);

	var result = 0;

	while(back <= front){
		if(A[middle] > value){
			front = middle - 1;
		}
		else if(A[middle] < value)
			back = middle + 1;
		else{
			result++;
			var i = middle + 1;
			while(A[i] == value){
				result++;
				i++;
			}
			i = middle - 1;
			while(A[i] == value){
				result++;
				i--;
			}
			return result;
		}
		middle = Math.floor((front + back)/2);
	}

	return 0;
}

function solution(A, X) {
    // write your code in JavaScript (Node.js 4.0.0)

    //First i can sort the array

    A.sort(function(a,b){return a - b;});

    //Represent the total pens
    var pens = 0;

    /*
		I need to search for areas >= X
    */

    var bigestFence = A[A.length - 1];
    var bigestArea = bigestFence * 4;

    if(bigestFence * bigestFence < X)
    	return 0;
    
    var currentArea = X;
    
    var founds = [];


    
    while(currentArea * currentArea >= X){
    	if(!founds[currentArea])
    		founds[currentArea] = binarySearch(A,currentArea);

    	if(founds[currentArea] < 2){
    		currentArea--;
    		continue;
    	}

        for (var i = currentArea; i > 0; i--) {
        	if (i !== currentArea){
        		if(i * currentArea < X)
        			break;
        		if(!founds[i])
    				founds[i] = binarySearch(A,i);
        		
        		if(founds[i] >= 2)
        			pens++;
        		else
        			continue;       			
        	}else{
        		if(founds[currentArea] >= 4)
        			pens++;
        	} 
        		
        }
        currentArea--;
        if(pens > 1000000000)
        	return -1;
    }

    
   	
    return pens;

}