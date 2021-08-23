// // innerHTML



// ESTO ESTA MAL
// for (let i = 0; i < productos.length; i++) {
//  carrito.innerHTML = `
//  <article class="producto">
//   <h3>${productos[i]}</h3>
//   <img src="http:www.placekitten.com/200">
// </article>
//  `
// }

// const productos = ["Nada", "Computadora", "Gatito", "Vino", "Vodka", "Auriculares", 
// "Porro", "Peluche", "Cerveza", "Teclado"]

// const carrito = document.querySelector(".carrito")

// let acc = ''

// for (let i = 0; i < productos.length; i++) {
//   acc = acc + `
//   <article class="producto">
//    <h3>${productos[i]}</h3>
//    <img src="http:www.placekitten.com/200">
//  </article>
//   `
//  }

//  carrito.innerHTML = acc



// const alumnasAnsiosas = ["Naty", "Caro", "Jenni", "Mika", "Chari", "Gabi", "Jose"]

// const lista = document.querySelector(".ansiosas")

// // lista.innerHTML = `<li>${alumnasAnsiosas[0]}</li>
// //                       <li>${alumnasAnsiosas[1]}</li>
// //                       <li>${alumnasAnsiosas[2]}</li>
// //                       <li>${alumnasAnsiosas[3]}</li>
// //                       <li>${alumnasAnsiosas[4]}</li>
// // `


// let nombres = ""
// for (let i = 0; i < alumnasAnsiosas.length; i++) {
//   nombres = nombres + `<li class="rojo">${alumnasAnsiosas[i]}</li>`
// }
// console.log(nombres)

// lista.innerHTML = nombres


// // let nombres = [2,3, 6, 8, 9]

// // let acc = 0
// // for (let i = 0; i < nombres.length; i++) {
// //   acc = acc + nombres[i]
  
// // }

// // console.log(acc)


// metodos de array
//const nombres = ["Ana", "Elsa", "Sven", "Kristoff"]

// slice
// Retorna un nuevo array, desde la posicion que le paso en el primer parametro
// hasta la posicion del segundo (esa posicion NO se incluye)
// Si no paso un segundo parametro, sigue hasta el final del array
// No modifica el array original
// const nombresRecortados = nombres.slice(1, 3) 
// console.log(nombres)
// console.log(nombresRecortados)

// splice
// permite agregar y quitar elementos al array
// recibe tres parametros
// el primero es a partir de donde voy a agregar y/o quitar elementos
// el segundo es cuantos elementos quiero eliminar
// el tercero es el elemento que quiero agregar
// y puedo agregar optativamente un cuarto, un quinto, etc. 

// MODIFICA EL ARRAY EL ORIGINAL 

/*console.log(nombres)

nombres.splice(3, 1, "Olaf", "Mushu", "Zazu")

console.log(nombres)*/



///EJERCICIOS///

//1. Hacer un codigo que recorra el array numeros y muestre en consola la suma de todos ellos. El resultado deberia ser 24.
/*const numeros = [5, 7, 8, 4]

let acc = 0

for (let index = 0; index < numeros.length; index++) {
 acc = acc + numeros[index]
    
}
console.log(acc)*/

//2. Dado el anterior array de nombres, hacer un codigo que recorra todos los nombres y muestre en consola el mensaje
// Ana - Elsa - Olaf - Sven - Hans (con guiones)

/*const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]

let acc = ""

for (let index = 0; index < nombres.length; index++) {
    
    acc = acc + `-${nombres[index]}`
}

console.log(acc)*/

/*4. Dado el mismo array, hacer un codigo que muestre en consola el siguiente mensaje:
<li>Ana</li><li>Elsa</li><li>Ana</li><li>Olaf</li><li>Sven</li><li>Hans</li>*/

//const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]

/*let acc = ''

for (let index = 0; index < nombres.length; index++) {
    
    acc = acc + `<li>${nombres[index]}</li>`
}

console.log(acc)*/

//5. Dado el mismo array, hacer un codigo que muestre en el HTML de la pagina una lista ordenada con todos los nombres. El "ul" ya deberia estar en el HTML. El resto se debe hacer con javascript.

//const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]

/*const lista = document.querySelector(".lista")

let acc = ""

for (let index = 0; index < nombres.length; index++) {
    
    acc = acc + `<li>${nombres[index]}</li>`
}

lista.innerHTML = acc*/

///EJERCICIOS CON LAS CHICAS///

//1. Hacer un codigo que recorra el array numeros y muestre en consola la suma de todos ellos. El resultado deberia ser 29.
/*const numeros = [5, 7, 8, 9]*/

/*let acc = 0

for (let index = 0; index < numeros.length; index++) {
  acc = acc + numeros[index]
    
}

console.log(acc)*/

//2. Dado el array de frutas, hacer un codigo que recorra todos los nombres y muestre en consola el mensaje
// * Frutillas * Bananas * Naranjas * Limon * Peras (con *)

/*const frutas = ["Frutillas", "Bananas", "Naranjas", "Limon", "Peras"]

let acc = ""

for (let index = 0; index < frutas.length; index++) {
    acc = acc + ` *${frutas[index]}`
    
}

console.log(acc)*/

/*3. Dado el mismo array, hacer un código que muestre en consola el siguiente mensaje:
<li>Frutillas</li><li>Bananas</li><li>Naranjas</li><li>Limon</li><li>Peras</li>*/

/*const frutas = ["Frutillas", "Bananas", "Naranjas", "Limon", "Peras"]

let acc = ""

for (let index = 0; index < frutas.length; index++) {
    acc = acc + `<li>${frutas[index]}</li>`
}

console.log(acc)*/

//4. Dado el mismo array, hacer un codigo que muestre en el HTML de la pagina una lista ordenada con todos los nombres. El "ul" ya deberia estar en el HTML. El resto se debe hacer con javascript.

/*const frutas = ["Frutillas", "Bananas", "Naranjas", "Limon", "Peras"]
const lista = document.querySelector(".lista")

acc = ""

for (let index = 0; index < frutas.length; index++) {
    acc = acc + `<li>${frutas[index]}</li>`
}

lista.innerHTML = acc*/

//5. Dado el mismo array mostrar en consola las frutas: banana y naranjas.

/*const frutas = ["Frutillas", "Bananas", "Naranjas", "Limon", "Peras"]*/

//console.log(frutas.slice(1,3))

//6. Dado el mismo array mostrar en consola: frutilla.
//console.log(frutas.slice(0,1))

//7. Dado el mismo array quitarle limon y agregar mandarinas.
//let frutas = ["Frutillas", "Bananas", "Naranjas", "Limon", "Peras"]
/*frutas.splice(3,1,"mandarinas")
console.log(frutas)*/

//8. Dado el mismo array sumar Anana
/*frutas.splice(5,0,"anana")
console.log(frutas)*/