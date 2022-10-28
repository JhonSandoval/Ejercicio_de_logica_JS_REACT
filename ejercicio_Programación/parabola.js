// Ejercicios 2

// - definir una funcion con la formula x^2 + x + 1


function resolver(x){

     x = Math.pow(x, 2)
    resolver = ( x + x + 1 )  
    
     return resolver

    }

x = parseInt(window.prompt("Ingresa el numero que quieres calcular en la funcion la funciones x^2 + x + 1 es: "))

console.log( " es : " + resolver(x) ) 


// Ejercicio 2
// - definir una funcion con la formula libre plolinomio,
     

// Polinomio P(x) = 2x^3+ 5x - 3, https://www.superprof.es/apuntes/escolar/matematicas/algebra/polinomios/polinomios.html

function Polinomio(n){
 
    n = Math.pow(n, 3)
    ecuacion = (( 2 * n) + (5 * n) - 3 )

    return ecuacion

}
n = parseInt(window.prompt("Ingresa el numero que quieres calcular en la funcion la funciones 2x^3+ 5x - 3: "))

console.log( " es : " + Polinomio(n) ) 


/*


reto: 
- artitmetico, calculadora de raices de una parabola 
una parabola se define con la formuna ax^2 + bx + c = 0
(-b +- (b^2 - 4*ac)^(1/2)) / 2a 
*/



