nfunction solution(X, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    if(A.length == 1){
    	if(A[0] !== X)
    		return 1;
    	else
    		return 0;
    }
       
    var back = 0;
    var backFlag = true;
    var top = A.length - 1;
    var topFlag = true;
    
    var xes = 0;
    var nonexes = 0;

    while(back < top){    	
    	if(backFlag && A[back] == X)
    		xes++;
    	if(topFlag && A[top] !== X)
    		nonexes++;
    	if(xes < nonexes){    		
    		back++;
    		topFlag = false;
    	}
    	else if(xes > nonexes){
    		top--;
    		backFlag = false;
    	}
    	else{
    		if(top - back == 1)
    			break;
    		top--;
    		back++;
    		backFlag = true;
    		topFlag = true;
    	}
    }

    return ++back;
}