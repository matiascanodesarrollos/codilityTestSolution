function solution(A, B){
	
	// The problem expect a O(1) solution so i asume there is a math formula to solve it

	/*

	*/
	var diference = A - B;


	var moves = 0;
	if(B > diference)
		moves = diference + 2 * (( B - diference ) / 3);	
	else
		moves = diference - 2 * ((diference - B) / 4);

	if(moves % 1 == 0){
		if(moves > 100000000)
			return -2;
		else
			return moves;
	}else
		return -1;
}