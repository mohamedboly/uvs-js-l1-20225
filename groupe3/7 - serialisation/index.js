// const person = {
//     prenom: "Aicha",
//     nom: "Ba",
//     age: 21,
//     profession: "Etudiante",
//     marcher: function(){
//         console.log("je marche")
//     },

//     // toJSON: function(){
//     //     return "b"
//     // }
// }



// console.log(person.marcher())

// console.log("La methode toString()")

// console.log(person.toString())

// console.log("La methode toJSON()")

// // console.log(person.toJSON())

// console.log("person en objet js")
// console.log(person)

// console.log(person.prenom)

// const personString = JSON.stringify(person)

// console.log("personString")
// console.log(personString)

// console.log(personString.prenom)

// const personStringToPersonJS = JSON.parse(personString)

// console.log(personStringToPersonJS)
// console.log(personStringToPersonJS.age)

// const batiment1 = {
//     hauteur: 200,
//     couleur: "blanche"
// }

// const entierObjet = new Number(7);

// const entierPrimitive = entierObjet.valueOf()
// console.log(entierPrimitive)

// const montableau = new Array();
// const montableau1 = [];
// const montableau2 = [3, 5.9, "Moussa", person]; // undefined


// console.log(montableau2[3])

// montableau2[3] = "Kane"
// // montableau2[4] = "Diaw";
// montableau2.push("Diaw");
// montableau2.push(7)
// console.log(montableau2[4])
// console.log(montableau2[3])

// for(let i = 0; i < montableau2.length; i++){
//     console.log("L'element a l'inice "+ i + " est egale a "+ montableau2[i])
// }

let  b = [[1, {x: 1, y: 2, z: [2, 6, 9]}], [2, {x: 3, y: 4}]];

let bkeys = Object.keys(b);

console.log('bkeys')
console.log(bkeys)

console.log("Nombre d'element de b ", b.length)

b.pop() 

b.shift()

console.log("Nombre d'element de b ", b.length)