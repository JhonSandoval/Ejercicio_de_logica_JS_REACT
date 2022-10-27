// Ejercicios 2
/*
- definir una funcion con la formula x^2 + x + 1


- definir una funcion con la formula libre plolinomio,


reto: 
- artitmetico, calculadora de raices de una parabola 
una parabola se define con la formuna ax^2 + bx + c = 0
(-b +- (b^2 - 4*ac)^(1/2)) / 2a 
*/

function resolver(x){

     x = Math.pow(x, 2)
    resolver = ( x + x + 1 )  
    
     return resolver

    }

x = parseInt(window.prompt("Ingresa el numero que quieres calcular en la funcion la funciones x^2 + x + 1 es: "))

console.log( " es : " + resolver(x) ) 