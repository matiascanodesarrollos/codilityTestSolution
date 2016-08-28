function Slice(low,high,sum){
	this.low = low;
	this.high = high;
	this.sum = sum;
}

function maxCrossingSum(A,low,middle,high){
	var leftSum = Number.NEGATIVE_INFINITY;
	var leftIndex = low;
	var sum = 0;
	for (var i = middle; i >= low; i--) {
		sum += A[i];
		if(sum > leftSum){
			leftSum = sum;
			leftIndex = i;
		}
	}
	var rightSum = Number.NEGATIVE_INFINITY;
	var rightndex = low;
	sum = 0;
	for (var i = middle+1; i <= high; i++) {
		sum += A[i];
		if(sum > rightSum){
			rightSum = sum;
			rightndex = i;
		}
	}
	return new Slice(leftIndex,rightndex,leftSum+rightSum);
}

function maxSlice(A,low,high){
	if(low == high)
		return new Slice(low,high,A[low]);
	else{
		var middle = Math.floor((low+high)/2);
		var maxLeft = maxSlice(A,low,middle);
		var maxRight = maxSlice(A,middle+1,high);
		var maxCros = maxCrossingSum(A,low,middle,high);

		if(maxLeft.sum >= maxRight.sum && maxLeft.sum >= maxCros.sum)
			return maxLeft;
		else if(maxRight.sum >= maxLeft.sum && maxRight.sum >= maxCros.sum)
			return maxRight;
		else
			return maxCros;
	}
}