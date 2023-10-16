
// ********* EJEMPLO PRATICO ARRAYS *************

// Creando el Array
const lista = []; 

// Asignando Longutid del Array
let Longitud = 5; 

do { 

    // Ingresando via prompt los elementos
    let item = prompt("Ingresar Producto")
    
    //Agregando los Elementos al Array lista con el metodo .push y convirtiendolos a Mayusculas
    lista.push(item.toUpperCase()) 
    // Verificando cuando Espacios del Array lista se van llenando 
    console.log(lista.length)

} while(lista.length != Longitud)

// Mostrando todo los que esta dentro del Array lista con un .join()
console.log(lista.join('-'))
console.log('')

// Creando otro Array para concatenarlo
const otroArray = ['otroMas1', 'otrosMas2']

// Juntando 2 Array en uno Nuevo usando el metodo .concat() 
const listaModificada = lista.concat(otroArray)
console.log(listaModificada)

// ****** USANDO EL for..Of ********

// Recorre todo el Array lista y muestra por pantalla cada elemento que tiene dentro
for (let elemento of lista) { 

    console.log(`Elemento: ${elemento} `)

}
console.log('')

// Usando el for..Of con un Array de Objetos 
const productos = [
    { id: 1, producto: 'Arroz' },
    { id: 2, producto: 'Papa' },
    { id: 3, producto: 'Lentejas' },
    { id: 4, producto: 'Garbanzo' },

]

for (let producto of productos) { 

    console.log(`id: ${producto.id} `)
    console.log(`Producto: ${producto.producto} `)
}

