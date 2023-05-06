## Problema

Se tiene N contadores, inicialmente establecidos en 0, y tiene dos posibles operaciones en ellos:

increase (X) − counter X se incrementa en 1,
max counter - all counters se establecen en el valor máximo de cualquier contador.

Se da una matriz no vacía A de M enteros. Esta matriz representa operaciones consecutivas:

si A[K] = X, tal que 1 ≤ X ≤ N, entonces la operación K es increase(X),
si A[K] = N + 1, entonces la operación K es el max counter.

Por ejemplo, dado el entero N = 5 y la matriz A tal que:

     A[0] = 1
     A[1] = 1
     A[2] = 4
     A[3] = 6
     A[4] = 1
     A[5] = 5
     A[6] = 5

los valores de los contadores después de cada operación consecutiva serán:

     (1, 0, 0, 0, 0)
     (2, 0, 0, 0, 0)
     (2, 0, 0, 1, 0)
     (2, 2, 2, 2, 2)
     (3, 2, 2, 2, 2)
     (3, 2, 2, 2, 3)
     (3, 2, 2, 2, 4)

El objetivo es calcular el valor de cada contador después de todas las operaciones.

Escribe una función:

class Solution { public int[] solution(int N, int[] A); }

que, dado un número entero N y una matriz A no vacía que consta de M números enteros, devuelve una secuencia de números enteros que representan los valores de los contadores.

La matriz de resultados debe devolverse como una matriz de enteros.

Por ejemplo, dado:

     A[0] = 1
     A[1] = 1
     A[2] = 4
     A[3] = 6
     A[4] = 1
     A[5] = 5
     A[6] = 5

la función debería devolver:

```
[3, 2, 2, 2, 4]
```

Escriba un algoritmo eficiente para las siguientes suposiciones:

N y M son números enteros dentro del rango [1..100,000];
cada elemento de la matriz A es un número entero dentro del rango [1..N + 1].
