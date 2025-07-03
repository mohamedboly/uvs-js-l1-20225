let prenomEtudiant1 = 'Moussa';
let ageEtudiant1 = 19
let nomEtudiant1 = "Ndiaye"

let etudiant1 = {
    prenom: "Moussa",
    nom: "Ndiaye",
    age: 19,
}

etudiant1.niveau = "L1";

let etudiant2 = {
    prenom: "Fatou",
    nom: "Ba",
    age: 20,
}

console.log(etudiant1.age) // etudiant1["age"]
console.log(etudiant1["nom"])
console.log(etudiant1.prenom)


console.log(etudiant2.age)
console.log(etudiant2.nom)
console.log(etudiant2.prenom)

etudiant2.prenom = "Amina";

console.log("Changement prenom etudiant2")

console.log(etudiant2.prenom)


let etudiant3 = {
    prenom: "Aicha",
    nom: "Kane",
    age: 21,
    autrePropriete: "valeur quelconconque",
    notes: {
        math: 15,
        pc: 17,
        hg: 14,
    }
}
console.log("Info etudiant3")
console.log(etudiant3.prenom)
let prenom = etudiant3.prenom
console.log(prenom)
console.log(etudiant3.autrePropriete)
console.log(etudiant3.notes.math)

let etudiant4 = {};

etudiant4.prenom = "Abdou";
etudiant4.nom = "Ndao";
etudiant4.age = 23

let etudiants = new Array();
etudiants.push(etudiant1) //0
etudiants.push(etudiant2) // 1
etudiants.push("Matam") //2

console.log("Array Info")
console.log(etudiants[0])
console.log(etudiants[0].prenom)

console.log(etudiants[1])
console.log(etudiants[2])

function Etudiant(prenom, nom, age) {

    this.prenom = prenom;

    this.nom = nom;

    this.age = age;

}

let etudiant5 = new Etudiant ("Aly", "Sy", 18);

console.log("Info Etudiant 5")
console.log(etudiant5)
console.log(etudiant5.prenom)
console.log(etudiant5.nom)
console.log(etudiant5.age)

// let etudiant5 = {
//     prenom: "Aly",
//     nom: "Sy",
//     age: 18
// }

let professeur = Object.create(etudiant5)
console.log("Info Prof")
console.log(professeur)
console.log(professeur.prenom)
professeur.prenom = "Daouda"
professeur.adresse = "Dakar"
console.log(professeur)
console.log(professeur.prenom)

// let professeur = {
//     prenom: "Aly",
//     nom: "Sy",
//     age: 36
// }

let person = {
    age: 0,
    prenom: "Moussa",

    get age() {
        return this.age;
      },

    set age(value) {
        if (typeof value === 'number' && value >= 0 && value <= 120) {
            this.age = value;
        } else {
            console.log('Âge invalide. Veuillez entrer un nombre entre 0 et 120.');
        }
    }

}

person.age = 5

console.log('age de la personne ')

console.log(person.age)

//  person.age = 778;
// person.age = -8
// console.log(person)





