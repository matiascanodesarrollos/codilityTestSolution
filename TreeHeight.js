function solution(T) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    if(T == null) 
        return -1;

    var result = 0;
 
    result = Math.max(result, 1+solution(T.l));
    result = Math.max(result, 1+solution(T.r));
 
    return result;
   

}
/*     
    if(T == null) 
        return -1;

    var step = 0;
    var que = [T];
    var steps = [];
    
    while(que.length > 0){
        var node = que.shift();
        if(node.l)
            steps.push(node.l);
        if(node.r)
            steps.push(node.r);
        if(que.length == 0 && steps.length > 0){
            step++;
            que = que.concat(steps);
            steps = [];
        }
    }
    
    return step;
*/