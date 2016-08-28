function solution(X, Y, D){
	if(X == Y)
		return 0;

	var distance = Y - X;

	var pasos = Math.floor(distance/D);
	var resto = distance % D;

	if(resto !== 0){		
		pasos++;
		return pasos;
	}
	return pasos;

	
}