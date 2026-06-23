
function addition(a,b){
    return a + b ;
}

function onPageStarted(){
    const prices = [ 1039, 499, 269.99 ];
    // retourne la longueur du tableau (le nombre d'éléments )
    console.log(prices.length); 

    // ajoute un x éléments à la fin du tableau
    prices.push(589);
    prices.push(addition(10,5));
    console.log(prices);

    // retire le dernier élément du tableau
    prices.pop();
    console.log(prices);

    // ajoute x éléments au début du tableau
    prices.unshift(1,2,3,4);
    console.log(prices);
    
    // supprime le premier élément du tableau
    prices.shift();
    console.log(prices);
    
    // les tableaux ne sont pas typés en Javascript, çàd qu'ils peuvent 
    // contenir des éléments de différents types
    prices.push(true, "coucou");
    console.log(prices);


    // les boucles sont des structures de contrôle qui permettent 
    // d'itérer (de répéter la même opération) un certain nombre 
    // de fois en fonction d'une ou ou plusieurs conditions de sortie
    for( let i = 0; i < 10; i++){
        console.log(i);
    }   

}

window.onload = onPageStarted;