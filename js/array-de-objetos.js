
// ****************** ARRAY DE OBJETOS *********************

const personas = [
    { nombre: 'Adrian', edad: 47 },
    { nombre: 'Michell', edad: 39 },
    { nombre: 'Katherine', edad: 26 },
    { nombre: 'David', edad: 33 },
    { nombre: 'lucas', edad: 28 },
    { nombre: 'Rafa', edad: 22 },

]

/* // ***** USANDO FOR Tradicional *****

// Recorriendo el Array de Objetos "persona" 
for (let i = 0; i < personas.length; i += 1) { 

    console.log(personas[i])
}

// Recorriendo Todo el Array con un Alert / De esta forma solo me entrega un [object Object]
for (let i = 0; i < personas.length; i += 1) {

    alert(personas[i])
}

// Obteniendo SOLO el nombre con un Alert / Es la forma correcta de obtener la propiedades del objeto 
for (let i = 0; i < personas.length; i += 1) {

    alert(personas[i].nombre)
} */

// ***** --------- USANDO For..Of ---------- *****

// Inicializando el contador como Variable global 
let i = 0

for (let persona of personas) { 
    
    console.log(`${i += 1}) Nombre: ${persona.nombre} y Edad: ${persona.edad} `)

}