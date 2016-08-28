function binarySearch(A,wanted){
    var minIndex = 0;
    var maxIndex = A.length - 1;
    var middle= Math.floor((maxIndex + minIndex)/2);
    
    while(minIndex <= maxIndex){
        if(A[middle] > wanted)
            maxIndex = middle - 1;
        else if(A[middle] < wanted)
            minIndex = middle + 1;
        else
            return middle;
        
        middle= Math.floor((maxIndex + minIndex)/2);      
    }

    return -1;
}

function solution(A){
    A.sort(function(a,b){return a-b;});

    var counter = 1;

    for (var i = 0; i < A.length; i++) {
        if(binarySearch(A,counter) >= 0)
            counter++;
        else
            break;
    }

    return counter;
}
