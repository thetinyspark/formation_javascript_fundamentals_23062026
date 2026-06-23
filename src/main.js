function displayProduct(container, product){
    // container fait référence à une balise html
    // que vous aurez crée programmatiquement à l'aide 
    // de la fonction document.createElement();
    // Vous devez avoir ajouté cette balise à la balise <body>

    // product fait référence à un des objets contenu dans le tableau
    // de produit. 



    // TODO : Editer le .innerHTML du container avec les infos du produit
}

function onPageStarted(){

    const products = [
        {
            name:"FF7 Rebirth", 
            price: 15.99
        }, 
        {
            name: "FF7 Remake", 
            price: 9.99
        }, 
        {
            name: "FF7 OG (97)", 
            price: 7.99
        }
    ];

    // on va chercher à afficher le contenu de notre tableau 
    // de produits sur notre page web
    // Il nous faudra utiliser tout ce que l'on a vu aujourd'hui

    // TODO: boucler sur l'ensemble des produits à l'aide 
    // d'une boucle for ou de la fonction forEach. 

    // au sein de la boucle, créez un container programmatiquement
    // puis ajoutez le à la balise body. 

    // Une fois cela fait, envoyez votre container et votre produit
    // à la fonction displayProduct
}

window.onload = onPageStarted;