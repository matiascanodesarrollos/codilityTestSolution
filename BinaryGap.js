function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    //I`ll use an array the toString(2) method to obtain the binary representation
    if(N == 0)
    	return 0;

    var binary = N.toString(2);

    var ones = 0, gap = 0, maxgap = 0;

    for (var i = 0; i < binary.length; i++) {
    	if(binary[i] == '1'){
    		ones++;
    		if(binary[i - 1] == '1')
    			ones = 1;
    		    		
    		if (ones == 2) {
    			maxgap = Math.max(maxgap, gap);
    			gap = 0;
    			ones = 1;
    		}
    	}
    	if(binary[i] == '0')
    		gap++;
    }

    return maxgap;
    
}


        
        