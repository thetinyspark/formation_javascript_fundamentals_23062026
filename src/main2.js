var tab = [10,20,30,40,50,60,70,80,90,100]; 

// on récupère la position du nombre 40 à l'aide de indexOf
const toRemove = [40,50,80,90];

// tant qu'il y a un numéro à supprimer
while( toRemove.length > 0 ){

    // alors on récupère le prochain à supprimer
    // en le retirant de notre tableau
    // pop permet de retirer et de retourner du dernier élément
    // ce qui, à chaque tour de boucle réduit la longueur
    // du tableau toRemove et au passage, me permet de stocker 
    // le nombre dans la variable num
    let num = toRemove.pop();

    // on cherche au sein de notre tableau si num y est présent
    let pos = tab.indexOf(num); 

    // si oui
    if( pos > -1)
        tab.splice(pos, 1); //  on le retire du tableau

}

console.log(tab);