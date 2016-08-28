function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var temp = -1;
    var max = 0;
    
    var div = Math.floor(N/2);
    var remainder = N%2;
    if(remainder == 1)
        temp=0;
    
    while(div > 0){
        if(temp != -1 && remainder == 0)
            temp++;
        else if(remainder == 1)
            temp=0;
            
        if(temp > max)
            max = temp;

        var before = div;
            
        div = Math.floor(before/2);
        remainder = before%2;
        
    }
    
    return max;
    
    
}