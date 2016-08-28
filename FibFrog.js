function solution(A){
	
	var fib = [0,1,2];
	var i = 3;

	while(true){
		var val = fib[i - 1] + fib[i - 2];
		if(val <= A.length + 1)
			fib[i] = val;
		else
			break;
		i++;
	}

	if(fib[i-1] == A.length + 1 || A.length == 0)
		return 1;
		
	var que = [[],[]];
	var jumps = 2;

	for (var i = 1; i < fib.length; i++) {
		if(A[A.length - fib[i]] == 1){
			que[0].push(1);
			que[1].push(A.length - fib[i]);
		}			
	}

	while(que[0].length !== 0){
		var jump = que[0].shift();
		var index = que[1].shift();
		for (var i = 1; i < fib.length; i++) {
			if(A[index - fib[i]] == 1){
				que[0].push(jump+1);
				que[1].push(index - fib[i]);
			}else if(index - fib[i] == -1){
				return jump+1;
			}else if(index - fib[i] < -1)
				break;
		}
		
	}



	return -1;
}

/*

ution to Fib-Frog by codilityPython

def fibonacciDynamic(n):
    # Generate and return all the Fibonacci numbers,
    # less than or equal to n, in descending order.
    # n must be larger than or equal to one.
    fib = [0] * (n + 2)
    fib[1] = 1
    for i in xrange(2, n + 2):
        fib[i] = fib[i - 1] + fib[i - 2]
        if fib[i] > n:
            return fib[i-1: 1: -1]
        elif fib[i] == n:
            return fib[i: 1: -1]

def solution(A):
    class Status(object):
        # Object to store the status of attempts
        __slots__ = ('position', 'moves')
        def __init__(self, pos, moves):
            self.position = pos
            self.moves = moves
            return

    lenA = len(A)                        # Array length
    fibonacci = fibonacciDynamic(lenA+1) # Fibonacci numbers
    statusQueue = [Status(-1,0)]    # Initially we are at position
                                    # -1 with 0 move.
    nextTry = 0     # We are not going to delete the tried attemp.
                    # So we need a pointer to the next attemp.
    accessed = [False] * len(A) # Were we in this position before?

    while True:
        if nextTry == len(statusQueue):
            # There is no unprocessed attemp. And we did not
            # find any path yet. So no path exists.
            return -1

        # Obtain the next attemp's status
        currentStatus = statusQueue[nextTry]
        nextTry += 1
        currentPos = currentStatus.position
        currentMoves = currentStatus.moves

        # Based upon the current attemp, we are trying any
        # possible move.
        for length in fibonacci:
            if currentPos + length == lenA:
                # Ohhh~ We are at the goal position!
                return currentMoves + 1
            elif currentPos + length > lenA
                 or A[currentPos + length] == 0
                 or accessed[currentPos + length]:
                # Three conditions are moving too far, no
                # leaf available for moving, and being here
                # before respectively.
                # PAY ATTENTION: we are using Breadth First
                # Search. If we were here before, the previous
                # attemp must achieved here with less or same
                # number of moves. With completely same future
                # path, current attemp will never have less
                # moves to goal than previous attemp. So it
                # could be pruned.
                continue

            # Enqueue for later attemp.
            statusQueue.append(
                Status(currentPos + length, currentMoves+1))
            accessed[currentPos + length] = True

*/