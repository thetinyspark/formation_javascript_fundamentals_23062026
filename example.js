// exemple de comment retirer un élement spécifique d'un tableau
var tab = [1000,5000,789,4,6,87,410]; 

// dans un premier temps il faut trouver la position de l'élément 
// que l'on souhaite retirer, ici on va chercher à retirer le nombre 789
// pour cela on emploie la fonction indexOf qui renvoie soit la position
// de l'élément recherché au sein du tableau soit -1 si l'élément n'est pas 
// dans la tableau

/*
const position = tab.indexOf(789);

// si la position existe
if( position > -1){
    console.log(position);
    // alors on retire 1 élément à partir de la position
    // pour ça on utilise la fonction splice
    tab.splice(position, 1);
}

console.log(tab);
*/

tab.pop();