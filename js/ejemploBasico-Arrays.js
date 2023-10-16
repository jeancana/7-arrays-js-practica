
// ********************** EJEMPLOS DE ARRAY ********************************

// **** Ejemplo Nro.1 Creando un Array de la Clase Array Nativa de JavaScript
// Inicializando el Array
const arrayNativa = new Array('Enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio')
// verificando que la constante arrayVacio es una Array 
console.log(`La Constante arrayNativa pertenece a la clase Array Nativa de JavaScritp? ---> ${Array.isArray(arrayNativa)}`)


// **** Ejemplo Nro.2 Creando un Array vacio - Usando la Forma mas utilizada

// Inicializando el Array
const arrayVacio = [] 
// verificando que la constante arrayVacio es una Array 
console.log(`La Constante numeros pertenece a la clase Array Nativa de JavaScritp? ---> ${Array.isArray(arrayVacio)}`)


// **** Ejemplo Nro.3 Creando un Array con DATOS "hardcodeadoS" - Usando la Forma mas utilizada

// Importante: Dentro del Array solo se ingresan Datos/Valores y se separan por comas 

// 3.1 - Creando un Array de Numeros
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 10]
// verificando que la constante arrayNumeros es un Array 
console.log(`La Constante arrayNumeros es un Array? ---> ${Array.isArray(arrayNumeros)}`)

// 3.2 - Creando un Array de String
const arrayString = ['hola', 'soy', 'un', 'Array', 'de', 'String']
// verificando que la constante arrayString es un Array 
console.log(`La Constante arrayString es un Array? ---> ${Array.isArray(arrayString)}`)

// 3.3 - Creando un Array de booleanos
const arrayBooleano = [true, true, false, true, false]
// verificando que la constante arrayBooleano es un Array 
console.log(`La Constante arrayBooleano es un Array? ---> ${Array.isArray(arrayBooleano)}`)

// 3.4 Creando un Array que CONTENGA de TODOs los tipos de Datos Primitivos (String,Number,Boolean,Null) que puede colocar el usuario 
const arrayDePrimitivos = ['hola', 1, true, null]
// verificando que la constante arrayBooleano es un Array 
console.log(`La Constante arrayDePrimitivos es un Array? ---> ${Array.isArray(arrayDePrimitivos)}`)

// 3.5 Creando un Array de Objetos Literales Vacios 
const arrayDeObjetos = [{}, {}, {}]
// verificando que la constante arrayDeObjetos es un Array 
console.log(`La Constante arrayDeObjetos es un Array? ---> ${Array.isArray(arrayDeObjetos)}`)

// 3.6 Creando un Array que CONTENGA de TODO y Otros Arrays dentro del Mismo  
const arrayDentroDeArray = ['hola', 1, true, null, {} ,[] ,['mundo',2,false]]
// verificando que la constante arrayDentrodeArray es un Array 
console.log(`La Constante arrayDentroDeArray es un Array? ---> ${Array.isArray(arrayDentroDeArray)}`)
console.log(" ")

// ********************** ACCEDIENDO A LOS ELEMENTOS DEL ARRAY ********************************

console.log("  ***** ACCEDIENDO A LOS ELEMENTOS DEL ARRAY ******")
console.log(" ")

// **** Ejemplo Nro.1 - Accediendo a todos los Elemento del Array
console.log("  ---- Accediendo a Todos los Elemento del Array ---- ")

document.write(arrayNativa)
console.log(arrayVacio)

alert(arrayNumeros)
alert(arrayString)
alert(arrayBooleano)

console.log(arrayDeObjetos)
console.log(arrayDentroDeArray)
console.log(` Esta es la ClaseNativa "Array" ----->  ${Array}`)
// La Clase Nativa Array solo me la Muestra NO la puedo tocar (Es CODIGO NATIVO DE JAVASCRITP)

console.log(" ")
// **** Ejemplo Nro.2 - Accediendo a un elemento especifico traves de su INDICE(posicion Asignada dentro del Array)\

// 2.1 -  Accediendo a los Elementos del arrayNumeros y realizando Operaciones Matematicas
console.log(`Accediendo al Indice 0 del ArrayNumeros = ${arrayNumeros[0]}`)
console.log(`Accediendo al Indice 4 del ArrayNumeros = ${arrayNumeros[4]}`)
let sumaIndices = arrayNumeros[0] + arrayNumeros[4]
console.log(`Sumando el  Indice 0 y 4 del ArrayNumeros = ${sumaIndices}`)

console.log(" ")

// 2.2 -  Accediendo a a C/U los Elementos de arrayNativa
console.log(" --- Valor Por Indice ")
console.log(arrayNativa[0])
console.log(arrayNativa[1])
console.log(arrayNativa[2])
console.log(arrayNativa[3])
console.log(arrayNativa[4])
console.log(arrayNativa[5])

console.log(" ")


// **************** RECORRIENDO EL ARRAY ********************

// 1. Recorriendo El arrayString con un FOR tradicional - Usando la Propiedad ".lenght" del Array )
console.log(" --- Recorriendo TODO el arrayString con un FOR Tradicional ")
for (let i = 0; i < arrayString.length; i+=1){
    console.log(arrayString[i])
}


