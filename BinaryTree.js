function solution(T) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    
    if(T.l == null && T.r == null)
        return -2;
        
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

}