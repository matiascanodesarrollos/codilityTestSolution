/*
1:

P Win          1
I Lose        3

2:

P,P Win        1
P,I Win        2
I,P Win        2
I,I Win        1

3:

P,P,P Win      1
P,P,I Win      2
P,I,P Lose    3
P,I,I Win      1
I,P,P Win      2
I,I,I Win      2
I,P,I Win      1
I,I,P Win      1

4:

P,P,P,P Win    1
P,P,P,I Win    2
P,P,I,P Win    4
P,P,I,I Win    1
P,I,P,P Win    4
P,I,I,I Win    2
P,I,P,I Win    2
P,I,I,P Win    1
I,P,P,P Win    2
I,P,P,I Win    1
I,P,I,P Win    1
I,P,I,I Win    2
I,I,P,P Win    1
I,I,I,I Win    1
I,I,P,I Win    2
I,I,I,P Win    2

5:

P,P,P,P,P Win      1
P,P,P,P,I Win      2
P,P,P,I,P Win      4
P,P,P,I,I Win      1
P,P,I,P,P Lose    3
P,P,I,I,I Win      2
P,P,I,P,I Win      1
P,P,I,I,P Win      1
P,I,P,P,P Win      4
P,I,P,P,I Win      1
P,I,P,I,P Win      1
P,I,P,I,I Win      2
P,I,I,P,P Win      1
P,I,I,I,I Win      1
P,I,I,P,I Win      2
P,I,I,I,P Win      5
I,P,P,P,P Win      2
I,P,P,P,I Win      1
I,P,P,I,P Win      1
I,P,P,I,I Win      2
I,P,I,P,P Win      1
I,P,I,I,I Win      1
I,P,I,P,I Win      2
I,P,I,I,P Win      1
I,I,P,P,P Win      1
I,I,P,P,I Win      2
I,I,P,I,P Win      2
I,I,P,I,I Win      1
I,I,I,P,P Win      2
I,I,I,I,I Win      2
I,I,I,P,I Win      1
I,I,I,I,P Win      1

6:

P,P,P,P,P,P Win    1
P,P,P,P,P,I Win    2
P,P,P,P,I,P Win    4
P,P,P,P,I,I Win    1
P,P,P,I,P,P Win    4
P,P,P,I,I,I Win    2
P,P,P,I,P,I Win    1
P,P,P,I,I,P Win    1
P,P,I,P,P,P Win    4
P,P,I,P,P,I Win    1
P,P,I,P,I,P Win    1
P,P,I,P,I,I Win    2
P,P,I,I,P,P Win    1
P,P,I,I,I,I Win    1
P,P,I,I,P,I Win    2
P,P,I,I,I,P Win    5
P,I,P,P,P,P Win    4
P,I,P,P,P,I Win    1
P,I,P,P,I,P Win    1
P,I,P,P,I,I Win    2
P,I,P,I,P,P Win    1
P,I,P,I,I,I Win    1
P,I,P,I,P,I Win    2
P,I,P,I,I,P Win    5
P,I,I,P,P,P Win    1
P,I,I,P,P,I Win    2
P,I,I,P,I,P Win    5
P,I,I,P,I,I Win    1
P,I,I,I,P,P Win    5
P,I,I,I,I,I Win    2
P,I,I,I,P,I Win    1
P,I,I,I,I,P Win    1
I,P,P,P,P,P Win    2
I,P,P,P,P,I Win    1
I,P,P,P,I,P Win    1
I,P,P,P,I,I Win    2
I,P,P,I,P,P Win    1
I,P,P,I,I,I Win    1
I,P,P,I,P,I Win    2
I,P,P,I,I,P Win    2
I,P,I,P,P,P Win    1
I,P,I,P,P,I Win    2
I,P,I,P,I,P Win    2
I,P,I,P,I,I Win    1
I,P,I,I,P,P Win    2
I,P,I,I,I,I Win    2
I,P,I,I,P,I Win    1
I,P,I,I,I,P Win    1
I,I,P,P,P,P Win    1
I,I,P,P,P,I Win    2
I,I,P,P,I,P Win    2
I,I,P,P,I,I Win    1
I,I,P,I,P,P Win    2
I,I,P,I,I,I Win    2
I,I,P,I,P,I Win    1
I,I,P,I,I,P Win    1
I,I,I,P,P,P Win    2
I,I,I,P,P,I Win    1
I,I,I,P,I,P Win    1
I,I,I,P,I,I Win    2
I,I,I,I,P,P Win    1
I,I,I,I,I,I Win    1
I,I,I,I,P,I Win    2
I,I,I,I,I,P Win    2


1) If the number of odd numbers is pair o 0 i Win.

Solution:
string.format("{0},{1}",0,A.length - 1)

2) If the number of odd numbers is odd , there is a odd number at position 0 or A.Length - 1 and A.Length is not 1

Solution:
if odd al the end
string.format("{0},{1}",0,A.length - 2)
else
string.format("{0},{1}",1,A.length - 1)


(Gp group of only pair numbers, can be empty)

3) If the array can be expressed as Gp1 - ODD - Gp2 y  Gp1.length = Gp2.length y lose.


I           Lose
P,I,P       Lose
P,P,I,P,P   Lose


Solution:

"NO SOLUTION"


4) If the array can be expressed as Gp1 - ODD - Gp2 y  Gp1.length != Gp2.lenght Win.

Solution:
p= index if the ODD element

if Gp1.length > Gp2.lenght
    string.format("{0},{1}",0,Gp1.length - Gp2.lenght - 1)
else
    string.format("{0},{1}",p+1, p + Gp2.length - Gp1.lenght)

    P,P,P,P,P,P,I,P,P,P,P,P
yo  P,P,P,P,P,I,P,P,P,P,P
el  P,P,P,P,I,P,P,P,P,P
yo  P,P,P,P,I,P,P,P,P
el  P,P,P,I,P,P,P,P
yo  P,P,P,I,P,P,P
el  P,P,I,P,P,P
yo  P,P,I,P,P
el  P,I,P,P
yo  P,I,P
el  I,P
yo  I
el  lose

    P,P,P,P,P,I,P,P,P,P,P,P,P
yo  P,P,P,P,P,I,P,P,P,P,P
el  P,P,P,P,I,P,P,P,P,P
yo  P,P,P,P,I,P,P,P,P
el  P,P,P,I,P,P,P,P
yo  P,P,P,I,P,P,P
el  P,P,I,P,P,P
yo  P,P,I,P,P
el  P,I,P,P
yo  P,I,P
el  I,P
yo  I
el  lose

(Ip group with a even sum)

5) If the array can be expressed as Ip1 - ODD - Ip2 where ODD is the firts or the last odd element i Win.

p = index of the first odd element
q = index of the last odd element

Solution:

If number of elements before p < number of elements after q
    string.format("{0},{1}",p+1,A.length - Ip1.length - 1)
else if number of elements after q < number of elements before p
    string.format("{0},{1}",q-1,A.length - Ip2.length - 1)
else
    string.format("{0},{1}",p,q-1)

    P,I,P,I,I,P,P,P
yo  P,I,P
el  I,P
yo  I
el  Pierde

    P,I,P,I,P,I,P,P,P,P,P
yo  P,I,P
el  I,P
yo  I
el  Pierde

    P,P,I,P,I,I,P,I,P,P,P,P
yo  P,P,I,P,P
el  P,I,P,P
yo  P,I,P
el  I,P
yo  I
el  Pierde

    P,P,P,I,I,I,P,I,P,P,I,P
yo  P,I,P
el  I,P
yo  I
el  Lose
    
    P,P,I,I,I,P,I,I,P,P
yo  P,P,I,P,P
el  P,P,I,P
yo  P,I,P
el  P,I
yo  I
el  P

    P,P,I,I,I,P,I,I,P,P,P,P


The code wil be written in spanish.


Variables:

contadorimpares = 0
posicionPrimerImpar = -1
posicionUltimoImpar = -1
elementosAntesDePrimerImpar = 0
elementosDespuesDeUltimoImpar = 0

Invariante:

cada variable va a tener el valor apropiado para el subarreglo hasta A[i]

por cada elemento i

    si es impar
        contadorimpares++
        si posicionPrimerImpar == -1
            posicionPrimerImpar = i
        posicionUltimoImpar = i
        elementosDespuesDeUltimoImpar = 0
    sino
        si posicionPrimerImpar == -1
            elementosAntesDePrimerImpar++
        si posicionUltimoImpar != -1
            elementosDespuesDeUltimoImpar++

si contadorimpares % 2 != 0
    devolver string.format("{0},{1}",0,A.length - 1)
sino
    si A.length > 1
        si posicionUltimoImpar == A.length - 1
            devolver string.format("{0},{1}",0,A.length - 2)
        si posicionPrimerImpar == 0
            devolver string.format("{0},{1}",1,A.length - 1)
    si contadorimpares == 1
        si elementosAntesDePrimerImpar == elementosDespuesDeUltimoImpar
            devolver "NO SOLUTION"
        sino
            si elementosAntesDePrimerImpar > elementosDespuesDeUltimoImpar
                string.format("{0},{1}",0,elementosAntesDePrimerImpar - elementosDespuesDeUltimoImpar - 1)
            sino 
                string.format("{0},{1}",posicionUltimoImpar + 1, posicionUltimoImpar + elementosDespuesDeUltimoImpar - elementosAntesDePrimerImpar)
    sino
        Si elementosAntesDePrimerImpar < elementosDespuesDeUltimoImpar
            string.format("{0},{1}",posicionPrimerImpar+1,A.length - elementosAntesDePrimerImpar - 1)
        sino 
            si elementosDespuesDeUltimoImpar < elementosAntesDePrimerImpar
                string.format("{0},{1}",posicionUltimoImpar-1,A.length - elementosDespuesDeUltimoImpar - 1)
            sino 
                string.format("{0},{1}",posicionPrimerImpar,posicionUltimoImpar-1)

*/

class Solution
        {
            public string solution(int[] A)
            {
                int contadorimpares = 0;
                int posicionPrimerImpar = -1;
                int posicionUltimoImpar = -1;
                int elementosAntesDePrimerImpar = 0;
                int elementosDespuesDeUltimoImpar = 0;
                int elementosDespuesDeAnteUltimoImpar = 0;

                for (int i = 0; i < A.Length; i++)
                {
                    if (A[i] % 2 != 0)
                    {
                        contadorimpares++;
                        if (posicionPrimerImpar == -1)
                            posicionPrimerImpar = i;
                        if (contadorimpares > 2)
                            elementosDespuesDeAnteUltimoImpar = elementosDespuesDeUltimoImpar;
                        posicionUltimoImpar = i;
                        elementosDespuesDeUltimoImpar = 0;
                    }
                    else
                    {
                        if (posicionPrimerImpar == -1)
                            elementosAntesDePrimerImpar++;
                        if (posicionUltimoImpar != -1)
                            elementosDespuesDeUltimoImpar++;
                    }
                }

                if (contadorimpares % 2 == 0)
                {
                    return string.Format("{0},{1}", 0, A.Length - 1);
                }
                else
                {
                    if (A.Length > 1)
                    {
                        if (posicionUltimoImpar == A.Length - 1)
                            return string.Format("{0},{1}", 0, A.Length - 2);
                        if (posicionPrimerImpar == 0)
                        {
                            if(elementosDespuesDeUltimoImpar <= elementosDespuesDeAnteUltimoImpar)
                                return string.Format("{0},{1}", 0, posicionUltimoImpar - elementosDespuesDeUltimoImpar - 1);
                            else
                                return string.Format("{0},{1}", 1, A.Length - 1);
                        }
                    }
                    if (contadorimpares == 1)
                    {
                        if (elementosAntesDePrimerImpar == elementosDespuesDeUltimoImpar)
                            return "NO SOLUTION";
                        else
                        {
                            if (elementosAntesDePrimerImpar > elementosDespuesDeUltimoImpar)
                                return string.Format("{0},{1}", 0, elementosAntesDePrimerImpar - elementosDespuesDeUltimoImpar - 1);
                            else
                                return string.Format("{0},{1}", posicionUltimoImpar + 1, posicionUltimoImpar + elementosDespuesDeUltimoImpar - elementosAntesDePrimerImpar);
                        }
                    }
                    else
                    {
                        
                        if (elementosAntesDePrimerImpar + elementosDespuesDeAnteUltimoImpar >= elementosDespuesDeUltimoImpar)
                            return string.Format("{0},{1}", (elementosDespuesDeUltimoImpar <= elementosDespuesDeAnteUltimoImpar)?0:elementosDespuesDeUltimoImpar - elementosDespuesDeAnteUltimoImpar, (elementosDespuesDeUltimoImpar <= elementosDespuesDeAnteUltimoImpar)?posicionUltimoImpar - elementosDespuesDeUltimoImpar - 1:posicionUltimoImpar - elementosDespuesDeAnteUltimoImpar - 1);
                        else
                            return string.Format("{0},{1}", posicionPrimerImpar+1, A.Length - elementosAntesDePrimerImpar - 1);
                        

                    }
                }
            }
        }

//https://codility.com/cert/view/certV3Q79D-UZAXSQUYF5WB6NEA/