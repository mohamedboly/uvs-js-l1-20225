let prenom = "Fatimata" // variable globale

console.log("prenom avant le bloc")
console.log(prenom)
if(true){
    let prenom = "Aissatou"
    let age = 21; // variable locale
    
    console.log(age)
    console.log("prenom dans le bloc")
    console.log(prenom)
}
console.log("je souhaite acceder a la variable age")
// console.log(age)
console.log("prenom apres le bloc")
console.log(prenom)



// portee general