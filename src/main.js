function displayProduct(container, product){
    container.innerHTML = `
    <h2>${product.name}</h2>
    <p>Prix: ${product.price}€</p>
    `
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


    const baliseBody = document.querySelector("body");
    for( let i = 0; i < products.length; i++){
        const baliseHTMLProduct = document.createElement("div"); 
        baliseHTMLProduct.setAttribute("class","product");
        
        baliseBody.appendChild(baliseHTMLProduct); 
        displayProduct(baliseHTMLProduct, products[i]);
    }

    // on va chercher à afficher le contenu de notre tableau 
    // de produits sur notre page web
    // Il nous faudra utiliser tout ce que l'on a vu aujourd'hui

    // TODO: boucler sur l'ensemble des produits à l'aide 
    // d'une boucle for ou de la fonction forEach. 

    // au sein de la boucle, créez un container programmatiquement
    // puis ajoutez le à la balise body. ( à l'aide de la fonction document.createElement)
    // ex: créer une div = document.createElement("div")
    // ex: créer une p = document.createElement("p")

    // Une fois cela fait, envoyez votre container et votre produit
    // à la fonction displayProduct
    // displayProduct(div, product)
}

window.onload = onPageStarted;