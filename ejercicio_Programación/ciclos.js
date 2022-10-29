/**
 * 
 * Ejercicio de Interes
"""
Un prestamos de 10'000.000 a una tasa de interes del 1.5% NMV 
significa que mensualmente esta deuda generara interes de 150.000
es decir al final de mes tienes una deunda de: 10'150.000
asumiendo que haces un abono de 500.000 pesos mensual. en cuanto tiempo 
terminas de saldar la deuda? 
deuda: 10'000.000
mes 1: 10'150.000 - 500.000 = 9'650.000
mes 2: 9'650.000 + 150.000 - 500.000 = 9'300.000
....
mes n: 9'650.000 + 150.000 - 500.000 = 0 
"""
 * 
 */

let mes = 0
let prestamo = 10000000
let interes  = 0.015
let abono = 500000
let deuda = (prestamo * interes ) + prestamo - abono 

console.log(deuda)



while (prestamo) {
    console.log('imprimir el valor de prestamo: ' + prestamo)

    deuda = (prestamo * interes ) + prestamo - abono 
    prestamo = deuda 
    mes = mes + 1

    if (prestamo < 0) {
       
        break
    }
    value = window.prompt('insert de control: ')
    // console.log(value)
}
console.log('ya sali del ciclo while')
console.log("Terminas en el mes :" + mes)

