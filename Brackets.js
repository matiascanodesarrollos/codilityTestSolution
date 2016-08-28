function solution(S){

	if(S.length == 0)
		return 1;

	if(S.length % 2 !== 0)
		return 0;

	S = S.split("");

  	var stack = [];

  	for (var i = 0; i < S.length; i++) {

   	 	var c = S[i];

    	if (c == '{' || c == '(' || c == '[')
     	 	stack.push(c);
    	else if (c == '}' || c == ')' || c == ']') {
      		var t = stack.pop() + c;

      		if (t != "{}" && t != "()" && t != "[]")
        		return 0;
    	}
  	}

  	if (stack.length > 0)
    	return 0;

  	return 1;
}