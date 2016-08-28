function solution(A)
{
	//I`ll calculate the sum of all numbers
    var total = 0;
    
    for(var i= 0;i<A.length;i++){
        total += A[i];
    }
    
    // the sum up to the number represents the left part and total - upto the rigth part
    var upto = 0;
    var min = 9999;
    
    // If i=0 P=1 then i'll go to A.length - 1
    for(var i = 0;i<A.length-1;i++){
        upto += A[i];        
        var left = upto;
        var rigth = total - left;        
        var dif = Math.abs(left - rigth);
        if(dif < min)
            min=dif;
           
    }
    
    return min;
}