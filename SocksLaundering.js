//K: cantidad de pares a lavar
//C: pares limpios
//D: pares sucios
function solution(K, C, D)
{
	var paresReunidos = 0;
var arregloLimpios = new Array(51);
var arregloSucios = new Array(51);
arregloLimpios.fill(0);
arregloSucios.fill(0);

for(var i = 0; i < C.length;i++)
{
    
	if(arregloLimpios[C[i]] == 1)
	{
		arregloLimpios[C[i]] = 0;
		paresReunidos++;		
	}
	else
		arregloLimpios[C[i]] = 1;
}

for(var i = 0; i < D.length;i++)
{
	arregloSucios[D[i]]++;
}

var posicioBuscar = 1;

while(K > 0 && posicioBuscar < 51)
{
	if(arregloLimpios[posicioBuscar] == 1 && arregloSucios[posicioBuscar] > 0)
	{
		arregloLimpios[posicioBuscar]--; 
		arregloSucios[posicioBuscar]--;
		paresReunidos++;
		posicioBuscar++;
		K--;
		continue;
	}
	else
		posicioBuscar++;

}

posicioBuscar = 1;

while(K > 1 && posicioBuscar < 51)
{
	
	if(arregloSucios[posicioBuscar] >= 2)
	{
		arregloSucios[posicioBuscar] -= 2;
		paresReunidos++;
		K -= 2;
		continue;
	}
	posicioBuscar++;	
	
}

return paresReunidos;
}

