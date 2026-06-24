var tab = [10,20,30,40,50,60,70,80,90,100]; 

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

// utilisez le bouton createProductBtn sur le index.html
// lorsque vous cliquez sur ce bouton, alors le tableau, doit 
// être ordonné de façon décroissante

// ATTENTION n'oubliez pas de démarrer votre code dans une fonction
// qui est appelée lorsque window.onload est lancé