var tab = [10,20,30,40,50,60,70,80,90,100]; 

// on va enlever un élément du tableau par exemple le nombre 40
// on va le faire à l'aide de indexOf et splice


// on récupère la position du nombre 40 à l'aide de indexOf
const pos = tab.indexOf(40); 

if( pos > -1 )
    tab.splice(pos, 1);

console.log(tab);

// Exercice, essayez de supprimer les nombres 80,90 et 50 du tableau 
// avec la même façon de faire

// Exercice supplémentaire, essayez avec un nombre qui n'est pas dans le tableau