// you can write to stdout for deDugging purposes, e.g.
// console.log('this is a debug message');

//Esta solucion es la menos eficiente y solo sirve para N < 3

function rotateCounterClockwise(model){
	var len = model.length;
	var result = [];
	for (var i = 0; i < len; i++) {
		result.push([]);
		for (var j = 0; j < len; j++) {
			result[i].push(model[j][i]);
		}
	}
	return result;
} 


function rotateClockwise(model){
	var len = model.length;
	var result = [];
	for (var i = 0; i < len; i++) {
		result.push([]);
		for (var j = 0; j < len - 1; j++) {
			result[i].push(model[len - j - 1][len - i - 1]);
		}
	}
	return result;
} 

function maze(N,model){
	if(N == 1)
		return model;
	else{
		var topRight = [];
		for (var i = 0; i < model.length - 1; i++) {
			topRight.push([]);
			for (var j = 0; j < model.length - 1; j++) {
				topRight[i].push(model[i][j]);
			}
		}
		var topLeft = [];
		for (var i = 0; i < model.length - 1; i++) {
			topLeft.push([]);
			for (var j = 0; j < model.length; j++) {
				if(i == model.length - 2 && j == 0)
					topLeft[i].push(1);
				else
					topLeft[i].push(model[i][j]);
			}
		}
		var bottomLeft = rotateClockwise(model);
		bottomLeft[0][1] = 1;
		var bottomRight = rotateCounterClockwise(model);
		bottomRight[0][bottomRight.length - 2] = 1;

		var next = [];
		for (var i = 0; i < model.length * 2 - 1; i++) {
			next.push([]);
			if(i < model.length - 1)
				next[i] = topRight[i].concat(topLeft[i]);
			else
				next[i] = bottomLeft[i - model.length + 1].concat(bottomRight[i - model.length + 1]);
		}
		return maze(N - 1,next);
	}


}

function Treasure(x,y){
	this.x = x;
	this.y = y;
}

function Halfling(x,y,maze,treasure){
	this.x = x;
	this.y = y;

	this.findTreasure = function(){
		var steps = 0;

		return steps;
	};
}

function solution(N, A, B, C, D) {
    // write your code in JavaScript (Node.js 4.0.0)
    var maze1N = [[0,0,0,0,0],[0,1,1,1,0],[0,1,0,1,0],[0,1,0,1,0],[0,0,0,0,0]];

    var mazeN = maze(N,maze1N);

    var M = Math.pow(2,N+1);
    
    var half = new Halfling(A,M - B,maze,new Treasure(C,M - D));
    

    return half.findTreasure();
}

