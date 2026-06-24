var products = []; // variable globale contenant les produits
var id = 1;

function displayProduct(container, product){
    container.innerHTML = `
    <h2>${product.name}</h2>
    <p>Prix: ${product.price}€</p>
    `;
}

function getUniqName(){
    const idUniqProduit = id;
    id++;

    return "product_"+idUniqProduit;
}

function getRandomPrice(){
    // retourne un nombre au hasard entre 0 et 1
    const rand = Math.random();
    const num = rand * 1000;

    // attention, toFixed transforme le nombre en chaine de caractère (string)
    const numWith2Decimals = num.toFixed(2) 

    // pour retransformer notre chaîne en nombre on utilise parseFloat
    const num2DigitsFloat = parseFloat(numWith2Decimals);

    // Math.round permet d'arrondir un nombre à virgule
    // return Math.round( num2DigitsFloat );
    return num2DigitsFloat;
}

function onBtnClicked(event){
    const eventType = event.type;
    const target = event.target;

    // ici, on va construire un produit au hasard à chaque fois
    // vous pouvez ajouter au tableau global de produits 
    // les produits suivants: 

    const productInfo = {
        name: getUniqName(), 
        price: getRandomPrice()
    };
    
    const div = document.createElement("div"); 
    const body = document.querySelector("body");
    body.appendChild(div);
    displayProduct(div, productInfo);
}

function onPageStarted(){
    const btn = document.getElementById("createProductBtn");
    btn.addEventListener("click", onBtnClicked);
    // btn.removeEventListener("click", onBtnClicked);
}

window.onload = onPageStarted;
