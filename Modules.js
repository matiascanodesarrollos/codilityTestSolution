function module(){
	var number = 1;

	function increment(){
		++number;
	}

	function getNumber(){
		return number;
	}

	return {
		increment: increment,
		getNumber: getNumber
	};
}

