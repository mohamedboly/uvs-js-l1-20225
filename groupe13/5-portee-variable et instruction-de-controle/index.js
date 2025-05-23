// Partie Condition
let esEtudiantDeUcad = true;
let premiereAnnee = false;

// if (esEtudiantDeUcad){
//    console.log("Passer par la grande porte")
// }
// ||

// if(esEtudiantDeUcad == true && premiereAnnee == true){
//     console.log("Passer par la grande porte")
// }else {
//     console.log("Enprunter le couloir de la mort");
// }

// if(esEtudiantDeUcad == true || premiereAnnee == true ){
//     console.log("Passer par la grande porte")
// }else {
//     console.log("Enprunter le couloir de la mort");
// }

// let age = 45;

// if(age > 18){
//     console.log("Vous etes majeurs,vous pouvez jouer")
// }else{
//     console.log("Vous etes mineurs, interdit de jouer")
// }

// let age = 5
// nationalite = "Senegalaise"

// if(age == 23 && nationalite == "Senegalaise" ){
//     console.log("Senegalais");
//     alert("Vous etes Senegalais")
// }else if (nationalite == "gambienne"){
//     console.log("Gmabien")
// }else if (nationalite == "mauritanienne"){
//     console.log("Mauritanien")
// }else{
//     console.log("Je ne connais pas votre nationalite")
// }

// ==, >, >=, <, <= operateurs de comparaison
// const age = 60
// if(age < 18){
//    console.log("Vous etes mineure");
// }else if(age >= 18 && age <= 50){
//    console.log("vous etes adultes")
// }else {
//    console.log("vous etes vieux")
// }

// //falsy : null, "", NaN, 0, -0, undefined, false

// let a = false;
// let b = null

// if(b){
//     console.log("Je ne saurai pas execute");
// }

// let a = 2

// // ! = NON, !false => true, !true => false

// if(!(a == 2)){
//     console.log("a")
// }

// let age = 5;

// switch (age) {
//     case 5:
//         console.log("vous etes un enfant");
//         break;
//     case 13:
//         console.log("vous etes un adolescent")
//          break;
//     case 25:
//         console.log("vous etes un adult")
//          break;

//     default:
//         console.log("je ne connais votre trange d'age")
//         break;
// }

// string, number, boolean

// let x = 5;

// switch(typeof x) {

//    case 'number':

//        console.log('nombre')
//        break;

//    case 'string':

//       console.log("Chaine de caractere")
//       break;
    
//     case 'boolean':

//       console.log("Boolean")
//       break;

//    default:

//       console.log("Inconnu")
//       break;

// }

// Les boucles




// for(let i = 1; i <= 100; i = i + 5){
//    console.log("salut " + i);
// }

// let count = 10;

// while (count < 10) {

// console.log(count);

// count++;

// }

// console.log("compteur a la fin de la boucle")
// console.log(count)

// do {
// console.log(count);

// count++;
 
// }while (count < 10)

// UVSX2025AMINATA

console.log("break")

for(let i = 0; i < 100; i++){
   
   if(i == 6){
      break;
   }
   console.log("salut " + i);
}

console.log("continue")

for(let i = 0; i < 100; i++){
 
   if(i == 6){
      continue;
   }
   console.log("salut " + i);
}
