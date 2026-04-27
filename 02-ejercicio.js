//Declaracion de variables
const precio_original=150
const descuento=0.20  //descuento del 20%

//calculando el precio de descuento
const monto_descuento=precio_original*descuento

//Calculando el precio final
const precio_final=precio_original-monto_descuento

//Imprimir salida de llos datos
console.log('Precio original:', '$', precio_original)
console.log('Descuento 20%:', '$', monto_descuento)
console.log('Precio final :', '$', precio_final)