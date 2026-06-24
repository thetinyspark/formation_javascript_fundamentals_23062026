var products = []; // variable globale contenant les produits
var id = 1;

function renderProducts(){
    removeAllProductsFromHTML();
    for( let i = 0; i < products.length; i++){
        addProduct(products[i]);
    }
}

function removeAllProductsFromHTML(){
    // on va chercher nos éléments html qui possèdent la classe css 'product'
    const elements = document.querySelectorAll('.product');
    for( let i = 0; i < elements.length; i++){
        const current = elements[i]; 
        current.remove();
    }
}

function addProduct(product){
    const container = document.createElement("div"); 
    container.setAttribute("class","product");
    document.body.appendChild(container);

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
    const productInfo = {
        name: getUniqName(), 
        price: getRandomPrice()
    };

    products.push(productInfo);
    renderProducts();
}

function onPageStarted(){
    const btn = document.getElementById("createProductBtn");
    btn.addEventListener("click", onBtnClicked);
    // btn.removeEventListener("click", onBtnClicked);
}

window.onload = onPageStarted;
