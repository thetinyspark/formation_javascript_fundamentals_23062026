
function addition(a,b){
    return a + b ;
}

function onPageStarted(){
    const prices = [ 1039, 499, 269.99 ];
    // retourne la longueur du tableau (le nombre d'éléments )
    // console.log(prices.length); 

    // ajoute un x éléments à la fin du tableau
    prices.push(589);
    prices.push(addition(10,5));

    // retire le dernier élément du tableau
    prices.pop();

    // ajoute x éléments au début du tableau
    prices.unshift(1,2,3,4);
    
    // supprime le premier élément du tableau
    prices.shift();
    
    // les tableaux ne sont pas typés en Javascript, çàd qu'ils peuvent 
    // contenir des éléments de différents types
    // prices.push(true, "coucou");
    // console.log(prices);


    // les boucles sont des structures de contrôle qui permettent 
    // d'itérer (de répéter la même opération) un certain nombre 
    // de fois en fonction d'une ou ou plusieurs conditions de sortie

    let total = 0;
    for( let i = 0; i < prices.length; i++){
        // total = total + prices[i];
        total += prices[i]; //  notation raccourcie de la ligne du dessus
    }   

    console.log("total HT:", total.toFixed(2),"€");
    console.log("total TTC:", (total*1.2).toFixed(2),"€");

}

window.onload = onPageStarted;