function solution(A, B){

	var down = [];
	var eat = 0;

	var N = A.length;

	for (var i = 0; i < N; i++) {

		var size = A[i];

		if(B[i] == 0){

			while(true){
				if(down.length == 0)
					break;

				var enemy = down[down.length - 1];
				eat++;

				if(enemy > size)
					break;
				else
					down.pop();
				
			}
				
		}else
			down.push(size);

	}

	return N - eat;
}