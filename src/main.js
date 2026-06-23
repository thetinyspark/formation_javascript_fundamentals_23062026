let age = 40; 
let nom = "Legrand";
let prenom = "Nicolas";
let sex = "H";
let taste = "Coconut";
// le mot clef let est d'avantage utilisé que le mot clef 'var' qui a une portée trop globale

console.log(age);
console.log(nom);
console.log(prenom);
console.log(sex);
console.log(taste);

// On va chercher la balise body à l'aide des fonctionnalités embarquées dans 
// le langage lui-même et dans le navigateur. Ces fonctionnalités sont liées
// à ce que l'on appelle le DOM (Document Object Model) et nous permettent 
// de lire, modifier, supprimer des éléments au sein de la page web.


// Pour aller chercher un élément en fonction de son nom de balise 
// on peut utiliser la fonctione suivante: 

// va chercher le premier élément correspondant au sélecteur passé en paramètre
// querySelector prend en paramètre un sélecteur au sens CSS du terme
const element = document.querySelector("body");
console.log(element);

// Pour écrire à l'intérieur de ma balise, il existe plusieurs façons de faire
// mais la plus simple est encore de modifier la propriété innerHTML 
// d'une balise / d'un élément 

// ce format de chaîne de caractères s'appelle "template string"
element.innerHTML = `
<ul>
    <li>Nom: ${nom}</li>
    <li>Prénom: ${prenom}</li>
    <li>Âge: ${age}</li>
    <li>Sexe: ${sex}</li>
    <li>Parfum de glace préféré: ${taste}</li>
</ul>
`;