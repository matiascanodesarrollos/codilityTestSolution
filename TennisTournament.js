function solution(P, C) {
    // write your code in JavaScript (Node.js 4.0.0)

    var posiblesJuegos = Math.floor(P / 2);
    if(posiblesJuegos >= C)
    	return C;
    else
    	return posiblesJuegos;
}