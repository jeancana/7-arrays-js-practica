
// ********************** EJEMPLOS DE ARRAY ********************************


const arrayNativa = new Array('Soy', 'el', 'Array', 'Nativo')
const arrayMeses = ['Enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const arrayVacio = [] 
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrayString = ['hola', 'soy', 'un', 'Array', 'de', 'String']
const arrayBooleano = [true, true, false, true, false] 
const arrayDePrimitivos = ['hola', 1, true, null]
const arrayDentroDeArray = ['hola', 1, true, null, {}, [], ['mundo', 2, false]]
const arrayFrutas = ['Peras', 'Manzanas', 'Uvas', 'Limones', 'Patilla', 'Lechoza', 'Naranja']
const arrayNombres = ['Michell', 'Katherine', 'Kath', 'Reina', 'Marco']
// NOTA PARA USAR LOS EMOJI EN VSC: control+command+espacio 
const arrayEmojis = ['😄', '🙉', '🍑', '⚾️', '🛵']
console.log(" ")

// **************** RECORRIENDO LOS ARRAY ********************

//1. Usando la Propiedad .length para Saber cuantos elementos tiene un Array
console.log("- Mostrando Cuantos elementos tiene un C/U de los Array ")
console.log(`Frutas: ${ arrayFrutas.length }`)
console.log(`arrayBooleano: ${arrayBooleano.length}`)
console.log(`arrayNumeros: ${arrayNumeros.length}`)
console.log(" ")


// 2. Recorriendo El arrayString con un FOR tradicional - Declarando YO cuantas posiciones Recorre i  )
console.log("- Recorriendo TODO el arrayString con un FOR Tradicional - Declarando YO cuantas posiciones Recorre i ")
for (let i = 0; i<4; i += 1) {
    console.log(arrayString[i])
}
console.log(" ")

// 3. Recorriendo  TODO El arrayString con un FOR tradicional - Usando la Propiedad ".lenght" del Array )
console.log("- Recorriendo TODO el arrayString con un FOR Tradicional - Usando la Propiedad '.lenght' del Array ")
for (let i = 0; i<arrayString.length; i+=1){
    console.log(arrayString[i])
}
console.log(" ")

// **************** PROPIEDADES Y METODOS DE LOS ARRAYS EN JAVASCRITP ********************

// 1. Propiedad lenght - La mas USADA en general es '.length ' ---> Me permite saber cuantos elementos tiene un Array
console.log("- Contar los Elementos de arrayFrutas - Usando la Propiedad '.lenght' del Array ")
for (let i = 0; i < arrayFrutas.length; i += 1) {
    console.log(`Posicion ${i} = ${arrayFrutas[i]}`)
}
console.log(" ")

// 2. Propiedad isArray() - Es metodo estatico Boolenano ---> Me permite saber cuantos si la variable declarada es un Array
console.log(`La Constante arrayFrutas es un Array? ---> ${Array.isArray(arrayFrutas)}`)
console.log(" ")

// 3. Metodos Nativos de JavaScritp para Usar en los Arrays 

// ***** Aca estan los Metodos DESTRUCTIVOS (Que modificanc la estructura Original del Array) ******

// 3.1 Agregar Elementos al final del Array - Usando el Metodo .push() 
arrayNumeros.push(11)
console.log(`Pusheando arrayNumero y agrego al final otro elemento --> ${arrayNumeros}`)
// Agrego Varios elementos mas  
arrayNumeros.push(12,13,14,15) 
console.log(`Agregando mas elementos --> ${arrayNumeros}`)
console.log(" ")

// 3.2 Agregar Elementos al Principio del Array - Usando el Metodo .unshift()
arrayFrutas.unshift('otroEle1')
console.log(`Uso .unshift() y agrego un elemento al principio --> ${arrayFrutas}`)
// Agrego Varios elementos mas  
arrayFrutas.unshift('otroEle2', 'otroEle3', 'otroEle4')
console.log(`Agregando mas elementos --> ${arrayFrutas}`)
console.log(" ")

// 3.3 Eliminar el Primer Elemento del Array - Usando el Metodo .shift() 
arrayMeses.shift()
console.log(`Uso shift() y Elimino el Primer elemento del Array --> ${arrayMeses}`)
console.log(" ")

// 3.3 Eliminar el Ultimo Elemento del Array - Usando el Metodo .pop() 
arrayMeses.pop()
console.log(`Uso pop() y Elimino el Ultimo elemento del Array --> ${arrayMeses}`)
console.log(" ")

// 3.4 Eliminar el Varios Elemento del Array - Usando el Metodo .splice() 
arrayNumeros.splice(5,3)
console.log(`
Uso splice() y Elimino 3 elementos del Array desde la posicion 5 --> ${arrayNumeros}`)
console.log(" ")

// 3.8 Invierte los Elemento que esta dentro del Array - Usando el Metodo .reverse()
// Nota: Este si modifica (destructivo)al array al cual se le aplica el metodo .reverse
console.log(`Uso reverse() e Invierto los Elemento que estan dentro del Array --> ${arrayNativa.reverse()}`)
console.log(" ")

// ****** Aca estan los Metodos NO DESTRUCTIVOS (Que no modifican la estructura Original del Array) *******
// NOTA: Estos Metodos retornar un Array Nuevo como resultado, por lo tanto el array Original sigue existiendo y preserva su Estructura Intacta

// 3.4 Generar un string con TODOS los elementos contenidos en el array - Usando el Metodo .splice()/ Uso el ('-') como parametro para separar cada elemento  
// Nota: este metodo no modifica el Array/Es un metodo NO destructivo - Solo devuelve/return un resultado
console.log(`Uso join() y Genero un String con Todos --> ${arrayNativa.join('-')}`)
console.log(" ")

// 3.5 Combinar 2 Arrays en un UNICO Array - Usando el Metodo .concat() 
const arrayCombinado = arrayNombres.concat(arrayNativa)
console.log(`Uso concat() y Combino 2 Arrays en un UNICO Array --> ${arrayCombinado}`)
console.log(" ")

// 3.6 Obtengo una Parte del Array en uno Nuevo  - Usando el Metodo .slice() 
const arrayPedazo= arrayCombinado.slice(3,7) // Nuevo array desde la posicion 3 a 7
console.log(`Uso slice() y Obtengo una Parte de arrayCombinaod en un Array Nuevo --> ${arrayPedazo}`)
console.log(" ")

// Caso Practico de Slice: Si no le paso parametros de Corte al .slice(), VA a CLONAR el ARRAY original por completo
const arrayClonado = arrayNombres.slice()
console.log(`Clonando el arrayNombres usando slice() --> ${arrayClonado}`)
console.log(" ")

// Recordando LA COPIA POR REFERENCIA
let otroArray = arrayClonado
console.log(` otroArray es un array? ... ${Array.isArray(otroArray)}`)

// 3.6 Obteniendo el INDICE de un Elemento que esta dentro del Array - Usando el Metodo .indexOf() 
// Nota: solo funciona con string/cadenaDetexto, No funciona con otro Tipo de Dato
console.log(`Uso indexOf() y Obtengo el Indice del Elemento que busco dentro del Array --> ${arrayNombres.indexOf('Michell')}`)
console.log(" ")

// 3.7 Evalua SI un Elemento que esta dentro del Array existe (retorna true/false) - Usando el Metodo .includes() 
// Nota: solo funciona con string/cadenaDetexto, No funciona con otro Tipo de Dato
console.log(`Uso indexOf() y evaluo si el Elemento que busco dentro del Array existe --> ${arrayNombres.includes('Michell')}`)
console.log(" ")



