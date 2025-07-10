function salutation(){
    console.log("Voici ma premiere fonction Js");
}

salutation(); // invocation. execution

function salutation2(prenom, nom, age){
    console.log("Je m'appelle "+prenom+ " "+nom+ " et j'ai "+age + " ans");
}

salutation2("Moussa", "Diop", 22);

function getAge(anneeNaissance){
    console.log(this);
    const age = 2025 - anneeNaissance;

    function autreFunction (){

    }

    return age;
}

const getAge2 = function (anneeNaissance){
    console.log(this);
    const age = 2025 - anneeNaissance;

    function autreFunction (){

    }

    return age;
}

getAge2(1996);

console.log("Appel de getAge dans objet literal")

const eleve = {
    age: getAge,
    niveau: "2nde"
}

console.log(eleve.age("1998"))

console.log("Appel de getAge dans le contexte global")

let age = getAge(2006);

console.log(age)

function getSomething(){
    return "valeur quelconque";
}

const a = getSomething();

console.log(a);

salutation2("Awa", "Tall", 18);

const f = function fact(x) {
     if (x <= 1) return 1; else return x*fact(x-1); 
    
};

const factorilelle4 = f(4); // 1 * 2 * 3 * 4

console.log(factorilelle4); 