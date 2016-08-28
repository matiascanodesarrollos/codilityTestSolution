/*
	Para que cuatro puntos diferentes entre ellos
	(x1,y1),(x2,y2),(x3,y3),(x4,y4)
	sean un diamante:
		x1 == x2
		|y2 - y1| % 2 == 0
		Min(y2,y1) + |y2 - y1| / 2 == y3
		Min(x3,x4) + |x4 - x3| / 2 == x1
		y3 == y4
		|x3 - x4| % 2 == 0


*/

function solution(X, Y)
{
	var diamonds = 0;
	for (var i = 0; i < X.length; i++) {
		var comparative = new Point(X[i],Y[i]);
		var candidatesX = [];
		for (var j = i+1; j < X.length; j++) {			
			var candidateX = new Point(X[j],Y[j]);
			var distance = Math.abs(comparative.y - candidateX.y);
			if(comparative.x == candidateX.x && distance % 2 == 0) //x1 == x2 && |y2 - y1| % 2 == 0
				candidatesX.push(candidateX);

		}
		while(candidatesX.length > 0){
			var candidateX = candidatesX.pop();
			var candidatesY = [];
			var positionY = Math.min(comparative.y,candidateX.y) + Math.abs(comparative.y - candidateX.y) / 2;
			for (var j = 0; j < X.length; j++){
				var candidateY = new Point(X[j],Y[j]);
				if(candidateY.y == positionY && candidateY.x != candidateX.x) // Min(y2,y1) + |y2 - y1| / 2 == y3
					candidatesY.push(candidateY);				
			}
			while(candidatesY.length > 1){
				var candidate = candidatesY.pop();
				for (var j = 0; j < candidatesY.length; j++) {
					var candidateY = candidatesY[j];
					var center = Math.min(candidate.x,candidateY.x) + Math.abs(candidate.x - candidateY.x) / 2;
					if(center == comparative.x && candidate.y == candidateY.y && Math.abs(candidate.x - candidateY.x) % 2 == 0) // Min(x3,x4) + |x4 - x3| / 2 == x1 && y3 == y4 && |x3 - x4| % 2 == 0
						diamonds++;
				}
			}
		}

	}

	return diamonds;
}

function Point(x,y)
{
	this.x = x;
	this.y = y;
}