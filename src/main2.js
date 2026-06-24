var tab = [10,20,30,40,50,60,70,80,90,100]; 

// on va filtrer les éléments du tableau à l'aide de filter 


tab = tab.filter(
    function(currentValue){
        if( currentValue >= 50){
            return true;
        }
        else{
            return false;
        }
    }
); 

console.log(tab);

// ici, envoyez tab à console.log pour admirer le résultat du filtre. 
// puis une fois que c'est fait, inversez la condition au sein du filter
// et regardez le résultat