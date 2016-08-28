function solution(S) {
    // write your code in JavaScript (Node.js 4.0.0)
     
    if(((S.length - 1) % 2) != 0)
    	return -1;

    var middle = (S.length - 1)/2;

    var left = middle;
    var right = middle;

    while(left - 1 >= 0 && right < S.length){
    	left--;
    	right++;
    	if(S[left] != S[right])
    		return -1;    	
    }

    return middle;

}