let nombre = prompt("Veuillez saisir un nombre entre 1 et 10");

console.log(nombre);

if(isNaN(nombre)){
    alert("Veuillez saisir un nombre");
}else if (nombre < 1 || nombre > 10){
    alert("Le nombre choisi doit etre compris entre 1 et 10");
}else{
    for(let i = 0; i < nombre; i++){
        console.log("affichage no " + (i + 1) + " : ceci est un exercice");
    }

    console.log("Affichage terminée")
}


