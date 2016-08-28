function solution(N, S, T) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    /*

        Estrategia:
            
            1) contar cuantos espacios y  enanos hay en cada cuadrante:
                - si el barco ya viene balanceado el resultado es:
                    la menor cantidad de espacios entre 1 y 3 por 2 mas la menor entre 2 y 4
                - si el barco no viene balancedo
                    primero hay que balancearlo y contar cuantos hacen falta.
                    luego lo mismo que arriba 
    */
    
    /*
        0 spaces
        1 Barrels
        2 dwarf

    */
    
    
    var barrels = S.split(" ");
    var dwarfs = T.split(" ");
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    
    
    var square1Dwarfs = 0;
    var square2Dwarfs = 0;
    var square3Dwarfs = 0;
    var square4Dwarfs = 0;

    var square1Barrels = 0;
    var square2Barrels = 0;
    var square3Barrels = 0;
    var square4Barrels = 0;

    var half = N/2;

    if(barrels[0] != ""){
        for (var i = 0; i < barrels.length; i++) {
            var row = parseInt(barrels[i][0]) - 1;
            var col = alphabet.indexOf(barrels[i][1]);
            if(row < half && col < half)
                square2Barrels++;
            else if(row < half && col >= half)
                square1Barrels++;
            else if(row >= half && col < half)
                square3Barrels++;
            else
                square4Barrels++;
        }
    }
    if(dwarfs[0] != ""){
        for (var i = 0; i < dwarfs.length; i++) {
            var row = parseInt(dwarfs[i][0]) - 1;
            var col = alphabet.indexOf(dwarfs[i][1]);
            if(row < half && col < half)
                square2Dwarfs++;
            else if(row < half && col >= half)
                square1Dwarfs++;
            else if(row >= half && col < half)
                square3Dwarfs++;
            else
                square4Dwarfs++;
        }        
    }
    
    var areaSquare = half*half;

    var square1Spaces = areaSquare - square1Dwarfs - square1Barrels;
    var square2Spaces = areaSquare - square2Dwarfs - square2Barrels;
    var square3Spaces = areaSquare - square3Dwarfs - square3Barrels;
    var square4Spaces = areaSquare - square4Dwarfs - square4Barrels;

    var diference1 = Math.abs(square1Dwarfs - square3Dwarfs);
    var diference2 = Math.abs(square2Dwarfs - square4Dwarfs);

    if(square1Dwarfs > square3Dwarfs)
        square3Spaces -= diference1;
    else
        square1Spaces -= diference1;

    if(square2Dwarfs > square4Dwarfs)
        square4Spaces -= diference2;
    else
        square2Spaces -= diference2;

    if(square1Spaces < 0 || square2Spaces < 0 || square3Spaces < 0 || square4Spaces < 0)
        return -1;

    var minSpaces13 = square1Spaces < square3Spaces?square1Spaces:square3Spaces;
    var minSpaces24 = square2Spaces < square4Spaces?square2Spaces:square4Spaces;
    

    return diference1 + diference2 + minSpaces24 * 2 + minSpaces13 * 2;
    
}