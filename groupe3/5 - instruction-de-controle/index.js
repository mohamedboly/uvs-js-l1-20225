// if(condition a tester){
  
// }else{

// }

// isUcadStudent = false;
// firstYear = true;
// isSenegaleseStudent = false

// if(isUcadStudent || isSenegaleseStudent){
//     console.log("Vous pouvez passer par la grande porte")
 
// }

// if(isUcadStudent && firstYear){
//     console.log("Vous pouvez passer par la grande porte")
 
// }else{
//     console.log("Desole, veuillez passer par le couloir de la mort")
// }

// if(isUcadStudent || isSenegaleseStudent){
//     console.log("Vous pouvez passer par la grande porte")
 
// }else{
//     console.log("Desole, veuillez passer par le couloir de la mort")
// }
// console.log("le programme continue")

// // >, >=, <, <=, ==

// 5 > 9 // false
// 7 >= 7 // true

// 9 == 8 // false

// if (5 == 7){
//     console.log("c'est vrai")
// }else{
//     console.log("c'est faux")
// }

// let faceAffiche = 8;
// if(faceAffiche == 1){
//     console.log("deplacez-vous d'un pas");
// }else if(faceAffiche == 2){
//      console.log("deplacez-vous de deux pas");
// }else if(faceAffiche == 3){
//      console.log("deplacez-vous de trois pas");
// }else if(faceAffiche == 4){
//      console.log("deplacez-vous de quatre pas");
// }else if(faceAffiche == 5){
//      console.log("deplacez-vous de cinq pas");
// }else if (faceAffiche == 6){
//      console.log("deplacez-vous de six pas");
// }else{
//     console.log("Ce nombre n'est pas autorise");
// }

// let faceAffichee = 1;
// switch(faceAffichee){
//     case 1: // faceAffichee == 1
//         console.log("deplacez-vous d'1 pas");
//         break;
//     case 2:  // faceAffichee == 2
//         console.log("deplacez-vous de 2 pas");
//         break;
//     case 3:  // faceAffichee == 3
//         console.log("deplacez-vous dd 3 pas");
//         break;
//     case 4:  // faceAffichee == 4
//         console.log("deplacez-vous de 4 pas");
//         break;
//     case 5:  // faceAffichee == 5
//         console.log("deplacez-vous de 5 pas");
//         break;
//     case 6:  // faceAffichee == 6
//         console.log("deplacez-vous de 6 pas");
//         break;
// }

// difference entre switch et if

// let age = 10;
// if(age < 18){
//     console.log("Vous etes un adolescent")
// }else if(age >= 18 && age < 60){
//     console.log("Vous etes adultes")
// }else {
//     console.log("vous etes vieux")
// }




// Les boucles
// console.log("Bonjour Fatima")
// console.log("Bonjour Amadou")
// console.log("Bonjour Demba")
// console.log("Bonjour Mohamadou")
// console.log("Bonjour Aicha")
// console.log("Bonjour Ngor")
// const etudiants = ["Fatima", "Amadou", "Demba", "Mohamadou", "Aicha", "Ngor"]
// let i = 0;
// for( i = 0; i < etudiants.length; i++){
//   console.log("i = " + i)
//   console.log("Bonjour " + etudiants[i])
// }

// console.log("la valeur de i apres la boucle : " + i)
// console.log("le programme continue")


// for(let nombre = 0; nombre <= 20; nombre++){
//     console.log("le nombre est egale a " + nombre);
// }

console.log("avant la boucle while")

let index = 10;
while (index < 10){
 console.log("index = " + index);
 index++;
}
console.log("apres la boucle while")

console.log("avant la boucle  do while")

do {
  console.log("index = " + index);
  index++;
} while (index < 10)

console.log("apres la boucle do while")