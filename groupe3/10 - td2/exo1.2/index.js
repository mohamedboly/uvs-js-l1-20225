//  a² + 2 × a × b + b²



function identity(a,b){

    let resultat = a**2 + 2*a*b + b**2;

    return resultat;

}

const retour = identity(8,3);

console.log(retour);

const retour2 = identity(2,1);

console.log(retour2);

function max(nbr1,nbr2){

    if (nbr1 > nbr2) {

        return nbr1;

    }else{

        return nbr2;

    } 

}

const nbrMax = max( 25 , 5);

console.log(nbrMax);

const nbrMax2 = max( 7 , 5);

console.log(nbrMax2);

const nbrMax3 = max( 25 , 25);

console.log(nbrMax3);



// Une fonction nommée repeat qui répète un même mot un

// certain nombre de fois au

// choix. 



function repeat(motArepeter,nbrDeRepetition){

    for(let i = 0; i < nbrDeRepetition; i++){

        console.log(motArepeter);

    }

}

repeat('bonjour',8);?