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