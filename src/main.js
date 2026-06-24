var products = []; // variable globale contenant les produits

function displayProduct(container, product){
    container.innerHTML = `
    <h2>${product.name}</h2>
    <p>Prix: ${product.price}€</p>
    `;
}

function getRandomPrice(){
    // retourne un nombre au hasard entre 0 et 1
    const rand = Math.random();

    // Math.round permet d'arrondir un nombre à virgule
    return Math.round( rand * 1000 );
}

function onBtnClicked(event){
    const eventType = event.type;
    const target = event.target;

    // ici, on va construire un produit au hasard à chaque fois
    // vous pouvez ajouter au tableau global de produits 
    // les produits suivants: 

    // {
    //     name: produit_<numero_du_produit>, 
    //     price: <random_price>
    // }

    // Puis ensuite, il faudra tous les afficher à nouveau
}

function onPageStarted(){
    const btn = document.getElementById("createProductBtn");
    btn.addEventListener("click", onBtnClicked);
    // btn.removeEventListener("click", onBtnClicked);
}

window.onload = onPageStarted;
