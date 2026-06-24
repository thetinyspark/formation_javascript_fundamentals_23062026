var products = []; // variable globale contenant les produits
var id = 1;


function onRemoveClick(event){
    const target = event.target;
    // on nettoie l'écouteur d'évènement avant de supprimer l'élement du HTML
    // cela de nettoyer la mémoire. 
    target.removeEventListener("click", onRemoveClick);

    // la fonction filter des objets de type tableaux permet de renvoyer une version filtrée
    // du tableau en question. 
    products = products.filter(
        // pour chacun des éléments du tableau...
        function(currentProduct){

            // si on renvoie true alors l'élément est conservé
            if( currentProduct.id != target.id){
                return true;
            }
            else{
                // sinon il est filtré
                return false;
            }
        }
    );
    renderProducts();
}

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

        // ici le remove fonctionne parce que l'élément 
        // est un balise html, le remove signifie que l'on 
        // enlève la balise du DOM / document HTML
        // cela n'a rien à voir avec un éventuel tableau de données
        current.remove();
    }
}

function addProduct(product){
    const container = document.createElement("div"); 
    const removeBtn = document.createElement("button");
    container.setAttribute("class","product");
    document.body.appendChild(container);

    removeBtn.innerHTML = "X";
    removeBtn.addEventListener("click", onRemoveClick);
    removeBtn.setAttribute("id", product.id);

    container.innerHTML = `
    <h2>${product.name}</h2>
    <p>Prix: ${product.price}€</p>
    `;

    container.appendChild(removeBtn);
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
        id: id,
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
