var tab = [10,20,30,40,50,60,70,80,90,100]; 
var order = 'ASC';

function ascSorting(){
    // cette fonction permet de comparer les éléments du tableau
    // 2 par 2
    tab.sort(
        function( a, b ){
            // si on renvoie 1 alors, l'ordre est préservé
            // si on renvoie -1 alors l'ordre est inversé
            if( a < b){
                return -1;
            }
            else{
                return 1;
            }
        }
    );
}

function descSorting(){
    // cette fonction permet de comparer les éléments du tableau
    // 2 par 2
    tab.sort(
        function( a, b ){
            // si on renvoie 1 alors, l'ordre est préservé
            // si on renvoie -1 alors l'ordre est inversé
            if( a > b){
                return -1;
            }
            else{
                return 1;
            }
        }
    );
}

function sortTab(){
    if( order == 'ASC'){
        ascSorting();
        order = 'DESC';
    }
    else{
        descSorting();
        order = 'ASC'; 
    }

    console.log(tab);
}

function start(){
    const btn = document.querySelector("#createProductBtn"); 
    btn.addEventListener("click", sortTab )
}

window.onload = start;

// utilisez le bouton createProductBtn sur le index.html
// lorsque vous cliquez sur ce bouton, alors le tableau, doit 
// être ordonné de façon décroissante

// ATTENTION n'oubliez pas de démarrer votre code dans une fonction
// qui est appelée lorsque window.onload est lancé

// EXERCICE supplémentaire, essayez de créer une variable globale
// nommée "direction" si elle vaut 'ASC' alors vous ordonnez le tableau
// de façon croissante, si elle vaut 'DESC', vous ordonnez le tableau
// de façon décroissante