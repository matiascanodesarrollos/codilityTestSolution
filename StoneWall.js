function solution(H){

	var blocks = 0;

	if(H.length == 1)
		return 1;
	

	var stack =  [];

	for (var i = 0; i < H.length; i++) {
		var value = H[i];

		while(stack.length > 0 && stack[stack.length - 1] > value)
			stack.pop();

		if(stack.length > 0 && stack[stack.length - 1] == value)
			continue;
		else{
			blocks++;
			stack.push(value);			
		}



	}

	return blocks;
}